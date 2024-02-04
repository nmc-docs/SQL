---
sidebar_position: 10
---

# MySQL UPDATE

## UPDATE là gì?

- Câu lệnh **UPDATE** dùng để cập nhật record trong bảng.
- Cú pháp:

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

:::caution

- Nếu ta bỏ qua mệnh đề **WHERE** thì nó sẽ update tất cả các record trong bảng

:::

## Ví dụ

- Update giá trị của cột `ContactName` và `City` với customer có `CustomerID = 1`:

```sql
UPDATE Customers
SET ContactName = 'Alfred Schmidt', City = 'Frankfurt'
WHERE CustomerID = 1;
```

- Update giá trị cột `PostalCode` đối với những customer có `Country = 'Mexico'`:

```sql
UPDATE Customers
SET PostalCode = 00000
WHERE Country = 'Mexico';
```
