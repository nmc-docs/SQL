"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[407],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>k});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var o=a.createContext({}),c=function(n){var e=a.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=c(n.components);return a.createElement(o.Provider,{value:e},n.children)},p="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},E=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,l=n.originalType,o=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),p=c(t),E=r,k=p["".concat(o,".").concat(E)]||p[E]||m[E]||l;return t?a.createElement(k,i(i({ref:e},u),{},{components:t})):a.createElement(k,i({ref:e},u))}));function k(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=t.length,i=new Array(l);i[0]=E;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=n,s[p]="string"==typeof n?n:r,i[1]=s;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}E.displayName="MDXCreateElement"},9539:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const l={sidebar_position:5},i="MySQL Constraints",s={unversionedId:"sql-constraints",id:"sql-constraints",title:"MySQL Constraints",description:"- C\xe1c r\xe0ng bu\u1ed9c SQL \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 ch\u1ec9 \u0111\u1ecbnh c\xe1c quy t\u1eafc cho d\u1eef li\u1ec7u trong b\u1ea3ng.",source:"@site/docs/sql-constraints.md",sourceDirName:".",slug:"/sql-constraints",permalink:"/SQL/sql-constraints",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Alter table trong MySQL",permalink:"/SQL/sql-alter-table"},next:{title:"MySQL SELECT",permalink:"/SQL/category/mysql-select"}},o={},c=[{value:"NOT NULL",id:"not-null",level:2},{value:"UNIQUE",id:"unique",level:2},{value:"T\u1ea1o UNIQUE Constraints",id:"t\u1ea1o-unique-constraints",level:3},{value:"X\xf3a UNIQUE Constraints",id:"x\xf3a-unique-constraints",level:3},{value:"PRIMARY KEY",id:"primary-key",level:2},{value:"Th\xeam PRIMARY KEY",id:"th\xeam-primary-key",level:3},{value:"X\xf3a PRIMARY KEY",id:"x\xf3a-primary-key",level:3},{value:"FOREIGN KEY",id:"foreign-key",level:2},{value:"T\u1ea1o FOREIGN KEY",id:"t\u1ea1o-foreign-key",level:3},{value:"X\xf3a FOREIGN KEY",id:"x\xf3a-foreign-key",level:3},{value:"CHECK",id:"check",level:2},{value:"T\u1ea1o CHECK Constraints",id:"t\u1ea1o-check-constraints",level:3},{value:"X\xf3a CHECK Constraints",id:"x\xf3a-check-constraints",level:3},{value:"DEFAULT",id:"default",level:2},{value:"Th\xeam DEFAULT Constraints",id:"th\xeam-default-constraints",level:3},{value:"X\xf3a DEFAULT Constraints",id:"x\xf3a-default-constraints",level:3}],u={toc:c},p="wrapper";function m(n){let{components:e,...l}=n;return(0,r.kt)(p,(0,a.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mysql-constraints"},"MySQL Constraints"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"C\xe1c r\xe0ng bu\u1ed9c SQL \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 ch\u1ec9 \u0111\u1ecbnh c\xe1c quy t\u1eafc cho d\u1eef li\u1ec7u trong b\u1ea3ng."),(0,r.kt)("li",{parentName:"ul"},"C\xe1c r\xe0ng bu\u1ed9c \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 gi\u1edbi h\u1ea1n lo\u1ea1i d\u1eef li\u1ec7u c\xf3 th\u1ec3 \u0111\u01b0a v\xe0o b\u1ea3ng. \u0110i\u1ec1u n\xe0y \u0111\u1ea3m b\u1ea3o t\xednh ch\xednh x\xe1c v\xe0 \u0111\u1ed9 tin c\u1eady c\u1ee7a d\u1eef li\u1ec7u trong b\u1ea3ng. N\u1ebfu c\xf3 b\u1ea5t k\u1ef3 vi ph\u1ea1m n\xe0o gi\u1eefa r\xe0ng bu\u1ed9c v\xe0 h\xe0nh \u0111\u1ed9ng d\u1eef li\u1ec7u, h\xe0nh \u0111\u1ed9ng \u0111\xf3 s\u1ebd b\u1ecb h\u1ee7y b\u1ecf."),(0,r.kt)("li",{parentName:"ul"},"C\xe1c r\xe0ng bu\u1ed9c c\xf3 th\u1ec3 l\xe0 c\u1ea5p \u0111\u1ed9 c\u1ed9t ho\u1eb7c c\u1ea5p \u0111\u1ed9 b\u1ea3ng. C\xe1c r\xe0ng bu\u1ed9c c\u1ea5p \u0111\u1ed9 c\u1ed9t \xe1p d\u1ee5ng cho m\u1ed9t c\u1ed9t v\xe0 c\xe1c r\xe0ng bu\u1ed9c c\u1ea5p \u0111\u1ed9 b\u1ea3ng \xe1p d\u1ee5ng cho to\xe0n b\u1ed9 b\u1ea3ng."))),(0,r.kt)("h2",{id:"not-null"},"NOT NULL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0110\u1ea3m b\u1ea3o d\u1eef li\u1ec7u c\u1ee7a c\u1ed9t kh\xf4ng c\xf3 gi\xe1 tr\u1ecb NULL khi t\u1ea1o b\u1ea3ng ho\u1eb7c s\u1eeda \u0111\u1ed5i ki\u1ec3u d\u1eef li\u1ec7u cho c\u1ed9t, v\xed d\u1ee5:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Persons (\n    person_id INT NOT NULL,\n    last_name VARCHAR(255) NOT NULL,\n    first_name VARCHAR(255) NOT NULL,\n    age INT\n);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE employee\nMODIFY email VARCHAR(20) NOT NULL;\n")),(0,r.kt)("h2",{id:"unique"},"UNIQUE"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0110\u1ea3m b\u1ea3o c\xe1c t\u1ea5t c\u1ea3 c\xe1c gi\xe1 tr\u1ecb trong m\u1ed9t c\u1ed9t \u0111\u1ec1u kh\xe1c nhau")),(0,r.kt)("h3",{id:"t\u1ea1o-unique-constraints"},"T\u1ea1o UNIQUE Constraints"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"T\u1ea1o UNIQUE Constraints c\xf3 t\xean:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"UC_Person \u0111\u1ed1i v\u1edbi c\u1ed9t ",(0,r.kt)("strong",{parentName:"li"},"id")," v\xe0 ",(0,r.kt)("strong",{parentName:"li"},"email")," khi t\u1ea1o b\u1ea3ng"),(0,r.kt)("li",{parentName:"ul"},"UC_Person2 \u0111\u1ed1i v\u1edbi c\u1ed9t ",(0,r.kt)("strong",{parentName:"li"},"first_name")," khi t\u1ea1o b\u1ea3ng")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Persons (\n    id INT,\n    last_name VARCHAR(20),\n    first_name VARCHAR(20),\n    email VARCHAR(20),\n    age INT,\n    CONSTRAINT UC_Persons UNIQUE (id, email),\n    CONSTRAINT UC_Person2 UNIQUE (first_name)\n);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"T\u01b0\u01a1ng t\u1ef1 nh\u01b0 khi ALTER TABLE:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE Persons\nADD CONSTRAINT UC_Person UNIQUE (id, email),\nADD CONSTRAINT UC_Person2 UNIQUE (first_name);\n")),(0,r.kt)("h3",{id:"x\xf3a-unique-constraints"},"X\xf3a UNIQUE Constraints"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u1ede b\xean tr\xean, ta \u0111\xe3 t\u1ea1o ra UNIQUE Constraints, b\xe2y gi\u1edd mu\u1ed1n x\xf3a h\xe3y d\u1ef1a v\xe0o t\xean c\u1ee7a constraints \u0111\xf3.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE Persons\nDROP INDEX UC_Person,\nDROP INDEX UC_Person2;\n")),(0,r.kt)("h2",{id:"primary-key"},"PRIMARY KEY"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"L\xe0 kh\xf3a ch\xednh ph\xe2n bi\u1ec7t m\u1ed7i record trong m\u1ed9t b\u1ea3ng")),(0,r.kt)("h3",{id:"th\xeam-primary-key"},"Th\xeam PRIMARY KEY"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Khi CREATE TABLE:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Persons (\n    id INT,\n    last_name VARCHAR(255),\n    first_name VARCHAR(255),\n    age INT,\n    PRIMARY KEY (id)\n);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Khi ALTER TABLE:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE Persons\nADD PRIMARY KEY (id);\n")),(0,r.kt)("h3",{id:"x\xf3a-primary-key"},"X\xf3a PRIMARY KEY"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE Persons\nDROP PRIMARY KEY;\n")),(0,r.kt)("h2",{id:"foreign-key"},"FOREIGN KEY"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FOREIGN_KEY Constraints \u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3 ng\u0103n ch\u1eb7n h\xe0nh vi x\xf3a li\xean k\u1ebft gi\u1eefa c\xe1c b\u1ea3ng"),(0,r.kt)("li",{parentName:"ul"},"M\u1ed9t FOREIGN_KEY l\xe0 m\u1ed9t c\u1ed9t trong b\u1ea3ng, tham chi\u1ebfu \u0111\u1ebfn m\u1ed9t PRIMARY_KEY trong m\u1ed9t b\u1ea3ng kh\xe1c"),(0,r.kt)("li",{parentName:"ul"},'B\u1ea3ng c\xf3 ch\u1ee9a FOREIGN_KEY \u0111\u01b0\u1ee3c g\u1ecdi l\xe0 "b\u1ea3ng con", v\xe0 b\u1ea3ng ch\u1ee9a kh\xf3a ch\xednh (PRIMARY_KEY) \u0111\u01b0\u1ee3c g\u1ecdi l\xe0 b\u1ea3ng cha'),(0,r.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1705850370062",src:t(7458).Z,width:"1311",height:"651"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},'B\u1ea3ng "Orders" c\xf3 li\xean k\u1ebft v\u1edbi b\u1ea3ng "Persons" th\xf4ng qua column "PersonID"'),(0,r.kt)("li",{parentName:"ul"},"C\u1ed9t ",(0,r.kt)("strong",{parentName:"li"},"PersonID"),' \u1edf b\u1ea3ng "Persons" l\xe0 PRIMARY KEY c\u1ee7a b\u1ea3ng "Persons"'),(0,r.kt)("li",{parentName:"ul"},"C\u1ed9t ",(0,r.kt)("strong",{parentName:"li"},"PersonID")," \u1edf b\u1ea3ng ",(0,r.kt)("strong",{parentName:"li"},"Orders"),' l\xe0 FOREIGN KEY c\u1ee7a b\u1ea3ng "Orders"'),(0,r.kt)("li",{parentName:"ul"},"R\xe0ng bu\u1ed9c FOREIGN KEY ng\u0103n kh\xf4ng cho d\u1eef li\u1ec7u kh\xf4ng h\u1ee3p l\u1ec7 \u0111\u01b0\u1ee3c ch\xe8n v\xe0o c\u1ed9t kh\xf3a ngo\u1ea1i, v\xec n\xf3 ph\u1ea3i l\xe0 m\u1ed9t trong c\xe1c gi\xe1 tr\u1ecb c\xf3 trong b\u1ea3ng cha."))),(0,r.kt)("h3",{id:"t\u1ea1o-foreign-key"},"T\u1ea1o FOREIGN KEY"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Khi CREATE TABLE:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Orders (\n    order_id INT,\n    order_number INT,\n    person_id INT,\n    PRIMARY KEY (order_id),\n    CONSTRAINT FK_PersonOrder FOREIGN KEY (person_id)\n    REFERENCES Persons(person_id)\n);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Khi ALTER TABLE:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE Orders\nADD CONSTRAINT FK_PersonOrder\nFOREIGN KEY (person_id) REFERENCES Persons(person_id);\n")),(0,r.kt)("h3",{id:"x\xf3a-foreign-key"},"X\xf3a FOREIGN KEY"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u1ede b\xean tr\xean ta \u0111\xe3 t\u1ea1o m\u1ed9t FOREIGN KEY c\xf3 t\xean ",(0,r.kt)("strong",{parentName:"li"},"FK_PersonOrder"),", h\xe3y d\u1ef1a v\xe0o t\xean n\xe0y \u0111\u1ec3 x\xf3a n\xf3:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE Orders\nDROP FOREIGN KEY FK_PersonOrder;\n")),(0,r.kt)("h2",{id:"check"},"CHECK"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CHECK Constraints \u0111\u1ea3m b\u1ea3o d\u1eef li\u1ec7u trong b\u1ea3ng ph\u1ea3i th\u1ecfa m\xe3n \u0111i\u1ec1u ki\u1ec7n n\xe0o \u0111\xf3.")),(0,r.kt)("h3",{id:"t\u1ea1o-check-constraints"},"T\u1ea1o CHECK Constraints"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Khi CREATE TABLE:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Persons (\n    person_id INT,\n    last_name VARCHAR(20),\n    first_name VARCHAR(20),\n    email VARCHAR(20),\n    age INT,\n    PRIMARY KEY (person_id),\n    CONSTRAINT CHK_Person CHECK (age>=18 AND email='admin@gmail.com')\n);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Khi ALTER TABLE:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE Persons\nADD CONSTRAINT CHK_PersonAge CHECK (age>=18 AND email='admin@gmail.com');\n")),(0,r.kt)("h3",{id:"x\xf3a-check-constraints"},"X\xf3a CHECK Constraints"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE Persons\nDROP CHECK CHK_PersonAge;\n")),(0,r.kt)("h2",{id:"default"},"DEFAULT"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DEFAULT Constraints l\xe0 r\xe0ng bu\u1ed9c gi\xfap t\u1ea1o gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh cho m\u1ed9t c\u1ed9t n\u1ebfu n\xf3 kh\xf4ng \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh gi\xe1 tr\u1ecb")),(0,r.kt)("h3",{id:"th\xeam-default-constraints"},"Th\xeam DEFAULT Constraints"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Khi CREATE TABLE:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Persons (\n  person_id INT,\n  last_name VARCHAR(20),\n  first_name VARCHAR(20),\n  email VARCHAR(20),\n  age INT,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  PRIMARY KEY (person_id),\n);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Khi ALTER TABLE:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE Persons\nALTER created_at SET DEFAULT CURRENT_TIMESTAMP;\n")),(0,r.kt)("h3",{id:"x\xf3a-default-constraints"},"X\xf3a DEFAULT Constraints"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE Persons\nALTER created_at DROP DEFAULT;\n")))}m.isMDXComponent=!0},7458:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/1705850370062-4bcb5b3742aa377a92830896b942bca4.png"}}]);