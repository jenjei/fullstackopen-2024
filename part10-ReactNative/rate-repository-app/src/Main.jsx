import Constants from "expo-constants";
import { Text, StyleSheet, View } from "react-native";
import RepositoryList from "./components/RepositoryList";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Rate Repository Application</Text>
      </View>
      <RepositoryList />
    </View>
  );
};

export default Main;
