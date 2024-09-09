"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[1025],{3525:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>o,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var l=s(4848),i=s(8453);const a={sidebar_position:14},c="C\xe1c thao t\xe1c v\u1edbi MySQL",r={id:"mysql-manipulation",title:"C\xe1c thao t\xe1c v\u1edbi MySQL",description:"Qu\u1ea3n l\xfd c\xe1c user c\xf9ng v\u1edbi quy\u1ec1n c\u1ee7a user \u0111\xf3",source:"@site/docs/mysql-manipulation.md",sourceDirName:".",slug:"/mysql-manipulation",permalink:"/SQL/mysql-manipulation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"H\u01b0\u1edbng d\u1eabn c\xe0i \u0111\u1eb7t MySQL",permalink:"/SQL/mysql-installation"}},t={},h=[{value:"Qu\u1ea3n l\xfd c\xe1c user c\xf9ng v\u1edbi quy\u1ec1n c\u1ee7a user \u0111\xf3",id:"qu\u1ea3n-l\xfd-c\xe1c-user-c\xf9ng-v\u1edbi-quy\u1ec1n-c\u1ee7a-user-\u0111\xf3",level:2},{value:"T\u1ea1o m\u1edbi m\u1ed9t user",id:"t\u1ea1o-m\u1edbi-m\u1ed9t-user",level:3},{value:"G\xe1n quy\u1ec1n cho user",id:"g\xe1n-quy\u1ec1n-cho-user",level:3},{value:"X\xf3a quy\u1ec1n \u0111\u1ed1i v\u1edbi user",id:"x\xf3a-quy\u1ec1n-\u0111\u1ed1i-v\u1edbi-user",level:3},{value:"Xem th\xf4ng tin user",id:"xem-th\xf4ng-tin-user",level:3},{value:"Backup v\xe0 Restore trong MySQL",id:"backup-v\xe0-restore-trong-mysql",level:2},{value:"Backup database trong MySQL",id:"backup-database-trong-mysql",level:3},{value:"Restore database trong MySQL",id:"restore-database-trong-mysql",level:3},{value:"\u0110\u1ed5i m\u1eadt kh\u1ea9u cho root trong MySQL",id:"\u0111\u1ed5i-m\u1eadt-kh\u1ea9u-cho-root-trong-mysql",level:2},{value:"Reset m\u1eadt kh\u1ea9u root trong MySQL",id:"reset-m\u1eadt-kh\u1ea9u-root-trong-mysql",level:2}];function d(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"c\xe1c-thao-t\xe1c-v\u1edbi-mysql",children:"C\xe1c thao t\xe1c v\u1edbi MySQL"})}),"\n",(0,l.jsx)(e.h2,{id:"qu\u1ea3n-l\xfd-c\xe1c-user-c\xf9ng-v\u1edbi-quy\u1ec1n-c\u1ee7a-user-\u0111\xf3",children:"Qu\u1ea3n l\xfd c\xe1c user c\xf9ng v\u1edbi quy\u1ec1n c\u1ee7a user \u0111\xf3"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Tr\u01b0\u1edbc ti\xean, ta ph\u1ea3i \u0111\u0103ng nh\u1eadp v\u1edbi t\xe0i kho\u1ea3n ",(0,l.jsx)(e.strong,{children:"root"}),":"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"mysql -u root -p\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Sau khi nh\u1eadp m\u1eadt kh\u1ea9u xong, ta s\u1ebd ti\u1ebfn h\xe0nh th\xeam v\xe0 c\u1ea5p quy\u1ec1n cho user"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"t\u1ea1o-m\u1edbi-m\u1ed9t-user",children:"T\u1ea1o m\u1edbi m\u1ed9t user"}),"\n",(0,l.jsxs)(e.admonition,{type:"info",children:[(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"C\xfa ph\xe1p:"}),"\n"]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"CREATE USER [username]@[host] IDENTIFIED BY [password];\n"})})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"V\xed d\u1ee5: t\u1ea1o m\u1ed9t user truy c\u1eadp v\xe0o database \u1edf localhost"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"CREATE USER 'minhchi1509'@'localhost' IDENTIFIED BY 'ptit_15092002';\n"})}),"\n",(0,l.jsxs)(e.admonition,{type:"note",children:[(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u0110\u1ec3 cho ph\xe9p user truy c\u1eadp v\xe0o database t\u1eeb b\u1ea5t k\u1ef3 host n\xe0o, ta s\u1eed d\u1ee5ng d\u1ea5u ",(0,l.jsx)(e.code,{children:"%"})]}),"\n",(0,l.jsx)(e.li,{children:"V\xed d\u1ee5:"}),"\n"]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"CREATE USER 'minhchi1509'@'%' IDENTIFIED BY 'ptit_15092002';\n"})})]}),"\n",(0,l.jsx)(e.h3,{id:"g\xe1n-quy\u1ec1n-cho-user",children:"G\xe1n quy\u1ec1n cho user"}),"\n",(0,l.jsxs)(e.admonition,{type:"info",children:[(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"C\xfa ph\xe1p:"}),"\n"]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"GRANT [roles] ON [database-name].[table] TO [username]@[host];\n"})})]}),"\n",(0,l.jsx)(e.admonition,{type:"caution",children:(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["N\u1ebfu t\xean database, t\xean b\u1ea3ng c\xf3 ch\u1ee9a c\xe1c k\xfd t\u1ef1 \u0111\u1eb7c bi\u1ec7t th\xec bao b\u1ecdc ch\xfang l\u1ea1i b\u1edfi d\u1ea5u backtick ",(0,l.jsx)(e.strong,{children:"``"})]}),"\n"]})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"V\xed d\u1ee5:"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"GRANT SELECT, INSERT ON `next-db`.`post` TO 'minhchi1509'@'localhost';\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u0110\u1ec3 g\xe1n to\xe0n b\u1ed9 quy\u1ec1n \u0111\u1ed1i v\u1edbi t\u1ea5t c\u1ea3 c\xe1c database v\xe0 table, ta d\xf9ng:"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"GRANT ALL PRIVILEGES ON *.* TO 'minhchi1509'@'localhost';\n"})}),"\n",(0,l.jsx)(e.h3,{id:"x\xf3a-quy\u1ec1n-\u0111\u1ed1i-v\u1edbi-user",children:"X\xf3a quy\u1ec1n \u0111\u1ed1i v\u1edbi user"}),"\n",(0,l.jsxs)(e.admonition,{type:"info",children:[(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"C\xfa ph\xe1p:"}),"\n"]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"REVOKE [roles] ON [database-name].[table] FROM [username]@[host];\n"})})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"V\xed d\u1ee5:"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"REVOKE SELECT, INSERT ON `next-db`.`post` FROM 'minhchi1509'@'localhost';\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u0110\u1ec3 x\xf3a to\xe0n b\u1ed9 quy\u1ec1n \u0111\u1ed1i v\u1edbi m\u1ed9t user, ta d\xf9ng:"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"REVOKE ALL PRIVILEGES ON *.* FROM 'minhchi1509'@'localhost';\n"})}),"\n",(0,l.jsx)(e.h3,{id:"xem-th\xf4ng-tin-user",children:"Xem th\xf4ng tin user"}),"\n",(0,l.jsxs)(e.admonition,{type:"info",children:[(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Xem t\u1ea5t c\u1ea3 c\xe1c username \u0111ang c\xf3 c\xf9ng host c\u1ee7a ch\xfang:"}),"\n"]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"SELECT User, Host from mysql.user;\n"})}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Xem c\xe1c quy\u1ec1n c\u1ee7a m\u1ed9t user:"}),"\n"]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"SHOW GRANTS FOR [username]@[host];\n"})})]}),"\n",(0,l.jsxs)(e.admonition,{type:"note",children:[(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Sau khi th\u1ef1c hi\u1ec7n g\xe1n quy\u1ec1n hay x\xf3a quy\u1ec1n xong, ta n\xean d\xf9ng l\u1ec7nh sau \u0111\u1ec3 l\xe0m m\u1edbi quy\u1ec1n \u0111\u1ec3 \u0111\u1ea3m b\u1ea3o r\u1eb1ng thay \u0111\u1ed5i \u0111\u01b0\u1ee3c \xe1p d\u1ee5ng ngay l\u1eadp t\u1ee9c:"}),"\n"]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"FLUSH PRIVILEGES;\n"})})]}),"\n",(0,l.jsx)(e.h2,{id:"backup-v\xe0-restore-trong-mysql",children:"Backup v\xe0 Restore trong MySQL"}),"\n",(0,l.jsx)(e.h3,{id:"backup-database-trong-mysql",children:"Backup database trong MySQL"}),"\n",(0,l.jsxs)(e.admonition,{type:"info",children:[(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"C\xfa ph\xe1p:"}),"\n"]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"mysqldump -u root -p [database_name] --tables [t1] [t2] [t3] > [target_backup_file]\n"})}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u0110\u1ec3 backup t\u1ea5t c\u1ea3 c\xe1c database:"}),"\n"]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"mysqldump -u root -p --all-databases > [target_backup_file]\n"})})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"V\xed d\u1ee5:"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'mysqldump -u root -p next-db --tables post user > "D:\\next-db-backup.sql"\n'})}),"\n",(0,l.jsx)(e.h3,{id:"restore-database-trong-mysql",children:"Restore database trong MySQL"}),"\n",(0,l.jsxs)(e.admonition,{type:"info",children:[(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"C\xfa ph\xe1p:"}),"\n"]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"mysql -u root -p [database_name] < [backup_file_dir]\n"})}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["N\u1ebfu b\u1ea1n \u0111\xe3 sao l\u01b0u t\u1ea5t c\u1ea3 c\xe1c c\u01a1 s\u1edf d\u1eef li\u1ec7u c\u1ee7a m\xecnh b\u1eb1ng t\xf9y ch\u1ecdn ",(0,l.jsx)(e.strong,{children:"--all-databases"})," v\xe0 b\u1ea1n mu\u1ed1n restore database t\u1eeb m\u1ed9t t\u1ec7p sao l\u01b0u c\xf3 ch\u1ee9a nhi\u1ec1u c\u01a1 s\u1edf d\u1eef li\u1ec7u, h\xe3y s\u1eed d\u1ee5ng t\xf9y ch\u1ecdn ",(0,l.jsx)(e.strong,{children:"--one-database"})," nh\u01b0 d\u01b0\u1edbi \u0111\xe2y:"]}),"\n"]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"mysql -u root -p --one-database [database_name] < [backup_file_dir]\n"})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u0111\u1ed5i-m\u1eadt-kh\u1ea9u-cho-root-trong-mysql",children:"\u0110\u1ed5i m\u1eadt kh\u1ea9u cho root trong MySQL"}),"\n",(0,l.jsxs)(e.admonition,{type:"info",children:[(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:'C\xe2u l\u1ec7nh \u0111\u1ec3 \u0111\u1ed5i m\u1eadt kh\u1ea9u v\u1edbi user "root" trong MySQL l\xe0:'}),"\n"]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"mysqladmin -u root -p password [new_password]\n"})}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Sau \u0111\xf3 nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u c\u0169 \u0111\u1ec3 ti\u1ebfn h\xe0nh thi\u1ebft l\u1eadp m\u1eadt kh\u1ea9u m\u1edbi"}),"\n"]})]}),"\n",(0,l.jsx)(e.h2,{id:"reset-m\u1eadt-kh\u1ea9u-root-trong-mysql",children:"Reset m\u1eadt kh\u1ea9u root trong MySQL"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["T\u1ea1o m\u1ed9t file c\xf3 t\xean ",(0,l.jsx)(e.strong,{children:"mysql-init.txt"})," c\xf3 n\u1ed9i dung nh\u01b0 sau, v\u1edbi ",(0,l.jsx)(e.code,{children:"[new_passord]"})," l\xe0 m\u1eadt kh\u1ea9u m\u1edbi c\u1ea7n \u0111\u1eb7t (bao b\u1ecdc b\u1edfi d\u1ea5u nh\xe1y \u0111\u01a1n):"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-plaintext",children:"ALTER USER 'root'@'localhost' IDENTIFIED BY [new_password];\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Stop service MySQL (ch\u1ea1y b\u1eb1ng quy\u1ec1n admin) b\u1eb1ng l\u1ec7nh:"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"net stop mysql80\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Ti\u1ebfp theo ch\u1ea1y l\u1ec7nh sau (v\u1edbi quy\u1ec1n admin) \u0111\u1ec3 reset m\u1eadt kh\u1ea9u:"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'mysqld --defaults-file="C:\\ProgramData\\MySQL\\MySQL Server 8.0\\my.ini" --init-file="D:\\mysql-init.txt" --console\n'})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Sau \u0111\xf3, start l\u1ea1i service MySQL (ch\u1ea1y b\u1eb1ng quy\u1ec1n admin):"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"net start mysql80\n"})})]})}function o(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>r});var l=s(6540);const i={},a=l.createContext(i);function c(n){const e=l.useContext(a);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),l.createElement(a.Provider,{value:e},n.children)}}}]);