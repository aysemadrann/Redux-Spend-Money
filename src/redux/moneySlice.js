import { createSlice } from "@reduxjs/toolkit";

export const moneySlice = createSlice({
    name:'moneys',
    initialState:{
        money: 1000000,

    },
    reducers:{},
    extraReducers:{},
});


export const moneySelector = (state) => state.moneys.money;
export default moneySlice.reducer;