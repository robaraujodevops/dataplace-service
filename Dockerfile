FROM node:12

ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN yarn

WORKDIR /usr/src/service

COPY package*.json ./
RUN npm install

EXPOSE 3333

CMD [ "yarn", "start" ]