"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[3254],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2835:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},l="T\u1ea1o b\u1ea3ng trong MySQL",c={unversionedId:"sql-create-table",id:"sql-create-table",title:"T\u1ea1o b\u1ea3ng trong MySQL",description:"C\xfa ph\xe1p",source:"@site/docs/sql-create-table.md",sourceDirName:".",slug:"/sql-create-table",permalink:"/SQL/sql-create-table",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"MySQL Data Types",permalink:"/SQL/"},next:{title:"X\xf3a b\u1ea3ng trong MySQL",permalink:"/SQL/sql-drop-table"}},i={},p=[{value:"C\xfa ph\xe1p",id:"c\xfa-ph\xe1p",level:2},{value:"V\xed d\u1ee5",id:"v\xed-d\u1ee5",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"t\u1ea1o-b\u1ea3ng-trong-mysql"},"T\u1ea1o b\u1ea3ng trong MySQL"),(0,a.kt)("h2",{id:"c\xfa-ph\xe1p"},"C\xfa ph\xe1p"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_name (\n    column1 datatype,\n    column2 datatype,\n    column3 datatype,\n   ....\n);\n")),(0,a.kt)("h2",{id:"v\xed-d\u1ee5"},"V\xed d\u1ee5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE employee (\n    id VARCHAR(255) PRIMARY KEY,\n    full_name VARCHAR(50),\n    address VARCHAR(50),\n    date_of_birth DATE,\n    identity_number VARCHAR(20)\n);\n")))}d.isMDXComponent=!0}}]);