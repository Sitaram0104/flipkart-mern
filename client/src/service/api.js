import axios from "axios";

const url = process.env.REACT_APP_URL;

export const authenticateSignup = async (user) => {
  try {
    const res = await axios.post(`${url}/signup`, user);
    return res;
  } catch (error) {
    console.log("error while calling signup api");
  }
};

export const authenticateLogin = async (user) => {
  try {
    const res = await axios.post(`${url}/login`, user);
    return res;
  } catch (error) {
    console.log("error while calling login api");
  }
};

export const payUsingPaytm = async (data) => {
  try {
    const res = await axios.post(`${url}/login`, data);
    return res.data;
  } catch (error) {
    console.log("error while calling paytm api");
  }
};
