import axios from 'axios';

const instance = axios.create({
    
    baseURL: "http://localhost:9001/https://api.deezer.com",
    // baseURL: "https://api.deezer.com",
    // headers: {
    //             "Access-Control-Allow-Origin": "*",
    //             // 'origin': 'x-requested-with'
    //         },
    withCredentials:true

});
// console.log(process.env.BASE_URL);
export default instance;