import patientData from "../../data/patients";
import { NonSensitivePatientData, NewPatientEntry, Patient } from "../types";
import { v4 as uuidv4 } from "uuid";
const id = uuidv4();

const getPatients = (): Patient[] => {
  return patientData;
};

const getPatientById = (id: string): Patient | undefined => {
  const patientById = patientData.find((p) => p.id === id);
  return patientById;
};

const getNonSensitiveEntries = (): NonSensitivePatientData[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (entry: NewPatientEntry): Patient => {
  const newPatientEntry = {
    ...entry,
    id: id,
    entries: [],
  };

  patientData.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getPatients,
  getPatientById,
  getNonSensitiveEntries,
  addPatient,
};
