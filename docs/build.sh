#!/bin/bash
#
INDEX_FILE="./index.html"
BUILD_TIME=`date '+%s'`
#
perl -pi -e "s/BUILD_TIME=\d+/BUILD_TIME=$BUILD_TIME/" $INDEX_FILE
#
echo "# done "
#-EOF
