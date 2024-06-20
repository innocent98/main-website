import axios from 'axios';
import { baseUrl } from './baseUrl';

const requestMethod = () => {
    // retrieve user-token from localStorage 
    const TOKEN = localStorage.getItem("userToken")
  
    //   user request can be called/used for any type http APIs call
    //   e.g POST, GET, PUT, DELETE
    const userRequest = axios.create({
      baseURL: baseUrl,
      headers: { token: `Bearer ${TOKEN}` },
    });
  
    return { userRequest };
  };
  
  export default requestMethod;


