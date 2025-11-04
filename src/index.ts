import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./datasource";
import http from "http";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { buildSchema } from "type-graphql";
import { UsersResolver } from "./resolvers/Users";
import cors from "cors";
import { expressMiddleware } from "@as-integrations/express5";

const port = process.env.PORT || 3333;
const serverUrl = process.env.RAILWAY_PUBLIC_DOMAIN || `http://localhost`;

async function main() {
  try {
    await AppDataSource.initialize();

    const app = express();

    const httpServer = http.createServer(app);

    const schema = await buildSchema({
      resolvers: [UsersResolver],
      validate: true,
    });

    const server = new ApolloServer({
      schema,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();

    app.use(
      "/graphql",
      cors<cors.CorsRequest>(),
      express.json(),
      expressMiddleware(server)
    );

    app.use(express.json());

    app.get("/", async (req, res) => {
      res.send(
        `Hello world! GQL server is running at ${serverUrl}:${port}/graphql`
      );
    });

    await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));

    console.log(`Server is listening at ${serverUrl}:${port}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
