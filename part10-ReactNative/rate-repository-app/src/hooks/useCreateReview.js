import { useMutation } from "@apollo/client";
import { CREATE_REVIEW_MUTATION } from "../graphql/mutations";

export const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW_MUTATION);

  const createReview = async ({
    repositoryName,
    review,
    repositoryOwnerName,
    rating,
  }) => {
    try {
      const { data } = await mutate({
        variables: {
          text: review,
          rating: parseInt(rating),
          ownerName: repositoryOwnerName,
          repositoryName: repositoryName,
        },
      });
      return data;
    } catch (e) {
      console.log("useCreateReview.js error:", e);
      return e;
    }
  };

  return { createReview, result };
};
