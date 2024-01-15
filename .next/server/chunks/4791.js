"use strict";
exports.id = 4791;
exports.ids = [4791];
exports.modules = {

/***/ 4791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dt": () => (/* binding */ AXIOS_GET),
/* harmony export */   "ZC": () => (/* binding */ AXIOS_POST)
/* harmony export */ });
/* unused harmony exports BASE_URL, AXIOS_PATCH, AXIOS_DELETE */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// export const BASE_URL = 'https://api.learnplusplus.com';    
const BASE_URL = "http://localhost:8001";
const getToken = ()=>{
    const innertoken = localStorage.getItem("authToken");
    const token = "Bearer " + innertoken;
    return token;
};
const AXIOS_POST = async (url, body, headers)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: "POST",
            url: BASE_URL + url,
            headers: {
                ...headers,
                authorization: getToken()
            },
            data: body
        });
        return response.data;
    } catch (error) {
        if (error) {
            if (error.response && error.response.status === 401) {
            // clearToken();
            }
            return error.response;
        } else {
            return null;
        }
    }
};
const AXIOS_GET = async (url, body, headers)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: "GET",
            url: BASE_URL + url,
            headers: {
                authorization: getToken()
            },
            params: body
        });
        return response.data;
    } catch (error) {
        if (error) {
            if (error.response && error.response.status === 401) {
            // clearToken();
            }
            return error.response;
        } else {
            return null;
        }
    }
};
const AXIOS_PATCH = async (url, body, headers)=>{
    try {
        const response = await axios({
            method: "PATCH",
            url: BASE_URL + url,
            headers: {
                authorization: getToken()
            },
            data: body
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
        // clearToken();
        }
        return error.response.data;
    }
};
const AXIOS_DELETE = async (url, headers)=>{
    try {
        const response = await axios({
            method: "DELETE",
            url: BASE_URL + url,
            headers: {
                authorization: getToken()
            }
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
        // clearToken();
        }
        return error.response.data;
    }
};


/***/ })

};
;