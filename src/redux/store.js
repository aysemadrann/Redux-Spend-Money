import { configureStore } from "@reduxjs/toolkit";
import moneySlice from "./moneySlice";



export const store = configureStore({
    reducer: {
        moneys: moneySlice,

    },
});