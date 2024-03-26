FROM node:21

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install

COPY . /app
