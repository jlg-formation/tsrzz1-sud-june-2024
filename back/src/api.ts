import express from "express";

const app = express.Router();

app.get("/random", (req, res) => {
  res.json({ samples: 12, multiplicationFactor: 13.45 });
});

export default app;
