import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Query(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String!
    $after: String
    $first: Int
  ) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after) {
      pageInfo{
        endCursor
        hasNextPage
        startCursor
      }
      edges {
        cursor
        node {
          id
          ownerName
          name
          createdAt
          fullName
          ratingAverage
          reviewCount
          stargazersCount
          watchersCount
          forksCount
          openIssuesCount
          url
          ownerAvatarUrl
          description
          language
          userHasReviewed
        }
      }
    }
  }
`;

export const GET_AUTHENTICATED_USER = gql`
  query getCurrentUser($includeReviews: Boolean = false){
    me {
      id
      username
        reviews @include(if: $includeReviews){
        edges {
          node {
            user {
              username
              id
            }
            createdAt
            repositoryId
            rating
            id
            text
          }
        }
      }
    }
  }
`;

export const GET_REPOSITORY_BY_ID = gql`
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      name
      fullName
      ownerName
      ratingAverage
      reviewCount
      stargazersCount
      watchersCount
      forksCount
      openIssuesCount
      url
      ownerAvatarUrl
      description
      language
      id
    }
  }
`;

export const GET_REVIEWS_BY_ID = gql`
  query Query($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      name
      fullName
      ownerName
      ratingAverage
      reviewCount
      stargazersCount
      watchersCount
      forksCount
      openIssuesCount
      url
      ownerAvatarUrl
      description
      language
      id
      reviews(after: $after, first: $first) {
      pageInfo {
      hasNextPage
      endCursor
      }
        edges {
          cursor
          node {
            id
            text
            createdAt
            rating
            repositoryId
            userId
            user {
              username
            }
          }
        }
      }
    }
  }
`;
