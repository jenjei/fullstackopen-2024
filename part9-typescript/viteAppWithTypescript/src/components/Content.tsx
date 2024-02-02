import { Courses } from "../types";

const Content = (props: { data: Courses[] }) => {
  return (
    <div>
      {props.data.map((course, index) => (
        <p key={index}>
          {course.courseName} {course.exerciseCount}
        </p>
      ))}
    </div>
  );
};

export default Content;
