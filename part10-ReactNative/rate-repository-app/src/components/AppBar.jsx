import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import { useNavigate } from "react-router-native";
import Constants from "expo-constants";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
  },
  pressable: {
    padding: 10,
    justifyContent: "center",
    paddingHorizontal: 5,
  },
});

const AppBar = () => {
  const navigate = useNavigate();

  const handleViewChange = (view) => {
    switch (view) {
      case "sign-in":
        navigate("/sign-in");
        break;
      case "main":
        navigate("/");
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable
          style={styles.pressable}
          onPress={() => {
            handleViewChange("main");
          }}
        >
          <Text
            fontWeight="bold"
            fontSize="subheading"
            style={{ padding: theme.standardPadding.padding, color: "white" }}
          >
            Repositories
          </Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={() => {
            handleViewChange("sign-in");
          }}
        >
          <Text
            fontWeight="bold"
            fontSize="subheading"
            style={{ padding: theme.standardPadding.padding, color: "white" }}
          >
            Sign in
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
