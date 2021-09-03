#For development setup
FROM node:14 as base

WORKDIR /home/node/app

copy package.json ./

RUN npm install

COPY . . 
#copies everything in local directory into docker container

# For production setup
FROM base as production

ENV NODE_PATH=./build
RUN npm run build