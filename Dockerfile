FROM node:14.15.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

CMD ["yarn", "dev"]
