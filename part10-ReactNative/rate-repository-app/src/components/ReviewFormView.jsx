import React, { useState } from "react";
import Constants from "expo-constants";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import { Formik } from "formik";
import * as yup from "yup";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import { useCreateReview } from "../hooks/useCreateReview";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 60,
  },
  formChild: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 2,
  },
  pressable: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    margin: 10,
    color: "white",
    borderRadius: 5,
  },
});

const validationSchema = yup.object().shape({
  repositoryOwnerName: yup
    .string()
    .required("Repository owner name is required"),
  repositoryName: yup
    .string()
    .min(1, "Repository name is required")
    .required("Repository name is required"),
  rating: yup.number().required("Rating is required"),
  review: yup.string().optional(),
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.formChild}
        name="repositoryOwnerName"
        placeholder="Repository owner name"
        placeholderTextColor={theme.colors.applicationBackgroundColor}
      />

      <FormikTextInput
        style={styles.formChild}
        name="repositoryName"
        placeholder="Repository name"
        placeholderTextColor={theme.colors.applicationBackgroundColor}
      />

      <FormikTextInput
        style={styles.formChild}
        name="rating"
        placeholder="Rating between 0 and 100"
        placeholderTextColor={theme.colors.applicationBackgroundColor}
        keyboardType="numeric"
      />

      <FormikTextInput
        style={styles.formChild}
        name="review"
        placeholder="Review"
        multiline
        placeholderTextColor={theme.colors.applicationBackgroundColor}
      />

      <Pressable style={styles.pressable} onPress={onSubmit}>
        <Text
          style={{ color: "white", textAlign: "center" }}
          fontWeight="bold"
          fontSize="button"
        >
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

const ReviewFormView = () => {
  const navigate = useNavigate();
  const { createReview } = useCreateReview();
  const [error, setError] = useState(false);
  const initialValues = {
    repositoryOwnerName: "",
    repositoryName: "",
    rating: 0,
    review: "",
  };

  const onSubmit = async (values) => {
    const result = await createReview(values);
    console.log("ReviewFormView result:", result);
    if (result) {
      const id = result.createReview.repository.id;
      navigate(`/${id}`);
      initialValues.repositoryOwnerName = "";
      initialValues.repositoryName = "";
      initialValues.rating = 0;
      initialValues.review = "";
    } else {
      console.log("ReviewFormView error:", result);
      setError(true);
    }
  };

  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
      </Formik>
      {error && (
        <Text style={{ color: "red", textAlign: "center" }}>Error</Text>
      )}
      <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
    </View>
  );
};

export default ReviewFormView;
