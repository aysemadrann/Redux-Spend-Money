import { createSlice, nanoid } from "@reduxjs/toolkit";

export const moneySlice = createSlice({
    name:'moneys',
    initialState:{
        items: [
            {
                id:nanoid(),
                img:'https://neal.fun/spend/images/big-mac.jpg',
                title:'Big Mac',
                price:'$2',
                quantity:0,
            },
            {
                id:nanoid(),
                img:'https://neal.fun/spend/images/flip-flops.jpg',
                title:'Flip Flops',
                price:'$3',
                quantity:0,
            },
            {
                id:nanoid(),
                img:'https://neal.fun/spend/images/coca-cola-pack.jpg',
                title:'Coca-cola Pack',
                price:'$5',
                quantity:0,
            },
            {
                id:nanoid(),
                img:'https://neal.fun/spend/images/movie-ticket.jpg',
                title:'Movie Ticket',
                price:'$12',
                quantity:0,
            },
            {
                id:nanoid(),
                img:'https://neal.fun/spend/images/book.jpg',
                title:'Book',
                price:'$15',
                quantity:0,
            },
            {
                id:nanoid(),
                img:'https://neal.fun/spend/images/lobster-dinner.jpg',
                title:'Lobster Dinner',
                price:'$45',
                quantity:0,
            },
            {
                id:nanoid(),
                img:'https://neal.fun/spend/images/video-game.jpg',
                title:'Video Game',
                price:'$60',
                quantity:0,
            },
            {
                id:nanoid(),
                img:'https://neal.fun/spend/images/amazon-echo.jpg',
                title:'Amazon Echo',
                price:'$99',
                quantity:0,
            },
            {
                id:nanoid(),
                img:'https://neal.fun/spend/images/year-of-netflix.jpg',
                title:'Netflix',
                price:'$100',
                quantity:0,
            },
            {
                id:nanoid(),
                img:'https://neal.fun/spend/images/air-jordans.jpg',
                title:'Air Jordans',
                price:'$125',
                quantity:0,
            },
            {
                id:nanoid(),
                img:'https://neal.fun/spend/images/airpods.jpg',
                title:'Airpods',
                price:'$199',
                quantity:0,
            },
            {
                id:nanoid(),
                img:'https://neal.fun/spend/images/gaming-console.jpg',
                title:'Gaming Console',
                price:'$299',
                quantity:0,
                 
            },
        ],
        money:100000,

    },
    reducers:{
        handleChange: (state, action) => {
            state.items.quantity = action.payload;

        },
        increment: (state, action) => {
            const index = state.items.findIndex(todo => todo.id === action.payload);
            (state.items[index].quantity) += 1;

        },


          
        
    },
    extraReducers:{},
});

export const ProductSelector = (state) => state.moneys.items;
export const moneySelector = (state) => state.moneys.money;
export const { handleChange, increment } = moneySlice.actions;
export default moneySlice.reducer;