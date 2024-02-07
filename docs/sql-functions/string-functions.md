---
sidebar_position: 1
---

# String Functions

## ASCII

- Cú pháp:

```sql
-- Trả về một số là giá trị ASCII của kí tự
ASCII(chr)
```

- Ví dụ:

```sql
ASCII("$")
--Return value: 36
```

## CHAR_LENGTH

- Cú pháp:

```sql
-- Trả về một số là độ dài của chuỗi.
CHAR_LENGTH(str)
```

- Ví dụ:

```sql
CHAR_LENGTH("SQL Tutorial")
-- Return value: 12
```

## CONCAT

- Cú pháp:

```sql
-- Trả về chuỗi mới sau khi nối tất cả các chuỗi v1, v2,... lại với nhau
CONCAT(v1, v2,...)
```

- Ví dụ:

```sql
CONCAT("SQL ", "Tutorial ", "is ", "fun!")
-- Return value: "SQL Tutorial is fun!"
```

## CONCAT_WS

- Cú pháp:

```sql
-- Trả về chuỗi mới sau khi nối tất cả các chuỗi v1, v2,... lại với nhau
CONCAT_WS(separator, str1, str2,...)
```

- Ví dụ:

```sql
CONCAT_WS("-", "SQL", "Tutorial", "is", "fun!")
-- Return value: "SQL-Tutorial-is-fun!"
```

## FORMAT

- Cú pháp:

```sql
-- Trả về một số ở dạng chuỗi sau khi được làm tròn sau dấu phẩy
FORMAT(number, decimal_places)
```

- Ví dụ:

```sql
FORMAT(250500.5634, 2)
-- Return value: "250500.56"
```

## INSERT

- Cú pháp:

```sql
-- Trả về một chuỗi sau khi chèn `newstr` vào `str` ở vị trí `position` (chỉ số tính từ 1) và thay thế `length` số lượng kí tự ở chuỗi `str`
INSERT(str, position, length, newstr)
```

- Ví dụ:

```sql
INSERT("W3Schools.com", 11, 3, "no")
-- Return value: "W3Schools.no"
```

## INSTR

- Cú pháp:

```sql
-- Trả về vị trí đầu tiên (tính từ 1) mà chuỗi `substr` xuất hiện trong `str` (không phân biệt chữ hoa, thường).
-- Nếu không tìm thấy, trả về 0
INSTR(str, substr)
```

- Ví dụ:

```sql
INSTR("W3Schools.com", "sCH")
-- Return value: 3
```

## LOCATE

- Cú pháp:

```sql
-- Trả về vị trí đầu tiên (tính từ 1) mà chuỗi `substr` xuất hiện trong `str` (không phân biệt chữ hoa, thường) bắt đầu từ vị trí `position`. 
-- Nếu không tìm thấy, trả về 0
-- "position" là tùy chọn (giá trị mặc định là 1)
LOCATE(substr, str, position)
```

- Cú pháp:

```sql
LOCATE("s", "W3Schools.com", 4)
-- Return value: 9
```

## LOWER

- Cú pháp:

```sql
-- Trả về một chuỗi mới được biến đổi in thường từ chuỗi ban đầu
LOWER(text)
```

- Ví dụ:

```sql
LOWER("AhuOpuMY")
-- Return value: "ahuopumy"
```

## UPPER

- Cú pháp:

```sql
-- Trả về một chuỗi mới được biến đổi in hoa từ chuỗi ban đầu
UPPER(text)
```

- Ví dụ:

```sql
UPPER("SQL Tutorial is FUN!")
-- Return value: "SQL TUTORIAL IS FUN!"
```

## LEFT

- Cú pháp:

```sql
-- Trả về một chuỗi mới sau khi lấy `number_of_chars` kí tự đầu tiên của chuỗi `str`
LEFT(str, number_of_chars)
```

- Ví dụ:

```sql
LEFT("SQL Tutorial", 5)
-- Return value: "SQL T"
```

## RIGHT

- Cú pháp:

```sql
-- Trả về một chuỗi mới sau khi lấy `number_of_chars` kí tự cuối cùng của chuỗi `str`
RIGHT(str, number_of_chars)
```

- Ví dụ:

```sql
RIGHT("SQL Tutorial is cool", 4)
-- Return value: "cool"
```

## REPEAT

- Cú pháp:

```sql
-- Trả về một chuỗi mới sau khi lặp lại chuỗi "str" "count" lần
REPEAT(str, count)
```

- Ví dụ:

```sql
REPEAT("MySQL ", 3)
-- Return value: "MySQL MySQL MySQL"
```

## LPAD

- Cú pháp:

```sql
-- Trả về một chuỗi mới có độ dài đúng "length" kí tự sau khi chèn chuỗi "padstr" vào đầu chuỗi "str"
LPAD(str, len, padstr)
```

- Ví dụ:

```sql
LPAD("SQL Tutorial", 20, "ABC ")
-- Return value: "ABC ABC SQL Tutorial"
```

## RPAD

- Cú pháp:

```sql
-- Trả về một chuỗi mới có độ dài đúng "length" kí tự sau khi chèn chuỗi "padstr" vào cuối chuỗi "str"
RPAD(str, len, padstr)
```

- Ví dụ:

```sql
RPAD("SQL Tutorial", 20, "ABC")
-- Return value: "SQL TutorialABCABCAB"
```

## REPLACE

- Cú pháp:

```sql
-- Trả về một chuỗi mới sau khi thay thế tất cả chuỗi con "from_str" thành "to_str" trong chuỗi "str" ban đầu. Có phân biệt hoa thường.
REPLACE(str, from_str, to_str)
```

- Ví dụ:

```sql
REPLACE("XYZ FGH XYZ", "X", "M")
-- Return value: "MYZ FGH MYZ"
```

## REVERSE

- Cú pháp:

```sql
-- Trả về một chuỗi mới sau khi đảo ngược chuỗi ban đầu
REVERSE(str)
```

- Ví dụ:

```sql
REVERSE("SQL Tutorial")
-- Return value: "lairotuT LQS"
```

## TRIM

- Cú pháp:

```sql
-- Trả về một chuỗi mới sau khi loại bỏ tất cả khoảng trắng ở đầu và cuối chuỗi ban đầu
TRIM(str)
```

- Ví dụ:

```sql
TRIM("    SQL Tutorial    ")
-- Return value: "SQL Tutorial"
```

## STRCMP

- Cú pháp:

```sql
-- So sánh giá trị từ điển của 2 chuỗi.
-- Nếu "str1 = str2", trả về 0
-- Nếu "str1 < str2", trả về -1
-- Nếu "str1 > str2", trả về 1
STRCMP(str1, str2)
```

- Ví dụ:

```sql
STRCMP("SQL Tutorial", "HTML Tutorial")
-- Return value: 1
```

## SUBSTR

- Cú pháp:

```sql
-- Trả về một chuỗi mới sau khi tách chuỗi ban đầu "str", bắt đầu từ vị trí "position" và lấy "length" kí tự
-- "position" có thể là số âm, dương. Nếu là số âm, sẽ tính từ cuối chuỗi lên, còn nếu là số dương, tính từ đầu chuỗi (chỉ số bắt đầu là 1)
-- "length" có thể chỉ định hoặc không. Nếu không được chỉ định, sẽ cắt đến hết chuỗi.
SUBSTR(str, position, length)
```

- Ví dụ:

```sql
SUBSTR("MySQL is relational database", 2, 6)
-- Return value: "ySQL i"
```

```sql
SUBSTR("SQL Tutorial", -7, 5)
-- Return value: "utori"
```

## SUBSTRING_INDEX

- Cú pháp:

```sql
-- Trả về một chuỗi mới sau khi tách chuỗi con của chuỗi "str" cho đến khi gặp chuỗi "delim" lần thứ "count"
-- "count" có thể là số âm hoặc dương.
-- Nếu "count" là số âm, sẽ tách bắt đầu từ cuối chuỗi tách lên
-- Nếu "count" là số dương, sẽ tách bắt đầu từ đầu chuỗi
SUBSTRING_INDEX(str, delim, count)
```

- Ví dụ:

```sql
SUBSTRING_INDEX("www.w3schools.com", ".", 2)
-- Return value: "www.w3schools"
```

```sql
SUBSTRING_INDEX("www.w3schools.com", ".", -2)
-- Return value: "w3schools.com"
```
