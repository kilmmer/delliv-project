import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './slice';

export const store = configureStore({
    reducer: {
        orders: ordersReducer
    }
});