import { Pressable, StyleSheet, View, Alert } from "react-native";
import { useNavigate, useParams } from "react-router-native";
import { FlatList } from "react-native";
import RepositoryItem from "./RepositoryItem";
import { useRepository } from "../hooks/useRepository";
import useGetReviews from "../hooks/useGetReviews";
import theme from "../theme";
import Text from "./Text";
import { useDeleteReview } from "../hooks/useDeleteReview";

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flex: 1,
    marginBottom: theme.standardMargin.margin,
  },
  pressableConfirm: {
    backgroundColor: theme.colors.primary,
    textAlign: 'center',
    height: 50,
    justifyContent: 'center',
    flex: 0.5

  },
  pressableDecline: {
    backgroundColor: "red",
    textAlign: 'center',
    height: 50,
    justifyContent: 'center',
    flex: 0.5
  }
});

export const ReviewItem = ({ review, userView }) => {

  const date = new Date(review.createdAt);
  const day = date.getDate().toString().padStart(2, "0"); // Get the day and pad with leading zero if necessary
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Get the month (Note: Month is zero-based)
  const year = date.getFullYear();

  const navigate = useNavigate();
  const {deleteReview} = useDeleteReview();
  const formattedDate = `${day}.${month}.${year}`;

  const moveToRepository = (id) => {
    navigate(`/${id}`)
  }



  const deleteUserReview = async (id) => {
      Alert.alert('Delete Review', 'Are you sure you want to delete this review', [
          {
              text: 'Cancel',
              onPress:() => console.log("Cancel"),
              style: 'cancel'
          },
          {
              text: 'Delete',
              onPress: async () => {
                  try{
                      await deleteReview(id),
                      console.log(`Review: ${id} delete by ${review.user.username}`);
                  } catch (error) {
                      console.log(error);
                  }
              }
          }
      ])
  }

  return (
    <View>
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
            {userView && (
              <View style={{
                display: 'flex',
                flex:1,
                margin: 15,
                flexDirection:'row',
                justifyContent: 'center',
              }}>
                <Pressable
                  style={styles.pressableConfirm}
                  onPress={() => {
                    moveToRepository(review.repositoryId);
                  }}
                >
                  <Text style={{color: 'white', textAlign: 'center'}}>Go to Review</Text>
                </Pressable>
                <View style={{margin: 5}}></View>
                <Pressable
                  style={styles.pressableDecline}
                  onPress={() => {
                    deleteUserReview(review.id);
                  }}
                >
                  <Text style={{color: 'white', textAlign: 'center'}}>Delete Review</Text>
                </Pressable>
              </View>
            )}
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
