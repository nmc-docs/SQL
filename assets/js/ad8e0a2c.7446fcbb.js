"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[3673],{8160:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var i=s(4848),r=s(8453);const l={sidebar_position:5},c="MySQL Constraints",t={id:"sql-constraints",title:"MySQL Constraints",description:"- C\xe1c r\xe0ng bu\u1ed9c SQL \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 ch\u1ec9 \u0111\u1ecbnh c\xe1c quy t\u1eafc cho d\u1eef li\u1ec7u trong b\u1ea3ng.",source:"@site/docs/sql-constraints.md",sourceDirName:".",slug:"/sql-constraints",permalink:"/SQL/sql-constraints",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Alter table trong MySQL",permalink:"/SQL/sql-alter-table"},next:{title:"MySQL Operators",permalink:"/SQL/sql-operators"}},a={},d=[{value:"NOT NULL",id:"not-null",level:2},{value:"UNIQUE",id:"unique",level:2},{value:"T\u1ea1o UNIQUE Constraints",id:"t\u1ea1o-unique-constraints",level:3},{value:"X\xf3a UNIQUE Constraints",id:"x\xf3a-unique-constraints",level:3},{value:"PRIMARY KEY",id:"primary-key",level:2},{value:"Th\xeam PRIMARY KEY",id:"th\xeam-primary-key",level:3},{value:"X\xf3a PRIMARY KEY",id:"x\xf3a-primary-key",level:3},{value:"FOREIGN KEY",id:"foreign-key",level:2},{value:"T\u1ea1o FOREIGN KEY",id:"t\u1ea1o-foreign-key",level:3},{value:"X\xf3a FOREIGN KEY",id:"x\xf3a-foreign-key",level:3},{value:"CHECK",id:"check",level:2},{value:"T\u1ea1o CHECK Constraints",id:"t\u1ea1o-check-constraints",level:3},{value:"X\xf3a CHECK Constraints",id:"x\xf3a-check-constraints",level:3},{value:"DEFAULT",id:"default",level:2},{value:"Th\xeam DEFAULT Constraints",id:"th\xeam-default-constraints",level:3},{value:"X\xf3a DEFAULT Constraints",id:"x\xf3a-default-constraints",level:3}];function o(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"mysql-constraints",children:"MySQL Constraints"})}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"C\xe1c r\xe0ng bu\u1ed9c SQL \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 ch\u1ec9 \u0111\u1ecbnh c\xe1c quy t\u1eafc cho d\u1eef li\u1ec7u trong b\u1ea3ng."}),"\n",(0,i.jsx)(e.li,{children:"C\xe1c r\xe0ng bu\u1ed9c \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 gi\u1edbi h\u1ea1n lo\u1ea1i d\u1eef li\u1ec7u c\xf3 th\u1ec3 \u0111\u01b0a v\xe0o b\u1ea3ng. \u0110i\u1ec1u n\xe0y \u0111\u1ea3m b\u1ea3o t\xednh ch\xednh x\xe1c v\xe0 \u0111\u1ed9 tin c\u1eady c\u1ee7a d\u1eef li\u1ec7u trong b\u1ea3ng. N\u1ebfu c\xf3 b\u1ea5t k\u1ef3 vi ph\u1ea1m n\xe0o gi\u1eefa r\xe0ng bu\u1ed9c v\xe0 h\xe0nh \u0111\u1ed9ng d\u1eef li\u1ec7u, h\xe0nh \u0111\u1ed9ng \u0111\xf3 s\u1ebd b\u1ecb h\u1ee7y b\u1ecf."}),"\n",(0,i.jsx)(e.li,{children:"C\xe1c r\xe0ng bu\u1ed9c c\xf3 th\u1ec3 l\xe0 c\u1ea5p \u0111\u1ed9 c\u1ed9t ho\u1eb7c c\u1ea5p \u0111\u1ed9 b\u1ea3ng. C\xe1c r\xe0ng bu\u1ed9c c\u1ea5p \u0111\u1ed9 c\u1ed9t \xe1p d\u1ee5ng cho m\u1ed9t c\u1ed9t v\xe0 c\xe1c r\xe0ng bu\u1ed9c c\u1ea5p \u0111\u1ed9 b\u1ea3ng \xe1p d\u1ee5ng cho to\xe0n b\u1ed9 b\u1ea3ng."}),"\n"]})}),"\n",(0,i.jsx)(e.h2,{id:"not-null",children:"NOT NULL"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u0110\u1ea3m b\u1ea3o d\u1eef li\u1ec7u c\u1ee7a c\u1ed9t kh\xf4ng c\xf3 gi\xe1 tr\u1ecb NULL khi t\u1ea1o b\u1ea3ng ho\u1eb7c s\u1eeda \u0111\u1ed5i ki\u1ec3u d\u1eef li\u1ec7u cho c\u1ed9t, v\xed d\u1ee5:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE Persons (\n    person_id INT NOT NULL,\n    last_name VARCHAR(255) NOT NULL,\n    first_name VARCHAR(255) NOT NULL,\n    age INT\n);\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"ALTER TABLE employee\nMODIFY email VARCHAR(20) NOT NULL;\n"})}),"\n",(0,i.jsx)(e.h2,{id:"unique",children:"UNIQUE"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u0110\u1ea3m b\u1ea3o c\xe1c t\u1ea5t c\u1ea3 c\xe1c gi\xe1 tr\u1ecb trong m\u1ed9t c\u1ed9t \u0111\u1ec1u kh\xe1c nhau"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"t\u1ea1o-unique-constraints",children:"T\u1ea1o UNIQUE Constraints"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["T\u1ea1o UNIQUE Constraints c\xf3 t\xean:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["UC_Person \u0111\u1ed1i v\u1edbi c\u1ed9t ",(0,i.jsx)(e.strong,{children:"id"})," v\xe0 ",(0,i.jsx)(e.strong,{children:"email"})," khi t\u1ea1o b\u1ea3ng"]}),"\n",(0,i.jsxs)(e.li,{children:["UC_Person2 \u0111\u1ed1i v\u1edbi c\u1ed9t ",(0,i.jsx)(e.strong,{children:"first_name"})," khi t\u1ea1o b\u1ea3ng"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE Persons (\n    id INT,\n    last_name VARCHAR(20),\n    first_name VARCHAR(20),\n    email VARCHAR(20),\n    age INT,\n    CONSTRAINT UC_Persons UNIQUE (id, email),\n    CONSTRAINT UC_Person2 UNIQUE (first_name)\n);\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"T\u01b0\u01a1ng t\u1ef1 nh\u01b0 khi ALTER TABLE:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"ALTER TABLE Persons\nADD CONSTRAINT UC_Person UNIQUE (id, email),\nADD CONSTRAINT UC_Person2 UNIQUE (first_name);\n"})}),"\n",(0,i.jsx)(e.h3,{id:"x\xf3a-unique-constraints",children:"X\xf3a UNIQUE Constraints"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u1ede b\xean tr\xean, ta \u0111\xe3 t\u1ea1o ra UNIQUE Constraints, b\xe2y gi\u1edd mu\u1ed1n x\xf3a h\xe3y d\u1ef1a v\xe0o t\xean c\u1ee7a constraints \u0111\xf3."}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"ALTER TABLE Persons\nDROP INDEX UC_Person,\nDROP INDEX UC_Person2;\n"})}),"\n",(0,i.jsx)(e.h2,{id:"primary-key",children:"PRIMARY KEY"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"L\xe0 kh\xf3a ch\xednh ph\xe2n bi\u1ec7t m\u1ed7i record trong m\u1ed9t b\u1ea3ng"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"th\xeam-primary-key",children:"Th\xeam PRIMARY KEY"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Khi CREATE TABLE:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE Persons (\n    id INT,\n    last_name VARCHAR(255),\n    first_name VARCHAR(255),\n    age INT,\n    PRIMARY KEY (id)\n);\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Khi ALTER TABLE:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"ALTER TABLE Persons\nADD PRIMARY KEY (id);\n"})}),"\n",(0,i.jsx)(e.h3,{id:"x\xf3a-primary-key",children:"X\xf3a PRIMARY KEY"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"ALTER TABLE Persons\nDROP PRIMARY KEY;\n"})}),"\n",(0,i.jsx)(e.h2,{id:"foreign-key",children:"FOREIGN KEY"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"FOREIGN_KEY Constraints \u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3 ng\u0103n ch\u1eb7n h\xe0nh vi x\xf3a li\xean k\u1ebft gi\u1eefa c\xe1c b\u1ea3ng"}),"\n",(0,i.jsx)(e.li,{children:"M\u1ed9t FOREIGN_KEY l\xe0 m\u1ed9t c\u1ed9t trong b\u1ea3ng, tham chi\u1ebfu \u0111\u1ebfn m\u1ed9t PRIMARY_KEY trong m\u1ed9t b\u1ea3ng kh\xe1c"}),"\n",(0,i.jsx)(e.li,{children:'B\u1ea3ng c\xf3 ch\u1ee9a FOREIGN_KEY \u0111\u01b0\u1ee3c g\u1ecdi l\xe0 "b\u1ea3ng con", v\xe0 b\u1ea3ng ch\u1ee9a kh\xf3a ch\xednh (PRIMARY_KEY) \u0111\u01b0\u1ee3c g\u1ecdi l\xe0 b\u1ea3ng cha'}),"\n",(0,i.jsx)(e.li,{children:"V\xed d\u1ee5:"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"1705850370062",src:s(1544).A+"",width:"1311",height:"651"})}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:'B\u1ea3ng "Orders" c\xf3 li\xean k\u1ebft v\u1edbi b\u1ea3ng "Persons" th\xf4ng qua column "PersonID"'}),"\n",(0,i.jsxs)(e.li,{children:["C\u1ed9t ",(0,i.jsx)(e.strong,{children:"PersonID"}),' \u1edf b\u1ea3ng "Persons" l\xe0 PRIMARY KEY c\u1ee7a b\u1ea3ng "Persons"']}),"\n",(0,i.jsxs)(e.li,{children:["C\u1ed9t ",(0,i.jsx)(e.strong,{children:"PersonID"})," \u1edf b\u1ea3ng ",(0,i.jsx)(e.strong,{children:"Orders"}),' l\xe0 FOREIGN KEY c\u1ee7a b\u1ea3ng "Orders"']}),"\n",(0,i.jsx)(e.li,{children:"R\xe0ng bu\u1ed9c FOREIGN KEY ng\u0103n kh\xf4ng cho d\u1eef li\u1ec7u kh\xf4ng h\u1ee3p l\u1ec7 \u0111\u01b0\u1ee3c ch\xe8n v\xe0o c\u1ed9t kh\xf3a ngo\u1ea1i, v\xec n\xf3 ph\u1ea3i l\xe0 m\u1ed9t trong c\xe1c gi\xe1 tr\u1ecb c\xf3 trong b\u1ea3ng cha."}),"\n"]})}),"\n",(0,i.jsx)(e.h3,{id:"t\u1ea1o-foreign-key",children:"T\u1ea1o FOREIGN KEY"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Khi CREATE TABLE:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE Orders (\n    order_id INT,\n    order_number INT,\n    person_id INT,\n    PRIMARY KEY (order_id),\n    CONSTRAINT FK_PersonOrder FOREIGN KEY (person_id)\n    REFERENCES Persons(person_id)\n);\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Khi ALTER TABLE:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"ALTER TABLE Orders\nADD CONSTRAINT FK_PersonOrder\nFOREIGN KEY (person_id) REFERENCES Persons(person_id);\n"})}),"\n",(0,i.jsx)(e.h3,{id:"x\xf3a-foreign-key",children:"X\xf3a FOREIGN KEY"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u1ede b\xean tr\xean ta \u0111\xe3 t\u1ea1o m\u1ed9t FOREIGN KEY c\xf3 t\xean ",(0,i.jsx)(e.strong,{children:"FK_PersonOrder"}),", h\xe3y d\u1ef1a v\xe0o t\xean n\xe0y \u0111\u1ec3 x\xf3a n\xf3:"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"ALTER TABLE Orders\nDROP FOREIGN KEY FK_PersonOrder;\n"})}),"\n",(0,i.jsx)(e.h2,{id:"check",children:"CHECK"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"CHECK Constraints \u0111\u1ea3m b\u1ea3o d\u1eef li\u1ec7u trong b\u1ea3ng ph\u1ea3i th\u1ecfa m\xe3n \u0111i\u1ec1u ki\u1ec7n n\xe0o \u0111\xf3."}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"t\u1ea1o-check-constraints",children:"T\u1ea1o CHECK Constraints"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Khi CREATE TABLE:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE Persons (\n    person_id INT,\n    last_name VARCHAR(20),\n    first_name VARCHAR(20),\n    email VARCHAR(20),\n    age INT,\n    PRIMARY KEY (person_id),\n    CONSTRAINT CHK_Person CHECK (age>=18 AND email='admin@gmail.com')\n);\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Khi ALTER TABLE:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"ALTER TABLE Persons\nADD CONSTRAINT CHK_PersonAge CHECK (age>=18 AND email='admin@gmail.com');\n"})}),"\n",(0,i.jsx)(e.h3,{id:"x\xf3a-check-constraints",children:"X\xf3a CHECK Constraints"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"ALTER TABLE Persons\nDROP CHECK CHK_PersonAge;\n"})}),"\n",(0,i.jsx)(e.h2,{id:"default",children:"DEFAULT"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"DEFAULT Constraints l\xe0 r\xe0ng bu\u1ed9c gi\xfap t\u1ea1o gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh cho m\u1ed9t c\u1ed9t n\u1ebfu n\xf3 kh\xf4ng \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh gi\xe1 tr\u1ecb"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"th\xeam-default-constraints",children:"Th\xeam DEFAULT Constraints"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Khi CREATE TABLE:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE Persons (\n  person_id INT,\n  last_name VARCHAR(20),\n  first_name VARCHAR(20),\n  email VARCHAR(20),\n  age INT,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  PRIMARY KEY (person_id),\n);\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Khi ALTER TABLE:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"ALTER TABLE Persons\nALTER created_at SET DEFAULT CURRENT_TIMESTAMP;\n"})}),"\n",(0,i.jsx)(e.h3,{id:"x\xf3a-default-constraints",children:"X\xf3a DEFAULT Constraints"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"ALTER TABLE Persons\nALTER created_at DROP DEFAULT;\n"})})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},1544:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/1705850370062-4bcb5b3742aa377a92830896b942bca4.png"},8453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>t});var i=s(6540);const r={},l=i.createContext(r);function c(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);