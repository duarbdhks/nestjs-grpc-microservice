FROM node:14.17.4-alpine as build

WORKDIR /usr/local/organizations-svc

COPY dist package.json ./

RUN npm install --production

FROM node:14.17.4-alpine

WORKDIR /usr/local/organizations-svc

COPY --from=build /usr/local/organizations-svc .

EXPOSE 50052

CMD ["node", "main.js"]
