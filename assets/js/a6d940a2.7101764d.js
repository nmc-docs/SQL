"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[8267],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>h});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function u(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):u(u({},t),e)),l},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},o="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),o=c(l),m=a,h=o["".concat(s,".").concat(m)]||o[m]||k[m]||r;return l?n.createElement(h,u(u({ref:t},p),{},{components:l})):n.createElement(h,u({ref:t},p))}));function h(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,u=new Array(r);u[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[o]="string"==typeof e?e:a,u[1]=i;for(var c=2;c<r;c++)u[c]=l[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},1589:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=l(7462),a=(l(7294),l(3905));const r={sidebar_position:1},u="String Functions",i={unversionedId:"sql-functions/string-functions",id:"sql-functions/string-functions",title:"String Functions",description:"ASCII",source:"@site/docs/sql-functions/string-functions.md",sourceDirName:"sql-functions",slug:"/sql-functions/string-functions",permalink:"/SQL/sql-functions/string-functions",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"MySQL Functions",permalink:"/SQL/category/mysql-functions"},next:{title:"Numeric functions",permalink:"/SQL/sql-functions/numeric-functions"}},s={},c=[{value:"ASCII",id:"ascii",level:2},{value:"CHAR_LENGTH",id:"char_length",level:2},{value:"CONCAT",id:"concat",level:2},{value:"CONCAT_WS",id:"concat_ws",level:2},{value:"FORMAT",id:"format",level:2},{value:"INSERT",id:"insert",level:2},{value:"INSTR",id:"instr",level:2},{value:"LOCATE",id:"locate",level:2},{value:"LOWER",id:"lower",level:2},{value:"UPPER",id:"upper",level:2},{value:"LEFT",id:"left",level:2},{value:"RIGHT",id:"right",level:2},{value:"REPEAT",id:"repeat",level:2},{value:"LPAD",id:"lpad",level:2},{value:"RPAD",id:"rpad",level:2},{value:"REPLACE",id:"replace",level:2},{value:"REVERSE",id:"reverse",level:2},{value:"TRIM",id:"trim",level:2},{value:"STRCMP",id:"strcmp",level:2},{value:"SUBSTR",id:"substr",level:2},{value:"SUBSTRING_INDEX",id:"substring_index",level:2}],p={toc:c},o="wrapper";function k(e){let{components:t,...l}=e;return(0,a.kt)(o,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"string-functions"},"String Functions"),(0,a.kt)("h2",{id:"ascii"},"ASCII"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- Tr\u1ea3 v\u1ec1 m\u1ed9t s\u1ed1 l\xe0 gi\xe1 tr\u1ecb\xa0ASCII c\u1ee7a k\xed t\u1ef1\nASCII(chr)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'ASCII("$")\n--Return value: 36\n')),(0,a.kt)("h2",{id:"char_length"},"CHAR_LENGTH"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- Tr\u1ea3 v\u1ec1 m\u1ed9t s\u1ed1 l\xe0\xa0\u0111\u1ed9 d\xe0i c\u1ee7a chu\u1ed7i.\nCHAR_LENGTH(str)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CHAR_LENGTH("SQL Tutorial")\n-- Return value: 12\n')),(0,a.kt)("h2",{id:"concat"},"CONCAT"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- Tr\u1ea3 v\u1ec1 chu\u1ed7i m\u1edbi sau khi n\u1ed1i t\u1ea5t c\u1ea3 c\xe1c chu\u1ed7i v1, v2,... l\u1ea1i v\u1edbi nhau\nCONCAT(v1, v2,...)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CONCAT("SQL ", "Tutorial ", "is ", "fun!")\n-- Return value: "SQL Tutorial is fun!"\n')),(0,a.kt)("h2",{id:"concat_ws"},"CONCAT_WS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- Tr\u1ea3 v\u1ec1 chu\u1ed7i m\u1edbi sau khi n\u1ed1i t\u1ea5t c\u1ea3 c\xe1c chu\u1ed7i v1, v2,... l\u1ea1i v\u1edbi nhau\nCONCAT_WS(separator, str1, str2,...)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CONCAT_WS("-", "SQL", "Tutorial", "is", "fun!")\n-- Return value: "SQL-Tutorial-is-fun!"\n')),(0,a.kt)("h2",{id:"format"},"FORMAT"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- Tr\u1ea3 v\u1ec1 m\u1ed9t s\u1ed1 \u1edf d\u1ea1ng chu\u1ed7i sau khi \u0111\u01b0\u1ee3c l\xe0m tr\xf2n sau d\u1ea5u ph\u1ea9y\nFORMAT(number, decimal_places)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'FORMAT(250500.5634, 2)\n-- Return value: "250500.56"\n')),(0,a.kt)("h2",{id:"insert"},"INSERT"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- Tr\u1ea3 v\u1ec1 m\u1ed9t chu\u1ed7i sau khi ch\xe8n `newstr` v\xe0o `str` \u1edf v\u1ecb tr\xed `position` (ch\u1ec9 s\u1ed1 t\xednh t\u1eeb 1) v\xe0 thay th\u1ebf `length` s\u1ed1 l\u01b0\u1ee3ng k\xed t\u1ef1 \u1edf chu\u1ed7i `str`\nINSERT(str, position, length, newstr)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'INSERT("W3Schools.com", 11, 3, "no")\n-- Return value: "W3Schools.no"\n')),(0,a.kt)("h2",{id:"instr"},"INSTR"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- Tr\u1ea3 v\u1ec1 v\u1ecb tr\xed \u0111\u1ea7u ti\xean (t\xednh t\u1eeb 1) m\xe0 chu\u1ed7i `substr` xu\u1ea5t hi\u1ec7n trong `str` (kh\xf4ng ph\xe2n bi\u1ec7t ch\u1eef hoa, th\u01b0\u1eddng).\n-- N\u1ebfu kh\xf4ng t\xecm th\u1ea5y, tr\u1ea3 v\u1ec1 0\nINSTR(str, substr)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'INSTR("W3Schools.com", "sCH")\n-- Return value: 3\n')),(0,a.kt)("h2",{id:"locate"},"LOCATE"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'-- Tr\u1ea3 v\u1ec1 v\u1ecb tr\xed \u0111\u1ea7u ti\xean (t\xednh t\u1eeb 1) m\xe0 chu\u1ed7i `substr` xu\u1ea5t hi\u1ec7n trong `str` (kh\xf4ng ph\xe2n bi\u1ec7t ch\u1eef hoa, th\u01b0\u1eddng) b\u1eaft \u0111\u1ea7u t\u1eeb v\u1ecb tr\xed `position`.\xa0\n-- N\u1ebfu kh\xf4ng t\xecm th\u1ea5y, tr\u1ea3 v\u1ec1 0\n-- "position" l\xe0 t\xf9y ch\u1ecdn (gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh l\xe0 1)\nLOCATE(substr, str, position)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'LOCATE("s", "W3Schools.com", 4)\n-- Return value: 9\n')),(0,a.kt)("h2",{id:"lower"},"LOWER"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- Tr\u1ea3 v\u1ec1 m\u1ed9t chu\u1ed7i m\u1edbi \u0111\u01b0\u1ee3c bi\u1ebfn \u0111\u1ed5i in th\u01b0\u1eddng t\u1eeb chu\u1ed7i ban \u0111\u1ea7u\nLOWER(text)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'LOWER("AhuOpuMY")\n-- Return value: "ahuopumy"\n')),(0,a.kt)("h2",{id:"upper"},"UPPER"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- Tr\u1ea3 v\u1ec1 m\u1ed9t chu\u1ed7i m\u1edbi \u0111\u01b0\u1ee3c bi\u1ebfn \u0111\u1ed5i in hoa t\u1eeb chu\u1ed7i ban \u0111\u1ea7u\nUPPER(text)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'UPPER("SQL Tutorial is FUN!")\n-- Return value: "SQL TUTORIAL IS FUN!"\n')),(0,a.kt)("h2",{id:"left"},"LEFT"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- Tr\u1ea3 v\u1ec1 m\u1ed9t chu\u1ed7i m\u1edbi sau khi l\u1ea5y `number_of_chars` k\xed t\u1ef1 \u0111\u1ea7u ti\xean c\u1ee7a chu\u1ed7i `str`\nLEFT(str, number_of_chars)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'LEFT("SQL Tutorial", 5)\n-- Return value: "SQL T"\n')),(0,a.kt)("h2",{id:"right"},"RIGHT"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- Tr\u1ea3 v\u1ec1 m\u1ed9t chu\u1ed7i m\u1edbi sau khi l\u1ea5y `number_of_chars` k\xed t\u1ef1 cu\u1ed1i c\xf9ng\xa0c\u1ee7a chu\u1ed7i `str`\nRIGHT(str, number_of_chars)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'RIGHT("SQL Tutorial is cool", 4)\n-- Return value: "cool"\n')),(0,a.kt)("h2",{id:"repeat"},"REPEAT"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'-- Tr\u1ea3 v\u1ec1 m\u1ed9t chu\u1ed7i m\u1edbi sau khi l\u1eb7p l\u1ea1i chu\u1ed7i "str" "count" l\u1ea7n\nREPEAT(str, count)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'REPEAT("MySQL ", 3)\n-- Return value: "MySQL MySQL MySQL"\n')),(0,a.kt)("h2",{id:"lpad"},"LPAD"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'-- Tr\u1ea3 v\u1ec1 m\u1ed9t chu\u1ed7i m\u1edbi c\xf3 \u0111\u1ed9 d\xe0i \u0111\xfang "length" k\xed t\u1ef1 sau khi ch\xe8n chu\u1ed7i "padstr" v\xe0o \u0111\u1ea7u chu\u1ed7i "str"\nLPAD(str, len, padstr)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'LPAD("SQL Tutorial", 20, "ABC ")\n-- Return value: "ABC ABC SQL Tutorial"\n')),(0,a.kt)("h2",{id:"rpad"},"RPAD"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'-- Tr\u1ea3 v\u1ec1 m\u1ed9t chu\u1ed7i m\u1edbi c\xf3 \u0111\u1ed9 d\xe0i \u0111\xfang "length" k\xed t\u1ef1 sau khi ch\xe8n chu\u1ed7i "padstr" v\xe0o cu\u1ed1i chu\u1ed7i "str"\nRPAD(str, len, padstr)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'RPAD("SQL Tutorial", 20, "ABC")\n-- Return value: "SQL TutorialABCABCAB"\n')),(0,a.kt)("h2",{id:"replace"},"REPLACE"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'-- Tr\u1ea3 v\u1ec1 m\u1ed9t chu\u1ed7i m\u1edbi sau khi thay th\u1ebf t\u1ea5t c\u1ea3 chu\u1ed7i con "from_str" th\xe0nh "to_str" trong chu\u1ed7i "str" ban \u0111\u1ea7u. C\xf3 ph\xe2n bi\u1ec7t hoa th\u01b0\u1eddng.\nREPLACE(str, from_str, to_str)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'REPLACE("XYZ FGH XYZ", "X", "M")\n-- Return value: "MYZ FGH MYZ"\n')),(0,a.kt)("h2",{id:"reverse"},"REVERSE"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- Tr\u1ea3 v\u1ec1 m\u1ed9t chu\u1ed7i m\u1edbi sau khi \u0111\u1ea3o ng\u01b0\u1ee3c chu\u1ed7i ban \u0111\u1ea7u\nREVERSE(str)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'REVERSE("SQL Tutorial")\n-- Return value: "lairotuT LQS"\n')),(0,a.kt)("h2",{id:"trim"},"TRIM"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- Tr\u1ea3 v\u1ec1 m\u1ed9t chu\u1ed7i m\u1edbi sau khi lo\u1ea1i b\u1ecf t\u1ea5t c\u1ea3 kho\u1ea3ng tr\u1eafng \u1edf \u0111\u1ea7u v\xe0 cu\u1ed1i chu\u1ed7i ban \u0111\u1ea7u\nTRIM(str)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'TRIM("    SQL Tutorial    ")\n-- Return value: "SQL Tutorial"\n')),(0,a.kt)("h2",{id:"strcmp"},"STRCMP"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'-- So s\xe1nh gi\xe1 tr\u1ecb t\u1eeb \u0111i\u1ec3n c\u1ee7a 2 chu\u1ed7i.\n-- N\u1ebfu "str1 = str2", tr\u1ea3 v\u1ec1 0\n-- N\u1ebfu "str1 < str2", tr\u1ea3 v\u1ec1 -1\n-- N\u1ebfu "str1 > str2", tr\u1ea3 v\u1ec1 1\nSTRCMP(str1, str2)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'STRCMP("SQL Tutorial", "HTML Tutorial")\n-- Return value: 1\n')),(0,a.kt)("h2",{id:"substr"},"SUBSTR"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'-- Tr\u1ea3 v\u1ec1 m\u1ed9t chu\u1ed7i m\u1edbi sau khi t\xe1ch chu\u1ed7i ban \u0111\u1ea7u "str", b\u1eaft \u0111\u1ea7u t\u1eeb v\u1ecb tr\xed "position" v\xe0 l\u1ea5y "length" k\xed t\u1ef1\n-- "position" c\xf3 th\u1ec3 l\xe0 s\u1ed1 \xe2m, d\u01b0\u01a1ng. N\u1ebfu l\xe0 s\u1ed1 \xe2m, s\u1ebd t\xednh t\u1eeb cu\u1ed1i chu\u1ed7i l\xean, c\xf2n n\u1ebfu l\xe0 s\u1ed1 d\u01b0\u01a1ng, t\xednh t\u1eeb \u0111\u1ea7u chu\u1ed7i (ch\u1ec9 s\u1ed1 b\u1eaft \u0111\u1ea7u l\xe0 1)\n-- "length" c\xf3 th\u1ec3 ch\u1ec9 \u0111\u1ecbnh ho\u1eb7c kh\xf4ng. N\u1ebfu kh\xf4ng \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh, s\u1ebd c\u1eaft \u0111\u1ebfn h\u1ebft chu\u1ed7i.\nSUBSTR(str, position, length)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SUBSTR("MySQL is relational database", 2, 6)\n-- Return value: "ySQL i"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SUBSTR("SQL Tutorial", -7, 5)\n-- Return value: "utori"\n')),(0,a.kt)("h2",{id:"substring_index"},"SUBSTRING_INDEX"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'-- Tr\u1ea3 v\u1ec1 m\u1ed9t chu\u1ed7i m\u1edbi sau khi t\xe1ch chu\u1ed7i con c\u1ee7a chu\u1ed7i "str" cho \u0111\u1ebfn khi g\u1eb7p chu\u1ed7i "delim" l\u1ea7n th\u1ee9 "count"\n-- "count" c\xf3 th\u1ec3 l\xe0 s\u1ed1 \xe2m ho\u1eb7c d\u01b0\u01a1ng.\n-- N\u1ebfu "count" l\xe0 s\u1ed1 \xe2m, s\u1ebd t\xe1ch b\u1eaft \u0111\u1ea7u t\u1eeb cu\u1ed1i chu\u1ed7i t\xe1ch l\xean\n-- N\u1ebfu "count" l\xe0 s\u1ed1 d\u01b0\u01a1ng, s\u1ebd t\xe1ch b\u1eaft \u0111\u1ea7u t\u1eeb \u0111\u1ea7u chu\u1ed7i\nSUBSTRING_INDEX(str, delim, count)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SUBSTRING_INDEX("www.w3schools.com", ".", 2)\n-- Return value: "www.w3schools"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SUBSTRING_INDEX("www.w3schools.com", ".", -2)\n-- Return value: "w3schools.com"\n')))}k.isMDXComponent=!0}}]);