import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities";

// const AppDataSource = new DataSource({
export const AppDataSource = new DataSource({
  type: "mongodb",
  url: "mongodb+srv://PradyumnKhare:Nopassword@1@cluster0.wz28gkf.mongodb.net/?retryWrites=true&w=majority",
  useNewUrlParser: true,
  useUnifiedTopology: true,
  entities: [User],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
