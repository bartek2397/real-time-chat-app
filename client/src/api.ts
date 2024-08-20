import axios from "axios";
import { ApiResponse, UserData } from "./lib/types";

const API_URL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3500/api';

export const register = async (userData: UserData): Promise<ApiResponse> => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, userData);
        return response.data
    } catch (error: any) {
        throw error.response.data
    }
}

export const login = async (credentials: UserData): Promise<ApiResponse> => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, credentials);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  };