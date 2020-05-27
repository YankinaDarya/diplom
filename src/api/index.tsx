import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://18.191.134.30:5002/',
});
