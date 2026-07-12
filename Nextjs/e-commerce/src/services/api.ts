import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// 💡 The Interceptor: Runs automatically BEFORE every request hits your NestJS backend
api.interceptors.request.use(
  (config: any) => {
    // Pull the token returned by your AuthService from storage
    const token = localStorage.getItem("access_token");

    // If the token exists, cleanly inject it as a Bearer header
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

// 💡 Optional: Automatically catch 401 Unauthorized globally if token expires
api.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("access_token");
      window.location.href = "/login"; // Force redirect to login
    }
    return Promise.reject(error);
  },
);
