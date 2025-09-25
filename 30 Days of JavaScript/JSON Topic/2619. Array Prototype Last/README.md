# 2619. Array Prototype Last

## คำอธิบายโจทย์

เขียนฟังก์ชันที่เพิ่ม method `last()` ให้กับ Array prototype โดยที่:

- ถ้า array ว่างเปล่า ให้ return `-1`
- ถ้า array มีข้อมูล ให้ return element ตัวสุดท้าย

## ตัวอย่าง

```javascript
const arr = [1, 2, 3];
arr.last(); // 3

const emptyArr = [];
emptyArr.last(); // -1
```

## วิธีแก้ปัญหา

1. เพิ่ม method `last()` ให้กับ `Array.prototype`
2. ตรวจสอบว่า array ว่างเปล่าหรือไม่ (`this.length === 0`)
3. ถ้าว่างเปล่า return `-1`
4. ถ้าไม่ว่างเปล่า return element ตัวสุดท้าย (`this[this.length - 1]`)

## ความซับซ้อน

- **Time Complexity:** O(1) - การเข้าถึง element ตัวสุดท้ายใช้เวลา O(1)
- **Space Complexity:** O(1) - ไม่ใช้ extra space

## การทดสอบ

```javascript
// Test case 1: Array ที่มีข้อมูล
const arr1 = [1, 2, 3];
console.log(arr1.last()); // 3

// Test case 2: Array ว่างเปล่า
const arr2 = [];
console.log(arr2.last()); // -1

// Test case 3: Array ที่มี element เดียว
const arr3 = [42];
console.log(arr3.last()); // 42
```
