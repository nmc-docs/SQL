---
sidebar_position: 3
---

# Date functions

## DATE_ADD

- Cú pháp:

```sql
DATE_ADD(cur_date, INTERVAL value unit)
```

:::info

- Trong đó:
  - **cur_date**: ngày giờ cần thay đổi
  - **value**: giá trị thời gian cần thêm
  - **unit**: đơn vị thời gian cần thêm
- Hàm trên trả về một DATE hoặc DATETIME sau khi được thêm vào

:::

| Unit          | Desciption               | Value example                     |
| ------------- | ------------------------ | --------------------------------- |
| SECOND        | Giây                     | INTERVAL 3 SECOND                 |
| MINUTE        | Phút                     | INTERVAL 4 MINUTE                 |
| HOUR          | Giờ                      | INTERVAL 5 HOUR                   |
| DAY           | Ngày                     | INTERVAL 6 DAY                    |
| WEEK          | Tuần                     | INTERVAL 7 WEEK                   |
| MONTH         | Tháng                    | INTERVAL 8 MONTH                  |
| YEAR          | Năm                      | INTERVAL 9 YEAR                   |
| MINUTE_SECOND | Phút + giây              | INTERVAL "05:20" MINUTE_SECOND    |
| HOUR_SECOND   | Giờ + phút + giây        | INTERVAL "05:20:39" HOUR_SECOND   |
| HOUR_MINUTE   | Giờ + phút               | INTERVAL "05:20" HOUR_MINUTE      |
| DAY_SECOND    | Ngày + giờ + phút + giây | INTERVAL "05 13:05:20" DAY_SECOND |
| DAY_MINUTE    | Ngày + giờ + phút        | INTERVAL "14 08:53" DAY_MINUTE    |
| DAY_HOUR      | Ngày + giờ               | INTERVAL "14 11" DAY_HOUR         |
| YEAR_MONTH    | Năm + tháng              | INTERVAL "02-10" YEAR_MONTH       |

- Ví dụ:

```sql
DATE_ADD("2015-09-18 16:20:38", INTERVAL "05 13:05:20" DAY_SECOND)
-- Return value: "2015-09-24 05:25:58"
```

## DATE_SUB

- Giống y hệt **DATE_ADD** ở bên trên nhưng thay vì cộng, nó trừ khoảng thời gian.
- Cú pháp:

```sql
DATE_SUB(cur_date, INTERVAL value unit)
```

- Ví dụ:

```sql
DATE_SUB("2015-09-18 16:20:38", INTERVAL "05 13:05:20" DAY_SECOND)
-- Return value: "2015-09-13 03:15:18"
```

## DATEDIFF

- Cú pháp:

```sql
-- Trả về khoảng cách giữa hai mốc thời gian, tính bằng đơn vị "ngày"
DATEDIFF(date1, date2)
```

- Ví dụ:

```sql
DATEDIFF("2017-06-25 09:34:21", "2017-06-15 15:25:35")
-- Return value: 10
```

## DATE_FORMAT

- Cú pháp:

```sql
-- Định dạng date theo format chỉ định
DATE_FORMAT(date, format)
```

| Format | Description                                                   |
| ------ | ------------------------------------------------------------- |
| %s     | Giây (00 đến 59)                                              |
| %i     | Phút (00 đến 59)                                              |
| %h     | Giờ (00 đến 12)                                               |
| %H     | Giờ (00 đến 23)                                               |
| %d     | Ngày (01 đến 31)                                              |
| %D     | Ngày (1st, 2nd, 3rd, 4th,...)                                 |
| %m     | Tháng (01 đến 12)                                             |
| %M     | Tháng dạng chữ đầy đủ (January, February,... December)        |
| %b     | Tháng dạng chữ viết tắt (Jan, Feb,... Dec)                    |
| %Y     | Năm (đủ 4 chữ số)                                             |
| %W     | Tên đầy đủ thứ trong tuần (Sunday, Monday,...Saturday)        |
| %a     | Tên viết tắt thứ trong tuần (Sun, Mon,...Sat)                 |
| %p     | AM hoặc PM                                                    |
| %r     | Thời gian ở định dạng 12 giờ sáng hoặc chiều (hh:mm:ss AM/PM) |
| %T     | Thời gian ở định dạng 24 giờ (hh:mm:ss)                       |

- Ví dụ:

```sql
DATE_FORMAT("2017-06-25 20:34:21", "%d/%m/%Y %T")
-- Return value: "25/06/2017 20:34:21"
```

## Các hàm lấy thông tin của date time

| Hàm         | Mô tả                                         | Ví dụ                            | Return value |
| ----------- | --------------------------------------------- | -------------------------------- | ------------ |
| DAY()       | Trả về ngày (1 - 31)                          | DAY("2017-06-25 20:34:21")       | 25           |
| DAYNAME()   | Trả về tên thứ trong tuần (Sunday - Saturday) | DAYNAME("2017-06-25 20:34:21")   | Sunday       |
| DAYOFYEAR() | Trả về thứ tự ngày trong năm (1 - 366)        | DAYOFYEAR("2017-06-25 20:34:21") | 176          |
| HOUR()      | Trả về số giờ (0 - 23)                        | HOUR("2017-06-25 20:34:21")      | 20           |
| MINUTE()    | Trả về số phút (0 - 59)                       | MINUTE("2017-06-25 00:34:21")    | 34           |
| MONTH()     | Trả về số của tháng (1 - 12)                  | MONTH("2017-06-25 00:34:21")     | 6            |
| MONTHNAME() | Trả về tên của tháng (Janurary - December)    | MONTHNAME("2017-06-25 00:34:21") | June         |
| SECOND()    | Trả về số giây (0 - 59)                       | SECOND("2017-06-25 00:34:21")    | 21           |
| YEAR()      | Trả về số năm                                 | YEAR("2017-06-25 00:34:21")      | 2017         |

## Các hàm lấy date time hiện tại

| Hàm                 | Mô tả                                                 | Ví dụ               |
| ------------------- | ----------------------------------------------------- | ------------------- |
| CURRENT_DATE()      | Trả về ngày tháng năm hiện tại ở dạng "YYYY-MM-DD"    | 2024-02-07          |
| CURRENT_TIME()      | Trả về giờ, phút, giây hiện tại ở dạng "HH-MM-SS"     | 20:27:41            |
| CURRENT_TIMESTAMP() | Kết hợp 2 cái trên, trả về dạng "YYYY-MM-DD HH-MM-SS" | 2024-02-07 20:28:08 |
