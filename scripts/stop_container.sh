#!/bin/bash
set -e

containerid=`sudo docker ps -a | awk 'NR==2 {print $1}'`
sudo docker container stop $containerid
sudo docker container remove $containerid