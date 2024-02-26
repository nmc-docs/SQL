"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[3925],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>N});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),m=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=m(t.components);return r.createElement(c.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=m(n),u=a,N=d["".concat(c,".").concat(u)]||d[u]||s[u]||l;return n?r.createElement(N,i(i({ref:e},p),{},{components:n})):r.createElement(N,i({ref:e},p))}));function N(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[d]="string"==typeof t?t:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6037:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:1},i="MySQL WHERE",o={unversionedId:"sql-conditions/sql-where",id:"sql-conditions/sql-where",title:"MySQL WHERE",description:"- M\u1ec7nh \u0111\u1ec1 WHERE \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 l\u1ecdc c\xe1c record. N\xf3 s\u1ebd ch\u1ec9 tr\xedch xu\u1ea5t nh\u1eefng b\u1ea3n ghi \u0111\xe1p \u1ee9ng m\u1ed9t \u0111i\u1ec1u ki\u1ec7n c\u1ee5 th\u1ec3.",source:"@site/docs/sql-conditions/sql-where.md",sourceDirName:"sql-conditions",slug:"/sql-conditions/sql-where",permalink:"/SQL/sql-conditions/sql-where",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"MySQL Conditions",permalink:"/SQL/category/mysql-conditions"},next:{title:"MySQL AND, OR, NOT",permalink:"/SQL/sql-conditions/sql-and-or-not"}},c={},m=[{value:"V\xed d\u1ee5",id:"v\xed-d\u1ee5",level:2},{value:"C\xe1c to\xe1n t\u1eed \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng trong c\xe2u l\u1ec7nh WHERE",id:"c\xe1c-to\xe1n-t\u1eed-\u0111\u01b0\u1ee3c-s\u1eed-d\u1ee5ng-trong-c\xe2u-l\u1ec7nh-where",level:2}],p={toc:m},d="wrapper";function s(t){let{components:e,...l}=t;return(0,a.kt)(d,(0,r.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mysql-where"},"MySQL WHERE"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"M\u1ec7nh \u0111\u1ec1 ",(0,a.kt)("strong",{parentName:"li"},"WHERE")," \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 l\u1ecdc c\xe1c record. N\xf3 s\u1ebd ch\u1ec9 tr\xedch xu\u1ea5t nh\u1eefng b\u1ea3n ghi \u0111\xe1p \u1ee9ng m\u1ed9t \u0111i\u1ec1u ki\u1ec7n c\u1ee5 th\u1ec3."),(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column1, column2, ...\nFROM table_name\nWHERE condition;\n")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"M\u1ec7nh \u0111\u1ec1 ",(0,a.kt)("strong",{parentName:"li"},"WHERE")," kh\xf4ng ch\u1ec9 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng trong c\xe2u l\u1ec7nh ",(0,a.kt)("strong",{parentName:"li"},"SELECT")," m\xe0 n\xf3 c\xf2n \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng trong c\xe2u l\u1ec7nh ",(0,a.kt)("strong",{parentName:"li"},"UPDATE")," v\xe0 ",(0,a.kt)("strong",{parentName:"li"},"DELETE")))),(0,a.kt)("h2",{id:"v\xed-d\u1ee5"},"V\xed d\u1ee5"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1706452715700",src:n(4012).Z,width:"1257",height:"358"})),(0,a.kt)("h2",{id:"c\xe1c-to\xe1n-t\u1eed-\u0111\u01b0\u1ee3c-s\u1eed-d\u1ee5ng-trong-c\xe2u-l\u1ec7nh-where"},"C\xe1c to\xe1n t\u1eed \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng trong c\xe2u l\u1ec7nh WHERE"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Operator"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"="),(0,a.kt)("td",{parentName:"tr",align:null},"B\u1eb1ng")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},">"),(0,a.kt)("td",{parentName:"tr",align:null},"L\u1edbn h\u01a1n")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"<"),(0,a.kt)("td",{parentName:"tr",align:null},"Nh\u1ecf h\u01a1n")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},">="),(0,a.kt)("td",{parentName:"tr",align:null},"L\u1edbn h\u01a1n ho\u1eb7c b\u1eb1ng")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"<="),(0,a.kt)("td",{parentName:"tr",align:null},"Nh\u1ecf h\u01a1n ho\u1eb7c b\u1eb1ng")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"!="),(0,a.kt)("td",{parentName:"tr",align:null},"Kh\xe1c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BETWEEN"),(0,a.kt)("td",{parentName:"tr",align:null},"N\u1eb1m gi\u1eefa m\u1ed9t kho\u1ea3ng \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh.",(0,a.kt)("a",{parentName:"td",href:"./sql-between"},"Xem chi ti\u1ebft"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LIKE"),(0,a.kt)("td",{parentName:"tr",align:null},"T\xecm ki\u1ebfm theo pattern.",(0,a.kt)("a",{parentName:"td",href:"./sql-like"},"Xem chi ti\u1ebft"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IN"),(0,a.kt)("td",{parentName:"tr",align:null},"Ch\u1ec9 \u0111\u1ecbnh nhi\u1ec1u gi\xe1 tr\u1ecb c\xf3 th\u1ec3 c\xf3 trong m\u1ed9t column.",(0,a.kt)("a",{parentName:"td",href:"./sql-in"},"Xem chi ti\u1ebft"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AND"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"./sql-and-or-not"},"Xem chi ti\u1ebft"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OR"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"./sql-and-or-not"},"Xem chi ti\u1ebft"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NOT"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"./sql-and-or-not"},"Xem chi ti\u1ebft"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ANY"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../sql-select/sql-any-all#any"},"Xem chi ti\u1ebft"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ALL"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../sql-select/sql-any-all#all"},"Xem chi ti\u1ebft"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EXISTS"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../sql-select/sql-exists"},"Xem chi ti\u1ebft"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IS NULL"),(0,a.kt)("td",{parentName:"tr",align:null},"Ki\u1ec3m tra gi\xe1 tr\u1ecb c\u1ee7a m\u1ed9t c\u1ed9t c\xf3 l\xe0 gi\xe1 tr\u1ecb NULL hay kh\xf4ng")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IS NOT NULL"),(0,a.kt)("td",{parentName:"tr",align:null},"Ki\u1ec3m tra gi\xe1 tr\u1ecb c\u1ee7a m\u1ed9t c\u1ed9t kh\xf4ng ph\u1ea3i l\xe0 gi\xe1 tr\u1ecb NULL hay kh\xf4ng")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5 v\u1ec1 ",(0,a.kt)("inlineCode",{parentName:"li"},"IS NULL"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"IS NOT NULL"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CustomerName, ContactName, Address\nFROM Customers\nWHERE Address IS NULL;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CustomerName, ContactName, Address\nFROM Customers\nWHERE Address IS NOT NULL;\n")))}s.isMDXComponent=!0},4012:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1706452715700-c5f9188c9c4364cbbafcf9da0006698f.png"}}]);