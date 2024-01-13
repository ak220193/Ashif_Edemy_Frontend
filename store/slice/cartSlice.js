import { createSlice } from '@reduxjs/toolkit';
import { AXIOS_POST, AXIOS_DELETE, AXIOS_GET, AXIOS_PATCH  } from './services/apiService';
import { toastr } from 'react-redux-toastr';

const initialState = {
    isCartOpen: false,
    cartItems: [],
    currentOrderId: null
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        toggleCart(state, action) {
            state.isCartOpen = action.payload;
        },


        addItem(state, action) {
            const newItemId = action.payload._id;
            const existingItem = state.cartItems.find(item => item._id === newItemId);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                let object = {
                    ...action.payload,
                    quantity: 1
                };
                state.cartItems.push(object);
            }
        },

        setOrderId(state, action) {
            console.log('== ction.payload.currentOrderId ', action.payload.currentOrderId)
            state.currentOrderId = action.payload.currentOrderId;
        },

        removeItem(state, action) {
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload);
        },


        incrementItem(state, action) {
            state.cartItems = state.cartItems.map(item => {
                if (item._id === action.payload) {
                    item.quantity++;
                }
                return item;
            });
        },


        decrementItem(state, action) {
            state.cartItems = state.cartItems.map(item => {
                if (item._id === action.payload) {
                    item.quantity--;
                }
                return item;
            }).filter(item => item.quantity !== 0);
        }

    }
});

export const loginMethod = (payload) => async (dispatch) => {  
    const response = await AXIOS_POST('/api/auth/login/cart', payload, {});
    if(response?.status){
        let token = response?.data?.token;
        localStorage.setItem('authToken', token);
    }else{
        toastr.error('Error', response?.message);        
    }
};

export const createOrder = (payload) => async (dispatch) => {  
    const response = await AXIOS_POST('/api/products/generate-order-id', payload, {});
    if(response?.status){
        let orderId = response?.data?.orderId;
        console.log('=== orderId ', response?.data)
        dispatch(cartSlice.actions.setOrderId({ currentOrderId: orderId }))
    }else{
        toastr.error('Error', response?.message);        
    }
};

export const saveNewOrder = (payload) => async (dispatch) => {
    const response = await AXIOS_POST('/api/products/create-order', payload, {});
    if (response?.data?._id) {                
        toastr.success('Success',  response?.message);
    } else{
      toastr.error('Error', response?.message);    
    }
  };


export const { toggleCart, addItem, removeItem, incrementItem, decrementItem } = cartSlice.actions;
export default cartSlice.reducer;