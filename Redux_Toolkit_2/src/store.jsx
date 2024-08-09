import { configureStore } from "@reduxjs/toolkit";
import clrReducer from "./colorSlice";
import { copyWithStructuralSharing } from "@reduxjs/toolkit/query";

const store= configureStore({
    reducer:{
        mycolor:clrReducer
    }
})
export default store;