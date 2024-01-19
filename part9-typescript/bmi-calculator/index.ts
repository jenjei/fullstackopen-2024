import express from "express";
const app = express();
import { calculateBmi } from "./bmiCalculator";

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (!height && !weight) {
    res.status(400).json({
      error: "Needed parameters missing. Parameters needed: weight and height.",
    });
    return;
  }

  if (isNaN(height) || isNaN(weight)) {
    res.status(400).json({
      error: "Malformatted parameters. Height and weight should be numbers.",
    });
    return;
  }

  res.json({ height, weight, calculateBmi: calculateBmi(height, weight) });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
