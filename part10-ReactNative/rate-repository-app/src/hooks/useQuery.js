// api with graphql

import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (props) => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {
      orderBy: props.orderBy,
      orderDirection: props.orderDirection,
      searchKeyword: props.searchKeyword,
    },
  });
  if (loading) {
    return { loading: true, error: null, repositories: null };
  }

  if (error) {
    return { loading: false, error, repositories: null };
  }

  return { loading: false, error: null, repositories: data.repositories };
};

export default useRepositories;
