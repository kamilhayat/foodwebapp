import cartReducer from './cartSlice'
import { configureStore } from "@reduxjs/toolkit"

const cartStore= configureStore({
    reducer:{
        cart:cartReducer
    }

})

export default cartStore;