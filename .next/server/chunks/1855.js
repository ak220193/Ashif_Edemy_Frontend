"use strict";
exports.id = 1855;
exports.ids = [1855];
exports.modules = {

/***/ 1855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U9": () => (/* binding */ getEntranceStateExamDetails),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "cJ": () => (/* binding */ getEntranceTypeDetails),
/* harmony export */   "dQ": () => (/* binding */ getEntranceSubDetails),
/* harmony export */   "uA": () => (/* binding */ getProgramDetails),
/* harmony export */   "yI": () => (/* binding */ getConceptDetails)
/* harmony export */ });
/* unused harmony exports conceptList, loader */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4791);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1424);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
    conceptList: [],
    entranceTypeList: [],
    entranceSubList: [],
    entranceStateExamList: [],
    programList: [],
    loader: false
};
const learningSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "learning",
    initialState,
    reducers: {
        getConceptList (state, action) {
            state.conceptList = action.payload.conceptList;
        },
        getEntranceType (state, action) {
            state.entranceTypeList = action.payload.entranceTypeList;
        },
        getEntranceSubList (state, action) {
            state.entranceSubList = action.payload.entranceSubList;
        },
        getEntranceStateExam (state, action) {
            state.entranceStateExamList = action.payload.entranceStateExamList;
        },
        getProgramList (state, action) {
            state.programList = action.payload.programList;
        },
        loader (state, action) {
            state.loader = action.payload.loader;
        }
    }
});
const getConceptDetails = (topic)=>async (dispatch)=>{
        const response = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_1__/* .AXIOS_GET */ .Dt)(`/api/get-contentsubject?subject=${topic}`);
        if (response && response.status === 200) {
            dispatch(learningSlice.actions.getConceptList({
                conceptList: response?.data || []
            }));
        } else {
            dispatch(learningSlice.actions.getConceptList({
                conceptList: []
            }));
            dispatch(learningSlice.actions.loader({
                loader: false
            }));
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__.toastr.error("Error", response?.message);
        }
    };
const getEntranceTypeDetails = (topic)=>async (dispatch)=>{
        const response = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_1__/* .AXIOS_GET */ .Dt)(`/api/get-EntranceType?type=${topic}`);
        if (response && response.status === 200) {
            dispatch(learningSlice.actions.getEntranceType({
                entranceTypeList: response?.data || []
            }));
        } else {
            dispatch(learningSlice.actions.getEntranceType({
                entranceTypeList: []
            }));
            dispatch(learningSlice.actions.loader({
                loader: false
            }));
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__.toastr.error("Error", response?.message);
        }
    };
const getEntranceSubDetails = (topic)=>async (dispatch)=>{
        const response = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_1__/* .AXIOS_GET */ .Dt)(`/api/get-EntranceSubType?subType=${topic}`);
        if (response && response.status === 200) {
            dispatch(learningSlice.actions.getEntranceSubList({
                entranceSubList: response?.data || []
            }));
        } else {
            dispatch(learningSlice.actions.getEntranceSubList({
                entranceSubList: []
            }));
            dispatch(learningSlice.actions.loader({
                loader: false
            }));
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__.toastr.error("Error", response?.message);
        }
    };
const getEntranceStateExamDetails = (topic)=>async (dispatch)=>{
        const response = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_1__/* .AXIOS_GET */ .Dt)(`/api/get-EntranceStateExams?examName=${topic}`);
        if (response && response.status === 200) {
            dispatch(learningSlice.actions.getEntranceStateExam({
                entranceStateExamList: response?.data || []
            }));
        } else {
            dispatch(learningSlice.actions.getEntranceStateExam({
                entranceStateExamList: []
            }));
            dispatch(learningSlice.actions.loader({
                loader: false
            }));
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__.toastr.error("Error", response?.message);
        }
    };
const getProgramDetails = ()=>async (dispatch)=>{
        const response = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_1__/* .AXIOS_GET */ .Dt)(`/api/programme`);
        if (response && response.status === 200) {
            dispatch(learningSlice.actions.getProgramList({
                programList: response?.data || []
            }));
        } else {
            dispatch(learningSlice.actions.getProgramList({
                programList: []
            }));
            dispatch(learningSlice.actions.loader({
                loader: false
            }));
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__.toastr.error("Error", response?.message);
        }
    };
const { conceptList , loader  } = learningSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (learningSlice.reducer);


/***/ })

};
;