import React, { useState, useEffect } from "react";
import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useQuery";
import theme from "../theme";
import { useNavigate } from "react-router-native";
import Text from "./Text";
import { Searchbar } from "react-native-paper";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const FilterRepositories = ({
  orderBy,
  orderDirection,
  setOrderDirection,
  setOrderBy,
}) => {
  const selectedValue =
    orderBy === "CREATED_AT"
      ? "CREATED_AT"
      : orderDirection === "ASC"
      ? "ASC"
      : "DESC";

  const handleFilterChange = (order) => {
    if (order === "ASC") {
      setOrderDirection("ASC");
      setOrderBy("RATING_AVERAGE");
    }
    if (order === "DESC") {
      setOrderDirection("DESC");
      setOrderBy("RATING_AVERAGE");
    }
    if (order === "CREATED_AT") {
      setOrderBy("CREATED_AT");
      setOrderDirection("ASC");
    }
  };

  return (
    <View>
      <View
        style={{
          display: "flex",
          backgroundColor: "white",
          color: "blue",
          padding: theme.standardPadding.padding,
          paddingBottom: 0,
          alignItems: "center",
        }}
      >
        <Text fontWeight="bold">Scroll filters to sort repositories</Text>
      </View>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => handleFilterChange(itemValue)}
        itemStyle={{
          height: 100,
          backgroundColor: "white",
          color: "blue",
          fontSize: 18,
        }}
      >
        <Picker.Item label="Latest Repositories" value="CREATED_AT" />
        <Picker.Item label="Highest Rated Repositories" value="DESC" />
        <Picker.Item label="Lowest Rated Repositories" value="ASC" />
      </Picker>
    </View>
  );
};

const RepositoryList = () => {
  const [orderDirection, setOrderDirection] = useState("ASC");
  const [orderBy, setOrderBy] = useState("CREATED_AT");
  const [searchText, setSearchText] = useState('');
  const [debouncedSearchText, setDebouncedSearchText] = useState(searchText);
  
  const navigate = useNavigate();
  let filter = "";
  const { repositories, fetchMore } = useRepositories({ orderBy, orderDirection, searchKeyword: debouncedSearchText, first: 5 });

  const handleItemPress = (item) => {
    navigate(`/${item.id}`);
  };

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

    const onEndReach = () => {
      if(fetchMore){
        fetchMore();
      }
    };
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedSearchText(searchText);
      }, 300); 
      return () => {
        clearTimeout(handler);
      };
    }, [searchText])

  const searchTextAdjustment = (query) => {
    setSearchText(query);
  };
  return (
    <View>
      <Searchbar 
        style={{ margin: 5 }}
        value={searchText}
        onChangeText={searchTextAdjustment}
        
      />
      <FlatList
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={() => (
          <FilterRepositories
            orderBy={orderBy}
            orderDirection={orderDirection}
            setOrderBy={setOrderBy}
            setOrderDirection={setOrderDirection}
          />
        )}
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
    </View>
  );
};

export default RepositoryList;
