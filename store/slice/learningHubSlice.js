import { createSlice } from '@reduxjs/toolkit';
import { AXIOS_POST, AXIOS_DELETE, AXIOS_GET, AXIOS_PATCH  } from './services/apiService';
import { toastr } from 'react-redux-toastr';

const initialState = {
    conceptList: [],
    entranceTypeList: [],
    entranceSubList: [],
    entranceStateExamList: [],
    programList: [],
    loader: false,
};


const learningSlice = createSlice({
    name: 'learning',
    initialState,
    reducers: {
        getConceptList(state, action) {
            state.conceptList = action.payload.conceptList;
        },
        getEntranceType(state, action) {
            state.entranceTypeList = action.payload.entranceTypeList;
        },
        getEntranceSubList(state, action) {
            state.entranceSubList = action.payload.entranceSubList;
        },
        getEntranceStateExam(state, action) {
            state.entranceStateExamList = action.payload.entranceStateExamList;
        },
        getProgramList(state, action) {
            state.programList = action.payload.programList;
        },
        loader(state, action) {
            state.loader = action.payload.loader
        }
      },
});

export const getConceptDetails = (topic) => async (dispatch) => {
    const response = await AXIOS_GET(`/api/get-contentsubject?subject=${topic}`);
    if(response && response.status === 200){
        dispatch(learningSlice.actions.getConceptList({ conceptList: response?.data || [] }))
    }else{
        dispatch(learningSlice.actions.getConceptList({ conceptList: [] }))
        dispatch(learningSlice.actions.loader({ loader: false }));
        toastr.error('Error', response?.message);        
    }
};


export const getEntranceTypeDetails = (topic) => async (dispatch) => {
    const response = await AXIOS_GET(`/api/get-EntranceType?type=${topic}`);
    if(response && response.status === 200){
        dispatch(learningSlice.actions.getEntranceType({ entranceTypeList: response?.data || [] }))
    }else{
        dispatch(learningSlice.actions.getEntranceType({ entranceTypeList: [] }))
        dispatch(learningSlice.actions.loader({ loader: false }));
        toastr.error('Error', response?.message);        
    }
};

export const getEntranceSubDetails = (topic) => async (dispatch) => {
    const response = await AXIOS_GET(`/api/get-EntranceSubType?subType=${topic}`);
    if(response && response.status === 200){
        dispatch(learningSlice.actions.getEntranceSubList({ entranceSubList: response?.data || [] }))
    }else{
        dispatch(learningSlice.actions.getEntranceSubList({ entranceSubList: [] }))
        dispatch(learningSlice.actions.loader({ loader: false }));
        toastr.error('Error', response?.message);        
    }
};

export const getEntranceStateExamDetails = (topic) => async (dispatch) => {
    const response = await AXIOS_GET(`/api/get-EntranceStateExams?examName=${topic}`);
    if(response && response.status === 200){
        dispatch(learningSlice.actions.getEntranceStateExam({ entranceStateExamList: response?.data || [] }))
    }else{
        dispatch(learningSlice.actions.getEntranceStateExam({ entranceStateExamList: [] }))
        dispatch(learningSlice.actions.loader({ loader: false }));
        toastr.error('Error', response?.message);        
    }
};

export const getProgramDetails = () => async (dispatch) => {
    const response = await AXIOS_GET(`/api/programme`);
    if(response && response.status === 200){
        dispatch(learningSlice.actions.getProgramList({ programList: response?.data || [] }))
    }else{
        dispatch(learningSlice.actions.getProgramList({ programList: [] }))
        dispatch(learningSlice.actions.loader({ loader: false }));
        toastr.error('Error', response?.message);        
    }
};


export const { conceptList, loader } = learningSlice.actions;
export default learningSlice.reducer;