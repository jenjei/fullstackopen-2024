import Text from "./Text";
import Constants from "expo-constants";
import { StyleSheet, View, Pressable } from "react-native";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import * as yup from "yup";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 60,
  },
  formChild: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    border: "1px solid black",
    borderWidth: 2,
  },
  pressable: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    margin: 10,
    color: "white",
    borderRadius: 5,
  },
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, "Username is required")
    .required("Username is required"),
  password: yup
    .string()
    .min(1, "Password is required")
    .required("Password is required"),
});

const UserSignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.formChild}
        name="username"
        placeholder="Username"
        placeholderTextColor={theme.colors.applicationBackgroundColor}
      />

      <FormikTextInput
        style={styles.formChild}
        name="password"
        placeholder="Password"
        secureTextEntry
        placeholderTextColor={theme.colors.applicationBackgroundColor}
      />

      <Pressable style={styles.pressable} onPress={onSubmit}>
        <Text
          style={{ color: "white", textAlign: "center" }}
          fontWeight="bold"
          fontSize="button"
        >
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <UserSignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
