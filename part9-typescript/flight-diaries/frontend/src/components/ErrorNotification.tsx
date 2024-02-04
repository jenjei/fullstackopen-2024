import { Notification } from "../types";

const ErrorNotification = (props: {
  message: Notification;
  setError: React.Dispatch<React.SetStateAction<Notification>>;
}) => {
  const notification = props.message;

  if (notification.message !== undefined) {
    return null;
  } else {
    setTimeout(() => {
      props.setError({ message: "" });
    }, 5000);

    return (
      <div
        style={{
          color: "darkred",
          backgroundColor: "pink",
          height: "50px",
          width: "250px",
          padding: "5px",
        }}
      >
        <>{notification}</>
      </div>
    );
  }
};

export default ErrorNotification;
