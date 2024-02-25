import { StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import { useRepository } from "../hooks/useRepository";
import theme from "../theme";

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flex: 1,
    marginBottom: theme.standardMargin.margin,
  },
});

const SingleRepositoryView = () => {
  const { id } = useParams();
  const result = useRepository(id);
  if (!result.data) {
    console.log("SingleRepositoryView: result.data is null");
  } else {
    return (
      <View style={{ ...styles.mainContainer }}>
        <RepositoryItem item={result.data} openInGithub={true} />
      </View>
    );
  }
};

export default SingleRepositoryView;
