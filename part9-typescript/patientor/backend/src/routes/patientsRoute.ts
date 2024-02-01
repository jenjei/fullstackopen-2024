import express from "express";
import patientService from "../services/patientService";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientService.getNonSensitiveEntries());
});

router.post("/", (_req, res) => {
  const { name, dateOfBirth, occupation, gender, ssn } = _req.body;
  const addedEntry = patientService.addPatient({
    name,
    dateOfBirth,
    occupation,
    gender,
    ssn,
  });

  res.json(addedEntry);
});

export default router;
