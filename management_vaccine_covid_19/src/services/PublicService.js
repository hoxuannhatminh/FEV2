import axios from "axios";
const API_URL = "http://localhost:8080/congthongtin/";

const login = (user,password) =>{
    return axios.post(API_URL +"login",{
        username : user,
        password : password
    })
};

const logout = () => {
    localStorage.removeItem("user");
  };

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  const registerUser=(data) =>{
    return axios.post(API_URL+'register',data)
}
export default {
    login,
    logout,
    getCurrentUser,
    registerUser
  };