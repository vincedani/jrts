#!/usr/bin/env python3

# Copyright (c) 2021 Daniel Vince, Renata Hodovan, Akos Kiss.
#
# Licensed under the BSD 3-Clause License
# <LICENSE.md or https://opensource.org/licenses/BSD-3-Clause>.
# This file may not be copied, modified, or distributed except
# according to those terms.

import argparse
import subprocess

from os.path import abspath, dirname, join, isdir, isfile
from command_runner import run_command

ROOT_DIR = join(dirname(abspath(__file__)), '..')


def parse_arguments():
    parser = argparse.ArgumentParser(
        formatter_class=argparse.ArgumentDefaultsHelpFormatter)

    parser.add_argument('test',
                        help='Build for specified test in the suite.')
    parser.add_argument('--coverage', action='store_true', default=False,
                        help='Build JerryScript with coverage.')
    parser.add_argument('--patch', default=None,
                        help='Patch file to apply before building.')

    return parser.parse_args()


def clone_jerry(repo):
    command = [
        'git',
        'clone',
        'https://github.com/jerryscript-project/jerryscript.git',
        repo
    ]

    if run_command(command, cwd=ROOT_DIR, debug=True):
        raise Exception(f'{command} failed!')


def checkout_to_hash(repo, hash_file):
    if not isfile(hash_file):
        raise Exception('Cannot find hash file in the given directory.')

    with open(hash_file, 'r') as hash_f:
        git_hash = hash_f.read()

    command = ['git', 'checkout', git_hash]

    if run_command(command, cwd=repo, debug=True):
        raise Exception(f'{command} failed!')


def apply_patch(repo, patch_file):
    if not isfile(patch_file):
        raise Exception('Cannot find hash file in the given directory.')

    patch_file = abspath(patch_file)
    command = ['git', 'apply', patch_file]

    if run_command(command, cwd=repo, debug=True):
        raise Exception(f'{command} failed!')


def clean_state(repo):
    command = ['git', 'reset', '--hard']

    if run_command(command, cwd=repo, debug=True):
        raise Exception(f'{command} failed!')


def build_jerry(repo, coverage):
    build_command = [
        'tools/build.py',
        '--clean',
        '--debug',
        '--compile-flag=-fsanitize=address',
        '--compile-flag=-m32',
        '--compile-flag=-fno-omit-frame-pointer',
        '--compile-flag=-fno-common',
        '--compile-flag=-g',
        '--strip=off',
        '--system-allocator=on',
        '--logging=on',
        '--linker-flag=-fuse-ld=gold',
        '--error-messages=on',
        '--profile=es2015-subset',
    ]

    if coverage:
        coverage_specs = [
            '--compile-flag=-fprofile-arcs',
            '--compile-flag=-ftest-coverage',
            '--link-lib', 'gcov'
        ]

        build_command += coverage_specs

    if run_command(build_command, cwd=repo, debug=True):
        raise Exception(f'{build_command} failed!')


def checkout_and_build(test_name, coverage=False, patch_file=None):
    jerry_dir = join(ROOT_DIR, 'jerryscript')

    if not isdir(jerry_dir):
        clone_jerry(jerry_dir)

    test_dir = join(ROOT_DIR, 'tests', test_name)
    hash_file = join(test_dir, 'hash.txt')

    clean_state(jerry_dir)
    checkout_to_hash(jerry_dir, hash_file)

    if patch_file:
        apply_patch(jerry_dir, patch_file)

    build_jerry(jerry_dir, coverage)


if __name__ == '__main__':
    args = parse_arguments()
    checkout_and_build(args.test, args.coverage, args.patch)
