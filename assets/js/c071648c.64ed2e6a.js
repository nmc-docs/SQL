"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[9278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:5},i="MySQL IN",l={unversionedId:"sql-conditions/sql-in",id:"sql-conditions/sql-in",title:"MySQL IN",description:"- To\xe1n t\u1eed IN cho ph\xe9p ta ch\u1ec9 \u0111\u1ecbnh nhi\u1ec1u gi\xe1 tr\u1ecb trong m\u1ec7nh \u0111\u1ec1 WHERE",source:"@site/docs/sql-conditions/sql-in.md",sourceDirName:"sql-conditions",slug:"/sql-conditions/sql-in",permalink:"/SQL/sql-conditions/sql-in",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"MySQL LIKE",permalink:"/SQL/sql-conditions/sql-like"},next:{title:"MySQL INSERT INTO",permalink:"/SQL/sql-insert"}},c={},s=[{value:"V\xed d\u1ee5",id:"v\xed-d\u1ee5",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mysql-in"},"MySQL IN"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"To\xe1n t\u1eed ",(0,o.kt)("strong",{parentName:"li"},"IN")," cho ph\xe9p ta ch\u1ec9 \u0111\u1ecbnh nhi\u1ec1u gi\xe1 tr\u1ecb trong m\u1ec7nh \u0111\u1ec1 ",(0,o.kt)("strong",{parentName:"li"},"WHERE")),(0,o.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column_name(s)\nFROM table_name\nWHERE column_name IN (value1, value2, ...);\n")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column_name(s)\nFROM table_name\nWHERE column_name IN (SELECT STATEMENT);\n"))),(0,o.kt)("h2",{id:"v\xed-d\u1ee5"},"V\xed d\u1ee5"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"1706456975501",src:n(6064).Z,width:"1081",height:"433"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"V\xed d\u1ee5 sau s\u1ebd select t\u1ea5t c\u1ea3 c\xe1c customers m\xe0 c\xf3 c\xf9ng country v\u1edbi suppliers:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Customers\nWHERE Country IN (SELECT Country FROM Suppliers);\n")))}m.isMDXComponent=!0},6064:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1706456975501-1af6140800416cc53529e35664eeec39.png"}}]);