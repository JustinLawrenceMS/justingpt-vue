FROM ubuntu:22.04

RUN apt-get update 
RUN apt-get install --yes apt-transport-https
RUN apt-get install --yes curl
RUN curl --silent --location https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install --yes nodejs
RUN apt-get install --yes build-essential
RUN apt-get install --yes git
RUN apt-get install --yes vim

RUN mkdir /var/www
RUN mkdir /var/www/html
RUN mkdir /var/www/html/justingpt-vue

COPY . .

RUN npm install; npm run build;

CMD ["npm", "run", "serve"]

## TODO install vue cli
