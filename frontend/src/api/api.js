import axios from 'axios';
    
export const api = axios.create({
 baseURL: "http://localhost:1337/", //change in production???
 headers: {
   "Content-type": "application/json",
 },
 //authorization header ? 
});

export default api;