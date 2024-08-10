import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorSlice";
const store=configureStore({
   reducer:{
    bgcolor:colorReducer
   }
})
export default store;