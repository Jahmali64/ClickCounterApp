import axios, {AxiosInstance, CreateAxiosDefaults} from "axios";

const config: CreateAxiosDefaults = {
    baseURL: "https://localhost:7115/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: false
};
const axiosClient: AxiosInstance = axios.create(config);

export default axiosClient;