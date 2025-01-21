FROM node:22.13.0
WORKDIR .
COPY package*.jason ./
RUN yarn
COPY . .
EXPOSE 8082
CMD ["node", "app.js"]