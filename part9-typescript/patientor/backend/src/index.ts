import express from "express";
import diagnosisRouter from "./routes/diagnosisRoute";
import patientsRouter from "./routes/patientsRoute";

const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3001;

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use("/api/diagnosis", diagnosisRouter);
app.use("/api/patients", patientsRouter);
