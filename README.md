---
title: GraphQL Server + Express + TypeORM + TypeGraphql
description: An Express + GraphQL Server that connects to a Postgres DB, pre-configured with TypeORM for DB types and TypeGraphql for GQL Schema generation
---

# GraphQL + Express Server

This example starts an [ExpressJS](https://expressjs.com/) + [GraphQL](https://www.apollographql.com/docs/apollo-server) server that connects
to a Railway PostgreSQL database.

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/3H32JV?referralCode=pUxr1T&utm_medium=integration&utm_source=template&utm_campaign=generic)

## Running locally

For local development there is a docker compose file that I have set up for convenience to be able to spin up a local postgres db + the GQL server in watch mode by just running the following.

```
yarn install

yarn dev
```

If you want to change the default env variables being used while in local development, create your own .env file using the .env.example in the repo as reference. 

---

For the deployed environments (staging/prod):

This template is set up to automatically use Railway's service variables to make sure that your GQL server hooks up to your Postgres DB without having to change anything when deployed. 

## ✨ Tech Stack

- Express: All your regular Nodejs/REST API needs
- Postgresql: DB
- Apollo Server: GQL Server
- TypeORM: ORM
- TypeGraphql: Automatic GQL Schema generation
