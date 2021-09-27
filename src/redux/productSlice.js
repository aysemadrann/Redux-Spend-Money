import { createSlice, nanoid } from "@reduxjs/toolkit";


export const productSlice = createSlice({
    name:'products',
    initialState:{
        items: [
            {
                id:nanoid(),
                img:'https://neal.fun/spend/images/big-mac.jpg',
                title:'Big Mac',
                price:'$2',
            },
            {
                id:nanoid(),
                img:'https://neal.fun/spend/images/flip-flops.jpg',
                title:'Flip Flops',
                price:'$3',
            },
            {
                id:nanoid(),
                img:'https://neal.fun/spend/images/coca-cola-pack.jpg',
                title:'Coca-cola Pack',
                price:'$5',
            },
            {
                id:nanoid(),
                img:'https://neal.fun/spend/images/movie-ticket.jpg',
                title:'Movie Ticket',
                price:'$12',
            },
            {
                id:nanoid(),
                img:'https://neal.fun/spend/images/book.jpg',
                title:'Book',
                price:'$15',
            },
            {
                id:nanoid(),
                img:'https://neal.fun/spend/images/lobster-dinner.jpg',
                title:'Lobster Dinner',
                price:'$45',
            },
            {
                id:nanoid(),
                img:'https://neal.fun/spend/images/video-game.jpg',
                title:'Video Game',
                price:'$60',
            },
            {
                id:nanoid(),
                img:'https://neal.fun/spend/images/amazon-echo.jpg',
                title:'Amazon Echo',
                price:'$99',
            },
            {
                id:nanoid(),
                img:'https://neal.fun/spend/images/year-of-netflix.jpg',
                title:'Netflix',
                price:'$100',
            },
            {
                id:nanoid(),
                img:'https://neal.fun/spend/images/air-jordans.jpg',
                title:'Air Jordans',
                price:'$125',
            },
            {
                id:nanoid(),
                img:'https://neal.fun/spend/images/airpods.jpg',
                title:'Airpods',
                price:'$199',
            },
            {
                id:nanoid(),
                img:'https://neal.fun/spend/images/gaming-console.jpg',
                title:'Gaming Console',
                price:'$299',
                 
            },


        ],
        number: 0,

    },
    reducers:{
        increment: (state, id) => {
             state.number += 1;


        },
        decrement: (state, action) => {
            if(state.number > 0){
                state.number -= 1;
            }
        },
    },
    extraReducers:{},
});

export const ProductList = (state) => state.products.items;
export const Number = (state) => state.products.number;
export const { increment, decrement } = productSlice.actions; 
export default productSlice.reducer;