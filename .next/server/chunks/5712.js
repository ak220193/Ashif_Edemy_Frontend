"use strict";
exports.id = 5712;
exports.ids = [5712];
exports.modules = {

/***/ 5712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T1": () => (/* binding */ getSingleData),
/* harmony export */   "Ye": () => (/* binding */ getAllRandomDataList),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "x": () => (/* binding */ getSchoolsDetails)
/* harmony export */ });
/* unused harmony exports schoolList, loader */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4791);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1424);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
    schoolList: [],
    advertisementLists: [],
    loader: false,
    randomRecordsList: [],
    singleSchoolData: {}
};
const schoolSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "school",
    initialState,
    reducers: {
        getSchoolsList (state, action) {
            state.schoolList = action.payload.schoolList;
        },
        getSingleDataList (state, action) {
            state.singleSchoolData = action.payload.singleSchoolData;
        },
        getRandomList (state, action) {
            state.randomRecordsList = action.payload.randomRecordsList;
        },
        loader (state, action) {
            state.loader = action.payload.loader;
        }
    }
});
const getSchoolsDetails = (page = 0, limit = 10, searchKey = "")=>async (dispatch)=>{
        const response = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_1__/* .AXIOS_GET */ .Dt)(`/api/getschool?page=${page}&limit=${limit}&searchKey=${searchKey}`);
        if (response && response.status === 200) {
            dispatch(schoolSlice.actions.getSchoolsList({
                schoolList: response?.data || []
            }));
        } else {
            dispatch(schoolSlice.actions.loader({
                loader: false
            }));
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__.toastr.error("Error", response?.message);
        }
    };
const getSingleData = (id)=>async (dispatch)=>{
        const response = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_1__/* .AXIOS_GET */ .Dt)("/api/get-school/" + id);
        if (response && response.status === 200) {
            dispatch(schoolSlice.actions.getSingleDataList({
                singleSchoolData: response?.data || {}
            }));
        } else {
            dispatch(schoolSlice.actions.getSingleDataList({
                singleSchoolData: {}
            }));
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__.toastr.error("Error", response?.message);
        }
    };
const getAllRandomDataList = (searchKey)=>async (dispatch)=>{
        const response = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_1__/* .AXIOS_GET */ .Dt)("/api/get-all/random/school?search=" + searchKey);
        if (response && response.status === 200) {
            dispatch(schoolSlice.actions.getRandomList({
                randomRecordsList: response?.data || []
            }));
        } else {
            dispatch(schoolSlice.actions.getRandomList({
                randomRecordsList: []
            }));
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__.toastr.error("Error", response?.message);
        }
    };
const { schoolList , loader  } = schoolSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (schoolSlice.reducer);


/***/ })

};
;