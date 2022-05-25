FROM nginx:alpine

LABEL maintainer="kuaner@gmail.com"

COPY nginx.conf /etc/nginx/nginx.conf
# Copy the local package files to the container's workspace.
COPY ./examples/cmstop-ui /usr/share/nginx/html/element-cmstop