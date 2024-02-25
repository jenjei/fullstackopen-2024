import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
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
  query {
    me {
      id
      username
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
  query Query($repositoryId: ID!) {
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
      reviews {
        edges {
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
