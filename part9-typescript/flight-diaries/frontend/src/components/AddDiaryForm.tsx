import { DiaryEntry, Notification, Weather, Visibility } from "../types";
import { useState } from "react";
import axios from "axios";
import { createNewDiaryEntry } from "../services/DiaryService";
import ErrorNotification from "./ErrorNotification";

const AddDiaries = (props: {
  data: React.Dispatch<React.SetStateAction<DiaryEntry[]>>;
  diarylist: DiaryEntry[];
  setError: React.Dispatch<React.SetStateAction<Notification>>;
  error: Notification;
}) => {
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState("");
  const [visibility, setVisibility] = useState("");
  const [comment, setComment] = useState("");
  const weatherOptions = Object.values(Weather);
  const visibilityOptions = Object.values(Visibility);

  const diaryCreation = async (event: React.SyntheticEvent) => {
    try {
      event.preventDefault();

      const diaryObject = {
        date: date,
        weather: weather,
        visibility: visibility,
        comment: comment,
        id: props.diarylist.length + 1,
      };

      await createNewDiaryEntry(diaryObject).then((data) => {
        props.data(props.diarylist.concat(data));
      });
      console.log(props);

      setDate("");
      setWeather("");
      setVisibility("");
      setComment("");
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        props.setError(error.response?.data);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Add a Diary entry</h3>
      <ErrorNotification message={props.error} setError={props.setError} />
      <form onSubmit={diaryCreation}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "450px",
            justifyContent: "space-between",
          }}
        >
          <p>Date:</p>
          <input
            type="date"
            style={{ height: "20px", width: "150px", marginTop: "15px" }}
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "450px",
            justifyContent: "space-between",
          }}
        >
          <p>Weather:</p>
          {weatherOptions.map((option, index) => (
            <label key={index}>
              <input
                style={{ marginTop: "22px" }}
                type="radio"
                name="weather"
                value={option}
                checked={weather === option}
                onChange={(event) => setWeather(event.target.value)}
              />
              {option}
            </label>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "450px",
            justifyContent: "space-between",
          }}
        >
          <p style={{ marginRight: "100px" }}>Visibility:</p>
          {visibilityOptions.map((option, index) => (
            <label key={index}>
              <input
                style={{ marginTop: "22px" }}
                type="radio"
                name="visibility"
                value={option}
                checked={visibility === option}
                onChange={(event) => setVisibility(event.target.value)}
              />
              {option}
            </label>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "450px",
            justifyContent: "space-between",
          }}
        >
          <p>Comments:</p>
          <input
            style={{ height: "20px", width: "300px", marginTop: "15px" }}
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </div>
        <div
          style={{
            alignItems: "right",
            width: "450px",
          }}
        >
          <button
            type="submit"
            style={{ backgroundColor: "lightblue", marginLeft: "380px" }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDiaries;
