import { createSlice } from '@reduxjs/toolkit';
import { AXIOS_POST, AXIOS_DELETE, AXIOS_GET, AXIOS_PATCH  } from './services/apiService';
import { toastr } from 'react-redux-toastr';

    const initialState = {
        TypesofQuiz: "",
        quizInfo: [],
        getQuizDataLoading: true,
        allResultsData: []
    };


    const quizSlice = createSlice({
        name: 'quiz',
        initialState,
        reducers: {
            typeSkill(state){
                state.TypesofQuiz = "Skill"
            },
            typeAcademic(state){
                state.TypesofQuiz = "Academic"
            },
            getQuizList(state, action) {
                state.quizInfo = action.payload.quizInfo;
            },
        },
    });

    export const getQuizData = (allValues)  => async (dispatch) => {
        console.log('=== allValues 11111111 ', allValues)
        let response =  await AXIOS_GET(`/api/getfilteredquiz?TypeOfAssessment=${allValues?.typeOf}&CourseTitle=${allValues?.mainDomain}&CognitiveLevel=${allValues?.difficulty}`);
        if(response && response.status === 200){
            dispatch(quizSlice.actions.getQuizList({ quizInfo: response?.data || [] }))
        }else{
            dispatch(quizSlice.actions.getQuizList({ quizInfo: [] }))
            toastr.error('Error', response?.message);        
        }
    };

    export const postQuiz = (data)  => async (dispatch) => {
        let response =  await AXIOS_POST(`/api/postResults`, data, {});
        return response
    };


export const { TypesofQuiz, quizInfo, getQuizDataLoading } = quizSlice.actions;
export default quizSlice.reducer;