# 2623. Memoize

## คำอธิบายโจทย์
สร้างฟังก์ชัน `memoize(fn)` ที่รับฟังก์ชัน `fn` และคืนค่าฟังก์ชันใหม่ที่มีการ **memoization** (การเก็บผลลัพธ์ไว้ใน cache)

ฟังก์ชันที่คืนมาจะ:
- เรียกฟังก์ชัน `fn` ครั้งแรกสำหรับ arguments ชุดหนึ่งและเก็บผลลัพธ์ไว้
- ครั้งถัดไปที่เรียกด้วย arguments เดียวกัน จะคืนค่าจาก cache โดยไม่เรียกฟังก์ชัน `fn`

## ตัวอย่างการใช้งาน
```javascript
// ตัวอย่างที่ 1: ฟังก์ชันบวกเลข
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});

memoizedFn(2, 3); // 5 (เรียก fn ครั้งแรก)
memoizedFn(2, 3); // 5 (คืนค่าจาก cache)
console.log(callCount); // 1 (fn ถูกเรียกเพียง 1 ครั้ง)

// ตัวอย่างที่ 2: ฟังก์ชันคูณเลข
const memoizedMultiply = memoize(function (x, y) {
    console.log("Computing...");
    return x * y;
});

memoizedMultiply(4, 5); // 20 (แสดง "Computing...")
memoizedMultiply(4, 5); // 20 (ไม่แสดง "Computing...")

// ตัวอย่างที่ 3: ฟังก์ชันรับ 1 parameter
const memoizedSquare = memoize(function (n) {
    return n * n;
});

memoizedSquare(5); // 25
memoizedSquare(5); // 25 (จาก cache)
```

## วิธีแก้ไข
ใช้ **Closure** เพื่อเก็บ cache object และ **Rest Parameter** เพื่อรับ arguments ทั้งหมด

### ขั้นตอนการแก้ไข:
1. สร้างฟังก์ชัน `memoize(fn)` ที่รับฟังก์ชัน `fn`
2. สร้างตัวแปร `cache = {}` เพื่อเก็บผลลัพธ์
3. คืนค่าฟังก์ชันใหม่ที่รับ `...args`
4. ในฟังก์ชันที่คืนมา:
   - แปลง `args` เป็น string key ด้วย `args.toString()`
   - ถ้า `cache[key]` มีค่า ให้คืนค่าจาก cache
   - ถ้าไม่มี ให้เรียก `fn(...args)` และเก็บผลลัพธ์ใน cache

## ความรู้ที่ได้
- **Memoization**: เทคนิคการเก็บผลลัพธ์ไว้ใน cache เพื่อหลีกเลี่ยงการคำนวณซ้ำ
- **Closure**: ฟังก์ชันที่คืนมามีการเข้าถึงตัวแปรใน scope ของฟังก์ชันแม่
- **Cache Management**: การจัดการ cache object เพื่อเก็บผลลัพธ์
- **Rest Parameter** (`...args`): ใช้รับ arguments หลายตัว
- **Spread Operator** (`...args`): ใช้ส่ง arguments ไปให้ฟังก์ชันอื่น
- **Object Key**: การใช้ string เป็น key ใน object
- **Performance Optimization**: การเพิ่มประสิทธิภาพโดยลดการคำนวณซ้ำ

## หลักการทำงาน
ฟังก์ชัน `memoize` จะสร้าง Closure ที่เก็บ cache object ไว้ ทุกครั้งที่เรียกฟังก์ชันที่คืนมา จะตรวจสอบว่า arguments ชุดนี้เคยคำนวณแล้วหรือไม่ ถ้าเคยแล้วจะคืนค่าจาก cache ถ้าไม่เคยจะคำนวณใหม่และเก็บไว้ใน cache

## การใช้งานที่พบบ่อย
- **Expensive Calculations**: ฟังก์ชันที่คำนวณซับซ้อนและใช้เวลานาน
- **API Calls**: เก็บผลลัพธ์จาก API เพื่อหลีกเลี่ยงการเรียกซ้ำ
- **Recursive Functions**: ฟังก์ชัน recursive ที่มีการคำนวณซ้ำ
- **Mathematical Functions**: ฟังก์ชันทางคณิตศาสตร์ที่คำนวณซ้ำ
- **Data Processing**: การประมวลผลข้อมูลที่ซับซ้อน

## เทคนิคการใช้งาน
- ใช้ `args.toString()` เพื่อสร้าง unique key จาก arguments
- เก็บผลลัพธ์ใน cache object โดยใช้ key เป็น string
- ตรวจสอบ cache ก่อนเรียกฟังก์ชันเดิม
- เก็บผลลัพธ์ใหม่ใน cache หลังจากคำนวณเสร็จ

## ข้อควรระวัง
- **Memory Usage**: cache จะเก็บผลลัพธ์ไว้ตลอดเวลา อาจใช้ memory มาก
- **Key Generation**: `args.toString()` อาจไม่ unique สำหรับ objects ที่ซับซ้อน
- **Side Effects**: ฟังก์ชันที่มี side effects อาจไม่เหมาะกับ memoization
- **Cache Size**: ไม่มีการจำกัดขนาด cache อาจทำให้ memory เต็ม

## ข้อจำกัด
- ใช้ได้เฉพาะฟังก์ชันที่ **pure** (ไม่มี side effects)
- arguments ที่ซับซ้อนอาจสร้าง key ที่ไม่ unique
- ไม่เหมาะกับฟังก์ชันที่รับ objects ที่มี properties เปลี่ยนแปลง
