import { configureStore } from '@reduxjs/toolkit';
import AddToCartSlice from '../store/AddToCartSlice';
import ProductSlice from '../store/ProductSlice';



const store = configureStore({
    reducer: {

        product:ProductSlice,
        cartAdd:AddToCartSlice


    }
})
export default store