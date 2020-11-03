# 
# Image for running a node webserver during development.
# 
# Based on the Debian buster image of Node so that all the default
# tools and utils are available.
#
# Updated: 2020-10-30


# FROM node:buster with Node.js v15.0.1
FROM node@sha256:ebc6f97b0b97b6fcd810bcf26c004a90adba57d9e7c00aa14058b8d555ee6445
LABEL maintainer="weleoka@github.com"

# https://github.com/nodejs/docker-node/blob/master/README.md#verbosity
ENV NPM_CONFIG_LOGLEVEL info


# Some useful tools:
# RUN apt update && apt install -y \
# curl \
# vim \
# iputils-ping \
# dnsutils



# Create the directories and own them by non-root user
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Explicitly set the working dir
WORKDIR /home/node/app

# Dependencies listed in package.json, package-lock.json is copied as well.
COPY --chown=node:node ./package*.json ./

# Switch to the Node user
USER node

# Install app dependencies
RUN npm install

# Copy in the project files
COPY --chown=node:node ./src/ ./

# This is here for documentation purposes, we map it to whatever port we wish later
EXPOSE 8080

# Run the app directly with Node (not via NPM) so SIGTERM and SIGKILL works
CMD ["node", "index.js"]
#CMD ["bash"]
#CMD ["bash"]