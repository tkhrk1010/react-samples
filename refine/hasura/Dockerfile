FROM node:21

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
