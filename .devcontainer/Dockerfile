ARG NODE_VERSION=12
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:${NODE_VERSION}

RUN apt-get update \
    && npm config set strict-ssl false \
    && curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
    && unzip awscliv2.zip \
    && sudo ./aws/install \
    && sudo -u node npm install -g aws-cdk
