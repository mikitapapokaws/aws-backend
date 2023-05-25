FROM node:18-alpine

WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npm i -g typeorm


CMD sh /usr/src/app/start.sh
