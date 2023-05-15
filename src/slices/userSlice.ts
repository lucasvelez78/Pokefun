import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

export type User = {
  name: string | null;
  nickname: string | null;
  loggedIn?: boolean;
};

export type UserState = {
  user: User | null;
};

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user?.user;

export default userSlice.reducer;
