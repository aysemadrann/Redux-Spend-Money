import { configureStore } from "@reduxjs/toolkit";
import moneySlice from "./moneySlice";
import productSlice from "./productSlice";


export const store = configureStore({
    reducer: {
        moneys: moneySlice,
        products:productSlice,
    },
});