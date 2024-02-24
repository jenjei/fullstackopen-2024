import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN_MUTATION);

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({
        variables: {
          username: username,
          password: password,
        },
      });
      console.log("MUTATED DATA", data);
      return data;
    } catch (e) {
      console.error("useSignIn.js ERROR", e);
      throw new Error("Login failed");
    }
  };

  return { signIn, result };
};

export default useSignIn;
