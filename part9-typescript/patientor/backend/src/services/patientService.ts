import patientsData from "../../data/patients";
import { PatientsEntry, NonSensitivePatientData } from "../types";

const getPatients = (): Array<PatientsEntry> => {
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

export default { getPatients, getNonSensitiveEntries };
