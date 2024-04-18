"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[7386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:10},i="MySQL CASE",c={unversionedId:"sql-select/sql-case",id:"sql-select/sql-case",title:"MySQL CASE",description:"- CASE trong SQL l\xe0 m\u1ed9t c\u1ea5u tr\xfac \u0111i\u1ec1u khi\u1ec3n \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 th\u1ef1c hi\u1ec7n c\xe1c ph\xe9p t\xednh ho\u1eb7c tr\u1ea3 v\u1ec1 k\u1ebft qu\u1ea3 d\u1ef1a tr\xean \u0111i\u1ec1u ki\u1ec7n x\xe1c \u0111\u1ecbnh. C\u1ea5u tr\xfac CASE cho ph\xe9p b\u1ea1n th\u1ef1c hi\u1ec7n c\xe1c c\xe2u l\u1ec7nh \u0111i\u1ec1u ki\u1ec7n t\xf9y thu\u1ed9c v\xe0o gi\xe1 tr\u1ecb c\u1ee7a m\u1ed9t c\u1ed9t ho\u1eb7c bi\u1ec3u th\u1ee9c trong c\xe2u l\u1ec7nh SELECT.",source:"@site/docs/sql-select/sql-case.md",sourceDirName:"sql-select",slug:"/sql-select/sql-case",permalink:"/SQL/sql-select/sql-case",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"MySQL ANY, ALL",permalink:"/SQL/sql-select/sql-any-all"},next:{title:"MySQL MIN, MAX, COUNT, SUM, AVG",permalink:"/SQL/sql-select/sql-min-max-avg-count-sum"}},o={},s=[{value:"V\xed d\u1ee5 1",id:"v\xed-d\u1ee5-1",level:2},{value:"V\xed d\u1ee5 2",id:"v\xed-d\u1ee5-2",level:2},{value:"V\xed d\u1ee5 3",id:"v\xed-d\u1ee5-3",level:2},{value:"V\xed d\u1ee5 4",id:"v\xed-d\u1ee5-4",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(p,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mysql-case"},"MySQL CASE"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CASE")," trong SQL l\xe0 m\u1ed9t c\u1ea5u tr\xfac \u0111i\u1ec1u khi\u1ec3n \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 th\u1ef1c hi\u1ec7n c\xe1c ph\xe9p t\xednh ho\u1eb7c tr\u1ea3 v\u1ec1 k\u1ebft qu\u1ea3 d\u1ef1a tr\xean \u0111i\u1ec1u ki\u1ec7n x\xe1c \u0111\u1ecbnh. C\u1ea5u tr\xfac ",(0,a.kt)("strong",{parentName:"li"},"CASE")," cho ph\xe9p b\u1ea1n th\u1ef1c hi\u1ec7n c\xe1c c\xe2u l\u1ec7nh \u0111i\u1ec1u ki\u1ec7n t\xf9y thu\u1ed9c v\xe0o gi\xe1 tr\u1ecb c\u1ee7a m\u1ed9t c\u1ed9t ho\u1eb7c bi\u1ec3u th\u1ee9c trong c\xe2u l\u1ec7nh ",(0,a.kt)("strong",{parentName:"li"},"SELECT"),"."),(0,a.kt)("li",{parentName:"ul"},"C\xe2u l\u1ec7nh ",(0,a.kt)("strong",{parentName:"li"},"CASE")," xem x\xe9t c\xe1c \u0111i\u1ec1u ki\u1ec7n v\xe0 tr\u1ea3 v\u1ec1 m\u1ed9t gi\xe1 tr\u1ecb khi \u0111i\u1ec1u ki\u1ec7n \u0111\u1ea7u ti\xean \u0111\u01b0\u1ee3c \u0111\xe1p \u1ee9ng (nh\u01b0 c\xe2u l\u1ec7nh if-then-else). V\xec v\u1eady, khi \u0111i\u1ec1u ki\u1ec7n \u0111\xfang, n\xf3 s\u1ebd ng\u1eebng \u0111\u1ecdc v\xe0 tr\u1ea3 v\u1ec1 k\u1ebft qu\u1ea3. N\u1ebfu kh\xf4ng c\xf3 \u0111i\u1ec1u ki\u1ec7n n\xe0o \u0111\xfang, n\xf3 s\u1ebd tr\u1ea3 v\u1ec1 gi\xe1 tr\u1ecb trong m\u1ec7nh \u0111\u1ec1 ",(0,a.kt)("strong",{parentName:"li"},"ELSE"),"."),(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CASE\n    WHEN condition1 THEN result1\n    WHEN condition2 THEN result2\n    WHEN conditionN THEN resultN\n    ELSE result\nEND;\n")),(0,a.kt)("h2",{id:"v\xed-d\u1ee5-1"},"V\xed d\u1ee5 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *,\nCASE\n  WHEN amount >= 10000 THEN 'Large Order'\n  WHEN amount < 10000 THEN 'Small Order'\nEND AS 'order_volume'\nFROM Orders;\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1706975377647",src:n(4593).Z,width:"925",height:"185"})),(0,a.kt)("h2",{id:"v\xed-d\u1ee5-2"},"V\xed d\u1ee5 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *,\nCASE\n  WHEN age >= 18 THEN 'Allowed'\n  ELSE 'Not allowed'\nEND AS can_vote\nFROM Customers;\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1706975532979",src:n(6914).Z,width:"927",height:"182"})),(0,a.kt)("h2",{id:"v\xed-d\u1ee5-3"},"V\xed d\u1ee5 3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *,\nCASE\n    WHEN country = 'USA' THEN 'United States of America'\n    WHEN country = 'UK' THEN 'United Kingdom'\n    ELSE 'Unknown Country'\nEND AS country_name\nFROM Customers;\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1706975660509",src:n(1575).Z,width:"926",height:"178"})),(0,a.kt)("h2",{id:"v\xed-d\u1ee5-4"},"V\xed d\u1ee5 4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xe2u query sau s\u1ebd s\u1eafp x\u1ebfp customers theo ",(0,a.kt)("inlineCode",{parentName:"li"},"City"),", n\u1ebfu ",(0,a.kt)("inlineCode",{parentName:"li"},"City")," c\xf3 gi\xe1 tr\u1ecb ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),", n\xf3 s\u1ebd s\u1eafp x\u1ebfp theo ",(0,a.kt)("inlineCode",{parentName:"li"},"Country"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CustomerName, City, Country\nFROM Customers\nORDER BY\n(CASE\n    WHEN City IS NULL THEN Country\n    ELSE City\nEND);\n")))}d.isMDXComponent=!0},4593:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1706975377647-e4b36c904542c7a214892072fa9796ee.png"},6914:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1706975532979-bee8ca14e5c8677a3f7f6fe9419a7663.png"},1575:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1706975660509-1c4cae0793361a4706de370cf6fb34d8.png"}}]);