import { useAuth } from "context";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginService } from "services";

function useLoginHandler() {
  const { setToken, setCurrentUser } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const loginHandler = async (e, setLoginFormData, loginFormData) => {
    //for preventing the reload
    e.preventDefault();
    //declearing the variable for storing the data getting from login services
    let res;
    try {
      // we get response from loginService
      if (e.target.innerText === "Login as Guest") {
        setLoginFormData({
          email: "adarshbalak@gmail.com",
          password: "adarshbalak",
        });
        res = await loginService("adarshbalak@gmail.com", "adarshbalak");
      } else
        res = await loginService(loginFormData.email, loginFormData.password);

      //we are seting the user in local storage

      localStorage.setItem(
        "loginDetails",
        JSON.stringify({
          user: res.foundUser,
          token: res.encodedToken,
        })
      );

      //seting the token and user after login handle function
      setToken(res.encodedToken);
      setCurrentUser(res.foundUser);
      //navigation to products page
      navigate(location?.state?.from?.pathname || "/");
      toast.success("Login successful!");
    } catch (error) {
      console.log("Error in login handler", error);
      toast.error("Login failed. Please try again.");
    }
  };
  return { loginHandler };
}

export { useLoginHandler };
