---
sidebar_position: 1
slug: /
---

# MySQL Data Types

## String Data Types

| Data type                   | Description                                                                                                                                                                                                                                                                                                   |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CHAR(size)                  | Kiểu chuỗi có độ dài cố định, tham số `size` chỉ định độ dài của chuỗi (từ 0 đến 255)                                                                                                                                                                                                                         |
| VARCHAR(size)               | Kiểu chuỗi có độ dài thay đổi, tham số `size` chỉ định độ dài tối đa của chuỗi (từ 0 đến 65535)                                                                                                                                                                                                               |
| MEDIUMTEXT                  | Kiểu chuỗi có độ dài tối đa 16,777,215 kí tự                                                                                                                                                                                                                                                                  |
| LONGTEXT                    | Kiểu chuỗi có độ dài tối đa 4,294,967,295 kí tự                                                                                                                                                                                                                                                               |
| ENUM(val1, val2, val3, ...) | Một đối tượng chuỗi chỉ có thể có một giá trị, được chọn từ danh sách các giá trị có thể có. Bạn có thể liệt kê tối đa 65535 giá trị trong danh sách ENUM. Nếu một giá trị được chèn vào không có trong danh sách thì một giá trị trống sẽ được chèn vào. Các giá trị được sắp xếp theo thứ tự bạn nhập chúng |

## Numeric Data Types

| Data type | Description                                                                      |
| --------- | -------------------------------------------------------------------------------- |
| INT       | Kiểu số nguyên, nhận giá trị từ -2147483648 đến 2147483647                       |
| BIGINT    | Kiểu số nguyên lớn, nhận giá trị từ -9223372036854775808 đến 9223372036854775807 |
| FLOAT(p)  | Kiểu số thực, với `p` là số chữ số sau dấu phẩy                                  |

## Date and Time Data Types

| Data type | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| DATE      | Kiểu ngày tháng năm. Định dạng: YYYY-MM-DD                        |
| DATETIME  | Kiểu ngày tháng năm giờ phút giây. Định dạng: YYYY-MM-DD hh:mm:ss |
| TIME      | Kiểu giờ phút giây. Định dạng: hh:mm:ss                           |
| TIMESTAMP | Kiểu mốc dấu thời gian                                            |
