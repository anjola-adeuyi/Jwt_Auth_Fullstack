import { createSlice } from '@reduxjs/toolkit';

export interface IUserInfo {
  _id: string;
  name: string;
  email: string;
}

interface AuthState {
  userInfo: IUserInfo | null;
}

const userInfoLocalStorage = localStorage.getItem('userInfo');
const userInfo = userInfoLocalStorage ? JSON.parse(userInfoLocalStorage) : null;
const initialState: AuthState = {
  userInfo,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
