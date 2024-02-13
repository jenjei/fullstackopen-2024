import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Female, Male, Transgender } from "@mui/icons-material";
import { Patient } from "../../types";
import patientService from "../../services/patients";

const PatientInfo = () => {
  let { id } = useParams();
  let idString = id as string;
  const [patient, setPatient] = useState<Patient>();

  useEffect(() => {
    const fetchPatientById = async () => {
      const patient = await patientService.getPatientById(idString);
      setPatient(patient);
    };
    void fetchPatientById();
  }, []);

  return (
    <div>
      <h2>{patient?.name}</h2>
      {patient?.gender === "female" && <Female />}
      {patient?.gender === "male" && <Male />}
      {patient?.gender === "other" && <Transgender />}
      <p>ssn: {patient?.ssn}</p>
      <p>occupation: {patient?.occupation}</p>
      <h3>entries</h3>
      {patient?.entries.map((entry) => (
        <div key={entry?.id}>
          <p>
            {entry?.date} <i>{entry?.description}</i>
          </p>
          <ul>
            {entry?.diagnosisCodes?.map((code) => (
              <li key={code}>{code}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PatientInfo;
