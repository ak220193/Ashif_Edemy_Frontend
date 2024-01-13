import { createSlice } from '@reduxjs/toolkit';
import { AXIOS_POST, AXIOS_DELETE, AXIOS_GET, AXIOS_PATCH  } from './services/apiService';
import { toastr } from 'react-redux-toastr';

const initialState = {
    schoolList: [],
    advertisementLists: [],
    loader: false,
    randomRecordsList: [],
    singleSchoolData: {}
};


const schoolSlice = createSlice({
    name: 'school',
    initialState,
    reducers: {
        getSchoolsList(state, action) {
            state.schoolList = action.payload.schoolList;
        },
        getSingleDataList(state, action) {
            state.singleSchoolData = action.payload.singleSchoolData;
        },
        getRandomList(state, action) {
            state.randomRecordsList = action.payload.randomRecordsList;
        },
        loader(state, action) {
            state.loader = action.payload.loader
        }
      },
});

export const getSchoolsDetails = (page = 0, limit = 10, searchKey = '') => async (dispatch) => {
    const response = await AXIOS_GET(`/api/getschool?page=${page}&limit=${limit}&searchKey=${searchKey}`);
    if(response && response.status === 200){
        dispatch(schoolSlice.actions.getSchoolsList({ schoolList: response?.data || [] }))
    }else{
        dispatch(schoolSlice.actions.loader({ loader: false }));
        toastr.error('Error', response?.message);        
    }
};

export const getSingleData = (id) => async (dispatch) => { 
    const response = await AXIOS_GET('/api/get-school/' + id);
     if(response && response.status === 200){
         dispatch(schoolSlice.actions.getSingleDataList({ singleSchoolData: response?.data || {} }))
     }else{
        dispatch(schoolSlice.actions.getSingleDataList({ singleSchoolData: {} }))
         toastr.error('Error', response?.message);        
     }
 };

 export const getAllRandomDataList = (searchKey) => async (dispatch) => { 
    const response = await AXIOS_GET('/api/get-all/random/school?search='+searchKey);
     if(response && response.status === 200){
        dispatch(schoolSlice.actions.getRandomList({ randomRecordsList: response?.data || [] }))
     }else{
        dispatch(schoolSlice.actions.getRandomList({ randomRecordsList: [] }))
        toastr.error('Error', response?.message);        
     }
 };


export const { schoolList, loader } = schoolSlice.actions;
export default schoolSlice.reducer;