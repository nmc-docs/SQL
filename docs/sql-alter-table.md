---
sidebar_position: 4
---

# Alter table trong MySQL

:::note

Câu lệnh `ALTER TABLE` được sử dụng để thêm, xóa hoặc sửa đổi các cột (column) trong bảng hiện có.

Câu lệnh `ALTER TABLE` cũng được sử dụng để thêm và xóa các ràng buộc khác nhau trên một bảng hiện có ([Xem bài sau](./sql-constraints.md))

:::

## ADD COLUMN

- Để thêm cột trong bảng, ta dùng lệnh:

```sql
ALTER TABLE table_name
ADD column_name datatype;
```

## DROP COLUMN

- Để xóa cột trong bảng, ta dùng lệnh:

```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```

## RENAME COLUMN

- Để đổi tên cột trong bảng, ta dùng lệnh:

```sql
ALTER TABLE table_name
RENAME COLUMN old_name to new_name;
```

## MODIFY DATATYPE

- Để thay đổi kiểu dữ liệu của một cột, ta dùng lệnh:

```sql
ALTER TABLE table_name
MODIFY COLUMN column_name datatype;
```
