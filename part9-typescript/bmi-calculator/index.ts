import express from "express";
const app = express();
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";
app.use(express.json());

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

app.post("/exercises", (req, res) => {
  const { daily_exercises } = req.body;
  const target = Number(req.body.target);
  const daily_exercises_array = Array(
    daily_exercises.map((day: number) => Number(day))
  );

  if (!daily_exercises_array || !target) {
    res.status(400).json({
      error:
        "Needed parameters missing. Parameters needed: daily_exercises and target.",
    });
    return;
  }

  if (!Array.isArray(daily_exercises_array) || isNaN(target)) {
    res.status(400).json({
      error:
        "Malformatted parameters. daily_exercises should be an array of numbers and target should be a number.",
    });
    return;
  }

  const result = calculateExercises(daily_exercises_array, target);
  res.json(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
