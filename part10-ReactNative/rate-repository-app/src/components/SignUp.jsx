import Constants from "expo-constants";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import { Formik } from "formik";
import * as yup from "yup";
import theme from "../theme";
import useSignUp from "../hooks/useSignUp";
import useSignIn from "../hooks/useSignIn";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

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
    .min(5, "Username must be at least 5 characters long")
    .max(30, "Username must be at most 30 characters long")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .max(30, "Password must be at most 30 characters long")
    .required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Password confirmation is required"),
});

const SignUpForm = ({ onSubmit }) => {
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

      <FormikTextInput
        style={styles.formChild}
        name="passwordConfirmation"
        placeholder="Password confirmation"
        secureTextEntry
        placeholderTextColor={theme.colors.applicationBackgroundColor}
      />

      <Pressable style={styles.pressable} onPress={onSubmit}>
        <Text
          style={{ color: "white", textAlign: "center" }}
          fontWeight="bold"
          fontSize="button"
        >
          Sign up
        </Text>
      </Pressable>
    </View>
  );
};

const SignUp = () => {
  const { signUp } = useSignUp();
  const { signIn } = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const result = await signUp(values);
      if (result) {
        const signInResult = await signIn(values);
        if (signInResult) navigate("/");
      }
    } catch (e) {
      console.log("SignUp.jsx ERROR", e);
    }
  };

  const initialValues = {
    username: "",
    password: "",
    passwordConfirmation: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUp;
