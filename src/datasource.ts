import path from "path";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "test",
  password: "test",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [path.resolve(__dirname) + "/entities/**/*.{js,ts}"],
  migrations: [path.resolve(__dirname) + "/migrations/*.{js,ts}"],
  subscribers: [path.resolve(__dirname) + "/subcribers/**/*.{js,ts}"],
});
