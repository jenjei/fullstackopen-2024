import { DiaryEntry } from "../types";
import { useState } from "react";
import { createNewDiaryEntry } from "../services/DiaryService";

const AddDiaries = (props: {
  data: React.Dispatch<React.SetStateAction<DiaryEntry[]>>;
  diarylist: DiaryEntry[];
}) => {
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState("");
  const [visibility, setVisibility] = useState("");
  const [comment, setComment] = useState("");

  const diaryCreation = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const diaryObject = {
      date: date,
      weather: weather,
      visibility: visibility,
      comment: comment,
      id: props.diarylist.length + 1,
    };
    createNewDiaryEntry(diaryObject).then((data) => {
      props.data(props.diarylist.concat(data));
    });
    setDate("");
    setWeather("");
    setVisibility("");
    setComment("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Add a Diary entry</h3>
      <form onSubmit={diaryCreation}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "250px",
            justifyContent: "space-between",
          }}
        >
          <p>Date:</p>
          <input
            style={{ height: "20px", width: "100px", marginTop: "15px" }}
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "250px",
            justifyContent: "space-between",
          }}
        >
          <p>Weather:</p>
          <input
            style={{ height: "20px", width: "100px", marginTop: "15px" }}
            value={weather}
            onChange={(event) => setWeather(event.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "250px",
            justifyContent: "space-between",
          }}
        >
          <p>Visibility:</p>
          <input
            style={{ height: "20px", width: "100px", marginTop: "15px" }}
            value={visibility}
            onChange={(event) => setVisibility(event.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "250px",
            justifyContent: "space-between",
          }}
        >
          <p>Comments:</p>
          <input
            style={{ height: "20px", width: "100px", marginTop: "15px" }}
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </div>
        <div
          style={{
            alignItems: "right",
            width: "250px",
          }}
        >
          <button
            type="submit"
            style={{ backgroundColor: "lightblue", marginLeft: "180px" }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDiaries;
