import { useQuery } from "@apollo/client";
import { GET_REVIEWS_BY_ID } from "../graphql/queries";

const useGetReviews = (props) => {

  
  const { data, error, loading, fetchMore, ...result } = useQuery(GET_REVIEWS_BY_ID, {
    fetchPolicy: "cache-and-network",
    variables: {
      repositoryId: props.id,
      first: props.first,
      after: props.after
    },
  });


  const handleFetchMore = () => {
    const canFetchMore = !loading && data.repository.reviews.pageInfo.hasNextPage;
    
    if(!canFetchMore){
        return;
    }

    fetchMore({
        variables:{
            after: data.repository.reviews.pageInfo.endCursor,
            first: props.first,
            repositoryId: props.id
        }
    });
}
  if (error) return { error: error, loading: loading, data: null };

  if (loading) return { error: error, loading: true, data: null };

  return { error: null, loading: null, reviews: data.repository, fetchMore: handleFetchMore};
};

export default useGetReviews;
