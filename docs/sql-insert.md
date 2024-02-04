---
sidebar_position: 9
---

# MySQL INSERT INTO

## INSERT INTO là gì?

- Câu lệnh **INSERT INTO** được sử dụng để thêm mới 1 record vào bảng
- Cú pháp:

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

- Cũng là một cách viết khác, ta không cần chỉ định tên cột, nó sẽ tự động thêm giá trị theo thứ tự cột trong bảng

```sql
INSERT INTO table_name
VALUES (value1, value2, value3, ...);
```

## Ví dụ

```sql
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');
```
