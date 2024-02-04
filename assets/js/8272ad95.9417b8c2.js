"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[615],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},i="MySQL BETWEEN",c={unversionedId:"sql-conditions/sql-between",id:"sql-conditions/sql-between",title:"MySQL BETWEEN",description:"- To\xe1n t\u1eed BETWEEN ch\u1ecdn c\xe1c gi\xe1 tr\u1ecb n\u1eb1m trong m\u1ed9t \u0111o\u1ea1n [a, b] \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh. C\xe1c gi\xe1 tr\u1ecb n\xe0y c\xf3 th\u1ec3 l\xe0 s\u1ed1, chu\u1ed7i ho\u1eb7c date.",source:"@site/docs/sql-conditions/sql-between.md",sourceDirName:"sql-conditions",slug:"/sql-conditions/sql-between",permalink:"/SQL/sql-conditions/sql-between",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"MySQL AND, OR, NOT",permalink:"/SQL/sql-conditions/sql-and-or-not"},next:{title:"MySQL LIKE",permalink:"/SQL/sql-conditions/sql-like"}},l={},s=[{value:"V\xed d\u1ee5",id:"v\xed-d\u1ee5",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mysql-between"},"MySQL BETWEEN"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"To\xe1n t\u1eed ",(0,o.kt)("strong",{parentName:"li"},"BETWEEN")," ch\u1ecdn c\xe1c gi\xe1 tr\u1ecb n\u1eb1m trong m\u1ed9t \u0111o\u1ea1n ","[a, b]"," \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh. C\xe1c gi\xe1 tr\u1ecb n\xe0y c\xf3 th\u1ec3 l\xe0 s\u1ed1, chu\u1ed7i ho\u1eb7c date."),(0,o.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column_name(s)\nFROM table_name\nWHERE column_name BETWEEN value1 AND value2;\n")),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"\u0110\u1ec3 select c\xe1c gi\xe1 tr\u1ecb ngo\xe0i \u0111o\u1ea1n \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh, ta k\u1ebft h\u1ee3p v\u1edbi to\xe1n t\u1eed ",(0,o.kt)("strong",{parentName:"li"},"NOT"),":")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column_name(s)\nFROM table_name\nWHERE column_name NOT BETWEEN value1 AND value2;\n"))),(0,o.kt)("h2",{id:"v\xed-d\u1ee5"},"V\xed d\u1ee5"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"1706453913144",src:n(4576).Z,width:"1278",height:"500"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"1706454110283",src:n(2752).Z,width:"1077",height:"463"})))}m.isMDXComponent=!0},4576:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1706453913144-068968e100e1672348ab85e0724e2a41.png"},2752:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1706454110283-c936f011c32a463f366b65fc7c5d4e4d.png"}}]);