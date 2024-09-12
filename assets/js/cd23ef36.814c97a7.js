"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[7537],{8180:(n,d,e)=>{e.r(d),e.d(d,{assets:()=>l,contentTitle:()=>r,default:()=>j,frontMatter:()=>i,metadata:()=>h,toc:()=>c});var t=e(4848),s=e(8453);const i={sidebar_position:3},r="Date functions",h={id:"sql-functions/date-functions",title:"Date functions",description:"DATE_ADD",source:"@site/docs/sql-functions/date-functions.md",sourceDirName:"sql-functions",slug:"/sql-functions/date-functions",permalink:"/SQL/sql-functions/date-functions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Numeric functions",permalink:"/SQL/sql-functions/numeric-functions"},next:{title:"Advanced functions",permalink:"/SQL/sql-functions/advanced-functions"}},l={},c=[{value:"DATE_ADD",id:"date_add",level:2},{value:"DATE_SUB",id:"date_sub",level:2},{value:"DATEDIFF",id:"datediff",level:2},{value:"DATE_FORMAT",id:"date_format",level:2},{value:"C\xe1c h\xe0m l\u1ea5y th\xf4ng tin c\u1ee7a date time",id:"c\xe1c-h\xe0m-l\u1ea5y-th\xf4ng-tin-c\u1ee7a-date-time",level:2},{value:"C\xe1c h\xe0m l\u1ea5y date time hi\u1ec7n t\u1ea1i",id:"c\xe1c-h\xe0m-l\u1ea5y-date-time-hi\u1ec7n-t\u1ea1i",level:2}];function x(n){const d={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.header,{children:(0,t.jsx)(d.h1,{id:"date-functions",children:"Date functions"})}),"\n",(0,t.jsx)(d.h2,{id:"date_add",children:"DATE_ADD"}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsx)(d.li,{children:"C\xfa ph\xe1p:"}),"\n"]}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-sql",children:"DATE_ADD(cur_date, INTERVAL value unit)\n"})}),"\n",(0,t.jsx)(d.admonition,{type:"info",children:(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsxs)(d.li,{children:["Trong \u0111\xf3:","\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsxs)(d.li,{children:[(0,t.jsx)(d.strong,{children:"cur_date"}),": ng\xe0y gi\u1edd c\u1ea7n thay \u0111\u1ed5i"]}),"\n",(0,t.jsxs)(d.li,{children:[(0,t.jsx)(d.strong,{children:"value"}),": gi\xe1 tr\u1ecb th\u1eddi gian c\u1ea7n th\xeam"]}),"\n",(0,t.jsxs)(d.li,{children:[(0,t.jsx)(d.strong,{children:"unit"}),": \u0111\u01a1n v\u1ecb th\u1eddi gian c\u1ea7n th\xeam"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(d.li,{children:"H\xe0m tr\xean tr\u1ea3 v\u1ec1 m\u1ed9t DATE ho\u1eb7c DATETIME sau khi \u0111\u01b0\u1ee3c th\xeam v\xe0o"}),"\n"]})}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Unit"}),(0,t.jsx)(d.th,{children:"Desciption"}),(0,t.jsx)(d.th,{children:"Value example"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"SECOND"}),(0,t.jsx)(d.td,{children:"Gi\xe2y"}),(0,t.jsx)(d.td,{children:"INTERVAL 3 SECOND"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"MINUTE"}),(0,t.jsx)(d.td,{children:"Ph\xfat"}),(0,t.jsx)(d.td,{children:"INTERVAL 4\xa0MINUTE"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"HOUR"}),(0,t.jsx)(d.td,{children:"Gi\u1edd"}),(0,t.jsx)(d.td,{children:"INTERVAL 5\xa0HOUR"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"DAY"}),(0,t.jsx)(d.td,{children:"Ng\xe0y"}),(0,t.jsx)(d.td,{children:"INTERVAL 6\xa0DAY"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"WEEK"}),(0,t.jsx)(d.td,{children:"Tu\u1ea7n"}),(0,t.jsx)(d.td,{children:"INTERVAL 7\xa0WEEK"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"MONTH"}),(0,t.jsx)(d.td,{children:"Th\xe1ng"}),(0,t.jsx)(d.td,{children:"INTERVAL 8\xa0MONTH"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"YEAR"}),(0,t.jsx)(d.td,{children:"N\u0103m"}),(0,t.jsx)(d.td,{children:"INTERVAL 9\xa0YEAR"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"MINUTE_SECOND"}),(0,t.jsx)(d.td,{children:"Ph\xfat + gi\xe2y"}),(0,t.jsx)(d.td,{children:'INTERVAL "05:20" MINUTE_SECOND'})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"HOUR_SECOND"}),(0,t.jsx)(d.td,{children:"Gi\u1edd + ph\xfat + gi\xe2y"}),(0,t.jsx)(d.td,{children:'INTERVAL "05:20:39" HOUR_SECOND'})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"HOUR_MINUTE"}),(0,t.jsx)(d.td,{children:"Gi\u1edd + ph\xfat"}),(0,t.jsx)(d.td,{children:'INTERVAL "05:20" HOUR_MINUTE'})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"DAY_SECOND"}),(0,t.jsx)(d.td,{children:"Ng\xe0y + gi\u1edd + ph\xfat + gi\xe2y"}),(0,t.jsx)(d.td,{children:'INTERVAL "05 13:05:20" DAY_SECOND'})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"DAY_MINUTE"}),(0,t.jsx)(d.td,{children:"Ng\xe0y + gi\u1edd + ph\xfat"}),(0,t.jsx)(d.td,{children:'INTERVAL "14 08:53"\xa0DAY_MINUTE'})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"DAY_HOUR"}),(0,t.jsx)(d.td,{children:"Ng\xe0y + gi\u1edd"}),(0,t.jsx)(d.td,{children:'INTERVAL "14 11"\xa0DAY_HOUR'})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"YEAR_MONTH"}),(0,t.jsx)(d.td,{children:"N\u0103m + th\xe1ng"}),(0,t.jsx)(d.td,{children:'INTERVAL "02-10" YEAR_MONTH'})]})]})]}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsx)(d.li,{children:"V\xed d\u1ee5:"}),"\n"]}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-sql",children:'DATE_ADD("2015-09-18 16:20:38", INTERVAL "05 13:05:20" DAY_SECOND)\n-- Return value: "2015-09-24 05:25:58"\n'})}),"\n",(0,t.jsx)(d.h2,{id:"date_sub",children:"DATE_SUB"}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsxs)(d.li,{children:["Gi\u1ed1ng y h\u1ec7t ",(0,t.jsx)(d.strong,{children:"DATE_ADD"})," \u1edf b\xean tr\xean nh\u01b0ng thay v\xec c\u1ed9ng, n\xf3 tr\u1eeb kho\u1ea3ng th\u1eddi gian."]}),"\n",(0,t.jsx)(d.li,{children:"C\xfa ph\xe1p:"}),"\n"]}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-sql",children:"DATE_SUB(cur_date, INTERVAL value unit)\n"})}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsx)(d.li,{children:"V\xed d\u1ee5:"}),"\n"]}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-sql",children:'DATE_SUB("2015-09-18 16:20:38", INTERVAL "05 13:05:20" DAY_SECOND)\n-- Return value: "2015-09-13 03:15:18"\n'})}),"\n",(0,t.jsx)(d.h2,{id:"datediff",children:"DATEDIFF"}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsx)(d.li,{children:"C\xfa ph\xe1p:"}),"\n"]}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-sql",children:'-- Tr\u1ea3 v\u1ec1 kho\u1ea3ng c\xe1ch gi\u1eefa hai m\u1ed1c th\u1eddi gian, t\xednh b\u1eb1ng \u0111\u01a1n v\u1ecb "ng\xe0y"\nDATEDIFF(date1, date2)\n'})}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsx)(d.li,{children:"V\xed d\u1ee5:"}),"\n"]}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-sql",children:'DATEDIFF("2017-06-25 09:34:21", "2017-06-15 15:25:35")\n-- Return value: 10\n'})}),"\n",(0,t.jsx)(d.h2,{id:"date_format",children:"DATE_FORMAT"}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsx)(d.li,{children:"C\xfa ph\xe1p:"}),"\n"]}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-sql",children:"-- \u0110\u1ecbnh d\u1ea1ng date theo format ch\u1ec9 \u0111\u1ecbnh\nDATE_FORMAT(date, format)\n"})}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Format"}),(0,t.jsx)(d.th,{children:"Description"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"%s"}),(0,t.jsx)(d.td,{children:"Gi\xe2y (00 \u0111\u1ebfn 59)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"%i"}),(0,t.jsx)(d.td,{children:"Ph\xfat (00 \u0111\u1ebfn 59)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"%h"}),(0,t.jsx)(d.td,{children:"Gi\u1edd (00 \u0111\u1ebfn 12)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"%H"}),(0,t.jsx)(d.td,{children:"Gi\u1edd (00 \u0111\u1ebfn 23)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"%d"}),(0,t.jsx)(d.td,{children:"Ng\xe0y (01 \u0111\u1ebfn 31)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"%D"}),(0,t.jsx)(d.td,{children:"Ng\xe0y (1st, 2nd, 3rd, 4th,...)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"%m"}),(0,t.jsx)(d.td,{children:"Th\xe1ng (01 \u0111\u1ebfn 12)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"%M"}),(0,t.jsx)(d.td,{children:"Th\xe1ng d\u1ea1ng ch\u1eef \u0111\u1ea7y \u0111\u1ee7\xa0(January, February,... December)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"%b"}),(0,t.jsx)(d.td,{children:"Th\xe1ng d\u1ea1ng ch\u1eef vi\u1ebft t\u1eaft (Jan, Feb,... Dec)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"%Y"}),(0,t.jsx)(d.td,{children:"N\u0103m (\u0111\u1ee7 4 ch\u1eef s\u1ed1)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"%W"}),(0,t.jsx)(d.td,{children:"T\xean \u0111\u1ea7y \u0111\u1ee7 th\u1ee9 trong tu\u1ea7n (Sunday, Monday,...Saturday)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"%a"}),(0,t.jsx)(d.td,{children:"T\xean vi\u1ebft t\u1eaft th\u1ee9 trong tu\u1ea7n (Sun, Mon,...Sat)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"%p"}),(0,t.jsx)(d.td,{children:"AM ho\u1eb7c PM"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"%r"}),(0,t.jsxs)(d.td,{children:["Th\u1eddi gian \u1edf \u0111\u1ecbnh d\u1ea1ng 12 gi\u1edd s\xe1ng ho\u1eb7c chi\u1ec1u (hh:mm",":ss"," AM/PM)"]})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"%T"}),(0,t.jsxs)(d.td,{children:["Th\u1eddi gian \u1edf \u0111\u1ecbnh d\u1ea1ng 24 gi\u1edd (hh:mm",":ss",")"]})]})]})]}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsx)(d.li,{children:"V\xed d\u1ee5:"}),"\n"]}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-sql",children:'DATE_FORMAT("2017-06-25 20:34:21", "%d/%m/%Y %T")\n-- Return value: "25/06/2017 20:34:21"\n'})}),"\n",(0,t.jsx)(d.h2,{id:"c\xe1c-h\xe0m-l\u1ea5y-th\xf4ng-tin-c\u1ee7a-date-time",children:"C\xe1c h\xe0m l\u1ea5y th\xf4ng tin c\u1ee7a date time"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"H\xe0m"}),(0,t.jsx)(d.th,{children:"M\xf4 t\u1ea3"}),(0,t.jsx)(d.th,{children:"V\xed d\u1ee5"}),(0,t.jsx)(d.th,{children:"Return value"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"DAY()"}),(0,t.jsx)(d.td,{children:"Tr\u1ea3 v\u1ec1 ng\xe0y (1 - 31)"}),(0,t.jsx)(d.td,{children:'DAY("2017-06-25 20:34:21")'}),(0,t.jsx)(d.td,{children:"25"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"DAYNAME()"}),(0,t.jsx)(d.td,{children:"Tr\u1ea3 v\u1ec1 t\xean th\u1ee9 trong tu\u1ea7n (Sunday - Saturday)"}),(0,t.jsx)(d.td,{children:'DAYNAME("2017-06-25 20:34:21")'}),(0,t.jsx)(d.td,{children:"Sunday"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"DAYOFYEAR()"}),(0,t.jsx)(d.td,{children:"Tr\u1ea3 v\u1ec1 th\u1ee9 t\u1ef1 ng\xe0y trong n\u0103m (1 - 366)"}),(0,t.jsx)(d.td,{children:'DAYOFYEAR("2017-06-25 20:34:21")'}),(0,t.jsx)(d.td,{children:"176"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"HOUR()"}),(0,t.jsx)(d.td,{children:"Tr\u1ea3 v\u1ec1 s\u1ed1 gi\u1edd (0 - 23)"}),(0,t.jsx)(d.td,{children:'HOUR("2017-06-25 20:34:21")'}),(0,t.jsx)(d.td,{children:"20"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"MINUTE()"}),(0,t.jsx)(d.td,{children:"Tr\u1ea3 v\u1ec1 s\u1ed1 ph\xfat (0 - 59)"}),(0,t.jsx)(d.td,{children:'MINUTE("2017-06-25 00:34:21")'}),(0,t.jsx)(d.td,{children:"34"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"MONTH()"}),(0,t.jsx)(d.td,{children:"Tr\u1ea3 v\u1ec1 s\u1ed1 c\u1ee7a th\xe1ng (1 - 12)"}),(0,t.jsx)(d.td,{children:'MONTH("2017-06-25 00:34:21")'}),(0,t.jsx)(d.td,{children:"6"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"MONTHNAME()"}),(0,t.jsx)(d.td,{children:"Tr\u1ea3 v\u1ec1 t\xean c\u1ee7a th\xe1ng (Janurary - December)"}),(0,t.jsx)(d.td,{children:'MONTHNAME("2017-06-25 00:34:21")'}),(0,t.jsx)(d.td,{children:"June"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"SECOND()"}),(0,t.jsx)(d.td,{children:"Tr\u1ea3 v\u1ec1 s\u1ed1 gi\xe2y (0 - 59)"}),(0,t.jsx)(d.td,{children:'SECOND("2017-06-25 00:34:21")'}),(0,t.jsx)(d.td,{children:"21"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"YEAR()"}),(0,t.jsx)(d.td,{children:"Tr\u1ea3 v\u1ec1 s\u1ed1 n\u0103m"}),(0,t.jsx)(d.td,{children:'YEAR("2017-06-25 00:34:21")'}),(0,t.jsx)(d.td,{children:"2017"})]})]})]}),"\n",(0,t.jsx)(d.h2,{id:"c\xe1c-h\xe0m-l\u1ea5y-date-time-hi\u1ec7n-t\u1ea1i",children:"C\xe1c h\xe0m l\u1ea5y date time hi\u1ec7n t\u1ea1i"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"H\xe0m"}),(0,t.jsx)(d.th,{children:"M\xf4 t\u1ea3"}),(0,t.jsx)(d.th,{children:"V\xed d\u1ee5"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"CURRENT_DATE()"}),(0,t.jsx)(d.td,{children:'Tr\u1ea3 v\u1ec1 ng\xe0y th\xe1ng n\u0103m hi\u1ec7n t\u1ea1i \u1edf d\u1ea1ng\xa0"YYYY-MM-DD"'}),(0,t.jsx)(d.td,{children:"2024-02-07"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"CURRENT_TIME()"}),(0,t.jsx)(d.td,{children:'Tr\u1ea3 v\u1ec1 gi\u1edd, ph\xfat, gi\xe2y hi\u1ec7n t\u1ea1i \u1edf d\u1ea1ng\xa0"HH-MM-SS"'}),(0,t.jsx)(d.td,{children:"20:27:41"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"CURRENT_TIMESTAMP()"}),(0,t.jsx)(d.td,{children:'K\u1ebft h\u1ee3p 2 c\xe1i tr\xean, tr\u1ea3 v\u1ec1 d\u1ea1ng\xa0"YYYY-MM-DD HH-MM-SS"'}),(0,t.jsx)(d.td,{children:"2024-02-07 20:28:08"})]})]})]})]})}function j(n={}){const{wrapper:d}={...(0,s.R)(),...n.components};return d?(0,t.jsx)(d,{...n,children:(0,t.jsx)(x,{...n})}):x(n)}},8453:(n,d,e)=>{e.d(d,{R:()=>r,x:()=>h});var t=e(6540);const s={},i=t.createContext(s);function r(n){const d=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(d):{...d,...n}}),[d,n])}function h(n){let d;return d=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(i.Provider,{value:d},n.children)}}}]);