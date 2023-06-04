import { UPDATE_CART } from "constants";
import { UPDATE_WISHLIST } from "constants";
import { useAuth, useData } from "context";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getCart, getWishlist, loginService } from "services";

function useLoginHandler() {
  const { setToken, setCurrentUser } = useAuth();
  const { dispatch } = useData();
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
      const tokenResponse = res.encodedToken;
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
      res = await getWishlist(tokenResponse);
      dispatch({
        type: UPDATE_WISHLIST,
        payload: { wishlist: res.wishlist },
      });
      res = await getCart(tokenResponse);
      dispatch({
        type: UPDATE_CART,
        payload: { cart: res.cart },
      });
      //navigation to products page
      navigate(location?.state?.from || "/products");
      toast.success("Login successful!");
    } catch (error) {
      console.log("Error in login handler", error);
      toast.error("Login failed. Please try again.");
    }
  };
  return { loginHandler };
}

export { useLoginHandler };
