import defaultAxios from "axios";
import { API_BASE_URL } from "@env";



const axios = defaultAxios.create({
  baseURL: `${API_BASE_URL}/api/v1/`,
  headers: { "Content-Type": "application/json" },
});

export const getAllUsers = async () => {
  try {
    const users = await axios.get("users");

    return users.data;
  } catch (err) {
    return console.error(err);
  }
};

export const getUserById = async (id) => {
  try {
    const user = await axios.get(`users/${id}`);

    return user.data;
  } catch (err) {
    return console.error(err);
  }
}