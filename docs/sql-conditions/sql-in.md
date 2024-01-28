---
sidebar_position: 5
---

# MySQL IN

:::info

- Toán tử **IN** cho phép ta chỉ định nhiều giá trị trong mệnh đề **WHERE**
- Cú pháp:

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name IN (value1, value2, ...);
```

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name IN (SELECT STATEMENT);
```

:::

## Ví dụ

![1706456975501](image/sql-in/1706456975501.png)

- Ví dụ sau sẽ select tất cả các customers mà có cùng country với suppliers:

```sql
SELECT * FROM Customers
WHERE Country IN (SELECT Country FROM Suppliers);
```
