#!/bin/bash
./bin/get_json_print_pretty.js http://cloud.i.sostark.nl:8082/api/timepoints?last=3 | egrep -v '"(_|id)'
#
