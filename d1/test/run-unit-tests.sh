#!/bin/bash

BASE_DIR=`dirname $0`

echo ""
echo "Starting Karma unit test Server"
echo "-------------------------------------------------------------------"

karma start unit-test-config.js $*
