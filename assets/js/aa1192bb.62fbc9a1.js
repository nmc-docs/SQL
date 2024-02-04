"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[427],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>s});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),o=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=o(t.components);return a.createElement(m.Provider,{value:e},t.children)},c="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),c=o(n),d=r,s=c["".concat(m,".").concat(d)]||c[d]||g[d]||l;return n?a.createElement(s,i(i({ref:e},u),{},{components:n})):a.createElement(s,i({ref:e},u))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[c]="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4085:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:5},i="MySQL GROUP BY",p={unversionedId:"sql-select/sql-group-by",id:"sql-select/sql-group-by",title:"MySQL GROUP BY",description:"- Trong SQL, m\u1ec7nh \u0111\u1ec1 GROUP BY \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 nh\xf3m c\xe1c h\xe0ng trong m\u1ed9t b\u1ea3ng theo m\u1ed9t ho\u1eb7c nhi\u1ec1u c\u1ed9t v\xe0 \xe1p d\u1ee5ng c\xe1c h\xe0m t\u1ed5ng h\u1ee3p (aggregate functions) nh\u01b0 COUNT(), MAX(), MIN(), SUM(), AVG() v\xe0o c\xe1c nh\xf3m n\xe0y. GROUP BY gi\xfap t\u1ea1o ra c\xe1c t\u1eadp k\u1ebft qu\u1ea3 (result set) \u0111\u01b0\u1ee3c t\u1ed5 ch\u1ee9c th\xe0nh c\xe1c nh\xf3m d\u1ef1a tr\xean c\xe1c gi\xe1 tr\u1ecb trong c\u1ed9t \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh.",source:"@site/docs/sql-select/sql-group-by.md",sourceDirName:"sql-select",slug:"/sql-select/sql-group-by",permalink:"/SQL/sql-select/sql-group-by",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"MySQL UNION",permalink:"/SQL/sql-select/sql-union"},next:{title:"MySQL ALIASES",permalink:"/SQL/sql-select/sql-aliases"}},m={},o=[{value:"V\xed d\u1ee5 1",id:"v\xed-d\u1ee5-1",level:2},{value:"V\xed d\u1ee5 2",id:"v\xed-d\u1ee5-2",level:2}],u={toc:o},c="wrapper";function g(t){let{components:e,...l}=t;return(0,r.kt)(c,(0,a.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mysql-group-by"},"MySQL GROUP BY"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Trong SQL, m\u1ec7nh \u0111\u1ec1 ",(0,r.kt)("strong",{parentName:"li"},"GROUP BY")," \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 nh\xf3m c\xe1c h\xe0ng trong m\u1ed9t b\u1ea3ng theo m\u1ed9t ho\u1eb7c nhi\u1ec1u c\u1ed9t v\xe0 \xe1p d\u1ee5ng c\xe1c h\xe0m t\u1ed5ng h\u1ee3p (aggregate functions) nh\u01b0 ",(0,r.kt)("inlineCode",{parentName:"li"},"COUNT()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"MAX()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"MIN()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"SUM()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"AVG()")," v\xe0o c\xe1c nh\xf3m n\xe0y. ",(0,r.kt)("strong",{parentName:"li"},"GROUP BY")," gi\xfap t\u1ea1o ra c\xe1c t\u1eadp k\u1ebft qu\u1ea3 (result set) \u0111\u01b0\u1ee3c t\u1ed5 ch\u1ee9c th\xe0nh c\xe1c nh\xf3m d\u1ef1a tr\xean c\xe1c gi\xe1 tr\u1ecb trong c\u1ed9t \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh."),(0,r.kt)("li",{parentName:"ul"},"Khi s\u1eed d\u1ee5ng ",(0,r.kt)("strong",{parentName:"li"},"GROUP BY"),", c\xe1c h\xe0ng trong b\u1ea3ng s\u1ebd \u0111\u01b0\u1ee3c chia th\xe0nh c\xe1c nh\xf3m d\u1ef1a tr\xean c\xe1c gi\xe1 tr\u1ecb duy nh\u1ea5t trong c\u1ed9t \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh. Sau \u0111\xf3, c\xe1c h\xe0m t\u1ed5ng h\u1ee3p c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c \xe1p d\u1ee5ng v\xe0o m\u1ed7i nh\xf3m \u0111\u1ec3 t\xednh to\xe1n gi\xe1 tr\u1ecb t\u1ed5ng h\u1ee3p cho t\u1eebng nh\xf3m. K\u1ebft qu\u1ea3 tr\u1ea3 v\u1ec1 s\u1ebd l\xe0 m\u1ed9t t\u1eadp h\u1ee3p c\xe1c nh\xf3m k\xe8m theo c\xe1c gi\xe1 tr\u1ecb t\u1ed5ng h\u1ee3p t\u01b0\u01a1ng \u1ee9ng."),(0,r.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column_name(s)\nFROM table_name\nWHERE condition\nGROUP BY column_name(s)\nORDER BY column_name(s);\n"))),(0,r.kt)("h2",{id:"v\xed-d\u1ee5-1"},"V\xed d\u1ee5 1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ta c\xf3 b\u1ea3ng ",(0,r.kt)("strong",{parentName:"li"},"student")," sau:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"student_id"),(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"age"),(0,r.kt)("th",{parentName:"tr",align:null},"address"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Quynh"),(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"Hanoi")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Chi"),(0,r.kt)("td",{parentName:"tr",align:null},"24"),(0,r.kt)("td",{parentName:"tr",align:null},"QuangNinh")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Toan"),(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"Hanoi")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Hung"),(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"PhuTho")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Quang"),(0,r.kt)("td",{parentName:"tr",align:null},"23"),(0,r.kt)("td",{parentName:"tr",align:null},"BacGiang")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"Huy"),(0,r.kt)("td",{parentName:"tr",align:null},"23"),(0,r.kt)("td",{parentName:"tr",align:null},"Hanoi")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"Lam"),(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"HungYen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"Phong"),(0,r.kt)("td",{parentName:"tr",align:null},"23"),(0,r.kt)("td",{parentName:"tr",align:null},"LaoCai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"Huyen"),(0,r.kt)("td",{parentName:"tr",align:null},"24"),(0,r.kt)("td",{parentName:"tr",align:null},"ThanhHoa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"Quan"),(0,r.kt)("td",{parentName:"tr",align:null},"23"),(0,r.kt)("td",{parentName:"tr",align:null},"HaNam")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gi\u1edd ta s\u1ebd th\u1ef1c hi\u1ec7n c\xe2u truy v\u1ea5n sau:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT age, COUNT(student_id)\nFROM student\nGROUP BY age;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"K\u1ebft qu\u1ea3:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"age"),(0,r.kt)("th",{parentName:"tr",align:null},"COUNT(student_id)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"24"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"23"),(0,r.kt)("td",{parentName:"tr",align:null},"4")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Trong c\xe2u truy v\u1ea5n tr\xean, ta s\u1eed d\u1ee5ng ",(0,r.kt)("strong",{parentName:"li"},"GROUP BY")," \u0111\u1ec3 nh\xf3m t\u1ea5t c\u1ea3 c\xe1c h\xe0ng theo tu\u1ed5i (age), do \u0111\xf3 k\u1ebft qu\u1ea3 tr\u1ea3 v\u1ec1 bao g\u1ed3m 3 h\xe0ng t\u01b0\u01a1ng \u1ee9ng v\u1edbi 3 nh\xf3m tu\u1ed5i kh\xe1c nhau c\xf3 trong b\u1ea3ng. Sau \u0111\xf3, v\u1edbi m\u1ed7i nh\xf3m tu\u1ed5i, ta th\u1ef1c hi\u1ec7n \u0111\u1ebfm s\u1ed1 l\u01b0\u1ee3ng sinh vi\xean"))),(0,r.kt)("h2",{id:"v\xed-d\u1ee5-2"},"V\xed d\u1ee5 2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gi\u1ea3 s\u1eed ta c\xf3 2 b\u1ea3ng ",(0,r.kt)("strong",{parentName:"li"},"Shippers")," v\xe0 ",(0,r.kt)("strong",{parentName:"li"},"Orders"),". Trong \u0111\xf3 b\u1ea3ng ",(0,r.kt)("strong",{parentName:"li"},"Orders")," ch\u1ee9a c\u1ed9t ",(0,r.kt)("inlineCode",{parentName:"li"},"ShipperID")," l\xe0 kh\xf3a ngo\u1ea1i li\xean k\u1ebft v\u1edbi b\u1ea3ng ",(0,r.kt)("strong",{parentName:"li"},"Shippers"),". Gi\u1edd ta s\u1ebd th\u1ef1c hi\u1ec7n ",(0,r.kt)("strong",{parentName:"li"},"INNER JOIN")," tr\u01b0\u1edbc \u0111\u1ec3 xem qua:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nINNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1706801298790",src:n(701).Z,width:"1480",height:"491"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"B\xe2y gi\u1edd, ta s\u1ebd s\u1eed d\u1ee5ng ",(0,r.kt)("strong",{parentName:"li"},"GROUP BY")," \u0111\u1ec3 nh\xf3m c\xe1c h\xe0ng theo ",(0,r.kt)("inlineCode",{parentName:"li"},"ShipperName"),", sau \u0111\xf3 s\u1eed d\u1ee5ng h\xe0m ",(0,r.kt)("inlineCode",{parentName:"li"},"COUNT()")," \u0111\u1ec3 \u0111\u1ebfm s\u1ed1 l\u01b0\u1ee3ng order c\u1ee7a t\u1eebng shipper:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Shippers.ShipperName, COUNT(Orders.OrderID) AS NumberOfOrders FROM Orders\nINNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID\nGROUP BY ShipperName;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1706801421622",src:n(3772).Z,width:"1502",height:"255"})))}g.isMDXComponent=!0},701:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/1706801298790-c7e46d2e1d27aae90f7c75435bb0dbe1.png"},3772:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/1706801421622-fff528d40bbd3b2007ec3c293ecd2e8a.png"}}]);