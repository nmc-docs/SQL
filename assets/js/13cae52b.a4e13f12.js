"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[1596],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4258:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:12},i="MySQL LIMIT",l={unversionedId:"sql-select/sql-limit",id:"sql-select/sql-limit",title:"MySQL LIMIT",description:"- T\u1eeb kh\xf3a LIMIT d\xf9ng \u0111\u1ec3 ch\u1ec9 \u0111\u1ecbnh s\u1ed1 l\u01b0\u1ee3ng record tr\u1ea3 v\u1ec1 khi th\u1ef1c hi\u1ec7n SELECT",source:"@site/docs/sql-select/sql-limit.md",sourceDirName:"sql-select",slug:"/sql-select/sql-limit",permalink:"/SQL/sql-select/sql-limit",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"MySQL MIN, MAX, COUNT, SUM, AVG",permalink:"/SQL/sql-select/sql-min-max-avg-count-sum"},next:{title:"MySQL Conditions",permalink:"/SQL/category/mysql-conditions"}},c={},s=[{value:"V\xed d\u1ee5",id:"v\xed-d\u1ee5",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mysql-limit"},"MySQL LIMIT"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"T\u1eeb kh\xf3a ",(0,o.kt)("strong",{parentName:"li"},"LIMIT")," d\xf9ng \u0111\u1ec3 ch\u1ec9 \u0111\u1ecbnh s\u1ed1 l\u01b0\u1ee3ng record tr\u1ea3 v\u1ec1 khi th\u1ef1c hi\u1ec7n ",(0,o.kt)("strong",{parentName:"li"},"SELECT")),(0,o.kt)("li",{parentName:"ul"},"Ta d\xf9ng t\u1eeb kh\xf3a ",(0,o.kt)("strong",{parentName:"li"},"OFFSET")," \u0111\u1ec3 b\u1ecf qua s\u1ed1 l\u01b0\u1ee3ng c\xe1c record \u0111\u1ea7u"))),(0,o.kt)("h2",{id:"v\xed-d\u1ee5"},"V\xed d\u1ee5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- L\u1ea5y 3 record t\u1eeb b\u1ea3ng Customers b\u1eaft \u0111\u1ea7u t\u1eeb record th\u1ee9 4 (b\u1ecf qua 3 record \u0111\u1ea7u ti\xean)\nSELECT * FROM Customers LIMIT 3 OFFSET 3;\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"1707322383071",src:r(4949).Z,width:"1495",height:"253"})))}m.isMDXComponent=!0},4949:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/1707322383071-512b8a14a32e805c95e219583bea1956.png"}}]);