"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[3204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:9},o="MySQL INSERT INTO",i={unversionedId:"sql-insert",id:"sql-insert",title:"MySQL INSERT INTO",description:"INSERT INTO l\xe0 g\xec?",source:"@site/docs/sql-insert.md",sourceDirName:".",slug:"/sql-insert",permalink:"/SQL/sql-insert",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"MySQL IN",permalink:"/SQL/sql-conditions/sql-in"},next:{title:"MySQL UPDATE",permalink:"/SQL/sql-update"}},c={},s=[{value:"INSERT INTO l\xe0 g\xec?",id:"insert-into-l\xe0-g\xec",level:2},{value:"V\xed d\u1ee5",id:"v\xed-d\u1ee5",level:2}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mysql-insert-into"},"MySQL INSERT INTO"),(0,a.kt)("h2",{id:"insert-into-l\xe0-g\xec"},"INSERT INTO l\xe0 g\xec?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xe2u l\u1ec7nh ",(0,a.kt)("strong",{parentName:"li"},"INSERT INTO")," \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 th\xeam m\u1edbi 1 record v\xe0o b\u1ea3ng"),(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO table_name (column1, column2, column3, ...)\nVALUES (value1, value2, value3, ...);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\u0169ng l\xe0 m\u1ed9t c\xe1ch vi\u1ebft kh\xe1c, ta kh\xf4ng c\u1ea7n ch\u1ec9 \u0111\u1ecbnh t\xean c\u1ed9t, n\xf3 s\u1ebd t\u1ef1 \u0111\u1ed9ng th\xeam gi\xe1 tr\u1ecb theo th\u1ee9 t\u1ef1 c\u1ed9t trong b\u1ea3ng")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO table_name\nVALUES (value1, value2, value3, ...);\n")),(0,a.kt)("h2",{id:"v\xed-d\u1ee5"},"V\xed d\u1ee5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)\nVALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');\n")))}m.isMDXComponent=!0}}]);