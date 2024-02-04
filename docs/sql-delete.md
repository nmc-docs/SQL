---
sidebar_position: 11
---

# MySQL DELETE

## DELETE là gì?

- Câu lệnh **DELETE** dùng để xóa các record trong bảng.
- Cú pháp:

```sql
DELETE FROM table_name WHERE condition;
```

:::caution

- Nếu ta bỏ qua mệnh đề **WHERE** thì nó sẽ xóa tất cả các record trong bảng

:::

## Ví dụ

- Xóa các record có `CustomerName='Alfreds Futterkiste'` trong bảng Customers:

```sql
DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';
```

- Xóa tất cả các record trong bảng Customers:

```sql
DELETE FROM Customers;
```
