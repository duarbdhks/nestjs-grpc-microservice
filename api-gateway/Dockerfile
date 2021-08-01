FROM node:14.17.4-alpine as build

WORKDIR /usr/local/api-gateway

COPY dist package.json ./

RUN npm install --production

FROM node:14.17.4-alpine

WORKDIR /usr/local/api-gateway

COPY --from=build /usr/local/api-gateway .

EXPOSE 3000

CMD ["node", "main.js"]
