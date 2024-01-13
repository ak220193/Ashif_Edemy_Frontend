import { createSlice } from '@reduxjs/toolkit';
import { AXIOS_POST, AXIOS_DELETE, AXIOS_GET, AXIOS_PATCH  } from './services/apiService';
import { toastr } from 'react-redux-toastr';

const initialState = {
    collegeList: [],
    advertisementLists: [],
    singleCollegeData: {},
    randomRecordsList: [],
    loader: false,
};


const collegeSlice = createSlice({
    name: 'college',
    initialState,
    reducers: {
        getCollegeList(state, action) {
            state.collegeList = action.payload.collegeList;
        },
        getSingleDataList(state, action) {
            state.singleCollegeData = action.payload.singleCollegeData;
        },
        getRandomList(state, action) {
            state.randomRecordsList = action.payload.randomRecordsList;
        },
        loader(state, action) {
            state.loader = action.payload.loader
        }
      },
});

export const getCollegeDetails = (page = 1, limit = 21, searchKey = '') => async (dispatch) => {
    const response = await AXIOS_GET(`/api/getcollage?page=${page}&limit=${limit}&searchKey=${searchKey}`);
    if(response && response.status === 200){
        dispatch(collegeSlice.actions.getCollegeList({ collegeList: response?.data || [] }))
    }else{
        dispatch(collegeSlice.actions.loader({ loader: false }));
        toastr.error('Error', response?.message);        
    }
};

export const getSingleData = (id) => async (dispatch) => { 
    console.log('=== currentId ', id)
    const response = await AXIOS_GET('/api/get-college/' + id);
     if(response && response.status === 200){
         dispatch(collegeSlice.actions.getSingleDataList({ singleCollegeData: response?.data || {} }))
     }else{
        dispatch(collegeSlice.actions.getSingleDataList({ singleCollegeData: {} }))
         toastr.error('Error', response?.message);        
     }
 };

 export const getAllRandomDataList = (searchKey, affu_id = "") => async (dispatch) => { 
    const response = await AXIOS_GET('/api/get-all/random/college?search='+searchKey + '&affu_id='+ affu_id);
     if(response && response.status === 200){
        dispatch(collegeSlice.actions.getRandomList({ randomRecordsList: response?.data || [] }))
     }else{
        dispatch(collegeSlice.actions.getRandomList({ randomRecordsList: [] }))
        toastr.error('Error', response?.message);        
     }
 };


export const { collegeList, loader } = collegeSlice.actions;
export default collegeSlice.reducer;