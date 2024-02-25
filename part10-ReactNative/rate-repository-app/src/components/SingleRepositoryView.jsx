import { StyleSheet, View } from "react-native";
import RepositoryItem from "./RepositoryItem";
import theme from "../theme";

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flex: 1,
    marginBottom: theme.standardMargin.margin,
  },
});

const SingleRepositoryView = ({ item }) => {
  return (
    <View style={{ ...styles.mainContainer }}>
      <RepositoryItem item={item} openInGithub={true} />
    </View>
  );
};

export default SingleRepositoryView;
