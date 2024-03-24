FROM node:18-alpine

WORKDIR /home/front

COPY ./package.json /home/front

RUN npm install --global pnpm
RUN pnpm install 

COPY . /home/front/

RUN pnpm run build

EXPOSE 3000

CMD [ "pnpm" ,"run","preview" ]

