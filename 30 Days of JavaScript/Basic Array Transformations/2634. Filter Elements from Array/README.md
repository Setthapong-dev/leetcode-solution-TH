# 2634. Filter Elements from Array

## คำอธิบายโจทย์
สร้างฟังก์ชัน `filter(arr, fn)` ที่รับ array `arr` และฟังก์ชัน `fn` แล้วคืนค่า array ใหม่ที่มีเฉพาะ elements ที่ผ่านเงื่อนไขในฟังก์ชัน `fn`

ฟังก์ชัน `fn` จะรับ 2 parameters:
- `element`: ค่าใน array ที่ตำแหน่งปัจจุบัน
- `index`: index ของ element นั้น

ฟังก์ชัน `fn` จะคืนค่า `true` หรือ `false` เพื่อบอกว่า element นั้นควรอยู่ในผลลัพธ์หรือไม่

## ตัวอย่างการใช้งาน
```javascript
// ตัวอย่างที่ 1: กรองเลขคี่
const arr1 = [0, 10, 20, 30];
const fn1 = function greaterThan10(n) { return n > 10; };
filter(arr1, fn1); // [20, 30]

// ตัวอย่างที่ 2: กรองตาม index
const arr2 = [1, 2, 3];
const fn2 = function firstIndex(n, i) { return i === 0; };
filter(arr2, fn2); // [1]

// ตัวอย่างที่ 3: กรองเลขคู่
const arr3 = [-2, -1, 0, 1, 2];
const fn3 = function plusOne(n) { return n + 1; };
filter(arr3, fn3); // [-2, 0, 1, 2]
```

## วิธีแก้ไข
ใช้ **for loop** วนลูปผ่าน array และเรียกฟังก์ชัน `fn` สำหรับแต่ละ element ถ้าผลลัพธ์เป็น `true` ให้ push element นั้นเข้า array ใหม่

### ขั้นตอนการแก้ไข:
1. สร้าง array ใหม่ `newArr` เพื่อเก็บผลลัพธ์
2. ใช้ for loop วนลูปผ่าน array เดิม
3. ในแต่ละรอบ เรียก `fn(arr[i], i)` เพื่อตรวจสอบเงื่อนไข
4. ถ้าผลลัพธ์เป็น `true` ให้ push `arr[i]` เข้า `newArr`
5. คืนค่า `newArr`

## ความรู้ที่ได้
- **Array Methods**: การสร้างฟังก์ชัน filter ที่ทำงานเหมือน Array.filter()
- **Higher-order Function**: ฟังก์ชันที่รับฟังก์ชันอื่นเป็น parameter
- **Conditional Logic**: การใช้ if statement เพื่อตรวจสอบเงื่อนไข
- **Boolean Return**: ฟังก์ชันที่คืนค่า true/false
- **Array Manipulation**: การสร้างและจัดการ array ใหม่

## หลักการทำงาน
ฟังก์ชัน `filter` จะวนลูปผ่าน array เดิมทีละ element และเรียกฟังก์ชัน `fn` ที่ส่งเข้ามา โดยส่งค่า element และ index ไปด้วย ถ้าผลลัพธ์เป็น `true` element นั้นจะถูกเก็บใน array ใหม่

## ความแตกต่างจาก Array.filter()
โจทย์นี้ให้เราสร้างฟังก์ชัน `filter` ที่ทำงานเหมือน `Array.filter()` แต่เป็น standalone function ที่รับ array และฟังก์ชันเป็น parameters

## เทคนิคการใช้งาน
- ใช้ `fn` เป็น predicate function ที่คืนค่า boolean
- สามารถกรองตามค่า element หรือ index ได้
- ผลลัพธ์จะเป็น array ที่มีขนาดเล็กกว่าหรือเท่ากับ array เดิม
