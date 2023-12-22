import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orders: [
        { orderId: '', customerName: '', shippingAdress: { street: '', city: '', state: '', zipCode: '' }, status: '' }
    ]
}

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            state.orders.push(action.payload);
        },
        listOrders: (state, action) => {
            state.orders = action.payload;
        }
    }
});

export const { addOrder, listOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
