"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[317],{3905:(t,n,e)=>{e.d(n,{Zo:()=>d,kt:()=>g});var a=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var m=a.createContext({}),u=function(t){var n=a.useContext(m),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},d=function(t){var n=u(t.components);return a.createElement(m.Provider,{value:n},t.children)},o="mdxType",N={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),o=u(e),k=r,g=o["".concat(m,".").concat(k)]||o[k]||N[k]||l;return e?a.createElement(g,i(i({ref:n},d),{},{components:e})):a.createElement(g,i({ref:n},d))}));function g(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=k;var p={};for(var m in n)hasOwnProperty.call(n,m)&&(p[m]=n[m]);p.originalType=t,p[o]="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=e[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}k.displayName="MDXCreateElement"},8517:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=e(7462),r=(e(7294),e(3905));const l={sidebar_position:1},i="INNER JOIN",p={unversionedId:"sql-select/sql-join/sql-inner-join",id:"sql-select/sql-join/sql-inner-join",title:"INNER JOIN",description:"1706628002671",source:"@site/docs/sql-select/sql-join/sql-inner-join.md",sourceDirName:"sql-select/sql-join",slug:"/sql-select/sql-join/sql-inner-join",permalink:"/SQL/sql-select/sql-join/sql-inner-join",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"MySQL JOIN",permalink:"/SQL/category/mysql-join"},next:{title:"LEFT JOIN",permalink:"/SQL/sql-select/sql-join/sql-left-join"}},m={},u=[{value:"V\xed d\u1ee5",id:"v\xed-d\u1ee5",level:2},{value:"V\xed d\u1ee5 khi JOIN 3 b\u1ea3ng",id:"v\xed-d\u1ee5-khi-join-3-b\u1ea3ng",level:2}],d={toc:u},o="wrapper";function N(t){let{components:n,...l}=t;return(0,r.kt)(o,(0,a.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"inner-join"},"INNER JOIN"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"1706628002671",src:e(5568).Z,width:"304",height:"210"})),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"INNER JOIN")," trong MySQL tr\u1ea3 v\u1ec1 t\u1eadp h\u1ee3p k\u1ebft qu\u1ea3 c\u1ee7a vi\u1ec7c k\u1ebft h\u1ee3p c\xe1c h\xe0ng t\u1eeb hai b\u1ea3ng d\u1ef1a tr\xean m\u1ed9t \u0111i\u1ec1u ki\u1ec7n \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh v\xe0 ch\u1ec9 bao g\u1ed3m c\xe1c h\xe0ng t\u1eeb c\u1ea3 hai b\u1ea3ng m\xe0 kh\u1edbp v\u1edbi \u0111i\u1ec1u ki\u1ec7n k\u1ebft n\u1ed1i."),(0,r.kt)("li",{parentName:"ul"},"Khi s\u1eed d\u1ee5ng ",(0,r.kt)("strong",{parentName:"li"},"INNER JOIN"),", ch\u1ec9 c\xf3 c\xe1c h\xe0ng t\u1eeb c\u1ea3 hai b\u1ea3ng m\xe0 kh\u1edbp v\u1edbi \u0111i\u1ec1u ki\u1ec7n k\u1ebft n\u1ed1i s\u1ebd \u0111\u01b0\u1ee3c bao g\u1ed3m trong k\u1ebft qu\u1ea3. C\xe1c h\xe0ng kh\xf4ng kh\u1edbp s\u1ebd kh\xf4ng \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb trong k\u1ebft qu\u1ea3."),(0,r.kt)("li",{parentName:"ul"},"C\xe1c c\u1ed9t m\xe0 ",(0,r.kt)("strong",{parentName:"li"},"INNER JOIN")," tr\u1ea3 v\u1ec1 bao g\u1ed3m T\u1ea4T C\u1ea2 c\xe1c c\u1ed9t c\u1ee7a c\u1ea3 2 b\u1ea3ng (ho\u1eb7c nhi\u1ec1u b\u1ea3ng) tham gia g\u1ed9p l\u1ea1i."),(0,r.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column_name(s)\nFROM table1\nINNER JOIN table2\nON table1.column_name = table2.column_name;\n"))),(0,r.kt)("h2",{id:"v\xed-d\u1ee5"},"V\xed d\u1ee5"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1706630131842",src:e(9593).Z,width:"1725",height:"774"})),(0,r.kt)("h2",{id:"v\xed-d\u1ee5-khi-join-3-b\u1ea3ng"},"V\xed d\u1ee5 khi JOIN 3 b\u1ea3ng"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gi\u1ea3 s\u1eed ta c\xf3 3 b\u1ea3ng sau:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Customers")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"customer_id"),(0,r.kt)("th",{parentName:"tr",align:null},"customer_id"),(0,r.kt)("th",{parentName:"tr",align:null},"last_name"),(0,r.kt)("th",{parentName:"tr",align:null},"age"),(0,r.kt)("th",{parentName:"tr",align:null},"country"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"John"),(0,r.kt)("td",{parentName:"tr",align:null},"Doe"),(0,r.kt)("td",{parentName:"tr",align:null},"31"),(0,r.kt)("td",{parentName:"tr",align:null},"USA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Robert"),(0,r.kt)("td",{parentName:"tr",align:null},"Luna"),(0,r.kt)("td",{parentName:"tr",align:null},"22"),(0,r.kt)("td",{parentName:"tr",align:null},"USA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"David"),(0,r.kt)("td",{parentName:"tr",align:null},"Robinson"),(0,r.kt)("td",{parentName:"tr",align:null},"22"),(0,r.kt)("td",{parentName:"tr",align:null},"UK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"John"),(0,r.kt)("td",{parentName:"tr",align:null},"Reinhardt"),(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"UK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Betty"),(0,r.kt)("td",{parentName:"tr",align:null},"Doe"),(0,r.kt)("td",{parentName:"tr",align:null},"28"),(0,r.kt)("td",{parentName:"tr",align:null},"UAE")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Orders")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"order_id"),(0,r.kt)("th",{parentName:"tr",align:null},"item"),(0,r.kt)("th",{parentName:"tr",align:null},"amount"),(0,r.kt)("th",{parentName:"tr",align:null},"customer_id"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Keyboad"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Mouse"),(0,r.kt)("td",{parentName:"tr",align:null},"300"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Monitor"),(0,r.kt)("td",{parentName:"tr",align:null},"12000"),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Keyboad"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Mousepad"),(0,r.kt)("td",{parentName:"tr",align:null},"350"),(0,r.kt)("td",{parentName:"tr",align:null},"2")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Shippings")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"shipping_id"),(0,r.kt)("th",{parentName:"tr",align:null},"status"),(0,r.kt)("th",{parentName:"tr",align:null},"customer"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Pending"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Pending"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Delivered"),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Pending"),(0,r.kt)("td",{parentName:"tr",align:null},"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Delivered"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"V\u1edbi 2 c\xe2u l\u1ec7nh SELECT sau, s\u1ebd cho k\u1ebft qu\u1ea3 nh\u01b0 b\u1ea3ng d\u01b0\u1edbi:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Customers.customer_id, first_name, last_name, country, Orders.item, Orders.amount, Shippings.status\nFROM Orders\nINNER JOIN Customers ON Customers.customer_id = Orders.customer_id\nINNER JOIN Shippings ON Shippings.customer = Customers.customer_id\nORDER BY Customers.customer_id;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Customers.customer_id, first_name, last_name, country, Orders.item, Orders.amount, Shippings.status\nFROM Customers\nINNER JOIN Orders ON Orders.customer_id = Customers.customer_id\nINNER JOIN Shippings ON Shippings.customer = Customers.customer_id\nORDER BY Customers.customer_id;\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"customer_id"),(0,r.kt)("th",{parentName:"tr",align:null},"first_name"),(0,r.kt)("th",{parentName:"tr",align:null},"last_name"),(0,r.kt)("th",{parentName:"tr",align:null},"country"),(0,r.kt)("th",{parentName:"tr",align:null},"item"),(0,r.kt)("th",{parentName:"tr",align:null},"amount"),(0,r.kt)("th",{parentName:"tr",align:null},"status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"John"),(0,r.kt)("td",{parentName:"tr",align:null},"Doe"),(0,r.kt)("td",{parentName:"tr",align:null},"USA"),(0,r.kt)("td",{parentName:"tr",align:null},"Keyboard"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Delivered")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Robert"),(0,r.kt)("td",{parentName:"tr",align:null},"Luna"),(0,r.kt)("td",{parentName:"tr",align:null},"USA"),(0,r.kt)("td",{parentName:"tr",align:null},"Mousepad"),(0,r.kt)("td",{parentName:"tr",align:null},"250"),(0,r.kt)("td",{parentName:"tr",align:null},"Pending")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"David"),(0,r.kt)("td",{parentName:"tr",align:null},"Robinson"),(0,r.kt)("td",{parentName:"tr",align:null},"UK"),(0,r.kt)("td",{parentName:"tr",align:null},"Monitor"),(0,r.kt)("td",{parentName:"tr",align:null},"12000"),(0,r.kt)("td",{parentName:"tr",align:null},"Delivered")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"John"),(0,r.kt)("td",{parentName:"tr",align:null},"Reinhardt"),(0,r.kt)("td",{parentName:"tr",align:null},"UK"),(0,r.kt)("td",{parentName:"tr",align:null},"Keyboard"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Pending")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"John"),(0,r.kt)("td",{parentName:"tr",align:null},"Reinhardt"),(0,r.kt)("td",{parentName:"tr",align:null},"UK"),(0,r.kt)("td",{parentName:"tr",align:null},"Mouse"),(0,r.kt)("td",{parentName:"tr",align:null},"300"),(0,r.kt)("td",{parentName:"tr",align:null},"Pending")))))}N.isMDXComponent=!0},5568:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/1706628002671-1d45985874c0eae32760fd32d905e5ff.png"},9593:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/1706630131842-871ab842607b7e81e8528d7b6ba49f23.png"}}]);