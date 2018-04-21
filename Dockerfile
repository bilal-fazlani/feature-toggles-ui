FROM node:9
ADD . /app
WORKDIR /app
RUN npm i
ENTRYPOINT npm start
