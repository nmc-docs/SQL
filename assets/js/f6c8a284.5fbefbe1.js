"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=i(n),h=r,d=m["".concat(c,".").concat(h)]||m[h]||p[h]||l;return n?a.createElement(d,s(s({ref:t},u),{},{components:n})):a.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var i=2;i<l;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:6},s="MySQL ALIASES",o={unversionedId:"sql-select/sql-aliases",id:"sql-select/sql-aliases",title:"MySQL ALIASES",description:'- Trong SQL, t\u1eeb kh\xf3a "aliases" \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 t\u1ea1o b\xed danh cho b\u1ea3ng ho\u1eb7c c\u1ed9t trong c\xe2u l\u1ec7nh SELECT. Aliases cho ph\xe9p b\u1ea1n \u0111\u1eb7t t\xean t\u1ea1m th\u1eddi cho b\u1ea3ng ho\u1eb7c c\u1ed9t m\xe0 b\u1ea1n mu\u1ed1n s\u1eed d\u1ee5ng trong c\xe2u l\u1ec7nh SELECT.',source:"@site/docs/sql-select/sql-aliases.md",sourceDirName:"sql-select",slug:"/sql-select/sql-aliases",permalink:"/SQL/sql-select/sql-aliases",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"MySQL GROUP BY",permalink:"/SQL/sql-select/sql-group-by"},next:{title:"MySQL HAVING",permalink:"/SQL/sql-select/sql-having"}},c={},i=[{value:"Column Aliases",id:"column-aliases",level:2},{value:"Table Aliases",id:"table-aliases",level:2}],u={toc:i},m="wrapper";function p(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mysql-aliases"},"MySQL ALIASES"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Trong SQL, t\u1eeb kh\xf3a "aliases" \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 t\u1ea1o b\xed danh cho b\u1ea3ng ho\u1eb7c c\u1ed9t trong c\xe2u l\u1ec7nh SELECT. Aliases cho ph\xe9p b\u1ea1n \u0111\u1eb7t t\xean t\u1ea1m th\u1eddi cho b\u1ea3ng ho\u1eb7c c\u1ed9t m\xe0 b\u1ea1n mu\u1ed1n s\u1eed d\u1ee5ng trong c\xe2u l\u1ec7nh SELECT.'),(0,r.kt)("li",{parentName:"ul"},"C\xf3 hai lo\u1ea1i aliases trong SQL:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Column Aliases (B\xed danh c\u1ed9t)"),(0,r.kt)("li",{parentName:"ul"},"Table Aliases (B\xed danh b\u1ea3ng)")))),(0,r.kt)("h2",{id:"column-aliases"},"Column Aliases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"B\u1ea1n c\xf3 th\u1ec3 s\u1eed d\u1ee5ng aliases \u0111\u1ec3 \u0111\u1eb7t t\xean t\u1ea1m th\u1eddi cho m\u1ed9t c\u1ed9t trong c\xe2u l\u1ec7nh SELECT. Vi\u1ec7c n\xe0y c\xf3 th\u1ec3 h\u1eefu \xedch khi b\u1ea1n mu\u1ed1n \u0111\u1ed5i t\xean hi\u1ec3n th\u1ecb c\u1ee7a m\u1ed9t c\u1ed9t ho\u1eb7c khi s\u1eed d\u1ee5ng c\xe1c h\xe0m t\xednh to\xe1n ho\u1eb7c bi\u1ec3u th\u1ee9c trong SELECT v\xe0 mu\u1ed1n \u0111\u1eb7t t\xean cho k\u1ebft qu\u1ea3 c\u1ee7a ch\xfang"),(0,r.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column_name AS alias_name\nFROM table_name;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CustomerID AS ID, CustomerName AS Customer\nFROM Customers;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1706803728306",src:n(7661).Z,width:"1482",height:"397"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"N\u1ebfu t\xean b\xed danh c\xf3 ch\u1ee9a d\u1ea5u c\xe1ch, h\xe3y s\u1eed d\u1ee5ng nh\xe1y \u0111\u01a1n:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CustomerName AS Customer, ContactName AS 'Contact Person'\nFROM Customers;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Trong v\xed d\u1ee5 d\u01b0\u1edbi \u0111\xe2y, ta hi\u1ec3n th\u1ecb t\xean b\xed danh Address b\u1eb1ng c\xe1ch k\u1ebft h\u1ee3p 4 c\u1ed9t (Address, PostalCode, City v\xe0 Country):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CustomerName, CONCAT_WS(', ', Address, PostalCode, City, Country) AS Address\nFROM Customers;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1706803934387",src:n(9679).Z,width:"1483",height:"400"})),(0,r.kt)("h2",{id:"table-aliases"},"Table Aliases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"B\u1ea1n c\u0169ng c\xf3 th\u1ec3 s\u1eed d\u1ee5ng aliases \u0111\u1ec3 \u0111\u1eb7t t\xean t\u1ea1m th\u1eddi cho b\u1ea3ng trong c\xe2u l\u1ec7nh SELECT. \u0110i\u1ec1u n\xe0y h\u1eefu \xedch khi b\u1ea1n l\xe0m vi\u1ec7c v\u1edbi nhi\u1ec1u b\u1ea3ng v\xe0 mu\u1ed1n vi\u1ebft m\xe3 ng\u1eafn g\u1ecdn h\u01a1n b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng t\xean ng\u1eafn g\u1ecdn \u0111\u1ec3 tham chi\u1ebfu \u0111\u1ebfn b\u1ea3ng."),(0,r.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column_name\nFROM table_name AS alias_name;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT o.OrderID, o.OrderDate, c.CustomerName\nFROM Customers AS c, Orders AS o\nWHERE c.CustomerName='Around the Horn' AND c.CustomerID=o.CustomerID;\n")))}p.isMDXComponent=!0},7661:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1706803728306-e860c97c2e7536ff104c36a127e049a9.png"},9679:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1706803934387-68f953966932c9dc41904ba6ee408080.png"}}]);