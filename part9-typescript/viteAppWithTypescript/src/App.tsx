import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
import { courseParts, courseName, totalExercises } from "./data/courseData";

const App = () => {
  return (
    <div>
      <Header headerText={courseName} />
      <Content part={courseParts} />
      <Total total={totalExercises} />
    </div>
  );
};

export default App;
