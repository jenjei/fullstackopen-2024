import { Entry } from "../../types";
import HealthRatingBar from "../HealthRatingBar";

const EntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
  switch (entry.type) {
    case "Hospital":
      return (
        <div
          style={{
            padding: "20px",
            border: "1px solid black",
            marginBottom: "10px",
          }}
        >
          <p>{entry.date} - Hospital</p>
          <i>{entry.description}</i>
          <p>Diagnose by {entry.specialist}</p>
        </div>
      );
    case "HealthCheck":
      return (
        <div
          style={{
            padding: "20px",
            border: "1px solid black",
            marginBottom: "10px",
          }}
        >
          <p>{entry.date} - Normal health check</p>
          <i>{entry.description}</i>
          <HealthRatingBar showText={true} rating={entry.healthCheckRating} />
          <p>Diagnose by {entry.specialist}</p>
        </div>
      );
    case "OccupationalHealthcare":
      return (
        <div
          style={{
            padding: "20px",
            border: "1px solid black",
            marginBottom: "10px",
          }}
        >
          <p>{entry.date} - Occupational Healthcare</p>
          <i>{entry.description}</i>
          {entry.sickLeave && (
            <p>
              Sick leave: {entry.sickLeave.startDate} -{" "}
              {entry.sickLeave.endDate}
            </p>
          )}
          <p>Employer: {entry.employerName}</p>
          <p>Diagnose by {entry.specialist}</p>
        </div>
      );
    default:
      return <div></div>;
  }
};
export default EntryDetails;
