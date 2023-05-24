import axios from "axios";
import { useAuth } from "context";
import { toast } from "react-toastify";

function useSignupHandler() {
  const { setToken, setCurrentUser } = useAuth();
  //post Request for creating user
  const createUser = async (firstName, lastName, email, password) =>
    await axios.post("/api/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });

  const signupHandler = async (e, formState) => {
    //for preventing the reload
    e.preventDefault();
    const { firstName, lastName, email, password } = formState;

    try {
      const {
        status,
        data: { createdUser, encodedToken },
      } = await createUser(firstName, lastName, email, password);

      //seting the new user in local storage
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: createdUser, token: encodedToken })
        );
      }

      setCurrentUser(createdUser);
      setToken(encodedToken);
      toast.success("signup  succesfully");
    } catch (error) {
      console.log(error);
      toast.error("error in signup");
    }
  };
  return { signupHandler };
}

export { useSignupHandler };
