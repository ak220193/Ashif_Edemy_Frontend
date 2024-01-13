import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AXIOS_POST, AXIOS_DELETE, AXIOS_GET, AXIOS_PATCH  } from './services/apiService';
import { toastr } from 'react-redux-toastr';
import axios from "axios";
const initialState = {
    topicData: [],
    topicLoading: false,
};

export const getTopicInfo = createAsyncThunk("Topics", async () => {
    return axio.get(`/api/topics`);
});

const topicReducer = createSlice({
    name: 'topics',
    initialState,
    reducer: {},
    extraReducers: {
        [getTopicInfo.pending]: (state, action) => {
            state.topicLoading = true;
        },
        [getTopicInfo.fulfilled]: (state, action) => {
            state.topicData = action.payload.data.data;
            state.topicLoading = false;
        },
        [getTopicInfo.rejected]: (state, action) => {
            state.topicLoading = false;
        },
    },
});

export default topicReducer.reducer;