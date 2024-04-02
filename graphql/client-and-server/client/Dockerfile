FROM node:21

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

# cacheして少し速くする
# https://zenn.dev/kou64yama/articles/powerful-docker-build-cache
# さらに、npm ciを使うと、package-lock.jsonがある場合は、npm installよりも高速にインストールできるらしい
# うまくいかなかったので、npm installを使っている
# https://qiita.com/mstssk/items/8759c71f328cab802670
RUN \
  --mount=type=cache,target=/root/.npm \
  npm install

# 普通にnpm installしたいときは以下
# RUN npm install

COPY . /app
