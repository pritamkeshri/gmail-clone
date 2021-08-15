import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    login: (state, action) => {
      state.user= action.payload
    },
    logout: (state) => {
      state.user = null;
    }
  },
});

// action mapdispatchtoprops
export const { login, logout } = userSlice.actions;

//state mapstatetoprops
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
