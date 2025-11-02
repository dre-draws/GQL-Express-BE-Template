FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock tsconfig.json /app/

COPY src /app/src

RUN yarn global add ts-node typescript

RUN yarn install --frozen-lockfile

RUN yarn build 

# No need to clear up to run other scripts for pre-deploy

EXPOSE 8080

CMD ["yarn", "start"]


