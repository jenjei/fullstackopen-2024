import { useEffect, useState } from "react";
import SingleRepositoryView, { ReviewItem } from "./SingleRepositoryView"
import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "../graphql/queries";
import { FlatList, View } from "react-native";

export const UserReviewList = () => {
    const [reviewData, setReviewData] = useState([]);
    const {loading, error, data} = useQuery(GET_AUTHENTICATED_USER, {
        variables: {
            includeReviews: true
        }
    });
    
    useEffect(() => {
        if(data && data.me && data.me.reviews && data.me.reviews && data.me.reviews.edges && data.me.reviews.edges){
            setReviewData(data.me.reviews.edges);
        }
    }, [data])

    const userOwnReviews = () => {
        const repositoryNodes = reviewData 
        ? reviewData.map(edge => edge.node)
        : [];
        return repositoryNodes
    }

    return(
        <View>
        {reviewData && (
            <FlatList
            data={userOwnReviews()}
            renderItem={({item}) => (<ReviewItem review={item}/>)}
            keyExtractor={(item) => item.id}
            /> 
        )}

        </View>
    )
}