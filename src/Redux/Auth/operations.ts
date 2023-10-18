import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'Redux/store';

import { User } from 'components/App.types';

type RegisterUser = {
  name: string;
  email: string;
  password: string;
};

type LoginUser = Omit<RegisterUser, 'name'>;

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = (token: string): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = (): void => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk<User, RegisterUser>(
  'users/signup',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);

      setAuthHeader(res.data.token);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);

export const logIn = createAsyncThunk<User, LoginUser>(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');

    clearAuthHeader();
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.message);
  }
});

export const refreshUser = createAsyncThunk<User>(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);
