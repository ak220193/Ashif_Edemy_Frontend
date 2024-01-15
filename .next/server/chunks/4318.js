"use strict";
exports.id = 4318;
exports.ids = [4318];
exports.modules = {

/***/ 4318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T1": () => (/* binding */ getSingleData),
/* harmony export */   "Ye": () => (/* binding */ getAllRandomDataList),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ci": () => (/* binding */ getCollegeDetails)
/* harmony export */ });
/* unused harmony exports collegeList, loader */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4791);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1424);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
    collegeList: [],
    advertisementLists: [],
    singleCollegeData: {},
    randomRecordsList: [],
    loader: false
};
const collegeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "college",
    initialState,
    reducers: {
        getCollegeList (state, action) {
            state.collegeList = action.payload.collegeList;
        },
        getSingleDataList (state, action) {
            state.singleCollegeData = action.payload.singleCollegeData;
        },
        getRandomList (state, action) {
            state.randomRecordsList = action.payload.randomRecordsList;
        },
        loader (state, action) {
            state.loader = action.payload.loader;
        }
    }
});
const getCollegeDetails = (page = 1, limit = 21, searchKey = "")=>async (dispatch)=>{
        const response = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_1__/* .AXIOS_GET */ .Dt)(`/api/getcollage?page=${page}&limit=${limit}&searchKey=${searchKey}`);
        if (response && response.status === 200) {
            dispatch(collegeSlice.actions.getCollegeList({
                collegeList: response?.data || []
            }));
        } else {
            dispatch(collegeSlice.actions.loader({
                loader: false
            }));
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__.toastr.error("Error", response?.message);
        }
    };
const getSingleData = (id)=>async (dispatch)=>{
        console.log("=== currentId ", id);
        const response = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_1__/* .AXIOS_GET */ .Dt)("/api/get-college/" + id);
        if (response && response.status === 200) {
            dispatch(collegeSlice.actions.getSingleDataList({
                singleCollegeData: response?.data || {}
            }));
        } else {
            dispatch(collegeSlice.actions.getSingleDataList({
                singleCollegeData: {}
            }));
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__.toastr.error("Error", response?.message);
        }
    };
const getAllRandomDataList = (searchKey, affu_id = "")=>async (dispatch)=>{
        const response = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_1__/* .AXIOS_GET */ .Dt)("/api/get-all/random/college?search=" + searchKey + "&affu_id=" + affu_id);
        if (response && response.status === 200) {
            dispatch(collegeSlice.actions.getRandomList({
                randomRecordsList: response?.data || []
            }));
        } else {
            dispatch(collegeSlice.actions.getRandomList({
                randomRecordsList: []
            }));
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__.toastr.error("Error", response?.message);
        }
    };
const { collegeList , loader  } = collegeSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (collegeSlice.reducer);


/***/ })

};
;