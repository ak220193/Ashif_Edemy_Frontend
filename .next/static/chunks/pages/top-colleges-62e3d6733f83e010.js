(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{2583:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/top-colleges",function(){return n(2670)}])},3538:function(e,t,n){"use strict";var r=n(5893),s=(n(7294),n(1664)),i=n.n(s);t.Z=function(e){var t=e.pageTitle,n=e.homePageUrl,s=e.homePageText,l=e.activePageText;return(0,r.jsxs)("div",{className:"page-title-area",style:{zIndex:-1},children:[(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"page-title-content",children:[(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:n,children:(0,r.jsxs)("a",{style:{color:"#fff"},children:[" ",(0,r.jsxs)("b",{children:[s," "]})]})})}),(0,r.jsxs)("li",{className:"active",style:{color:"#fff"},children:[" ",(0,r.jsxs)("b",{children:[" ",l," "]})]})]}),(0,r.jsx)("h2",{style:{color:"#fff"},children:t})]})}),(0,r.jsx)("div",{className:"shape9",children:(0,r.jsx)("img",{src:"/images/shape8.svg",alt:"image"})})]})}},2670:function(e,t,n){"use strict";n.r(t);var r=n(7568),s=n(828),i=n(7582),l=n(5893),c=n(7294),a=(n(1664),n(8871)),o=n(3538),u=n(5245),d=n(4318),h=n(3827),f=n(1163),g=(n(381),n(6064)),x=n(6486),m=n.n(x);t.default=function(){var e=(0,f.useRouter)(),t=(0,g.useSelector)((function(e){return e.college})),n=t.collegeList,x=(t.loader,(0,g.useSelector)((function(e){return e.university})).advertisementLists),v=(0,g.useDispatch)(),p=(0,c.useState)([]),j=p[0],y=p[1],b=(0,c.useState)([]),N=b[0],S=b[1],w=(0,c.useState)(""),_=w[0],Z=w[1],T=(0,c.useState)(""),C=T[0],A=T[1],E=(0,c.useState)([]),O=E[0],I=E[1],P=(0,s.Z)(c.useState(0),2),k=P[0],D=P[1],q=(0,s.Z)(c.useState(!1),2),F=q[0],L=q[1],R=(0,s.Z)(c.useState([]),2),U=R[0],B=R[1],M=(0,s.Z)(c.useState([]),2),z=M[0],X=M[1];(0,c.useEffect)((function(){Y()}),[]),(0,c.useEffect)((function(){var e=[];I(n),n.forEach((function(t){j.includes(t.State)||e.push(t.State)})),e=m().uniq(e),y(e)}),[n]),(0,c.useEffect)((function(){var e=[],t=[];x.forEach((function(n){if(n.catagory&&"Colleges"==n.catagory){if(n.adImage){var r,s,i,l=btoa(new Uint8Array(null===(r=n.adImage)||void 0===r||null===(s=r.data)||void 0===s?void 0:s.data).reduce((function(e,t){return e+String.fromCharCode(t)}),"")),c=null===(i=n.adImage)||void 0===i?void 0:i.contentType;e.push("data:".concat(c,";base64,").concat(l))}n.Title&&t.push(n.Title)}})),B(e),X(t)}),[x]);var Y=function(){var e=(0,r.Z)((function(){return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return[4,v((0,d.ci)())];case 1:return e.sent(),[4,v((0,h.Tz)())];case 2:return e.sent(),[2]}}))}));return function(){return e.apply(this,arguments)}}(),G=function(){var e=(0,r.Z)((function(e){var t,r,s,l;return(0,i.__generator)(this,(function(i){return e.preventDefault(),t=e.target.value,r=H(t),s=[],n.forEach((function(e){e.State==t&&s.push(e)})),s=m().uniq(s),I(s),Z(t),S(r),A(""),l=window.scrollY,setTimeout((function(){window.scrollTo(0,l)}),0),[2]}))}));return function(t){return e.apply(this,arguments)}}(),H=function(e){return m().chain(n).filter({State:e}).map("District").uniq().value()},$=function(){var e=(0,r.Z)((function(e){var t,r,s;return(0,i.__generator)(this,(function(i){return e.preventDefault(),t=e.target.value,r=[],n.forEach((function(e){e.State==_&&e.District==t&&r.push(e)})),r=m().uniq(r),I(r),A(t),s=window.scrollY,setTimeout((function(){window.scrollTo(0,s)}),0),[2]}))}));return function(t){return e.apply(this,arguments)}}(),J=function(){var t=(0,r.Z)((function(t){return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return[4,localStorage.setItem("currentCollegeId",t)];case 1:return n.sent(),e.push("/single-college"),[2]}}))}));return function(e){return t.apply(this,arguments)}}();return(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)(a.Z,{}),(0,l.jsx)(o.Z,{pageTitle:"Top Colleges",homePageUrl:"/",homePageText:"Home",activePageText:"Top Colleges"}),(0,l.jsxs)("div",{className:"gallery-area pt-50 pb-70",children:[F&&(0,l.jsx)(Lightbox,{mainSrc:U[k],nextSrc:U[(k+1)%U.length],prevSrc:U[(k+U.length-1)%U.length],onCloseRequest:function(){return L(!1)},onMovePrevRequest:function(){return D((k+U.length-1)%U.length)},onMoveNextRequest:function(){return D((k+1)%U.length)}}),(0,l.jsxs)("div",{className:"container",children:[U&&U.length&&U[0]&&(0,l.jsx)("div",{className:"adverdesiment-0",children:(0,l.jsx)("div",{className:"",children:(0,l.jsxs)("div",{className:"single-gallery-item",children:[(0,l.jsxs)("div",{style:{textAlign:"center"},children:[" ",(0,l.jsx)("h4",{children:" Advertisement "})," "]}),(0,l.jsx)("a",{className:"popup-btn",children:(0,l.jsx)("img",{src:"".concat(U[0]),alt:"image"})}),(0,l.jsx)("p",{children:z&&z.length&&z[0]||""})]})},1)})||(0,l.jsx)(l.Fragment,{}),U&&U.length&&U.length>=2&&U[1]&&(0,l.jsx)("div",{className:"adverdesiment-1",children:(0,l.jsx)("div",{className:"",children:(0,l.jsxs)("div",{className:"single-gallery-item",children:[(0,l.jsxs)("div",{style:{textAlign:"center"},children:[" ",(0,l.jsx)("h4",{children:" Advertisement "})," "]}),(0,l.jsx)("a",{className:"popup-btn",children:(0,l.jsx)("img",{src:"".concat(U[1]),alt:"image"})}),(0,l.jsx)("p",{children:z&&z.length&&z[1]||""})]})},1)})||(0,l.jsx)(l.Fragment,{})]})]}),(0,l.jsx)("div",{className:"courses-area courses-section pb-70",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("h2",{className:"sub-title",style:{textAlign:"center",paddingBottom:"15px"},children:"Colleges List"}),(0,l.jsxs)("div",{className:"edemy-grid-sorting row align-items-center",style:{background:"#f8f9fa",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)",padding:"15px",borderRadius:"8px"},children:[(0,l.jsx)("div",{className:"col-lg-4 col-md-6 ordering float-right",children:(0,l.jsxs)("div",{className:"select-box float-right",children:[(0,l.jsxs)("div",{className:"text-left",style:{textAlign:"left"},children:[" ",(0,l.jsx)("label",{children:" Filter By State"})," "]}),(0,l.jsxs)("select",{className:"form-control",onChange:G,value:_,children:[(0,l.jsx)("option",{disabled:!0,value:"",children:"Select State"}),j&&j.map((function(e){return(0,l.jsx)("option",{value:e,children:e},e)}))]})]})}),(0,l.jsx)("div",{className:"col-lg-4 col-md-6 ordering",children:(0,l.jsxs)("div",{className:"select-box float-right",children:[(0,l.jsxs)("div",{className:"text-left",style:{textAlign:"left"},children:[" ",(0,l.jsx)("label",{children:" Filter By District"})," "]}),(0,l.jsxs)("select",{className:"form-control",onChange:$,value:C,children:[(0,l.jsx)("option",{disabled:!0,value:"",children:"Select District"}),N&&N.map((function(e){return(0,l.jsx)("option",{value:e,children:e},e)}))]})]})})]}),(0,l.jsx)("div",{className:"row",style:{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"},children:O&&O.length?O.map((function(e,t){return(0,l.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,l.jsxs)("div",{className:"single-courses-box",children:[(0,l.jsxs)("div",{className:"courses-image",style:{width:"100% !important",height:"200px",overflow:"hidden",cursor:"pointer"},children:[(0,l.jsx)("div",{onClick:function(){J(e._id)},children:(0,l.jsx)("img",{src:null===e||void 0===e?void 0:e.Image_Gallery,alt:"image"})}),(0,l.jsx)("div",{className:"price shadow",style:{top:"0",right:"0"},children:(0,l.jsx)("img",{src:null===e||void 0===e?void 0:e.Logo})})]}),(0,l.jsxs)("div",{className:"courses-content",onClick:function(){J(e._id)},children:[(0,l.jsxs)("div",{className:"course-author d-flex align-items-center",style:{cursor:"pointer"},children:[(0,l.jsxs)("span",{children:[" ",e.College_Name," "]}),(0,l.jsx)("br",{})]}),(0,l.jsxs)("p",{style:{cursor:"pointer"},children:[" ",e.college_District," - ",e.State," "]}),(0,l.jsxs)("p",{style:{cursor:"pointer"},children:[" Specialisation: ",e.Specialisation," "]})]})]})},t)})):(0,l.jsx)("div",{})})]})}),(0,l.jsx)(u.Z,{})]})}},1163:function(e,t,n){e.exports=n(387)},943:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},3375:function(e,t,n){"use strict";function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:function(){return r}})},9534:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}n.d(t,{Z:function(){return r}})},828:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(3375);var s=n(1566);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||(0,r.Z)(e,t)||(0,s.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(943);function s(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}},function(e){e.O(0,[4885,3662,1664,2244,9774,2888,179],(function(){return t=2583,e(e.s=t);var t}));var t=e.O();_N_E=t}]);