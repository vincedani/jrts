# Copyright (c) 2021 Daniel Vince, Renata Hodovan, Akos Kiss.
#
# Licensed under the BSD 3-Clause License
# <LICENSE.md or https://opensource.org/licenses/BSD-3-Clause>.
# This file may not be copied, modified, or distributed except
# according to those terms.

import jsbeautifier
import json

from os.path import abspath, basename, dirname, join, splitext

TOOLS_ROOT = dirname(abspath(__file__))

TEST_FILES = {
    '3299': ['3299-orig.js', "AddressSanitizer: dynamic-stack-buffer-overflow"],
    '3361': ['3361-orig.js', "JERRY_CONTEXT (jmem_heap_allocated_size) == 0"],
    '3376': ['3376-orig.js', "object_p->type_flags_refs >= ECMA_OBJECT_REF_ONE"],
    '3408': ['3408-orig.js', "AddressSanitizer: heap-buffer-overflow on address"],
    '3431': ['3431-orig.js', "ECMA_STRING_IS_REF_EQUALS_TO_ONE (string_p)"],
    '3433': ['3433-orig.js', "context_p->stack_top_uint8 == SCAN_STACK_CATCH_STATEMENT"],
    '3437': ['3437-orig.js', "JERRY_CONTEXT (jmem_heap_allocated_size) == 0"],
    '3479': ['3479-orig.js', "Assertion 'old_length < new_length' failed at"],
    '3483': ['3483-orig.js', "Assertion 'object_p->type_flags_refs >= ECMA_OBJECT_REF_ONE' failed"],
    '3506': ['3506-orig.js', "Assertion 'object_p != NULL' failed"],
    '3523': ['3523-orig.js', "Assertion 'ECMA_STRING_IS_REF_EQUALS_TO_ONE (string_p)' failed"],
    '3534': ['3534-orig.js', "Assertion 'JERRY_CONTEXT (jmem_heap_allocated_size) == 0' failed"],
    '3536': ['3536-orig.js', "ECMA_PROPERTY_GET_TYPE (property) == ECMA_PROPERTY_TYPE_NAMEDDATA || ECMA_PROPERTY_GET_TYPE (property) == ECMA_PROPERTY_TYPE_NAMEDACCESSOR || ECMA_PROPERTY_GET_TYPE (property) == ECMA_PROPERTY_TYPE_VIRTUAL"],
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
    return len(lines), characters, len(src)


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


def dump_json(report, message=None, print_out=False, save=None):
    if message:
        print(message)

    if print_out:
        print(json.dumps(report, indent=4))

    if save:
        assert save, "Missing file name to save the JSON."
        with open(save, 'w') as json_file:
            json.dump(report, json_file, indent=4, sort_keys=True)
        print('Benchmark results are saved to:', save)
