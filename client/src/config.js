import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://greenlight-blog.herokuapp.com/api/"
});