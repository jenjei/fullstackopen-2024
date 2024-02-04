import express from "express";
import patientService from "../services/patientService";
import toNewPatientEntry from "../utils";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientService.getNonSensitiveEntries());
});

router.get("/:id", (_req, res) => {
  res.send(patientService.getPatientById(_req.params.id));
});

router.post("/", (_req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(_req.body);
    const addedEntry = patientService.addPatient(newPatientEntry);

    res.json(addedEntry);
  } catch (e: unknown) {
    let errorMessage = "Something went wrong.";

    if (e instanceof Error) {
      errorMessage += " Error: " + e.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
