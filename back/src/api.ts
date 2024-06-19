import express from "express";
import { Config } from "./interfaces/Config";

const app = express.Router();

app.get("/random", (req, res) => {
  const config: Config = {
    samples: 12,
    multiplicationFactor: 12.34,
  };
  res.json(config);
});

export default app;
