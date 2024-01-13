import { createSlice } from '@reduxjs/toolkit';
import { AXIOS_POST, AXIOS_DELETE, AXIOS_GET, AXIOS_PATCH  } from './services/apiService';
import { toastr } from 'react-redux-toastr';

const initialState = {
    eventsList: [],
    advertisementLists: [],
    loader: false,
};


const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        getEventsList(state, action) {
            state.eventsList = action.payload.eventsList;
        },
        loader(state, action) {
            state.loader = action.payload.loader
        }
      },
});

export const getEvents = () => async (dispatch) => {
    const response = await AXIOS_GET(`/api/events`);
    if(response && response.status === 200){
        dispatch(commonSlice.actions.getEventsList({ eventsList: response?.data || [] }))
    }else{
        dispatch(commonSlice.actions.loader({ loader: false }));
        toastr.error('Error', response?.message);        
    }
};


export const { eventsList, loader } = commonSlice.actions;
export default commonSlice.reducer;