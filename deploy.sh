#!/bin/bash -e
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push bilalfazlani/feature-toggles-ui:latest
docker push bilalfazlani/feature-toggles-ui:0.0.$TRAVIS_BUILD_NUMBER