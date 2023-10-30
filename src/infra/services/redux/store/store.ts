import { configureStore } from "@reduxjs/toolkit";
import { CountReducer } from "../reducers";

export const store = configureStore({ reducer: CountReducer });
