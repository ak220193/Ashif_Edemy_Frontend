"use strict";
exports.id = 301;
exports.ids = [301];
exports.modules = {

/***/ 301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "vw": () => (/* binding */ getEvents)
/* harmony export */ });
/* unused harmony exports eventsList, loader */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4791);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1424);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
    eventsList: [],
    advertisementLists: [],
    loader: false
};
const commonSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "common",
    initialState,
    reducers: {
        getEventsList (state, action) {
            state.eventsList = action.payload.eventsList;
        },
        loader (state, action) {
            state.loader = action.payload.loader;
        }
    }
});
const getEvents = ()=>async (dispatch)=>{
        const response = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_1__/* .AXIOS_GET */ .Dt)(`/api/events`);
        if (response && response.status === 200) {
            dispatch(commonSlice.actions.getEventsList({
                eventsList: response?.data || []
            }));
        } else {
            dispatch(commonSlice.actions.loader({
                loader: false
            }));
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__.toastr.error("Error", response?.message);
        }
    };
const { eventsList , loader  } = commonSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commonSlice.reducer);


/***/ })

};
;