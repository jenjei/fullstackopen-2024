import axios from "axios";

import { DiaryEntry } from "../types";

const baseUrl = "http://localhost:3000/api";

export const getAllDiaryNotes = () => {
  return axios
    .get<DiaryEntry[]>(`${baseUrl}/diaries`)
    .then((response) => response.data);
};
