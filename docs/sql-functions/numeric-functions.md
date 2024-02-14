---
sidebar_position: 2
---

# Numeric functions

## ABS

- Cú pháp:

```sql
-- Trả về giá trị tuyệt đối của "number"
ABS(number)
```

- Ví dụ:

```sql
ABS(-243.5)
-- Return value: 243.5
```

## CEIL

- Cú pháp:

```sql
-- Trả về số nguyên nhỏ nhất mà >= với "number"
CEIL(number)
```

- Ví dụ:

```sql
CEIL(25.75)
-- Return value: 26
```

## DIV

- Cú pháp:

```sql
-- Trả về phần nguyên của x / y
x DIV y
```

- Ví dụ:

```sql
17 DIV 3
-- Return value: 5
```

## MOD

- Cú pháp:

```sql
-- Trả về phần dư của x / y
MOD(x, y)
```

- Ví dụ:

```sql
MOD(18, 4)
-- Return value: 2
```

## FLOOR

- Cú pháp:

```sql
-- Trả về số nguyên lớn nhất mà <= "number"
FLOOR(number)
```

- Ví dụ:

```sql
FLOOR(25.75)
-- Return value: 25
```

## POW

- Cú pháp:

```sql
-- Trả về giá trị của x mũ y
POW(x, y)
```

- Ví dụ:

```sql
POW(4, 2)
-- Return value: 16
```

## ROUND

- Cú pháp:

```sql
-- Trả về giá trị làm tròn cùa "number" sau "decimals" số sau dấu phẩy
ROUND(number, decimals)
```

- Ví dụ:

```sql
ROUND(135.375, 2)
-- Return value: 135.38
```

## SIGN

- Cú pháp:

```sql
-- Dùng để xác định dấu của "number"
-- Nếu "number" > 0, trả về 1
-- Nếu "number" = 0, trả về 0,
-- Nếu "number" < 0, trả về -1
SIGN(number)
```

## SQRT

- Cú pháp:

```sql
-- Trả về giá trị căn bậc 2 của "number"
SQRT(number)
```

- Ví dụ:

```sql
SQRT(23)
-- Return value: 4.795831523312719
```

## GREATEST

- Cú pháp:

```sql
-- Trả về giá trị lớn nhất trong danh sách các số
GREATEST(number1, number2,...)
```

- Ví dụ:

```sql
GREATEST(3, 12, 34, 8, 25);
-- Return value: 34
```

## LEAST

- Cú pháp:

```sql
-- Trả về giá trị nhỏ nhất trong danh sách các số
LEAST(number1, number2,...)
```

- Ví dụ:

```sql
LEAST(3, 12, 34, 8, 25);
-- Return value: 3
```
