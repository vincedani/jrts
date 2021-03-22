# Copyright (c) 2021 Daniel Vince, Renata Hodovan, Akos Kiss.
#
# Licensed under the BSD 3-Clause License
# <LICENSE.md or https://opensource.org/licenses/BSD-3-Clause>.
# This file may not be copied, modified, or distributed except
# according to those terms.

import subprocess
from os import environ

def run_command(command, cwd, out=None, debug=False, env=environ):
    if debug:
        print('Running: ', ' '.join(command))

    return subprocess.call(
        command,
        cwd=cwd,
        stdout=out,
        stderr=subprocess.STDOUT,
        env=env)
