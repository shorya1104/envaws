#!/bin/bash
set -e

#Pull the docker image
sudo docker pull shoryasngh/env:latest

#run docker container 
sudo docker container run -d -p 3000:3000 -name ENV env:latest