import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./datasource";

const port = process.env.PORT || 3333;

async function main() {
  try {
    await AppDataSource.initialize();

    const app = express();

    app.use(express.json());

    app.get("/", async (req, res) => {
      res.send(`Hello world!`);
    });

    app.listen(port, () => {
      console.log(`Server is listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
