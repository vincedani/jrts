# Copyright (c) 2021 Daniel Vince, Renata Hodovan, Akos Kiss.
#
# Licensed under the BSD 3-Clause License
# <LICENSE.md or https://opensource.org/licenses/BSD-3-Clause>.
# This file may not be copied, modified, or distributed except
# according to those terms.

import sys
from os import environ, makedirs
from os.path import abspath, dirname, exists, join

ROOT_DIR = dirname(abspath(__file__))
TOOLS_DIR = join(ROOT_DIR, 'tools')
sys.path.append(TOOLS_DIR)

from build_jerry import checkout_and_build
from command_runner import run_command
from common import GRAMMARS, TEST_FILES, dump_json, process_source
from generate_oracle import generate_oracle

def process_log(log_path):
    with open(log_path, 'r') as log:
        src = log.read()

    test_pass = src.count("test = 'PASS'")
    test_fail = src.count("test = 'FAIL'")
    cache_count = src.count("cache = 'PASS'")

    for line in src.splitlines():
        if line.startswith('Output saved to '):
            result_file_path = line.replace('Output saved to ', '').strip('.')
            output_lines, output_chars, output_size = process_source(result_file_path)
            return test_fail, test_pass, cache_count, output_lines, output_chars
    assert False, 'Result save line not found.'


if __name__ == '__main__':
  grammar, start_rule = GRAMMARS['js']
  report = dict()

  for test_name, (input_file, message) in TEST_FILES.items():
    test_dir = join(ROOT_DIR, 'tests', test_name)
    input_source = join(test_dir, input_file)
    executable = join(test_dir, f'{test_name}-jerry')
    oracle = join(test_dir, 'test.sh')

    if not exists(executable):
      checkout_and_build(test_name, target=executable)

    if not exists(oracle):
      generate_oracle(test_name, executable, message, oracle)


    out_dir = join(ROOT_DIR, 'experiments', test_name)
    makedirs(out_dir, exist_ok=True)

    command = [
        'picireny',
        '--log-level', 'DEBUG',
        '--start', start_rule,
        '--test', oracle,
        '--input', input_source,
        '--out', out_dir,
        '--grammar',
    ]
    command.extend(grammar)

    log_file = join(out_dir, 'reduction.log')
    with open(log_file, 'w') as stderr_file:
        run_command(command, test_dir, out=stderr_file, env=dict(environ, PYTHONOPTIMIZE='1'))

    input_lines, input_chars, input_size = process_source(input_source)
    fails, passes, cache_no, out_lines, out_chars = process_log(log_file)

    report[test_name] = dict()
    report[test_name] = {
        'input_lines': input_lines,
        'input_chars': input_chars,
        'output_lines': out_lines,
        'output_chars': out_chars,
        'test_FAIL': fails,
        'test_PASS': passes,
        'test_ALL': fails + passes,
        'test_CACHE': cache_no,
    }

    dump_json(report, print_out=True)
