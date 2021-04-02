#!/bin/bash

# Copyright (c) 2021 Daniel Vince, Renata Hodovan, Akos Kiss.
#
# Licensed under the BSD 3-Clause License
# <LICENSE.md or https://opensource.org/licenses/BSD-3-Clause>.
# This file may not be copied, modified, or distributed except
# according to those terms.

# set -x # Debug

if [ -z "$1" ]
then
  # Perses tool does not use test scripts as ./test.sh input-file,
  # just ./test.sh and copies the oracle next to the generated input file
  # named orig.js.
  if [ -z "$JRTS_HOME" ]
  then
    echo "JRTS_HOME environmental variable has to be set to run Perses benchmark."
    echo "run: export JRTS_HOME=</path/to/project/root>"
    exit 1
  fi

  ROOT_DIR=$JRTS_HOME
  IN_FILE=3408-orig.js
else
  # Picireny style oracle running: ./test.sh input-file without copying the
  # oracle to a temporary folder.
  ROOT_DIR=$(dirname $(dirname $(dirname $(realpath $0))))
  IN_FILE=$(realpath --relative-to=$PWD $1)
fi

timeout --preserve-status 10 $ROOT_DIR/jerryscript/build/bin/jerry $IN_FILE 2>&1 | grep -m 1 -q "AddressSanitizer: heap-buffer-overflow on address"
