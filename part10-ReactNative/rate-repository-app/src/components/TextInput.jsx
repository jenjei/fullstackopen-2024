import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  error: {
    borderColor: "red",
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = style;
  const isError = error ? true : false;

  return (
    <NativeTextInput
      style={{
        ...textInputStyle,
        borderColor: isError ? theme.colors.error : "grey",
      }}
      {...props}
    />
  );
};

export default TextInput;
