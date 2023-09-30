import axios from 'axios';

const instance = axios.create({
    
    baseURL: "http://127.0.0.1:9001/https://api.deezer.com",
    // baseURL: "https://api.deezer.com",
    // headers: {
    //             "Access-Control-Allow-Origin": "*",
    //             // 'origin': 'x-requested-with'
    //         },
    withCredentials:true

});
// console.log(process.env.BASE_URL);
export default instance;