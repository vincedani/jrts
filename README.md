# JerryScript Reduction Test Suite

The repository contains test files that caused various errors in the JerryScript
lightweight JavaScript engine. The inputs are located in the `tests` folder,
denoted by the issue number from the official GitHub repository.

The structure of each test case is as follows:

* `<issue-number>/`
  * `<issue-number>-orig.js`: Fuzzer-generated input that originally caused the
    error.
  * `hash.txt`: The JerryScript commit hash that reproduces the error.
  * `test.sh`: Oracle for checking if the error is still present
    (`return code 0`) or not (`return code 1`).

The `tools` folder contains the proper ANTLR v4 grammar for the JavaScript
language and additional Python scripts for supporting measurements.

## Requirements

```bash
pip install -r requirements.txt
```

## Demo script to use the repository

```bash
pip install picireny

python demo.py
```
