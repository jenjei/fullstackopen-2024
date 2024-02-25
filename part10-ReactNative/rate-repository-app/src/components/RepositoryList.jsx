import React, { useState } from "react";
import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useQuery";
import theme from "../theme";
import SingleRepositoryView from "./SingleRepositoryView";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemPress = (item) => {
    console.log(item.id);
    setSelectedItem(item.id === selectedItem?.id ? null : item);
    // navigate(`/repository-view:${item.id}`);
  };

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  if (selectedItem) {
    return <SingleRepositoryView item={selectedItem} />;
  } else {
    return (
      <FlatList
        style={{ marginBottom: theme.standardMargin.margin }}
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => handleItemPress(item)}>
              <RepositoryItem item={item} />
            </TouchableOpacity>
          );
        }}
      />
    );
  }
};

export default RepositoryList;
