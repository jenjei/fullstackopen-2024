import patientsData from "../../data/patients";
import {
  PatientsEntry,
  NonSensitivePatientData,
  NewPatientEntry,
} from "../types";
import { v4 as uuidv4 } from "uuid";
const id = uuidv4();

const getPatients = (): PatientsEntry[] => {
  return patientsData;
};

const getNonSensitiveEntries = (): NonSensitivePatientData[] => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (entry: NewPatientEntry): PatientsEntry => {
  const newPatientEntry = {
    ...entry,
    id: id,
  };

  patientsData.push(newPatientEntry);
  return newPatientEntry;
};

export default { getPatients, getNonSensitiveEntries, addPatient };
