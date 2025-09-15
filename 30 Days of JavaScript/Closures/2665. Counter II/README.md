# 2665. Counter II

## คำอธิบายโจทย์
สร้างฟังก์ชัน `createCounter(init)` ที่รับค่าเริ่มต้น `init` และคืนค่า object ที่มี 3 methods:
- `increment()`: เพิ่มค่าแล้วคืนค่าใหม่
- `decrement()`: ลดค่าแล้วคืนค่าใหม่  
- `reset()`: รีเซ็ตค่าเป็นค่าเริ่มต้นแล้วคืนค่า

## ตัวอย่างการใช้งาน
```javascript
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
counter.increment(); // 5
counter.increment(); // 6
counter.reset(); // 5
```

## วิธีแก้ไข
ใช้ **Closure** เพื่อเก็บค่าเริ่มต้นและค่าปัจจุบันไว้ใน scope ของฟังก์ชันแม่ และคืนค่า object ที่มี 3 methods

### ขั้นตอนการแก้ไข:
1. สร้างฟังก์ชัน `createCounter(init)` ที่รับค่าเริ่มต้น `init`
2. สร้างตัวแปร `x` เพื่อเก็บค่าปัจจุบัน (เริ่มต้นด้วย `init`)
3. คืนค่า object ที่มี 3 methods:
   - `increment()`: ใช้ **Pre-increment** (`++x`) เพิ่มค่าแล้วคืนค่าใหม่
   - `decrement()`: ใช้ **Pre-decrement** (`--x`) ลดค่าแล้วคืนค่าใหม่
   - `reset()`: กำหนดค่า `x = init` แล้วคืนค่า

## ความรู้ที่ได้
- **Closure**: ฟังก์ชันที่คืนมามีการเข้าถึงตัวแปรใน scope ของฟังก์ชันแม่
- **Pre-increment** (`++x`): เพิ่มค่าแล้วคืนค่าใหม่
- **Pre-decrement** (`--x`): ลดค่าแล้วคืนค่าใหม่
- **Object Literal**: การสร้าง object โดยใช้ `{}` syntax
- **Method Definition**: การสร้าง method ใน object
- **State Management**: การจัดการสถานะของตัวแปรใน Closure

## ความแตกต่างจาก Counter I
- **Counter I**: มีแค่ method เดียวที่คืนค่าแล้วเพิ่มทีละ 1
- **Counter II**: มี 3 methods (`increment`, `decrement`, `reset`) และใช้ Pre-increment/Pre-decrement

## หลักการทำงาน
เมื่อเรียก `createCounter(5)` จะสร้าง Closure ที่เก็บค่า `init = 5` และ `x = 5` ไว้ ทุกครั้งที่เรียก methods จะเข้าถึงและแก้ไขค่า `x` ได้ และสามารถรีเซ็ตกลับเป็นค่าเริ่มต้นได้
