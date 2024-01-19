import { parseExerciseArguments } from "./utils";

function calculateExercises(
  dailyExerciseHours: Array<number>,
  target: number
): object {
  const periodLength = dailyExerciseHours.length;
  const trainingDays = dailyExerciseHours.filter((day) => day > 0).length;
  const average =
    dailyExerciseHours.reduce((acc, cur) => acc + cur) / periodLength;
  const success = average >= target;
  let rating = 0;
  let ratingDescription = "";

  if (average < target) {
    rating = 1;
    ratingDescription =
      "Bad, you need to do more exercise. You missed the exercise target.";
  } else if (average === target) {
    rating = 2;
    ratingDescription = "You met the target. Not too bad but could be better.";
  } else {
    rating = 3;
    ratingDescription = "Good amount of exercise! You exceeded the target!";
  }

  return {
    periodLength, // the number of days
    trainingDays, // the number of training days
    success, // boolean value describing if the target was reached
    rating, // a rating between the numbers 1-3 that tells how well the hours are met. You can decide on the metric on your own
    ratingDescription, // a text value explaining the rating, you can come up with the explanations
    target, // the original target value
    average, // the calculated average time
  };
}

// hard-coded version:
/*
const exerciseHours = [3, 0, 2, 4.5, 0, 3, 1];

console.log(calculateExercises(exerciseHours, 2));
*/

// command line args version with error handling:

try {
  const { target, exerciseHours } = parseExerciseArguments(process.argv);
  console.log(
    "exercise target: ",
    target,
    "\n",
    calculateExercises(exerciseHours, target)
  );
} catch (error: unknown) {
  let errorMessage = "Something went wrong.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}

export { calculateExercises };
