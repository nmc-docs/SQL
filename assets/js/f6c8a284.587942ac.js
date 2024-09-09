"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[635],{6196:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var l=s(4848),t=s(8453);const c={sidebar_position:6},i="MySQL ALIASES",a={id:"sql-select/sql-aliases",title:"MySQL ALIASES",description:'- Trong SQL, t\u1eeb kh\xf3a "aliases" \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 t\u1ea1o b\xed danh cho b\u1ea3ng ho\u1eb7c c\u1ed9t trong c\xe2u l\u1ec7nh SELECT. Aliases cho ph\xe9p b\u1ea1n \u0111\u1eb7t t\xean t\u1ea1m th\u1eddi cho b\u1ea3ng ho\u1eb7c c\u1ed9t m\xe0 b\u1ea1n mu\u1ed1n s\u1eed d\u1ee5ng trong c\xe2u l\u1ec7nh SELECT.',source:"@site/docs/sql-select/sql-aliases.md",sourceDirName:"sql-select",slug:"/sql-select/sql-aliases",permalink:"/SQL/sql-select/sql-aliases",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"MySQL GROUP BY",permalink:"/SQL/sql-select/sql-group-by"},next:{title:"MySQL HAVING",permalink:"/SQL/sql-select/sql-having"}},r={},h=[{value:"Column Aliases",id:"column-aliases",level:2},{value:"Table Aliases",id:"table-aliases",level:2}];function o(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"mysql-aliases",children:"MySQL ALIASES"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:'Trong SQL, t\u1eeb kh\xf3a "aliases" \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 t\u1ea1o b\xed danh cho b\u1ea3ng ho\u1eb7c c\u1ed9t trong c\xe2u l\u1ec7nh SELECT. Aliases cho ph\xe9p b\u1ea1n \u0111\u1eb7t t\xean t\u1ea1m th\u1eddi cho b\u1ea3ng ho\u1eb7c c\u1ed9t m\xe0 b\u1ea1n mu\u1ed1n s\u1eed d\u1ee5ng trong c\xe2u l\u1ec7nh SELECT.'}),"\n",(0,l.jsxs)(e.li,{children:["C\xf3 hai lo\u1ea1i aliases trong SQL:","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Column Aliases (B\xed danh c\u1ed9t)"}),"\n",(0,l.jsx)(e.li,{children:"Table Aliases (B\xed danh b\u1ea3ng)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"column-aliases",children:"Column Aliases"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"B\u1ea1n c\xf3 th\u1ec3 s\u1eed d\u1ee5ng aliases \u0111\u1ec3 \u0111\u1eb7t t\xean t\u1ea1m th\u1eddi cho m\u1ed9t c\u1ed9t trong c\xe2u l\u1ec7nh SELECT. Vi\u1ec7c n\xe0y c\xf3 th\u1ec3 h\u1eefu \xedch khi b\u1ea1n mu\u1ed1n \u0111\u1ed5i t\xean hi\u1ec3n th\u1ecb c\u1ee7a m\u1ed9t c\u1ed9t ho\u1eb7c khi s\u1eed d\u1ee5ng c\xe1c h\xe0m t\xednh to\xe1n ho\u1eb7c bi\u1ec3u th\u1ee9c trong SELECT v\xe0 mu\u1ed1n \u0111\u1eb7t t\xean cho k\u1ebft qu\u1ea3 c\u1ee7a ch\xfang"}),"\n",(0,l.jsx)(e.li,{children:"C\xfa ph\xe1p:"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT column_name AS alias_name\nFROM table_name;\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"V\xed d\u1ee5:"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT CustomerID AS ID, CustomerName AS Customer\nFROM Customers;\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"1706803728306",src:s(9903).A+"",width:"1482",height:"397"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"N\u1ebfu t\xean b\xed danh c\xf3 ch\u1ee9a d\u1ea5u c\xe1ch, h\xe3y s\u1eed d\u1ee5ng nh\xe1y \u0111\u01a1n:"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT CustomerName AS Customer, ContactName AS 'Contact Person'\nFROM Customers;\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Trong v\xed d\u1ee5 d\u01b0\u1edbi \u0111\xe2y, ta hi\u1ec3n th\u1ecb t\xean b\xed danh Address b\u1eb1ng c\xe1ch k\u1ebft h\u1ee3p 4 c\u1ed9t (Address, PostalCode, City v\xe0 Country):"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT CustomerName, CONCAT_WS(', ', Address, PostalCode, City, Country) AS Address\nFROM Customers;\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"1706803934387",src:s(3381).A+"",width:"1483",height:"400"})}),"\n",(0,l.jsx)(e.h2,{id:"table-aliases",children:"Table Aliases"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"B\u1ea1n c\u0169ng c\xf3 th\u1ec3 s\u1eed d\u1ee5ng aliases \u0111\u1ec3 \u0111\u1eb7t t\xean t\u1ea1m th\u1eddi cho b\u1ea3ng trong c\xe2u l\u1ec7nh SELECT. \u0110i\u1ec1u n\xe0y h\u1eefu \xedch khi b\u1ea1n l\xe0m vi\u1ec7c v\u1edbi nhi\u1ec1u b\u1ea3ng v\xe0 mu\u1ed1n vi\u1ebft m\xe3 ng\u1eafn g\u1ecdn h\u01a1n b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng t\xean ng\u1eafn g\u1ecdn \u0111\u1ec3 tham chi\u1ebfu \u0111\u1ebfn b\u1ea3ng."}),"\n",(0,l.jsx)(e.li,{children:"C\xfa ph\xe1p:"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT column_name\nFROM table_name AS alias_name;\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"V\xed d\u1ee5:"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT o.OrderID, o.OrderDate, c.CustomerName\nFROM Customers AS c, Orders AS o\nWHERE c.CustomerName='Around the Horn' AND c.CustomerID=o.CustomerID;\n"})})]})}function d(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},9903:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/1706803728306-e860c97c2e7536ff104c36a127e049a9.png"},3381:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/1706803934387-68f953966932c9dc41904ba6ee408080.png"},8453:(n,e,s)=>{s.d(e,{R:()=>i,x:()=>a});var l=s(6540);const t={},c=l.createContext(t);function i(n){const e=l.useContext(c);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),l.createElement(c.Provider,{value:e},n.children)}}}]);