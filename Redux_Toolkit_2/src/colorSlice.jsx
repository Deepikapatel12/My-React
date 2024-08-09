import { createSlice } from "@reduxjs/toolkit";

const colorSlice= createSlice({
    name:"mycolor",
    initialState:{
        color:"pink"
    },
    reducers:{
        changeColor:(state)=>{
            state.color="green";
        }
    }
})

export default colorSlice.reducer;
export const {changeColor}= colorSlice.actions;