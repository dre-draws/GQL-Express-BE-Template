import path from "path";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB,
  synchronize: true,
  logging: false,
  entities: [path.resolve(__dirname) + "/entities/**/*.{js,ts}"],
  migrations: [path.resolve(__dirname) + "/migrations/*.{js,ts}"],
  subscribers: [path.resolve(__dirname) + "/subscribers/**/*.{js,ts}"],
});
