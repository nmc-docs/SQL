"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[214],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),o=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=o(t.components);return r.createElement(s.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=o(n),d=a,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(g,i(i({ref:e},u),{},{components:n})):r.createElement(g,i({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[p]="string"==typeof t?t:a,i[1]=c;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7804:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:9},i="MySQL ANY, ALL",c={unversionedId:"sql-select/sql-any-all",id:"sql-select/sql-any-all",title:"MySQL ANY, ALL",description:"ANY",source:"@site/docs/sql-select/sql-any-all.md",sourceDirName:"sql-select",slug:"/sql-select/sql-any-all",permalink:"/SQL/sql-select/sql-any-all",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"MySQL EXISTS",permalink:"/SQL/sql-select/sql-exists"},next:{title:"MySQL CASE",permalink:"/SQL/sql-select/sql-case"}},s={},o=[{value:"ANY",id:"any",level:2},{value:"ALL",id:"all",level:2}],u={toc:o},p="wrapper";function m(t){let{components:e,...l}=t;return(0,a.kt)(p,(0,r.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mysql-any-all"},"MySQL ANY, ALL"),(0,a.kt)("h2",{id:"any"},"ANY"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Trong SQL, t\u1eeb kh\xf3a "ANY" \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 so s\xe1nh m\u1ed9t gi\xe1 tr\u1ecb c\u1ee7a m\u1ed9t c\u1ed9t v\u1edbi m\u1ed9t t\u1eadp h\u1ee3p c\xe1c gi\xe1 tr\u1ecb v\xe0 tr\u1ea3 v\u1ec1 k\u1ebft qu\u1ea3 khi c\xf3 ',(0,a.kt)("strong",{parentName:"li"},"\xcdT NH\u1ea4T")," m\u1ed9t gi\xe1 tr\u1ecb trong t\u1eadp h\u1ee3p th\u1ecfa m\xe3n \u0111i\u1ec1u ki\u1ec7n."),(0,a.kt)("li",{parentName:"ul"},'T\u1eeb kh\xf3a "ANY" th\u01b0\u1eddng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng c\xf9ng v\u1edbi c\xe1c to\xe1n t\u1eed so s\xe1nh nh\u01b0 "=", ">", "<", ">=", "<=", "IN" v\xe0 "LIKE".'),(0,a.kt)("li",{parentName:"ul"},'To\xe1n t\u1eed "ANY" tr\u1ea3 v\u1ec1 TRUE n\u1ebfu b\u1ea5t k\u1ef3 gi\xe1 tr\u1ecb n\xe0o c\u1ee7a subquery th\u1ecfa m\xe3n \u0111i\u1ec1u ki\u1ec7n.'),(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column_name(s)\nFROM table_name\nWHERE column_name operator ANY\n  (SELECT column_name\n  FROM table_name\n  WHERE condition);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Gi\u1ea3 s\u1eed ta c\xf3 2 b\u1ea3ng ",(0,a.kt)("strong",{parentName:"li"},"Products")," v\xe0 ",(0,a.kt)("strong",{parentName:"li"},"OrderDetails")," l\u1ea7n l\u01b0\u1ee3t nh\u01b0 sau:")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1706890576862",src:n(9577).Z,width:"1273",height:"505"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1706890595840",src:n(9661).Z,width:"1270",height:"545"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ta c\xf3 c\xe2u query b\xean d\u01b0\u1edbi")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT ProductName\nFROM Products\nWHERE ProductID = ANY\n  (SELECT ProductID\n  FROM OrderDetails\n  WHERE Quantity = 10);\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"V\u1edbi subquery, ta l\u1ecdc ra nh\u1eefng ",(0,a.kt)("inlineCode",{parentName:"li"},"ProductID")," \u1edf b\u1ea3ng ",(0,a.kt)("strong",{parentName:"li"},"OrderDetails")," m\xe0 c\xf3 ",(0,a.kt)("inlineCode",{parentName:"li"},"Quantity")," (s\u1ed1 l\u01b0\u1ee3ng) = 10."),(0,a.kt)("li",{parentName:"ul"},"Ti\u1ebfp theo, ta s\u1ebd hi\u1ec3n th\u1ecb ra nh\u1eefng ",(0,a.kt)("inlineCode",{parentName:"li"},"ProductName")," \u1edf b\u1ea3ng ",(0,a.kt)("strong",{parentName:"li"},"Products")," m\xe0 c\xf3 ",(0,a.kt)("inlineCode",{parentName:"li"},"ProductID")," thu\u1ed9c m\u1ed9t trong s\u1ed1 c\xe1c ",(0,a.kt)("inlineCode",{parentName:"li"},"ProductID")," tr\u1ea3 v\u1ec1 \u1edf subquery tr\xean"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"K\u1ebft qu\u1ea3:")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1706891063298",src:n(418).Z,width:"1476",height:"403"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xe1ch kh\xe1c s\u1eed d\u1ee5ng ",(0,a.kt)("a",{parentName:"li",href:"./sql-exists"},"EXISTS"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT p.ProductName\nFROM Products p\nWHERE EXISTS (\n    SELECT 1\n    FROM OrderDetails od\n    WHERE od.ProductID = p.ProductID AND od.Quantity = 10\n)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"D\u01b0\u1edbi \u0111\xe2y l\xe0 m\u1ed9t s\u1ed1 v\xed d\u1ee5 kh\xe1c:")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1706971464970",src:n(7907).Z,width:"542",height:"668"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1706972142346",src:n(1235).Z,width:"467",height:"692"})),(0,a.kt)("h2",{id:"all"},"ALL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Trong SQL, t\u1eeb kh\xf3a "ALL" \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 so s\xe1nh m\u1ed9t gi\xe1 tr\u1ecb v\u1edbi t\u1ea5t c\u1ea3 c\xe1c gi\xe1 tr\u1ecb trong m\u1ed9t t\u1eadp h\u1ee3p. N\xf3 th\u01b0\u1eddng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng c\xf9ng v\u1edbi c\xe1c to\xe1n t\u1eed so s\xe1nh nh\u01b0 "=", ">", "<", ">=", "<=", "IN" v\xe0 "LIKE".'),(0,a.kt)("li",{parentName:"ul"},'Khi s\u1eed d\u1ee5ng t\u1eeb kh\xf3a "ALL", b\u1ea1n so s\xe1nh m\u1ed9t gi\xe1 tr\u1ecb v\u1edbi t\u1ea5t c\u1ea3 c\xe1c gi\xe1 tr\u1ecb trong m\u1ed9t danh s\xe1ch ho\u1eb7c k\u1ebft qu\u1ea3 c\u1ee7a m\u1ed9t c\xe2u truy v\u1ea5n con.'),(0,a.kt)("li",{parentName:"ul"},'To\xe1n t\u1eed "ALL" tr\u1ea3 v\u1ec1 TRUE n\u1ebfu t\u1ea5t c\u1ea3 gi\xe1 tr\u1ecb c\u1ee7a subquery th\u1ecfa m\xe3n \u0111i\u1ec1u ki\u1ec7n.'),(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column_name(s)\nFROM table_name\nWHERE column_name operator ALL\n  (SELECT column_name\n  FROM table_name\n  WHERE condition);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"M\u1ed9t s\u1ed1 v\xed d\u1ee5:")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1706972188546",src:n(8161).Z,width:"473",height:"597"})))}m.isMDXComponent=!0},9577:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1706890576862-7b7645e4ebaa20bbde1575ae5d208b2e.png"},9661:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1706890595840-44c68f3d661b11022e8de7ce08d5183a.png"},418:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1706891063298-045c15642b43d00c1d3902c9ac5741c0.png"},7907:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1706971464970-d7baa2d7edb2769663453420e262b56a.png"},1235:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1706972142346-a11785d1b0001a1a361085b2bd65cb2f.png"},8161:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1706972188546-75c6b663e4e6f0c523d484a22723bf64.png"}}]);