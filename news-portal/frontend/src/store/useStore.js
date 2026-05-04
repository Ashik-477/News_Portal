import { create } from "zustand";
import API from "../api/axios";

export const useStore = create((set) => ({
  news: [],
  user: null,
  token: localStorage.getItem("token") || null,

  // AUTH
  login: async (data) => {
    const res = await API.post("/auth/login", data);
    localStorage.setItem("token", res.data.token);
    set({ token: res.data.token });
  },

  register: async (data) => {
    await API.post("/auth/register", data);
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ token: null, user: null });
  },

  getProfile: async () => {
    const res = await API.get("/user/profile");
    set({ user: res.data });
  },

  updateProfile: async (data) => {
    await API.put("/user/profile", data);
  },

  // NEWS
  fetchNews: async () => {
    const res = await API.get("/news");
    set({ news: res.data });
  },

  fetchTopNews: async () => {
    const res = await API.get("/news/top");
    set({ news: res.data });
  },

  createNews: async (data) => {
    await API.post("/news", data);
  },

  updateNews: async (id, data) => {
    await API.put(`/news/${id}`, data);
  },

  deleteNews: async (id) => {
    await API.delete(`/news/${id}`);
  },

  getMyNews: async () => {
    const res = await API.get("/news/my");
    set({ news: res.data });
  },
}));