import axios from "axios"

export const getUsers = async () => {
   const resp = await axios.get("https://dummyjson.com/users");
   return resp.data;
}