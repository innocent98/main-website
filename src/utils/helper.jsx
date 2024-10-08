import axios from 'axios';
import { baseUrl } from './baseUrl';

const requestMethod = () => {
    // retrieve user-token from localStorage 

    const TOKEN = localStorage.getItem("userToken")
    
    //the token which can post job for now
    //const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDBmMmZiNGZhOTdlOTcyNGRkZDUyZSIsImVtYWlsIjoiYWRldmljdG9yQGdtYWlsLmNvbSIsImlhdCI6MTcxOTA4ODM0MCwiZXhwIjoxNzIxNjgwMzQwfQ.n9l3943CEYDYsxbmffxDXAnMebZEDI0l9d191E3HDo8"
   
  
    //   user request can be called/used for any type http APIs call
    //   e.g POST, GET, PUT, DELETE
    const userRequest = axios.create({
      baseURL: baseUrl,
      headers: { token: `Bearer ${TOKEN}` },
    });

    return { userRequest };
  };
  
  export default requestMethod;


