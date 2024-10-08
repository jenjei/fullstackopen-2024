import { useMutation } from "@apollo/client"
import { DELETE_USER_REVIEW } from "../graphql/mutations"
import { GET_AUTHENTICATED_USER } from "../graphql/queries";

export const useDeleteReview = () => {
    const [mutate, result] = useMutation(DELETE_USER_REVIEW, {
        refetchQueries: [{ query: GET_AUTHENTICATED_USER, variables: { includeReviews: true } }],
    });
    const deleteReview = async (id) => {
        try {
            const {data} = await mutate({
                variables:{
                    "deleteReviewId": id
                }
            })
            return data;
        } catch (e) {
            throw new Error(e);
        }
    }
    return {deleteReview, result};
}