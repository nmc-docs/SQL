"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[9210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,d=m["".concat(o,".").concat(g)]||m[g]||u[g]||l;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=g;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:7},s="MySQL HAVING",i={unversionedId:"sql-select/sql-having",id:"sql-select/sql-having",title:"MySQL HAVING",description:"HAVING l\xe0 g\xec?",source:"@site/docs/sql-select/sql-having.md",sourceDirName:"sql-select",slug:"/sql-select/sql-having",permalink:"/SQL/sql-select/sql-having",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"MySQL ALIASES",permalink:"/SQL/sql-select/sql-aliases"},next:{title:"MySQL EXISTS",permalink:"/SQL/sql-select/sql-exists"}},o={},p=[{value:"HAVING l\xe0 g\xec?",id:"having-l\xe0-g\xec",level:2},{value:"V\xed d\u1ee5 1",id:"v\xed-d\u1ee5-1",level:2},{value:"V\xed d\u1ee5 2",id:"v\xed-d\u1ee5-2",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...l}=e;return(0,a.kt)(m,(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mysql-having"},"MySQL HAVING"),(0,a.kt)("h2",{id:"having-l\xe0-g\xec"},"HAVING l\xe0 g\xec?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"L\u1ec7nh ",(0,a.kt)("strong",{parentName:"p"},"HAVING")," trong MySQL ho ph\xe9p ng\u01b0\u1eddi d\xf9ng l\u1ecdc c\xe1c k\u1ebft qu\u1ea3 truy v\u1ea5n d\u1ef1a tr\xean nh\u1eefng h\xe0m t\u1ed5ng h\u1ee3p (",(0,a.kt)("inlineCode",{parentName:"p"},"COUNT()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"MAX()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"MIN()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SUM()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"AVG()"),") v\xe0 theo nh\xf3m m\xe0 kh\xf4ng th\u1ec3 \u0111\u1ea1t \u0111\u01b0\u1ee3c b\u1eb1ng m\u1ec7nh \u0111\u1ec1 ",(0,a.kt)("strong",{parentName:"p"},"WHERE")," (\u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3 l\u1ecdc t\u1eebng h\xe0ng ri\xeang l\u1ebb).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u0110\u1eb7c \u0111i\u1ec3m c\u1ee7a t\u1eeb kh\xf3a ",(0,a.kt)("strong",{parentName:"p"},"HAVING"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"M\u1ec7nh \u0111\u1ec1 ",(0,a.kt)("strong",{parentName:"li"},"HAVING")," ch\u1ec9 \u0111\u01b0\u1ee3c d\xf9ng v\u1edbi m\u1ec7nh \u0111\u1ec1 ",(0,a.kt)("strong",{parentName:"li"},"SELECT"),"."),(0,a.kt)("li",{parentName:"ul"},"M\u1ec7nh \u0111\u1ec1 ",(0,a.kt)("strong",{parentName:"li"},"HAVING")," lu\xf4n \u0111\u01b0\u1ee3c tri\u1ec3n khai c\xf9ng v\u1edbi l\u1ec7nh ",(0,a.kt)("strong",{parentName:"li"},"GROUP BY"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"C\xfa ph\xe1p:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column_name(s)\nFROM table_name\nWHERE condition\nGROUP BY column_name(s)\nHAVING condition\nORDER BY column_name(s);\n")),(0,a.kt)("h2",{id:"v\xed-d\u1ee5-1"},"V\xed d\u1ee5 1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Gi\u1ea3 s\u1eed ta c\xf3 b\u1ea3ng ",(0,a.kt)("strong",{parentName:"li"},"Customers")," c\xf3 d\u1ea1ng nh\u01b0 sau:")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1706805616188",src:n(3899).Z,width:"1485",height:"434"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xe2u query sau s\u1ebd th\u1ed1ng k\xea s\u1ed1 l\u01b0\u1ee3ng Customer theo Country v\xe0 ch\u1ec9 l\u1ea5y ra nh\u1eefng Country c\xf3 s\u1ed1 l\u01b0\u1ee3ng customer l\u1edbn h\u01a1n 5, v\xe0 s\u1eafp x\u1ebfp theo s\u1ed1 l\u01b0\u1ee3ng customer gi\u1ea3m d\u1ea7n:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(CustomerID), Country\nFROM Customers\nGROUP BY Country\nHAVING COUNT(CustomerID) > 5\nORDER BY COUNT(CustomerID) DESC;\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1706805886283",src:n(6291).Z,width:"1506",height:"357"})),(0,a.kt)("h2",{id:"v\xed-d\u1ee5-2"},"V\xed d\u1ee5 2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Gi\u1ea3 s\u1eed ta c\xf3 2 b\u1ea3ng ",(0,a.kt)("strong",{parentName:"li"},"Orders")," v\xe0 ",(0,a.kt)("strong",{parentName:"li"},"Employees")," nh\u01b0 h\xecnh d\u01b0\u1edbi, trong \u0111\xf3 b\u1ea3ng ",(0,a.kt)("strong",{parentName:"li"},"Orders")," c\xf3 c\u1ed9t ",(0,a.kt)("inlineCode",{parentName:"li"},"EmployeeID")," l\xe0 kh\xf3a ngo\u1ea1i li\xean k\u1ebft v\u1edbi b\u1ea3ng ",(0,a.kt)("strong",{parentName:"li"},"Employees"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1706806288305",src:n(7665).Z,width:"1277",height:"212"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1706806299669",src:n(5577).Z,width:"1278",height:"208"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xe2u truy v\u1ea5n sau s\u1ebd li\u1ec7t k\xea nh\u1eefng nh\xe2n vi\xean c\xf3 t\u1eeb 10 orders tr\u1edf l\xean:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Employees.LastName, COUNT(Orders.OrderID) AS NumberOfOrders\nFROM (Orders\nINNER JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID)\nGROUP BY LastName\nHAVING COUNT(Orders.OrderID) > 10;\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1706806442311",src:n(1885).Z,width:"1472",height:"505"})))}u.isMDXComponent=!0},3899:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1706805616188-be11626f22e2c437c4c2ee2f436d83e8.png"},6291:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1706805886283-07599f410c52b5de19c22da01d447826.png"},7665:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1706806288305-90206f5f4df191ffe8c961b8f5b716c3.png"},5577:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1706806299669-107fd20e2920fb7be42c9dc84458518f.png"},1885:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1706806442311-b405169b236f14cbbeb0bd15ddbf4d4a.png"}}]);