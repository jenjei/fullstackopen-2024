import diagnoseData from "../../data/diagnoses";

import { DiagnoseEntry } from "../types";

const getDiagnoses = (): Array<DiagnoseEntry> => {
  return diagnoseData;
};

const addDiagnose = () => {
  return null;
};

export default {
  getDiagnoses,
  addDiagnose,
};
