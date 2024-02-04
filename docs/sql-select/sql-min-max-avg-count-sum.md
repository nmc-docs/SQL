---
sidebar_position: 11
---

# MySQL MIN, MAX, COUNT, SUM, AVG

## MAX()

- Hàm **MAX()** trả về giá trị lớn nhất trong cột được chỉ định.
- Cú pháp:

```sql
SELECT MAX(column_name)
FROM table_name
WHERE condition;
```

- Ví dụ:

![1706976628012](image/sql-min-max-avg-count-sum/1706976628012.png)

## MIN()

- Hàm **MIN()** trả về giá trị nhỏ nhất trong cột được chỉ định.
- Cú pháp:

```sql
SELECT MIN(column_name)
FROM table_name
WHERE condition;
```

- Ví dụ:

![1706977078782](image/sql-min-max-avg-count-sum/1706977078782.png)

## COUNT()

- Hàm **COUNT()** trả về số hàng khớp với một tiêu chí đã chỉ định.
- Cú pháp:

```sql
SELECT COUNT(column_name)
FROM table_name
WHERE condition;
```

- Ví dụ:

![1706977275160](image/sql-min-max-avg-count-sum/1706977275160.png)

![1706977307400](image/sql-min-max-avg-count-sum/1706977307400.png)

![1706977378706](image/sql-min-max-avg-count-sum/1706977378706.png)

- Chúng ta có thể sử dụng **COUNT()** cùng với **DISTINCT** để đếm những hàng có giá trị khác nhau

![1706977463674](image/sql-min-max-avg-count-sum/1706977463674.png)

![1706977968354](image/sql-min-max-avg-count-sum/1706977968354.png)

## SUM()

- Hàm **SUM()** trả về tổng tất cả các giá trị trong một cột được chỉ định (cột này phải có kiểu dữ liệu số).
- Cú pháp:

```sql
SELECT SUM(column_name)
FROM table_name
WHERE condition;
```

- Ví dụ:

![1706978100065](image/sql-min-max-avg-count-sum/1706978100065.png)

![1706978119152](image/sql-min-max-avg-count-sum/1706978119152.png)

## AVG()

- Hàm **AVG()** trả về giá trị trung bình của một cột được chỉ định (cột này phải có kiểu dữ liệu số).
- Cú pháp:

```sql
SELECT AVG(column_name)
FROM table_name
WHERE condition;
```

- Ví dụ:

![1706978271459](image/sql-min-max-avg-count-sum/1706978271459.png)

![1706978316605](image/sql-min-max-avg-count-sum/1706978316605.png)
