FROM node:latest

WORKDIR app

COPY . .

RUN npm install && npm run build

EXPOSE 8080

ENTRYPOINT ["npm", "start"]