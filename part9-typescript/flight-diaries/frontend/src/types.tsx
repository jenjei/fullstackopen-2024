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

export enum Weather {
  Sunny = "sunny",
  Rainy = "rainy",
  Cloudy = "cloudy",
  Stormy = "stormy",
  Windy = "windy",
}

export enum Visibility {
  Great = "great",
  Good = "good",
  Ok = "ok",
  Poor = "poor",
}
