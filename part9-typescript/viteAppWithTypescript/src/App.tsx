import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const App = () => {
  const courseName = "Half Stack application development";
  const courseParts = [
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

  const totalExercises = courseParts.reduce(
    (sum, part) => sum + part.exerciseCount,
    0
  );

  return (
    <div>
      <Header headerText={courseName} />
      <Content data={courseParts} />
      <Total total={totalExercises} />
    </div>
  );
};

export default App;
