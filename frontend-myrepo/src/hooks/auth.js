import { axios } from "../lib/axios";

export const useAuth = ({ middleware, redirectIfAuthenticate }) => {
  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const register = async (field, setErrors) => {
    await csrf();
    console.log(field, csrf);
    return;
    setErrors([]);

    await axios
      .post("/register", {
        name: "fathul",
        email: "fathul@gmail.com",
        password: "fathul123",
        password_confirmation: "fathul123",
      })
      .then(function (response) {
        console.log("create=", response);
      })
      .catch(function (error) {
        console.log("create=", error);
      });
  };

  return { register };
};
