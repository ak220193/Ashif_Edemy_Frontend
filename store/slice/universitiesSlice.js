import { createSlice } from '@reduxjs/toolkit';
import { AXIOS_POST, AXIOS_DELETE, AXIOS_GET, AXIOS_PATCH  } from './services/apiService';
import { toastr } from 'react-redux-toastr';

const initialState = {
    universityList: [],
    advertisementLists: [],
    singleUniversityData: [],
    randomRecordsList: [],
    loader: false,
};


const universitySlice = createSlice({
    name: 'university',
    initialState,
    reducers: {
        getUniversityList(state, action) {
            state.universityList = action.payload.universityList;
        },
        getAdvertisementList(state, action) {
            state.advertisementLists = action.payload.advertisementLists;
        },
        getSingleDataList(state, action) {
            state.singleUniversityData = action.payload.singleUniversityData;
        },
        getRandomList(state, action) {
            state.randomRecordsList = action.payload.randomRecordsList;
        },
        loader(state, action) {
            state.loader = action.payload.loader
        }
      },
});

export const getUniversityData = (page = 0, limit = 12, searchKey = '') => async (dispatch) => {
    const response = await AXIOS_GET(`/api/universities?page=${page}&limit=${limit}&searchKey=${searchKey}`);
    if(response && response.status === 200){
        dispatch(universitySlice.actions.getUniversityList({ universityList: response?.data || [] }))
        // dispatch(universitySlice.actions.getUniversityList({ universityList: mkData }))
    }else{
        dispatch(universitySlice.actions.getUniversityList({ universityList: [] }))

        dispatch(universitySlice.actions.loader({ loader: false }));
        toastr.error('Error', response?.message);        
    }
};

export const getAdvertisement = () => async (dispatch) => { 
   const response = await AXIOS_GET('/api/get-advertisement');
    if(response && response.status === 200){
        dispatch(universitySlice.actions.getAdvertisementList({ advertisementLists: response?.data || [] }))
    }else{
        dispatch(universitySlice.actions.loader({ loader: false }));
        toastr.error('Error', response?.message);        
    }
};

export const getSingleData = (id) => async (dispatch) => { 
    const response = await AXIOS_GET('/api/get-university/' + id);
     if(response && response.status === 200){
         dispatch(universitySlice.actions.getSingleDataList({ singleUniversityData: response?.data || {} }))
     }else{
        dispatch(universitySlice.actions.getSingleDataList({ singleUniversityData: {} }))
         toastr.error('Error', response?.message);        
     }
 };

 export const getAllRandomDataList = (searchKey) => async (dispatch) => { 
    const response = await AXIOS_GET('/api/get-all/random/university?search='+searchKey);
     if(response && response.status === 200){
        dispatch(universitySlice.actions.getRandomList({ randomRecordsList: response?.data || [] }))
     }else{
        dispatch(universitySlice.actions.getRandomList({ randomRecordsList: [] }))
        toastr.error('Error', response?.message);        
     }
 };

export const { universityList, advertisementLists, loader } = universitySlice.actions;
export default universitySlice.reducer;