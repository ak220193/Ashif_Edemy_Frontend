"use strict";
exports.id = 5644;
exports.ids = [5644];
exports.modules = {

/***/ 5644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Iz": () => (/* binding */ submitQueryComments),
/* harmony export */   "Tf": () => (/* binding */ getBlogData),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports blogList, loader */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4791);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1424);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
    blogList: [],
    loader: false
};
const blogSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "blog",
    initialState,
    reducers: {
        getBlogList (state, action) {
            state.blogList = action.payload.blogList;
        },
        loader (state, action) {
            state.loader = action.payload.loader;
        }
    }
});
const getBlogData = (payload)=>async (dispatch)=>{
        const response = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_1__/* .AXIOS_GET */ .Dt)("/api/getallblogdata", payload, {});
        if (response && response.status === 200) {
            dispatch(blogSlice.actions.getBlogList({
                blogList: response?.data || []
            }));
        } else {
            dispatch(blogSlice.actions.loader({
                loader: false
            }));
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__.toastr.error("Error", response?.message);
        }
    };
const submitQueryComments = (payload)=>async (dispatch)=>{
        const response = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_1__/* .AXIOS_POST */ .ZC)("/api/userquery", payload, {});
        return response;
    };
const { blogList , loader  } = blogSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blogSlice.reducer);


/***/ })

};
;