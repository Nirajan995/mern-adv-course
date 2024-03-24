FROM node:18-alpine

WORKDIR /home/app

ARG MONGODB_URI="mongodb+srv://nirajankunwor604:KTfbhHcnl74WyDCw@cluster0.lpa9lcn.mongodb.net/auth?connectTimeoutMS=10000"

ENV DATABASE_URL=MONGODB_URI

COPY package.json /home/app/

# RUN npm install --global yarn

RUN npm install --global pnpm
RUN pnpm install 

COPY . /home/app/

RUN pnpm run prisma:generate

RUN pnpm run build

# COPY . .

EXPOSE 3000

CMD [ "pnpm" ,"start" ]


