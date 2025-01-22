FROM node:22.13.0
WORKDIR .
COPY package*.jason ./
RUN yarn
COPY . .
EXPOSE 5432
CMD ["node", "app.js"]