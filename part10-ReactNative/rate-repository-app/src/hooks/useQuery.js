// api with graphql

import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (props) => {
  const { data, error, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {
      orderBy: props.orderBy,
      orderDirection: props.orderDirection,
      searchKeyword: props.searchKeyword,
      first: props.first,
      after: props.after,
    },
  });
  
  const handleFetchMore = () => {
    const canFetchMore = !loading  && data.repositories.pageInfo.hasNextPage;
    if(!canFetchMore) {
      return;
    }
    fetchMore({
      variables:{
        after: data.repositories.pageInfo.endCursor,
        orderBy: props.orderBy,
        orderDirection: props.orderDirection,
        searchKeyword: props.searchKeyword,
        first: props.first
      },
    });
  }
  if (loading) {
    return { loading: true, error: null, repositories: null };
  }

  if (error) {
    return { loading: false, error, repositories: null };
  }

  return { loading: false, error: null, repositories: data.repositories, fetchMore: handleFetchMore, ...result };
};

export default useRepositories;
