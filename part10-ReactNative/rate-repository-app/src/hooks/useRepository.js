import { useQuery } from "@apollo/client";
import { GET_REPOSITORY_BY_ID } from "../graphql/queries";

export const useRepository = (id) => {
  const { data, error, loading } = useQuery(GET_REPOSITORY_BY_ID, {
    fetchPolicy: "cache-and-network",
    variables: {
      repositoryId: id,
    },
  });

  if (error) return { error: error, loading: loading, data: null };

  if (loading) return { error: error, loading: true, data: null };

  return { error: null, loading: null, data: data.repository };
};
