"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[3398],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},i="MySQL AND, OR, NOT",l={unversionedId:"sql-conditions/sql-and-or-not",id:"sql-conditions/sql-and-or-not",title:"MySQL AND, OR, NOT",description:"- To\xe1n t\u1eed AND, OR \u0111\u1ec3 l\u1ecdc m\u1ed9t record d\u1ef1a tr\xean nhi\u1ec1u \u0111i\u1ec1u ki\u1ec7n:",source:"@site/docs/sql-conditions/sql-and-or-not.md",sourceDirName:"sql-conditions",slug:"/sql-conditions/sql-and-or-not",permalink:"/SQL/sql-conditions/sql-and-or-not",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"MySQL WHERE",permalink:"/SQL/sql-conditions/sql-where"},next:{title:"MySQL BETWEEN",permalink:"/SQL/sql-conditions/sql-between"}},c={},s=[{value:"V\xed d\u1ee5",id:"v\xed-d\u1ee5",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mysql-and-or-not"},"MySQL AND, OR, NOT"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"To\xe1n t\u1eed ",(0,o.kt)("strong",{parentName:"li"},"AND"),", ",(0,o.kt)("strong",{parentName:"li"},"OR")," \u0111\u1ec3 l\u1ecdc m\u1ed9t record d\u1ef1a tr\xean nhi\u1ec1u \u0111i\u1ec1u ki\u1ec7n:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To\xe1n t\u1eed ",(0,o.kt)("strong",{parentName:"li"},"AND")," s\u1ebd hi\u1ec3n th\u1ecb record n\u1ebfu t\u1ea5t c\u1ea3 c\xe1c \u0111i\u1ec1u ki\u1ec7n \u0111\u01b0\u1ee3c ph\xe2n t\xe1ch b\u1edfi ",(0,o.kt)("strong",{parentName:"li"},"AND")," l\xe0 True"),(0,o.kt)("li",{parentName:"ul"},"To\xe1n t\u1eed ",(0,o.kt)("strong",{parentName:"li"},"AND")," s\u1ebd hi\u1ec3n th\u1ecb record n\u1ebfu \xedt nh\u1ea5t m\u1ed9t \u0111i\u1ec1u ki\u1ec7n \u0111\u01b0\u1ee3c ph\xe2n t\xe1ch b\u1edfi ",(0,o.kt)("strong",{parentName:"li"},"OR")," l\xe0 True"))),(0,o.kt)("li",{parentName:"ul"},"To\xe1n t\u1eed ",(0,o.kt)("strong",{parentName:"li"},"NOT")," s\u1ebd hi\u1ec3n th\u1ecb record n\u1ebfu c\xe1c \u0111i\u1ec1u ki\u1ec7n l\xe0 False")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column1, column2, ...\nFROM table_name\nWHERE condition1 AND condition2 AND condition3 ...;\n")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column1, column2, ...\nFROM table_name\nWHERE condition1 OR condition2 OR condition3 ...;\n")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column1, column2, ...\nFROM table_name\nWHERE NOT condition;\n"))),(0,o.kt)("h2",{id:"v\xed-d\u1ee5"},"V\xed d\u1ee5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'V\xed d\u1ee5 sau s\u1ebd select t\u1ea5t c\u1ea3 c\xe1c Customers c\xf3 Country l\xe0 "Germany" v\xe0 c\xf3 City l\xe0 "Berlin" ho\u1eb7c "Stuttgart"')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"1706457790759",src:n(6689).Z,width:"1079",height:"254"})))}m.isMDXComponent=!0},6689:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1706457790759-c48203633d1c06901b2c968584c0c913.png"}}]);