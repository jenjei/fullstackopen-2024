import Text from "./Text";
import Constants from "expo-constants";
import { StyleSheet, Pressable, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 60,
  },
});

const SignIn = () => {
  return <Text style={styles.container}>The sign-in view</Text>;
};

export default SignIn;
