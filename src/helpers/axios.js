import axios from 'axios';

const instance = axios.create({
    
    // baseURL: "http://localhost:8080/https://api.deezer.com"
    baseURL: "https://api.deezer.com"

});
// console.log(process.env.BASE_URL);
export default instance;