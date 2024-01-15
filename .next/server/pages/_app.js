"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 7027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./store/slice/services/apiService.js
var apiService = __webpack_require__(4791);
// EXTERNAL MODULE: external "react-redux-toastr"
var external_react_redux_toastr_ = __webpack_require__(1424);
;// CONCATENATED MODULE: ./store/slice/cartSlice.js



const initialState = {
    isCartOpen: false,
    cartItems: [],
    currentOrderId: null
};
const cartSlice = (0,toolkit_.createSlice)({
    name: "cart",
    initialState,
    reducers: {
        toggleCart (state, action) {
            state.isCartOpen = action.payload;
        },
        addItem (state, action) {
            const newItemId = action.payload._id;
            const existingItem = state.cartItems.find((item)=>item._id === newItemId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                let object = {
                    ...action.payload,
                    quantity: 1
                };
                state.cartItems.push(object);
            }
        },
        setOrderId (state, action) {
            console.log("== ction.payload.currentOrderId ", action.payload.currentOrderId);
            state.currentOrderId = action.payload.currentOrderId;
        },
        removeItem (state, action) {
            state.cartItems = state.cartItems.filter((item)=>item._id !== action.payload);
        },
        incrementItem (state, action) {
            state.cartItems = state.cartItems.map((item)=>{
                if (item._id === action.payload) {
                    item.quantity++;
                }
                return item;
            });
        },
        decrementItem (state, action) {
            state.cartItems = state.cartItems.map((item)=>{
                if (item._id === action.payload) {
                    item.quantity--;
                }
                return item;
            }).filter((item)=>item.quantity !== 0);
        }
    }
});
const loginMethod = (payload)=>async (dispatch)=>{
        const response = await AXIOS_POST("/api/auth/login/cart", payload, {});
        if (response?.status) {
            let token = response?.data?.token;
            localStorage.setItem("authToken", token);
        } else {
            toastr.error("Error", response?.message);
        }
    };
const createOrder = (payload)=>async (dispatch)=>{
        const response = await AXIOS_POST("/api/products/generate-order-id", payload, {});
        if (response?.status) {
            let orderId = response?.data?.orderId;
            console.log("=== orderId ", response?.data);
            dispatch(cartSlice.actions.setOrderId({
                currentOrderId: orderId
            }));
        } else {
            toastr.error("Error", response?.message);
        }
    };
const saveNewOrder = (payload)=>async (dispatch)=>{
        const response = await AXIOS_POST("/api/products/create-order", payload, {});
        if (response?.data?._id) {
            toastr.success("Success", response?.message);
        } else {
            toastr.error("Error", response?.message);
        }
    };
const { toggleCart , addItem , removeItem , incrementItem , decrementItem  } = cartSlice.actions;
/* harmony default export */ const slice_cartSlice = (cartSlice.reducer);

// EXTERNAL MODULE: ./store/slice/blogSlice.js
var blogSlice = __webpack_require__(5644);
// EXTERNAL MODULE: ./store/slice/universitiesSlice.js
var universitiesSlice = __webpack_require__(3827);
// EXTERNAL MODULE: ./store/slice/collegeSlice.js
var collegeSlice = __webpack_require__(4318);
// EXTERNAL MODULE: ./store/slice/schoolSlice.js
var schoolSlice = __webpack_require__(5712);
// EXTERNAL MODULE: ./store/slice/commonSlice.js
var commonSlice = __webpack_require__(301);
// EXTERNAL MODULE: ./store/slice/learningHubSlice.js
var learningHubSlice = __webpack_require__(1855);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
;// CONCATENATED MODULE: ./store/slice/topicSlice.js




const topicSlice_initialState = {
    topicData: [],
    topicLoading: false
};
const getTopicInfo = (0,toolkit_.createAsyncThunk)("Topics", async ()=>{
    return axio.get(`/api/topics`);
});
const topicReducer = (0,toolkit_.createSlice)({
    name: "topics",
    initialState: topicSlice_initialState,
    reducer: {},
    extraReducers: {
        [getTopicInfo.pending]: (state, action)=>{
            state.topicLoading = true;
        },
        [getTopicInfo.fulfilled]: (state, action)=>{
            state.topicData = action.payload.data.data;
            state.topicLoading = false;
        },
        [getTopicInfo.rejected]: (state, action)=>{
            state.topicLoading = false;
        }
    }
});
/* harmony default export */ const topicSlice = (topicReducer.reducer);

// EXTERNAL MODULE: ./store/slice/quizSlice.js
var quizSlice = __webpack_require__(7727);
;// CONCATENATED MODULE: ./store/store.js










const store = (0,toolkit_.configureStore)({
    reducer: {
        cart: slice_cartSlice,
        blog: blogSlice/* default */.ZP,
        university: universitiesSlice/* default */.ZP,
        college: collegeSlice/* default */.ZP,
        school: schoolSlice/* default */.ZP,
        common: commonSlice/* default */.ZP,
        learning: learningHubSlice/* default */.ZP,
        quiz: quizSlice/* default */.ZP,
        topics: topicSlice
    }
});
/* harmony default export */ const store_store = (store);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/_App/Layout.js



// import GoTop from './GoTop'
const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "LearnPlusPlus"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "LearnPlusPlus"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "og:title",
                        property: "og:title",
                        content: "LearnPlusPlus"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "LearnPlusPlus"
                    })
                ]
            }),
            children
        ]
    });
};
/* harmony default export */ const _App_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js
















const MyApp = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store_store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(_App_Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 1424:
/***/ ((module) => {

module.exports = require("react-redux-toastr");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4791,3827,4318,5712,5644,301,1855,7727], () => (__webpack_exec__(7027)));
module.exports = __webpack_exports__;

})();