import Axios from "axios";
import { baseURL } from "src/configs/api";
// test account:
//username: rwackley0
//pass: lP1bSYs5hfZ
export default async function handleLogin(username, password) {
  let payload = { username: username, password: password };
  try {
    let res = await Axios.post(baseURL + "login", payload);
    if (res.status === 200) {
      localStorage.setItem("account", username);
      localStorage.setItem("jwt", res.data.token);
      return res.status;
    }
  } catch (err) {
    return err.response?.status;
  }
}
