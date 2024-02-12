import { NewPatientEntry } from "./types";
import { Gender } from "./types";

// helper functions

const isString = (text: any): text is string => {
  return typeof text === "string" || text instanceof String;
};

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

// parse functions for each field

const parseDate = (dateOfBirth: any): string => {
  if (!dateOfBirth || !isString(dateOfBirth)) {
    throw new Error("Incorrect or missing dateOfBirth: " + dateOfBirth);
  }
  return dateOfBirth;
};

const parseName = (name: any): string => {
  if (!name || !isString(name)) {
    throw new Error("Incorrect or missing name: " + name);
  }
  return name;
};

const parseSsn = (ssn: any): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error("Incorrect or missing ssn" + ssn);
  }
  return ssn;
};

const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error("Incorrect or missing gender " + gender);
  }
  return gender;
};

const parseOccupation = (occupation: any): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error("Incorrect or missing occupation " + occupation);
  }
  return occupation;
};

// new patient entry

type Fields = {
  name: unknown;
  dateOfBirth: unknown;
  ssn: unknown;
  gender: unknown;
  occupation: unknown;
};

const toNewPatientEntry = ({
  name,
  dateOfBirth,
  ssn,
  gender,
  occupation,
}: Fields): NewPatientEntry => {
  const newEntry: NewPatientEntry = {
    name: parseName(name),
    dateOfBirth: parseDate(dateOfBirth),
    ssn: parseSsn(ssn),
    gender: parseGender(gender),
    occupation: parseOccupation(occupation),
    entries: [],
  };
  return newEntry;
};

export default toNewPatientEntry;
