import Axios from "axios";

export const axios = Axios.create({
    baseURL: "http://localhost:9000",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
})