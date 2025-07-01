import axios from "axios";

const googleAuth = (code) => {
  return axios.get(`http://localhost:8080/auth/google?code=${code}`);
  
};

export default googleAuth;
