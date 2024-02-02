import { CoursePart } from "../types";

const Part = (props: { data: CoursePart[] }) => {
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

  return (
    <div>
      {props.data.map((part, i) => {
        switch (part.kind) {
          case "basic":
            return (
              <div key={i} style={{ padding: "10px" }}>
                <p>
                  <b>
                    {part.name} {part.exerciseCount}
                  </b>
                </p>
                <p>
                  <i>{part.description}</i>
                </p>
              </div>
            );
          case "group":
            return (
              <div key={i} style={{ padding: "10px" }}>
                <b>
                  {part.name} {part.exerciseCount}
                </b>
                <p>Project exercises {part.groupProjectCount}</p>
              </div>
            );
          case "background":
            return (
              <div key={i} style={{ padding: "10px" }}>
                <b>
                  {part.name} {part.exerciseCount}
                </b>
                <p>
                  <i>{part.description}</i>
                </p>
                <p>Project exercises {part.backgroundMaterial}</p>
              </div>
            );
          case "special":
            return (
              <div key={i} style={{ padding: "10px" }}>
                <b>
                  {part.name} {part.exerciseCount}
                </b>
                <p>
                  <i>{part.description}</i>
                </p>
                <p>
                  Required skills:{" "}
                  {part.requirements.map((requirement, index) => {
                    if (index === part.requirements.length - 1) {
                      return requirement;
                    } else {
                      return requirement + ", ";
                    }
                  })}
                </p>
              </div>
            );
          default:
            return assertNever(part);
        }
      })}
    </div>
  );
};

export default Part;
