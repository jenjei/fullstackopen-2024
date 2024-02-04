import { useState, useEffect } from "react";
import DiaryPart from "./components/DiaryPart";
import AddDiaryForm from "./components/AddDiaryForm";
import { DiaryEntry } from "./types";
import { getAllDiaryNotes } from "./services/DiaryService";

const App = () => {
  const [diaryPart, setDiaryPart] = useState<DiaryEntry[]>([]);
  useEffect(() => {
    getAllDiaryNotes().then((data) => {
      setDiaryPart(data);
    });
  }, []);

  return (
    <div>
      <AddDiaryForm data={setDiaryPart} diarylist={diaryPart} />
      <div style={{ padding: "20px" }}>
        <h3>Diary Entries</h3>
        <DiaryPart part={diaryPart} />
      </div>
    </div>
  );
};

export default App;
