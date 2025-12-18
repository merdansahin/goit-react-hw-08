/*
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      console.error("REGISTER ERROR:", error);

      const message =
        error?.response?.data?.message || error?.message || "Unknown error";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/login", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;

  // 2. Token yoksa işlemi durdur
  if (!token) {
    return thunkAPI.rejectWithValue("Token bulunamadı");
  }
  try {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    // 🔥 Eğer token yoksa hiç API isteği atma!
    if (!token) return thunkAPI.rejectWithValue("No token");

    try {
      setAuthHeader(token);
      const res = await axios.get("/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
*/
// src/redux/auth/operations.js
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      console.log("REGISTER GÖNDERİLEN:", credentials);
      const res = await axios.post("/users/signup", credentials);
      console.log("REGISTER BAŞARILI:", res.data);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      console.log("REGISTER ERROR:", error);
      console.log("REGISTER ERROR RESPONSE:", error.response?.data);
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      console.log("LOGIN GÖNDERİLEN:", credentials);
      const res = await axios.post("/users/login", credentials);
      console.log("LOGIN BAŞARILI:", res.data);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      console.log("LOGIN ERROR:", error);
      console.log("LOGIN ERROR RESPONSE:", error.response?.data);
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue("Token bulunamadı");
  }

  try {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    console.log("LOGOUT ERROR:", error.response?.data || error.message);
    const message = error.response?.data?.message || error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) return thunkAPI.rejectWithValue("No token");

    try {
      setAuthHeader(token);
      const res = await axios.get("/users/current");
      return res.data;
    } catch (error) {
      console.log("REFRESH ERROR:", error.response?.data || error.message);
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
