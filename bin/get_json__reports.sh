#!/bin/bash
./bin/get_json_print_pretty.js http://cloud.i.sostark.nl:8082/api/reports?last=3 | egrep -v '_anchor_uptime|_conv_string|_valid_report|_string_version|_anchor_nr|_anchor_seqnr|_anchor_time'
#
