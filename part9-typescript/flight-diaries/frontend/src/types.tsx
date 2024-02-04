export interface DiaryEntry {
  id: number;
  date: string;
  weather: string;
  visibility: string;
  comment: string;
}

export type newDiaries = Omit<DiaryEntry, "id">;

export interface Notification {
  message: string;
}
