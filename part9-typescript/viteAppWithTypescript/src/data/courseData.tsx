import { Courses } from "../types";

export const courseEntries: Array<Courses> = [
  {
    courseName: "Fundamentals",
    exerciseCount: 10,
  },
  {
    courseName: "Using props to pass data",
    exerciseCount: 7,
  },
  {
    courseName: "Deeper type usage",
    exerciseCount: 14,
  },
];

export const courseName = "Half Stack application development";

export const totalExercises = courseEntries.reduce(
  (sum, part) => sum + part.exerciseCount,
  0
);
