# 2626. Array Reduce Transformation

## คำอธิบายโจทย์
สร้างฟังก์ชัน `reduce(nums, fn, init)` ที่รับ array `nums`, ฟังก์ชัน `fn`, และค่าเริ่มต้น `init` แล้วคืนค่าผลลัพธ์จากการลด array เป็นค่าเดียว

ฟังก์ชัน `fn` จะรับ 2 parameters:
- `accum`: ค่าที่สะสมมาจนถึงตอนนี้
- `curr`: ค่าใน array ที่ตำแหน่งปัจจุบัน

ฟังก์ชัน `fn` จะคืนค่าใหม่ที่ใช้เป็น `accum` ในรอบถัดไป

## ตัวอย่างการใช้งาน
```javascript
// ตัวอย่างที่ 1: หาผลรวม
const nums1 = [1, 2, 3, 4];
const fn1 = function sum(accum, curr) { return accum + curr; };
const init1 = 0;
reduce(nums1, fn1, init1); // 10

// ตัวอย่างที่ 2: หาผลคูณ
const nums2 = [1, 2, 3, 4];
const fn2 = function sum(accum, curr) { return accum + curr * curr; };
const init2 = 100;
reduce(nums2, fn2, init2); // 130

// ตัวอย่างที่ 3: คืนค่าเริ่มต้นเมื่อ array ว่าง
const nums3 = [];
const fn3 = function sum(accum, curr) { return 0; };
const init3 = 25;
reduce(nums3, fn3, init3); // 25
```

## วิธีแก้ไข
ใช้ **for loop** วนลูปผ่าน array และเรียกฟังก์ชัน `fn` สำหรับแต่ละ element โดยส่งค่า accumulator และ current value ไป

### ขั้นตอนการแก้ไข:
1. สร้างตัวแปร `accum` เพื่อเก็บค่าที่สะสม (เริ่มต้นด้วย `init`)
2. ใช้ for loop วนลูปผ่าน array
3. ในแต่ละรอบ เรียก `fn(accum, nums[i])` และเก็บผลลัพธ์ใน `accum`
4. คืนค่า `accum` สุดท้าย

## ความรู้ที่ได้
- **Array Methods**: การสร้างฟังก์ชัน reduce ที่ทำงานเหมือน Array.reduce()
- **Higher-order Function**: ฟังก์ชันที่รับฟังก์ชันอื่นเป็น parameter
- **Accumulator Pattern**: การสะสมค่าผ่านการวนลูป
- **Function Composition**: การประกอบฟังก์ชันเพื่อสร้างผลลัพธ์ใหม่
- **Initial Value**: การกำหนดค่าเริ่มต้นสำหรับการคำนวณ

## หลักการทำงาน
ฟังก์ชัน `reduce` จะวนลูปผ่าน array ทีละ element และเรียกฟังก์ชัน `fn` ที่ส่งเข้ามา โดยส่งค่า accumulator (ค่าที่สะสมมา) และ current value (ค่าปัจจุบัน) ไป ผลลัพธ์ที่ได้จะกลายเป็น accumulator ในรอบถัดไป

## ความแตกต่างจาก Array.reduce()
โจทย์นี้ให้เราสร้างฟังก์ชัน `reduce` ที่ทำงานเหมือน `Array.reduce()` แต่เป็น standalone function ที่รับ array, ฟังก์ชัน, และค่าเริ่มต้นเป็น parameters

## การใช้งานที่พบบ่อย
- **การรวมค่า**: หาผลรวม, ผลคูณ, หรือการรวมข้อมูล
- **การแปลงข้อมูล**: แปลง array เป็น object หรือ string
- **การกรองและแปลง**: รวมการกรองและการแปลงในขั้นตอนเดียว
- **การคำนวณสถิติ**: หาค่าเฉลี่ย, ค่าสูงสุด, ค่าต่ำสุด

## เทคนิคการใช้งาน
- ใช้ `init` เป็นค่าเริ่มต้นที่เหมาะสมกับประเภทการคำนวณ
- ฟังก์ชัน `fn` ควรคืนค่าประเภทเดียวกับ `accum`
- สามารถใช้ reduce แทน map หรือ filter ได้ในบางกรณี
