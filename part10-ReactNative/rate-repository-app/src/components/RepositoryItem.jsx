import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 10,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text>Full name: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
    </View>
  );
};

export default RepositoryItem;
