"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[3618],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},l="MySQL ORDER BY",c={unversionedId:"sql-select/sql-order-by",id:"sql-select/sql-order-by",title:"MySQL ORDER BY",description:"- T\u1eeb kh\xf3a ORDER BY \u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3 sort c\xe1c h\xe0ng theo th\u1ee9 t\u1ef1 t\u0103ng d\u1ea7n, ho\u1eb7c gi\u1ea3m d\u1ea7n c\u1ee7a c\u1ed9t \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh",source:"@site/docs/sql-select/sql-order-by.md",sourceDirName:"sql-select",slug:"/sql-select/sql-order-by",permalink:"/SQL/sql-select/sql-order-by",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"MySQL SELECT",permalink:"/SQL/sql-select/"},next:{title:"MySQL JOIN",permalink:"/SQL/category/mysql-join"}},s={},i=[{value:"V\xed d\u1ee5",id:"v\xed-d\u1ee5",level:2}],p={toc:i},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mysql-order-by"},"MySQL ORDER BY"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"T\u1eeb kh\xf3a ",(0,a.kt)("strong",{parentName:"li"},"ORDER BY")," \u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3 sort c\xe1c h\xe0ng theo th\u1ee9 t\u1ef1 t\u0103ng d\u1ea7n, ho\u1eb7c gi\u1ea3m d\u1ea7n c\u1ee7a c\u1ed9t \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh"),(0,a.kt)("li",{parentName:"ul"},"C\xf3 hai t\u1eeb kh\xf3a l\xe0: ",(0,a.kt)("strong",{parentName:"li"},"ASC")," (t\u0103ng d\u1ea7n) v\xe0 ",(0,a.kt)("strong",{parentName:"li"},"DESC")," (gi\u1ea3m d\u1ea7n)"),(0,a.kt)("li",{parentName:"ul"},"Gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh l\xe0 ",(0,a.kt)("strong",{parentName:"li"},"ASC")," (t\u0103ng d\u1ea7n)"),(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column1, column2, ...\nFROM table_name\nORDER BY column1, column2, ... ASC|DESC;\n"))),(0,a.kt)("h2",{id:"v\xed-d\u1ee5"},"V\xed d\u1ee5"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1706538516443",src:n(8729).Z,width:"1093",height:"386"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xe2u l\u1ec7nh sau s\u1eafp x\u1ebfp c\u1ed9t Country t\u0103ng d\u1ea7n, n\u1ebfu c\xf3 2 h\xe0ng c\xf3 c\xf9ng Country, s\u1ebd s\u1eafp x\u1ebfp theo CustomerName t\u0103ng d\u1ea7n:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Customers\nORDER BY Country, CustomerName;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xe2u l\u1ec7nh sau s\u1eafp x\u1ebfp c\u1ed9t Country t\u0103ng d\u1ea7n, n\u1ebfu c\xf3 2 h\xe0ng c\xf3 c\xf9ng Country, s\u1ebd s\u1eafp x\u1ebfp theo CustomerName gi\u1ea3m d\u1ea7n:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Customers\nORDER BY Country ASC, CustomerName DESC;\n")))}m.isMDXComponent=!0},8729:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1706538516443-74b2a98450bf48e42a566f4e368e8f67.png"}}]);