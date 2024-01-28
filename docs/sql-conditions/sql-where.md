---
sidebar_position: 1
---

# MySQL WHERE

:::info

- Mệnh đề **WHERE** được sử dụng để lọc các record. Nó sẽ chỉ trích xuất những bản ghi đáp ứng một điều kiện cụ thể.
- Cú pháp:

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

- Mệnh đề **WHERE** không chỉ được sử dụng trong câu lệnh **SELECT** mà nó còn được sử dụng trong câu lệnh **UPDATE** và **DELETE**

:::

## Ví dụ

![1706452715700](image/sql-where/1706452715700.png)

## Các toán tử được sử dụng trong câu lệnh WHERE

| Operator | Description                                                     |
| -------- | --------------------------------------------------------------- |
| =        | Bằng                                                            |
| >        | Lớn hơn                                                         |
| <        | Nhỏ hơn                                                         |
| >=       | Lớn hơn hoặc bằng                                               |
| <=       | Nhỏ hơn hoặc bằng                                               |
| !=       | Khác                                                            |
| BETWEEN  | Nằm giữa một khoảng được chỉ định.[Xem chi tiết](./sql-between) |
| LIKE     | Tìm kiếm theo pattern. [Xem chi tiết](./sql-like)               |
| IN       | Chỉ định nhiều giá trị có thể có trong một column. Xem chi tiết |
