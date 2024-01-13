import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/cartSlice';
import blogReducer from './slice/blogSlice'
import universityReducer from './slice/universitiesSlice'
import collegeReducer from './slice/collegeSlice'
import schoolReducer from './slice/schoolSlice'
import commonReducer from './slice/commonSlice'
import learningReducer from './slice/learningHubSlice'
import topicReducer from './slice/topicSlice'
import lquizReducer from './slice/quizSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        blog: blogReducer,
        university: universityReducer,
        college: collegeReducer,
        school: schoolReducer,
        common: commonReducer,
        learning: learningReducer,
        quiz: lquizReducer,
        topics: topicReducer
    }
});


export default store;