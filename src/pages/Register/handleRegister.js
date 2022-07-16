import Axios from "axios";
import { baseURL } from "src/configs/api";

export default async function handleRegister(
  username,
  displayname,
  password,
  email
) {
  let payload = {
    display_name: displayname,
    username: username,
    password: password,
    email: email,
  };
  try {
    let res = await Axios.post(baseURL + "register", payload);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
}
