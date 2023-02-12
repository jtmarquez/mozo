#!/bin/sh

serviceName="$1"
pathName="./src/services/$serviceName"
echo $serviceName
if [ -d "./src/services/$serviceName" ]
then
    echo "Directory /services/$serviceName/ exists."
    exit 0
else
    mkdir -p $pathName
    mkdir "$pathName/actions"
    mkdir "$pathName/repository"
    mkdir "$pathName/models"

    touch "$pathName/actions/types.ts"
    touch "$pathName/repository/index.ts"
    touch "$pathName/models/index.ts"
    echo Service created
fi