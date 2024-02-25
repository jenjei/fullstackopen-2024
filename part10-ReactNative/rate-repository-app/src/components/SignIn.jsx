import Constants from "expo-constants";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import { Formik } from "formik";
import * as yup from "yup";
import theme from "../theme";
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
  const { signIn } = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const result = await signIn(values);
      if (result) {
        navigate("/");
      }
    } catch (e) {
      console.log("SignIn.jsx ERROR", e);
    }
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
