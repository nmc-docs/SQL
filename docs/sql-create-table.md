---
sidebar_position: 2
---

# Tạo bảng trong MySQL

## Cú pháp

```sql
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);
```

## Ví dụ

```sql
CREATE TABLE employee (
	id VARCHAR(255) PRIMARY KEY,
	full_name VARCHAR(50),
	address VARCHAR(50),
	date_of_birth DATE,
	identity_number VARCHAR(20)
);
```
