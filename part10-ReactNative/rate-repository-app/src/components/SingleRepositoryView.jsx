import { StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import { FlatList } from "react-native";
import RepositoryItem from "./RepositoryItem";
import { useRepository } from "../hooks/useRepository";
import useGetReviews from "../hooks/useGetReviews";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flex: 1,
    marginBottom: theme.standardMargin.margin,
  },
});

export const ReviewItem = ({ review }) => {
  const date = new Date(review.createdAt);
  const day = date.getDate().toString().padStart(2, "0"); // Get the day and pad with leading zero if necessary
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Get the month (Note: Month is zero-based)
  const year = date.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;

  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        marginHorizontal: theme.standardMargin.margin,
        marginTop: theme.standardMargin.margin,
        padding: theme.standardPadding.padding,
      }}
    >
      <View
        style={{
          padding: 20,
          marginRight: 20,
          borderRadius: 50,
          borderColor: theme.colors.primary,
          borderWidth: 2,
          height: 60,
        }}
      >
        <Text fontWeight="bold" color="primary" style={{ borderRadius: 5 }}>
          {review.rating}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text style={{ paddingBottom: 10 }} fontWeight="bold">
          {review.user.username}
        </Text>
        <Text style={{ paddingBottom: 10 }}>{formattedDate}</Text>
        <Text style={{ width: 250, paddingBottom: 20 }}>{review.text}</Text>
      </View>
    </View>
  );
};

const SingleRepositoryView = () => {
  const { id } = useParams();
  const result = useRepository(id);
  const reviews = useGetReviews(id);

  const reviewNodes = reviews.data?.reviews
    ? reviews.data.reviews.edges.map((edge) => edge.node)
    : [];

  if (!result.data) {
    console.log("SingleRepositoryView: result.data is null");
  } else {
    return (
      <FlatList
        data={reviewNodes}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => (
          <RepositoryItem
            item={result.data}
            openInGithub={true}
            style={{ ...styles.mainContainer }}
          />
        )}
      />
    );
  }
};

export default SingleRepositoryView;
