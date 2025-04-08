import axiosClient from "./axiosClient.ts";
import { AxiosResponse } from "axios";

export type Counter = {
    counterId: number,
    name: string,
    count: number,
};

export const getCounters: () => Promise<Counter[]> = async (): Promise<Counter[]> => {
    const response: AxiosResponse<Counter[]> = await axiosClient.get("/Counter");
    return response.data;
};