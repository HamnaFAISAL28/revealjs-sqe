@echo off
docker run --rm -e SONAR_HOST_URL=http://host.docker.internal:9000 -e SONAR_TOKEN=%SONAR_TOKEN% -v %cd%:/usr/src sonarsource/sonar-scanner-cli %*