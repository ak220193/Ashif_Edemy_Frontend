"use strict";
exports.id = 3827;
exports.ids = [3827];
exports.modules = {

/***/ 3827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T1": () => (/* binding */ getSingleData),
/* harmony export */   "Tz": () => (/* binding */ getAdvertisement),
/* harmony export */   "Ye": () => (/* binding */ getAllRandomDataList),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "mX": () => (/* binding */ getUniversityData)
/* harmony export */ });
/* unused harmony exports universityList, advertisementLists, loader */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4791);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1424);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
    universityList: [],
    advertisementLists: [],
    singleUniversityData: [],
    randomRecordsList: [],
    loader: false
};
const universitySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "university",
    initialState,
    reducers: {
        getUniversityList (state, action) {
            state.universityList = action.payload.universityList;
        },
        getAdvertisementList (state, action) {
            state.advertisementLists = action.payload.advertisementLists;
        },
        getSingleDataList (state, action) {
            state.singleUniversityData = action.payload.singleUniversityData;
        },
        getRandomList (state, action) {
            state.randomRecordsList = action.payload.randomRecordsList;
        },
        loader (state, action) {
            state.loader = action.payload.loader;
        }
    }
});
const getUniversityData = (page = 0, limit = 12, searchKey = "")=>async (dispatch)=>{
        const response = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_1__/* .AXIOS_GET */ .Dt)(`/api/universities?page=${page}&limit=${limit}&searchKey=${searchKey}`);
        if (response && response.status === 200) {
            dispatch(universitySlice.actions.getUniversityList({
                universityList: response?.data || []
            }));
        // dispatch(universitySlice.actions.getUniversityList({ universityList: mkData }))
        } else {
            dispatch(universitySlice.actions.getUniversityList({
                universityList: []
            }));
            dispatch(universitySlice.actions.loader({
                loader: false
            }));
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__.toastr.error("Error", response?.message);
        }
    };
const getAdvertisement = ()=>async (dispatch)=>{
        const response = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_1__/* .AXIOS_GET */ .Dt)("/api/get-advertisement");
        if (response && response.status === 200) {
            dispatch(universitySlice.actions.getAdvertisementList({
                advertisementLists: response?.data || []
            }));
        } else {
            dispatch(universitySlice.actions.loader({
                loader: false
            }));
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__.toastr.error("Error", response?.message);
        }
    };
const getSingleData = (id)=>async (dispatch)=>{
        const response = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_1__/* .AXIOS_GET */ .Dt)("/api/get-university/" + id);
        if (response && response.status === 200) {
            dispatch(universitySlice.actions.getSingleDataList({
                singleUniversityData: response?.data || {}
            }));
        } else {
            dispatch(universitySlice.actions.getSingleDataList({
                singleUniversityData: {}
            }));
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__.toastr.error("Error", response?.message);
        }
    };
const getAllRandomDataList = (searchKey)=>async (dispatch)=>{
        const response = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_1__/* .AXIOS_GET */ .Dt)("/api/get-all/random/university?search=" + searchKey);
        if (response && response.status === 200) {
            dispatch(universitySlice.actions.getRandomList({
                randomRecordsList: response?.data || []
            }));
        } else {
            dispatch(universitySlice.actions.getRandomList({
                randomRecordsList: []
            }));
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__.toastr.error("Error", response?.message);
        }
    };
const { universityList , advertisementLists , loader  } = universitySlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (universitySlice.reducer);


/***/ })

};
;