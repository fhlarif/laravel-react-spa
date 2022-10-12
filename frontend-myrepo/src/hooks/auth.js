import { axios } from "../lib/axios";

export const useAuth = ({ middleware, redirectIfAuthenticate }) => {
  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const user = async () => {
    await axios.get("/api/user").then(function (response) {
      console.log("user=", response);
    });
  };

  const register = async (field, setErrors) => {
    await csrf();
    console.log(field);
    setErrors([]);

    await axios
      .post("/register", field)
      .then(function (response) {
        console.log("create=", response);
      })
      .catch(function (error) {
        if (error.response.status !== 422) throw error;
        setErrors(error.response.data.errors);
        console.log("create=", error);
      });
  };

  return { register, user };
};
