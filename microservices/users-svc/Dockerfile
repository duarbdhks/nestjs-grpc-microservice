FROM node:14.17.4-alpine as build

WORKDIR /usr/local/users-svc

COPY dist package.json ./

RUN npm install --production

FROM node:14.17.4-alpine

WORKDIR /usr/local/users-svc

COPY --from=build /usr/local/users-svc .

EXPOSE 50053

CMD ["node", "main.js"]
