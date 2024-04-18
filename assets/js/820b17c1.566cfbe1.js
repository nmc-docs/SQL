"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[8754],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:10},o="MySQL UPDATE",i={unversionedId:"sql-update",id:"sql-update",title:"MySQL UPDATE",description:"UPDATE l\xe0 g\xec?",source:"@site/docs/sql-update.md",sourceDirName:".",slug:"/sql-update",permalink:"/SQL/sql-update",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"MySQL INSERT INTO",permalink:"/SQL/sql-insert"},next:{title:"MySQL DELETE",permalink:"/SQL/sql-delete"}},c={},u=[{value:"UPDATE l\xe0 g\xec?",id:"update-l\xe0-g\xec",level:2},{value:"V\xed d\u1ee5",id:"v\xed-d\u1ee5",level:2}],p={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mysql-update"},"MySQL UPDATE"),(0,a.kt)("h2",{id:"update-l\xe0-g\xec"},"UPDATE l\xe0 g\xec?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xe2u l\u1ec7nh ",(0,a.kt)("strong",{parentName:"li"},"UPDATE")," d\xf9ng \u0111\u1ec3 c\u1eadp nh\u1eadt record trong b\u1ea3ng."),(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE table_name\nSET column1 = value1, column2 = value2, ...\nWHERE condition;\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"N\u1ebfu ta b\u1ecf qua m\u1ec7nh \u0111\u1ec1 ",(0,a.kt)("strong",{parentName:"li"},"WHERE")," th\xec n\xf3 s\u1ebd update t\u1ea5t c\u1ea3 c\xe1c record trong b\u1ea3ng"))),(0,a.kt)("h2",{id:"v\xed-d\u1ee5"},"V\xed d\u1ee5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Update gi\xe1 tr\u1ecb c\u1ee7a c\u1ed9t ",(0,a.kt)("inlineCode",{parentName:"li"},"ContactName")," v\xe0 ",(0,a.kt)("inlineCode",{parentName:"li"},"City")," v\u1edbi customer c\xf3 ",(0,a.kt)("inlineCode",{parentName:"li"},"CustomerID = 1"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE Customers\nSET ContactName = 'Alfred Schmidt', City = 'Frankfurt'\nWHERE CustomerID = 1;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Update gi\xe1 tr\u1ecb c\u1ed9t ",(0,a.kt)("inlineCode",{parentName:"li"},"PostalCode")," \u0111\u1ed1i v\u1edbi nh\u1eefng customer c\xf3 ",(0,a.kt)("inlineCode",{parentName:"li"},"Country = 'Mexico'"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE Customers\nSET PostalCode = 00000\nWHERE Country = 'Mexico';\n")))}d.isMDXComponent=!0}}]);