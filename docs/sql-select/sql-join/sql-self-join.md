---
sidebar_position: 4
---

# SELF JOIN

## SELF JOIN là gì?

- Trong SQL, SELF JOIN là một phép kết nối (join) được thực hiện trên một bảng với chính nó. Nó được sử dụng khi ta muốn kết nối các hàng trong bảng với nhau dựa trên một điều kiện.
- Để thực hiện SELF JOIN, ta cần sử dụng ít nhất hai bí danh ([SQL ALIASES](../sql-aliases)) cho bảng đó. Mỗi bí danh được sử dụng để tham chiếu đến các phiên bản khác nhau của bảng trong câu truy vấn. Công việc của SELF JOIN là kết nối các hàng từ bảng gốc với bảng trích xuất dựa trên điều kiện được chỉ định.

## Cú pháp

- Dưới đây là cú pháp của **SELF JOIN**:

```sql
SELECT columname(s)
FROM table1 T1
INNER JOIN table1 T2
ON conditions
```

:::note

- Ta có thể sử dụng **INNER JOIN** hoặc các loại JOIN khác tùy thuộc vào nhu cầu

:::

## Ví dụ 1

- Giả sử ta có bảng **Employees** sau. Mỗi employee sẽ có một Id riêng, và ManagerId là Id của người quản lý employee đó (thông tin về manager cũng được thể hiện trong cùng bảng **Employees** này):

| Id  | FullName      | Salary | ManagerId |
| --- | ------------- | ------ | --------- |
| 1   | John Smith    | 10000  | 3         |
| 2   | Jane Anderson | 12000  | 3         |
| 3   | Tom Lanon     | 15000  | 4         |
| 4   | Anne Connor   | 20000  |           |
| 5   | Jeremy York   | 9000   | 1         |

- Giờ chúng ta sẽ thực hiện đoạn SELECT sau:

```sql
SELECT
    employee.Id,
        employee.FullName,
        employee.ManagerId,
        manager.FullName as ManagerName
FROM Employees employee
JOIN Employees manager
ON employee.ManagerId = manager.Id
```

- Kết quả trả về sẽ như sau:

| Id  | FullName      | ManagerId | ManagerName |
| --- | ------------- | --------- | ----------- |
| 1   | John Smith    | 3         | Tom Lanon   |
| 2   | Jane Anderson | 3         | Tom Lanon   |
| 3   | Tom Lanon     | 4         | Anne Connor |
| 5   | Jeremy York   | 1         | John Smith  |

:::info

- Giải thích:
  - Câu query trên select ra `Id`, `FullName`, `ManagerId` từ bảng có bí danh (alias) là **employee**. Nó cũng select cột `FullName` từ bảng có bí danh (alias) là `manager` và đặt tên là `ManagerName`. Do vậy, tất cả các employee mà có manager sẽ được truy xuất ra cùng với tên và id của manager tương ứng

:::

## Ví dụ 2

- Ví dụ dưới đây chúng ta có 2 bảng **Airport** và **Flight** như sau:

**Airport**

| AirportId | Country | City      |
| --------- | ------- | --------- |
| 1         | USA     | New York  |
| 2         | Canada  | Toronto   |
| 3         | Germany | Frankfurt |
| 4         | France  | Paris     |
| 5         | Italy   | Rome      |

**Flight**

| FlightId | AirplaneId | StartTimestamp      | EndTimestamp        | StartAirportId | EndAirportId |
| -------- | ---------- | ------------------- | ------------------- | -------------- | ------------ |
| 2        | 555877     | 2020-01-14 13:00:00 | 2020-01-14 15:00:00 | 3              | 4            |
| 3        | 222536     | 2020-02-04 01:00:00 | 2020-02-04 16:00:00 | 1              | 5            |
| 4        | 111745     | 2020-02-15 09:00:00 | 2020-02-15 12:00:00 | 5              | 4            |
| 5        | 777524     | 2020-02-24 03:00:00 | 2020-02-24 19:00:00 | 4              | 2            |
| 6        | 888521     | 2020-03-25 10:00:00 | 2020-03-25 12:00:00 | 2              | 1            |
| 7        | 444937     | 2020-04-01 00:00:00 | 2020-04-01 17:00:00 | 3              | 1            |
| 243      | 111654     | 2020-01-01 02:00:00 | 2020-01-01 04:00:00 | 1              | 2            |

- Trong bảng **Flight**, có 2 khóa ngoại là `StartAirportId` và `EndAirportId` liên kết với khóa chính `AirportId` của bảng **Airport**. Lần lượt là sân bay xuất phát và sân bay đích.
- Giả sử chúng ta muốn tìm kiếm số nhận dạng chuyến bay cùng với thông tin chi tiết về sân bay khởi hành và điểm đến của họ, ta sử dụng câu query sau:

```sql
SELECT
	flight.FlightId,
    	flight.AirplaneId,
    	flight.StartAirportId,
    	startairport.Country as StartAirportCountry,
    	startairport.City as StartAirportCity,
    	flight.EndAirportId,
    	endairport.Country as EndAirportCountry,
    	endairport.City as EndAirportCity
FROM Flight flight
JOIN Airport startairport
ON flight.StartAirportId = startairport.AirportId
JOIN Airport endairport
ON flight.EndAirportId = endairport.AirportId
```

:::info

- Trong câu query trên:
  - Ở JOIN đầu tiên, **Airport** là bảng đóng vai trò là sân bay xuất phát.
  - Ở JOIN thứ hai, **Airport** là bảng đóng vai trò là sân bay đích.

:::

- Kết quả:

| FlightId | AirplaneId | StartAirportId | StartAirportCountry | StartAirportCity | EndAirportId | EndAirportCountry | EndAirportCity |
| -------- | ---------- | -------------- | ------------------- | ---------------- | ------------ | ----------------- | -------------- |
| 1        | 111654     | 1              | USA                 | New York         | 2            | Canada            | Toronto        |
| 2        | 555877     | 3              | Germany             | Frankfurt        | 4            | France            | Paris          |
| 3        | 222536     | 1              | USA                 | New York         | 5            | Italy             | Rome           |
| 4        | 111745     | 5              | Italy               | Rome             | 4            | France            | Paris          |
| 5        | 777524     | 4              | France              | Paris            | 2            | Canada            | Toronto        |
| 6        | 888521     | 2              | Canada              | Toronto          | 1            | USA               | New York       |
| 7        | 444937     | 3              | Germany             | Frankfurt        | 1            | USA               | New York       |
