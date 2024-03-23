FROM node:18-alpine

WORKDIR /home/app

COPY package.json /home/app/

# npm install --global yarn


RUN npm install 

COPY . /home/app/

RUN npm run build

# COPY . .

EXPOSE 3000

CMD [ "npm" ,"start" ]

