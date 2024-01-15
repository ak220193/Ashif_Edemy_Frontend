"use strict";
exports.id = 7727;
exports.ids = [7727];
exports.modules = {

/***/ 7727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "do": () => (/* binding */ getQuizData),
/* harmony export */   "f_": () => (/* binding */ postQuiz)
/* harmony export */ });
/* unused harmony exports TypesofQuiz, quizInfo, getQuizDataLoading */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4791);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1424);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
    TypesofQuiz: "",
    quizInfo: [],
    getQuizDataLoading: true,
    allResultsData: []
};
const quizSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "quiz",
    initialState,
    reducers: {
        typeSkill (state) {
            state.TypesofQuiz = "Skill";
        },
        typeAcademic (state) {
            state.TypesofQuiz = "Academic";
        },
        getQuizList (state, action) {
            state.quizInfo = action.payload.quizInfo;
        }
    }
});
const getQuizData = (allValues)=>async (dispatch)=>{
        console.log("=== allValues 11111111 ", allValues);
        let response = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_1__/* .AXIOS_GET */ .Dt)(`/api/getfilteredquiz?TypeOfAssessment=${allValues?.typeOf}&CourseTitle=${allValues?.mainDomain}&CognitiveLevel=${allValues?.difficulty}`);
        if (response && response.status === 200) {
            dispatch(quizSlice.actions.getQuizList({
                quizInfo: response?.data || []
            }));
        } else {
            dispatch(quizSlice.actions.getQuizList({
                quizInfo: []
            }));
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__.toastr.error("Error", response?.message);
        }
    };
const postQuiz = (data)=>async (dispatch)=>{
        let response = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_1__/* .AXIOS_POST */ .ZC)(`/api/postResults`, data, {});
        return response;
    };
const { TypesofQuiz , quizInfo , getQuizDataLoading  } = quizSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (quizSlice.reducer);


/***/ })

};
;