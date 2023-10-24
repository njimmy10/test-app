#!/bin/bash
set -e
set -x

# if [[ $# -ne 1 ]]; then
#   echo "Usage: ./maps.sh PROJECT_PATH"
#   exit 1
# fi
#
# project_path=$1
#
# cd "${project_path}/android"

###############################################
# Main Maps package
###############################################

dir=$(dirname "${0}")
key=

# CD to android
cd android

# AndroidManifest.xml

# insert meta-data tag before the closing </application> tag
sed -i.bak '/<\/application>/i\
    <meta-data android:name="com.google.android.geo.API_KEY" android:value="GEO_API_KEY" />\
' app/src/main/AndroidManifest.xml

# replace KEY with the actual key
sed -i.bak "s/GEO_API_KEY/${key}/g" app/src/main/AndroidManifest.xml

