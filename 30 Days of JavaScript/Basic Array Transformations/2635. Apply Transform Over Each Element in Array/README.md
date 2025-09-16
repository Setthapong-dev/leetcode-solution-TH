# 2635. Apply Transform Over Each Element in Array

## คำอธิบายโจทย์
สร้างฟังก์ชัน `map(arr, fn)` ที่รับ array `arr` และฟังก์ชัน `fn` แล้วคืนค่า array ใหม่ที่แต่ละ element ผ่านการแปลงด้วยฟังก์ชัน `fn`

ฟังก์ชัน `fn` จะรับ 2 parameters:
- `element`: ค่าใน array ที่ตำแหน่งปัจจุบัน
- `index`: index ของ element นั้น

## ตัวอย่างการใช้งาน
```javascript
// ตัวอย่างที่ 1: เพิ่มค่า 10 ให้ทุก element
const arr1 = [1, 2, 3];
const fn1 = function plusone(n) { return n + 1; };
map(arr1, fn1); // [2, 3, 4]

// ตัวอย่างที่ 2: เพิ่ม index ให้ทุก element
const arr2 = [1, 2, 3];
const fn2 = function plusI(n, i) { return n + i; };
map(arr2, fn2); // [1, 3, 5]

// ตัวอย่างที่ 3: คืนค่าคงที่
const arr3 = [10, 20, 30];
const fn3 = function constant() { return 42; };
map(arr3, fn3); // [42, 42, 42]
```

## วิธีแก้ไข
ใช้ **for loop** วนลูปผ่าน array และเรียกฟังก์ชัน `fn` สำหรับแต่ละ element พร้อมส่ง index ไปด้วย

### ขั้นตอนการแก้ไข:
1. สร้าง array ใหม่ `newArr` เพื่อเก็บผลลัพธ์
2. ใช้ for loop วนลูปผ่าน array เดิม
3. ในแต่ละรอบ เรียก `fn(arr[i], i)` และ push ผลลัพธ์เข้า `newArr`
4. คืนค่า `newArr`

## ความรู้ที่ได้
- **Array Methods**: การสร้างฟังก์ชัน map ที่ทำงานเหมือน Array.map()
- **Higher-order Function**: ฟังก์ชันที่รับฟังก์ชันอื่นเป็น parameter
- **Function Parameters**: การส่ง parameters หลายตัวให้ฟังก์ชัน
- **Loop Iteration**: การวนลูปผ่าน array
- **Array Manipulation**: การสร้างและจัดการ array ใหม่

## หลักการทำงาน
ฟังก์ชัน `map` จะวนลูปผ่าน array เดิมทีละ element และเรียกฟังก์ชัน `fn` ที่ส่งเข้ามา โดยส่งค่า element และ index ไปด้วย ผลลัพธ์ที่ได้จะถูกเก็บใน array ใหม่และคืนค่ากลับไป

## ความแตกต่างจาก Array.map()
โจทย์นี้ให้เราสร้างฟังก์ชัน `map` ที่ทำงานเหมือน `Array.map()` แต่เป็น standalone function ที่รับ array และฟังก์ชันเป็น parameters
