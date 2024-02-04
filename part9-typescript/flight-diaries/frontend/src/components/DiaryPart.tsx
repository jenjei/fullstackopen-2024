import { DiaryEntry } from "../types";

const DiaryPart = (props: { part: DiaryEntry[] }) => {
  return (
    <>
      {props.part.map((p) => (
        <div key={p.id} style={{ padding: "5px" }}>
          <h4>{p.date}</h4>
          <p>Weather: {p.weather}</p>
          <p>Visibility: {p.visibility}</p>
          <p>Comments: {p.comment}</p>
        </div>
      ))}
    </>
  );
};

export default DiaryPart;
