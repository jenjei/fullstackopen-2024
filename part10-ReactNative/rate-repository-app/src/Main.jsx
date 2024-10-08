import { StyleSheet, View } from "react-native";
import { Route, Routes } from "react-router-native";
import RepositoryList from "./components/RepositoryList";
import AppBar from "./components/AppBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SingleRepositoryView from "./components/SingleRepositoryView";
import ReviewFormView from "./components/ReviewFormView";
import { UserReviewList } from "./components/UserReviewList";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    flex: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/create-review" element={<ReviewFormView />} />
        <Route path =":id/reviews" element={<UserReviewList/>} />
        <Route path=":id" element={<SingleRepositoryView />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </View>
  );
};

export default Main;
