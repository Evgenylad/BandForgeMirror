FROM node:argon
RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm update && npm update -g
RUN npm install
EXPOSE 8080
CMD ["npm", "run", "dev"]
