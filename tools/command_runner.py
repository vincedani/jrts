# Copyright (c) 2021 Daniel Vince, Renata Hodovan, Akos Kiss.
#
# Licensed under the BSD 3-Clause License
# <LICENSE.md or https://opensource.org/licenses/BSD-3-Clause>.
# This file may not be copied, modified, or distributed except
# according to those terms.

from os import environ
from subprocess import call, DEVNULL, STDOUT

def run_command(command, cwd, out=None, debug=False, env=environ):
    if debug:
        print('Running: ', ' '.join(command))

    return call(
        command,
        cwd=cwd,
        stdout=out if out else DEVNULL,
        stderr=STDOUT,
        env=env)
