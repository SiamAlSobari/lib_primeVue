import axios from "axios";
import { API_URL } from "./base-url";
import type { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL:API_URL,
    withCredentials: true
})

export const apiClient = async<T>(config:AxiosRequestConfig):Promise<T> => {
    const response = await axiosInstance.request<T>(config)
    return response.data
}