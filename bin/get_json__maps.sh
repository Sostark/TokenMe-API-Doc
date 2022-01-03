#!/bin/bash
./bin/get_json_print_pretty.js http://cloud.i.sostark.nl:8082/api/maps?last=3 | egrep -v '^\s*"(_|id)'
#
