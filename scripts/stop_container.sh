#!/bin/bash
set -e

CONTAINERID="sudo docker ps -a | awk 'NR==2 {print $1}'"
sudo docker container stop $CONTAINERID
sudo docker container remove $CONTAINERID