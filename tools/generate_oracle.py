#!/usr/bin/env python3

# Copyright (c) 2021 Daniel Vince, Renata Hodovan, Akos Kiss.
#
# Licensed under the BSD 3-Clause License
# <LICENSE.md or https://opensource.org/licenses/BSD-3-Clause>.
# This file may not be copied, modified, or distributed except
# according to those terms.

import datetime
import stat

from os import chmod
from os.path import abspath, dirname, join
from string import Template


ROOT_DIR = join(dirname(abspath(__file__)), '..')
TEMPLATE = join(ROOT_DIR, 'tools', 'oracle-template.txt')


def generate_oracle(test, sut, message, target_path):
    with open(TEMPLATE, 'r') as template:
        source = Template(template.read())

    variables = {
        'year': datetime.date.today().year,
        'test': test,
        'message': message,
        'sut': sut
    }

    result = source.safe_substitute(variables)

    with open(target_path, 'w+') as oracle:
        oracle.write(result)

    chmod(target_path, stat.S_IRWXU | stat.S_IRWXG | stat.S_IROTH | stat.S_IXOTH)

