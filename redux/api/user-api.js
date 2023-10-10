import defaultAxios from "axios";


const axios = defaultAxios.create({
  baseURL: "http://192.168.113.6:8000/api/v1/",
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
    console.log('id ' + id);
    const user = await axios.get(`users/${id}`);

    return user.data;
  } catch (err) {
    return console.error(err);
  }
}