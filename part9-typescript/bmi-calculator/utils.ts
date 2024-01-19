interface ExerciseValues {
  target: number;
  exerciseHours: Array<number>;
}

export const parseExerciseArguments = (args: string[]): ExerciseValues => {
  if (args.length < 4) throw new Error("Not enough arguments");

  if (
    !isNaN(Number(args[2])) &&
    args.slice(3).every((day) => !isNaN(Number(day)))
  ) {
    return {
      target: Number(args[2]),
      exerciseHours: args.slice(3).map((day) => Number(day)),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

interface BMIValues {
  height: number;
  weight: number;
}

export const parseBmiArguments = (args: string[]): BMIValues => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};
