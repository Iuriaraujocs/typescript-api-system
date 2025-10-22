import "reflect-metadata"; //habilita
import express from "express";
import { AppDataSource } from "./database/data-source";
import routes from "./routes";

const app = express();
app.use(express.json());
app.use(routes);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(3000, () => console.log("🚀 Server running on port 3000"));
  })
  .catch((err) => console.error("Database connection error:", err));
