FROM node:alpine as builder
COPY . /app
WORKDIR /app
RUN npm i
RUN npm run build

FROM nginx:1.13.12-alpine
COPY --from=builder /app/build /usr/share/nginx/html
#COPY default.conf /etc/nginx/conf.d/


