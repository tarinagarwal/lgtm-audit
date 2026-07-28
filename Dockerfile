FROM alpine:3.18
USER root
RUN docker run --privileged ubuntu:22.04 echo "test"
