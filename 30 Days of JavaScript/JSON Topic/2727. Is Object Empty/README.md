# 2727. Is Object Empty

## คำอธิบายปัญหา

กำหนดให้ฟังก์ชัน `isEmpty` ที่รับพารามิเตอร์ `obj` ซึ่งเป็น Object หรือ Array และคืนค่า boolean ที่บอกว่าวัตถุนั้นว่างเปล่าหรือไม่

วัตถุจะถือว่าเป็น empty เมื่อ:
- ไม่มี properties หรือ elements ใดๆ เลย
- มี length เป็น 0

## ตัวอย่าง

### ตัวอย่างที่ 1:
```javascript
Input: obj = {"x": 5, "y": 42}
Output: false
Explanation: The object has 2 properties, so it is not empty.
```

### ตัวอย่างที่ 2:
```javascript
Input: obj = {}
Output: true
Explanation: The object has no properties, so it is empty.
```

### ตัวอย่างที่ 3:
```javascript
Input: obj = [null, false, 0]
Output: false
Explanation: The array has 3 elements, so it is not empty.
```

## ข้อจำกัด

- `obj` เป็น valid JSON object หรือ array
- `2 <= JSON.stringify(obj).length <= 10^5`

## วิธีแก้ปัญหา

ใช้ `Object.keys(obj).length` เพื่อตรวจสอบจำนวน properties หรือ elements ในวัตถุ

- ถ้า length เป็น 0 แสดงว่าวัตถุว่างเปล่า → คืนค่า `true`
- ถ้า length ไม่เป็น 0 แสดงว่าวัตถุไม่ว่างเปล่า → คืนค่า `false`

## ความซับซ้อน

- **Time Complexity:** O(n) โดยที่ n คือจำนวน properties/elements ในวัตถุ
- **Space Complexity:** O(1) เพราะไม่ได้ใช้ extra space เพิ่มเติม
