(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9637],{4944:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/success-story",function(){return n(7016)}])},3538:function(e,s,n){"use strict";var i=n(5893),r=(n(7294),n(1664)),a=n.n(r);s.Z=function(e){var s=e.pageTitle,n=e.homePageUrl,r=e.homePageText,t=e.activePageText;return(0,i.jsxs)("div",{className:"page-title-area",style:{zIndex:-1},children:[(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"page-title-content",children:[(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(a(),{href:n,children:(0,i.jsxs)("a",{style:{color:"#fff"},children:[" ",(0,i.jsxs)("b",{children:[r," "]})]})})}),(0,i.jsxs)("li",{className:"active",style:{color:"#fff"},children:[" ",(0,i.jsxs)("b",{children:[" ",t," "]})]})]}),(0,i.jsx)("h2",{style:{color:"#fff"},children:s})]})}),(0,i.jsx)("div",{className:"shape9",children:(0,i.jsx)("img",{src:"/images/shape8.svg",alt:"image"})})]})}},638:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=n(6856).Z;Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,s){var n=t.default,a=(null==s?void 0:s.suspense)?{}:{loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};i(e,Promise)?a.loader=function(){return e}:"function"===typeof e?a.loader=e:"object"===typeof e&&(a=r({},a,e));if((a=r({},a,s)).suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");a.suspense&&(delete a.ssr,delete a.loading);a.loadableGenerated&&delete(a=r({},a,a.loadableGenerated)).loadableGenerated;if("boolean"===typeof a.ssr&&!a.suspense){if(!a.ssr)return delete a.ssr,l(n,a);delete a.ssr}return n(a)},s.noSSR=l;var r=n(6495).Z,a=n(2648).Z,t=(a(n(7294)),a(n(4302)));function l(e,s){return delete s.webpack,delete s.modules,e(s)}("function"===typeof s.default||"object"===typeof s.default&&null!==s.default)&&"undefined"===typeof s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},6319:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.LoadableContext=void 0;var i=(0,n(2648).Z)(n(7294)).default.createContext(null);s.LoadableContext=i},4302:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=n(9658).Z,r=n(7222).Z;Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a=n(6495).Z,t=(0,n(2648).Z)(n(7294)),l=n(6319),c=n(1688).useSyncExternalStore,o=[],d=[],u=!1;function m(e){var s=e(),n={loading:!0,loaded:null,error:null};return n.promise=s.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var h=function(){function e(s,n){i(this,e),this._loadFn=s,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return r(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var s=this._res,n=this._opts;s.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(s){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var s=this;return this._callbacks.add(e),function(){s._callbacks.delete(e)}}}]),e}();function f(e){return function(e,s){var n=function(){if(!o){var s=new h(e,r);o={getCurrentValue:s.getCurrentValue.bind(s),subscribe:s.subscribe.bind(s),retry:s.retry.bind(s),promise:s.promise.bind(s)}}return o.promise()},i=function(){n();var e=t.default.useContext(l.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach((function(s){e(s)}))},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},s);r.suspense&&(r.lazy=t.default.lazy(r.loader));var o=null;if(!u){var m=r.webpack?r.webpack():r.modules;m&&d.push((function(e){var s=!0,i=!1,r=void 0;try{for(var a,t=m[Symbol.iterator]();!(s=(a=t.next()).done);s=!0){var l=a.value;if(-1!==e.indexOf(l))return n()}}catch(c){i=!0,r=c}finally{try{s||null==t.return||t.return()}finally{if(i)throw r}}}))}var f=r.suspense?function(e,s){return i(),t.default.createElement(r.lazy,a({},e,{ref:s}))}:function(e,s){i();var n=c(o.subscribe,o.getCurrentValue,o.getCurrentValue);return t.default.useImperativeHandle(s,(function(){return{retry:o.retry}}),[]),t.default.useMemo((function(){return n.loading||n.error?t.default.createElement(r.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:o.retry}):n.loaded?t.default.createElement((s=n.loaded)&&s.__esModule?s.default:s,e):null;var s}),[e,n])};return f.preload=function(){return n()},f.displayName="LoadableComponent",t.default.forwardRef(f)}(m,e)}function p(e,s){for(var n=[];e.length;){var i=e.pop();n.push(i(s))}return Promise.all(n).then((function(){if(e.length)return p(e,s)}))}f.preloadAll=function(){return new Promise((function(e,s){p(o).then(e,s)}))},f.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(s){var n=function(){return u=!0,s()};p(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=f.preloadReady;var x=f;s.default=x},7016:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return p}});var i=n(5893),r=n(7294),a=n(8871),t=n(3538),l=n(828),c=n(1664),o=n.n(c),d=n(5152),u=n.n(d)()((function(){return n.e(1239).then(n.bind(n,1239))}),{loadableGenerated:{webpack:function(){return[1239]}},ssr:!1}),m=function(){var e=(0,l.Z)(r.useState(!0),2),s=e[0],n=e[1];return(0,i.jsxs)(r.Fragment,{children:[(0,i.jsxs)("div",{className:"success-story-area pb-100",children:[(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"video-box mt-0",children:[(0,i.jsx)("div",{className:"image",children:(0,i.jsx)("img",{src:"/images/success-story.jpg",className:"shadow",alt:"image"})}),(0,i.jsx)(o(),{href:"#play-video",children:(0,i.jsx)("a",{onClick:function(e){e.preventDefault(),n(!s)},className:"video-btn popup-youtube",children:(0,i.jsx)("i",{className:"flaticon-play"})})}),(0,i.jsx)("div",{className:"shape10",children:(0,i.jsx)("img",{src:"/images/shape9.png",alt:"image"})})]})}),(0,i.jsx)("div",{className:"shape2",children:(0,i.jsx)("img",{src:"/images/shape2.png",alt:"image"})}),(0,i.jsx)("div",{className:"shape3",children:(0,i.jsx)("img",{src:"/images/shape3.png",alt:"image"})}),(0,i.jsx)("div",{className:"shape4",children:(0,i.jsx)("img",{src:"/images/shape4.png",alt:"image"})}),(0,i.jsx)("div",{className:"shape9",children:(0,i.jsx)("img",{src:"/images/shape8.svg",alt:"image"})})]}),(0,i.jsx)(u,{channel:"youtube",isOpen:!s,videoId:"bk7McNUjWgw",onClose:function(){return n(!s)}})]})},h=function(){return(0,i.jsx)("div",{className:"start-with-success-area pt-100 bg-f8f9f8 pb-70",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"section-title",children:[(0,i.jsx)("span",{className:"sub-title",children:"Education For Everyone"}),(0,i.jsx)("h2",{children:"Start writing your own success story with a good beginning from eDemy help"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:(0,i.jsxs)("div",{className:"start-with-success-box",children:[(0,i.jsx)("div",{className:"image",children:(0,i.jsx)(o(),{href:"#",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"/images/success-people/success-people1.jpg",alt:"image"})})})}),(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)(o(),{href:"#",children:(0,i.jsx)("a",{className:"link-btn",children:(0,i.jsx)("i",{className:"flaticon-right"})})}),(0,i.jsx)("h3",{children:"Sarah Taylor"}),(0,i.jsx)("span",{children:"Web Developer"})]})]})}),(0,i.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:(0,i.jsxs)("div",{className:"start-with-success-box",children:[(0,i.jsx)("div",{className:"image",children:(0,i.jsx)(o(),{href:"#",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"/images/success-people/success-people2.jpg",alt:"image"})})})}),(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)(o(),{href:"#",children:(0,i.jsx)("a",{className:"link-btn",children:(0,i.jsx)("i",{className:"flaticon-right"})})}),(0,i.jsx)("h3",{children:"Alex Maxwell"}),(0,i.jsx)("span",{children:"Tutor"})]})]})}),(0,i.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:(0,i.jsxs)("div",{className:"start-with-success-box",children:[(0,i.jsx)("div",{className:"image",children:(0,i.jsx)(o(),{href:"#",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"/images/success-people/success-people3.jpg",alt:"image"})})})}),(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)(o(),{href:"#",children:(0,i.jsx)("a",{className:"link-btn",children:(0,i.jsx)("i",{className:"flaticon-right"})})}),(0,i.jsx)("h3",{children:"Eva Lucy"}),(0,i.jsx)("span",{children:"UX/UI Designer"})]})]})}),(0,i.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:(0,i.jsxs)("div",{className:"start-with-success-box",children:[(0,i.jsx)("div",{className:"image",children:(0,i.jsx)(o(),{href:"#",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"/images/success-people/success-people4.jpg",alt:"image"})})})}),(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)(o(),{href:"#",children:(0,i.jsx)("a",{className:"link-btn",children:(0,i.jsx)("i",{className:"flaticon-right"})})}),(0,i.jsx)("h3",{children:"Alina Smith"}),(0,i.jsx)("span",{children:"Author"})]})]})}),(0,i.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:(0,i.jsxs)("div",{className:"start-with-success-box",children:[(0,i.jsx)("div",{className:"image",children:(0,i.jsx)(o(),{href:"#",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"/images/success-people/success-people5.jpg",alt:"image"})})})}),(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)(o(),{href:"#",children:(0,i.jsx)("a",{className:"link-btn",children:(0,i.jsx)("i",{className:"flaticon-right"})})}),(0,i.jsx)("h3",{children:"James Anderson"}),(0,i.jsx)("span",{children:"Designer"})]})]})}),(0,i.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:(0,i.jsxs)("div",{className:"start-with-success-box",children:[(0,i.jsx)("div",{className:"image",children:(0,i.jsx)(o(),{href:"#",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"/images/success-people/success-people6.jpg",alt:"image"})})})}),(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)(o(),{href:"#",children:(0,i.jsx)("a",{className:"link-btn",children:(0,i.jsx)("i",{className:"flaticon-right"})})}),(0,i.jsx)("h3",{children:"Meg Lanning"}),(0,i.jsx)("span",{children:"Writer"})]})]})})]})]})})},f=n(5245),p=function(){return(0,i.jsxs)(r.Fragment,{children:[(0,i.jsx)(a.Z,{}),(0,i.jsx)(t.Z,{pageTitle:"Success Story",homePageUrl:"/",homePageText:"Home",activePageText:"Success Story"}),(0,i.jsx)(m,{}),(0,i.jsx)("div",{className:"testimonials-area ptb-100 bg-fef8ef",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"single-testimonials-box",children:[(0,i.jsx)("img",{src:"/images/user1.jpg",className:"client-img",alt:"image"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore."}),(0,i.jsx)("h3",{children:"John Smith"}),(0,i.jsx)("span",{children:"Python Developer"}),(0,i.jsxs)("div",{className:"shape-img",children:[(0,i.jsx)("img",{src:"/images/shape4.png",className:"shape-1",alt:"image"}),(0,i.jsx)("img",{src:"/images/shape14.png",className:"shape-2",alt:"image"}),(0,i.jsx)("img",{src:"/images/shape7.png",className:"shape-3",alt:"image"})]})]})})}),(0,i.jsx)("div",{className:"our-story-area ptb-100",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-4 col-md-12",children:(0,i.jsx)("div",{className:"our-story-title",children:(0,i.jsxs)("h3",{children:[(0,i.jsx)("span",{className:"number",children:"1"})," Inspirational stories are less about success"]})})}),(0,i.jsx)("div",{className:"col-lg-8 col-md-12",children:(0,i.jsxs)("div",{className:"our-story-content",children:[(0,i.jsxs)("p",{children:[(0,i.jsx)(o(),{href:"#",children:(0,i.jsx)("a",{children:"eDdemy.com"})})," began in 2005. After years in the web hosting industry, we realized that it was near impossible for the average Jane or Joe to create their own website. Traditional web hosting services were simply too complicated, time consuming, and expensive to manage."]}),(0,i.jsx)("p",{children:"After seeing an increased need for eCommerce solutions, we developed one of the only fully-featured, free and commission-free online store builders, allowing business owners to launch their online business."})]})}),(0,i.jsx)("div",{className:"col-lg-4 col-md-12",children:(0,i.jsx)("div",{className:"our-story-title",children:(0,i.jsxs)("h3",{children:[(0,i.jsx)("span",{className:"number",children:"2"})," Academic Excellence and Cultural Diversity"]})})}),(0,i.jsx)("div",{className:"col-lg-8 col-md-12",children:(0,i.jsxs)("div",{className:"our-story-content",children:[(0,i.jsxs)("p",{children:["We created the ",(0,i.jsx)(o(),{href:"#",children:(0,i.jsx)("a",{children:"eDdemy.com"})})," Site Builder with the user's perspective in mind. We wanted to offer a platform that would require no coding skills or design experience. We keep it simple, so users can focus on creating an amazing website that reflects their brand. Best of all - it's free. You can get online, showcase your brand, or start selling products right away."]}),(0,i.jsx)("p",{children:"After seeing an increased need for eCommerce solutions, we developed one of the only fully-featured, free and commission-free online store builders, allowing business owners to launch their online business."})]})}),(0,i.jsx)("div",{className:"col-lg-12 col-md-12",children:(0,i.jsx)("div",{className:"our-story-image",children:(0,i.jsx)("img",{src:"/images/story-img.jpg",alt:"image"})})}),(0,i.jsx)("div",{className:"col-lg-4 col-md-12",children:(0,i.jsx)("div",{className:"our-story-title",children:(0,i.jsxs)("h3",{children:[(0,i.jsx)("span",{className:"number",children:"3"})," A classNameical Education for the Future"]})})}),(0,i.jsx)("div",{className:"col-lg-8 col-md-12",children:(0,i.jsxs)("div",{className:"our-story-content",children:[(0,i.jsxs)("p",{children:[(0,i.jsx)(o(),{href:"#",children:(0,i.jsx)("a",{children:"eDdemy.com"})})," began in 2005. After years in the web hosting industry, we realized that it was near impossible for the average Jane or Joe to create their own website. Traditional web hosting services were simply too complicated, time consuming, and expensive to manage."]}),(0,i.jsx)("p",{children:"After seeing an increased need for eCommerce solutions, we developed one of the only fully-featured, free and commission-free online store builders, allowing business owners to launch their online business."})]})}),(0,i.jsx)("div",{className:"col-lg-4 col-md-12",children:(0,i.jsx)("div",{className:"our-story-title",children:(0,i.jsxs)("h3",{children:[(0,i.jsx)("span",{className:"number",children:"4"})," A success-oriented learning environment"]})})}),(0,i.jsx)("div",{className:"col-lg-8 col-md-12",children:(0,i.jsxs)("div",{className:"our-story-content",children:[(0,i.jsxs)("p",{children:["We created the ",(0,i.jsx)(o(),{href:"#",children:(0,i.jsx)("a",{children:"eDdemy.com"})})," Site Builder with the user's perspective in mind. We wanted to offer a platform that would require no coding skills or design experience. We keep it simple, so users can focus on creating an amazing website that reflects their brand. Best of all - it's free. You can get online, showcase your brand, or start selling products right away."]}),(0,i.jsx)("p",{children:"After seeing an increased need for eCommerce solutions, we developed one of the only fully-featured, free and commission-free online store builders, allowing business owners to launch their online business."})]})})]})})}),(0,i.jsx)(h,{}),(0,i.jsx)(f.Z,{})]})}},5152:function(e,s,n){e.exports=n(638)},1163:function(e,s,n){e.exports=n(387)},943:function(e,s,n){"use strict";function i(e,s){(null==s||s>e.length)&&(s=e.length);for(var n=0,i=new Array(s);n<s;n++)i[n]=e[n];return i}n.d(s,{Z:function(){return i}})},3375:function(e,s,n){"use strict";function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(s,{Z:function(){return i}})},9534:function(e,s,n){"use strict";function i(e,s){if(null==e)return{};var n,i,r=function(e,s){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],s.indexOf(n)>=0||(r[n]=e[n]);return r}(e,s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(s,{Z:function(){return i}})},828:function(e,s,n){"use strict";n.d(s,{Z:function(){return a}});var i=n(3375);var r=n(1566);function a(e,s){return function(e){if(Array.isArray(e))return e}(e)||(0,i.Z)(e,s)||(0,r.Z)(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(e,s,n){"use strict";n.d(s,{Z:function(){return r}});var i=n(943);function r(e,s){if(e){if("string"===typeof e)return(0,i.Z)(e,s);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,i.Z)(e,s):void 0}}}},function(e){e.O(0,[1664,2244,9774,2888,179],(function(){return s=4944,e(e.s=s);var s}));var s=e.O();_N_E=s}]);