import axios from "axios";

async function loginService(email, password) {
  //post request for login
  try {
    const res = await axios.post("/api/auth/login", {
      email: email,
      password: password,
    });

    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("loginService: Error in Login", e); //
  }
}

export { loginService };
