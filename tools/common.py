# Copyright (c) 2021 Daniel Vince, Renata Hodovan, Akos Kiss.
#
# Licensed under the BSD 3-Clause License
# <LICENSE.md or https://opensource.org/licenses/BSD-3-Clause>.
# This file may not be copied, modified, or distributed except
# according to those terms.

import jsbeautifier
import json
import subprocess

from os import environ
from os.path import abspath, basename, dirname, exists, join, splitext

TOOLS_ROOT = dirname(abspath(__file__))

TEST_FILES = {
    '3299': ['test.sh', '3299-orig.js'],
    '3361': ['test.sh', '3361-orig.js'],
    '3376': ['test.sh', '3376-orig.js'],
    '3408': ['test.sh', '3408-orig.js'],
    '3431': ['test.sh', '3431-orig.js'],
    '3433': ['test.sh', '3433-orig.js'],
    '3437': ['test.sh', '3437-orig.js'],
    '3479': ['test.sh', '3479-orig.js'],
    '3483': ['test.sh', '3483-orig.js'],
    '3506': ['test.sh', '3506-orig.js'],
    '3523': ['test.sh', '3523-orig.js'],
    '3534': ['test.sh', '3534-orig.js'],
    '3536': ['test.sh', '3536-orig.js'],
}


GRAMMARS = {
    'js':   ([join(TOOLS_ROOT, 'grammar', 'JavaScriptLexer.g4'),
              join(TOOLS_ROOT, 'grammar', 'JavaScriptLexerBase.py'),
              join(TOOLS_ROOT, 'grammar', 'JavaScriptParser.g4'),
              join(TOOLS_ROOT, 'grammar', 'JavaScriptParserBase.py')],
             'program'),
}


def process_source(file_path, format=False):
    if format:
        file_path = beautify_file(file_path)

    with open(file_path, 'r') as output:
        src = output.read()

    lines = src.splitlines()
    characters = sum(len(word) for line in lines for word in line.split())
    return len(lines), characters


def beautify_file(file_path):
    dir_name = dirname(file_path)
    file_name = basename(file_path)
    formatted_file = join(dir_name, f'formatted_{file_name}')

    extension = splitext(file_path)[1]
    if extension == '.js':
        with open(file_path, 'r') as output:
            opts = jsbeautifier.default_options()
            opts.indent_size = 2
            opts.preserve_newlines = False
            opts.indent_char = ' '
            opts.space_before_conditional = True
            opts.end_with_newline = False
            formatted_file_content = jsbeautifier.beautify(output.read(), opts)
    else:
        raise Exception(f'Unsupported file format {extension}.')

    with open(formatted_file, 'w') as out:
        out.write(formatted_file_content)

    return formatted_file


def dump_json(report, message=None, print_out=False, save=False, file_name=None):
    if message:
        print(message)

    if print_out:
        print(json.dumps(report, indent=4))

    if save:
        assert file_name, "Missing file name to save the JSON."
        with open(file_name, 'w') as json_file:
            json.dump(report, json_file, indent=4, sort_keys=True)
        print('Benchmark results are saved to:', file_name)
