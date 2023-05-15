import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import favoritesSlice from "../slices/favoritesSlice";

import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

const store = configureStore({
  reducer: {
    user: userReducer,
    favorites: favoritesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export default store;
