import { View, StyleSheet, Image, Pressable, Linking } from "react-native";
import theme from "../theme";
import Text from "./Text";
import { GET_REPOSITORY_BY_ID } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: theme.standardPadding.padding,
    margin: theme.standardMargin.margin,
    marginBottom: 0,
    backgroundColor: "white",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  flexHorizontal: {
    display: "flex",
    flexDirection: "row",
  },
  flexVertical: {
    display: "flex",
    flexDirection: "column",
  },
  blueTextContainer: {
    backgroundColor: theme.colors.primary,
    color: "white",
    maxWidth: 100,
    textAlign: "center",
    padding: 5,
    fontWeight: "bold",
  },
});

const Metrics = ({ value, title }) => {
  let prettyValue = value;
  if (prettyValue > 1000) {
    prettyValue = (prettyValue / 1000).toFixed(1) + "k";
  }
  return (
    <View
      style={{
        ...styles.flexVertical,
        alignItems: "center",
      }}
    >
      <Text fontWeight="bold">{prettyValue}</Text>
      <Text>{title}</Text>
    </View>
  );
};

const RepositoryItem = ({ item, openInGithub }) => {
  return (
    <View style={styles.item}>
      <View style={styles.flexHorizontal}>
        <Image
          style={styles.avatar}
          source={{
            uri: item.ownerAvatarUrl,
          }}
        />
        <View
          style={{
            ...styles.flexVertical,
            marginLeft: theme.standardMargin.margin,
          }}
        >
          <Text fontSize="subheading" fontWeight="bold">
            {item.fullName}
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginVertical: 8,
              width: 270,
            }}
          >
            {item.description}
          </Text>
          <Text style={styles.blueTextContainer}>{item.language}</Text>
        </View>
      </View>
      <View
        style={{
          ...styles.flexHorizontal,
          marginTop: theme.standardMargin.margin,
          marginHorizontal: theme.standardMargin.margin,
          justifyContent: "space-between",
        }}
      >
        <Metrics value={item.stargazersCount} title="Stars" />
        <Metrics value={item.forksCount} title="Forks" />
        <Metrics value={item.reviewCount} title="Reviews" />
        <Metrics value={item.ratingAverage} title="Rating" />
      </View>
      {openInGithub && (
        <Pressable
          style={{
            ...styles.flexHorizontal,
            borderRadius: 5,
            justifyContent: "center",
            marginVertical: theme.standardMargin.margin,
            backgroundColor: theme.colors.primary,
          }}
          onPress={() => Linking.openURL(item.url)}
        >
          <Text
            fontWeight="bold"
            style={{
              color: "white",
              padding: theme.standardPadding.padding / 2,
            }}
          >
            Open in GitHub
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;
