import { createSlice } from '@reduxjs/toolkit';
import { AXIOS_POST, AXIOS_DELETE, AXIOS_GET, AXIOS_PATCH  } from './services/apiService';
import { toastr } from 'react-redux-toastr';

const initialState = {
    loginData: [],
    loader: false,
};


const blogSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        getBlogList(state, action) {
            state.loginData = action.payload.loginData;
        },
        loader(state, action) {
            state.loader = action.payload.loader
        }
      },
});


export const postLogin = (payload) => async (dispatch) => {  
    const response = await AXIOS_POST('/api/signup', payload, {});
    return response
};

export const { blogList, loader } = blogSlice.actions;
export default blogSlice.reducer;