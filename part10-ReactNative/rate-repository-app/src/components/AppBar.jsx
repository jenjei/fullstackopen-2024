import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import { useNavigate } from "react-router-native";
import Constants from "expo-constants";
import { useApolloClient, useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "../graphql/queries";
import useAuthStorage from "../hooks/useAuthStorage";
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
  const { data } = useQuery(GET_AUTHENTICATED_USER);
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  const signInMenuText = data?.me ? "Sign out" : "Sign in";

  const handleViewChange = async (view) => {
    switch (view) {
      case "Sign in":
        navigate("/sign-in");
        break;
      case "Sign out":
        await authStorage.removeAccessToken(); // Pressing the "Sign out" tab should remove the user's access token from the storage
        apolloClient.resetStore(); // ... and reset the Apollo cache
        break;
      case "main":
        navigate("/");
        break;
      case "create-review":
        navigate("/create-review");
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
        {data?.me && (
          <Pressable
            style={styles.pressable}
            onPress={() => {
              handleViewChange("create-review");
            }}
          >
            <Text
              fontWeight="bold"
              fontSize="subheading"
              style={{ padding: theme.standardPadding.padding, color: "white" }}
            >
              Create Review
            </Text>
          </Pressable>
        )}
        <Pressable
          style={styles.pressable}
          onPress={() => {
            handleViewChange(signInMenuText);
          }}
        >
          <Text
            fontWeight="bold"
            fontSize="subheading"
            style={{ padding: theme.standardPadding.padding, color: "white" }}
          >
            {signInMenuText}
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
