import { View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    paddingBottom: 60,
  },
  pressable: {
    padding: 10,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable}>
        <Text
          fontWeight="bold"
          fontSize="subheading"
          style={{ padding: 20, color: "white" }}
        >
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
