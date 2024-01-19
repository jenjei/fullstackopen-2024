import { parseBmiArguments } from "./utils";

function calculateBmi(height: number, weight: number): string {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal (healthy weight)";
  } else if (bmi >= 25 && bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

// hard-coded version:
const height = 170; // in centimeters
const weight = 65; // in kilograms

const bmiResult = calculateBmi(height, weight);
console.log("height (cm): ", 170, "weight (kg): ", weight, "BMI: ", bmiResult);

// command line args version with error handling:

try {
  const { height, weight } = parseBmiArguments(process.argv);
  console.log(
    "height (cm): ",
    height,
    "weight (kg):",
    weight,
    "bmi:",
    calculateBmi(height, weight)
  );
} catch (error: unknown) {
  let errorMessage = "Something went wrong.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}

export { calculateBmi };
