import { createSlice } from '@reduxjs/toolkit';
import { AXIOS_POST, AXIOS_DELETE, AXIOS_GET, AXIOS_PATCH  } from './services/apiService';
import { toastr } from 'react-redux-toastr';

const initialState = {
    blogList: [],
    loader: false,
};


const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        getBlogList(state, action) {
            state.blogList = action.payload.blogList;
        },
        loader(state, action) {
            state.loader = action.payload.loader
        }
      },
});


export const getBlogData = (payload) => async (dispatch) => {  
   const response = await AXIOS_GET('/api/getallblogdata', payload, {});
    if(response && response.status === 200){
        dispatch(blogSlice.actions.getBlogList({ blogList: response?.data || [] }))
    }else{
        dispatch(blogSlice.actions.loader({ loader: false }));
        toastr.error('Error', response?.message);        
    }
};

export const submitQueryComments = (payload) => async (dispatch) => {  
    const response = await AXIOS_POST('/api/userquery', payload, {});
    return response
 };

export const { blogList, loader } = blogSlice.actions;
export default blogSlice.reducer;