# 2637. Promise Time Limit

## คำอธิบายโจทย์
สร้างฟังก์ชัน `timeLimit` ที่รับฟังก์ชัน `fn` และเวลา `t` (มิลลิวินาที) แล้วคืนค่าฟังก์ชันใหม่ที่:
- เรียก `fn` ด้วย arguments ที่ส่งมา
- ถ้า `fn` เสร็จภายในเวลา `t` ให้คืนค่าผลลัพธ์
- ถ้า `fn` ใช้เวลานานกว่า `t` ให้ reject ด้วยข้อความ "Time Limit Exceeded"

## ตัวอย่างการใช้งาน
```javascript
const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms

// ตัวอย่างที่ 2 - ฟังก์ชันที่เสร็จทันเวลา
const fastLimited = timeLimit((x) => Promise.resolve(x * 2), 50);
fastLimited(5).then(console.log); // 10

// ตัวอย่างที่ 3 - ใช้ async/await
async function example() {
    try {
        const result = await limited(80); // เสร็จก่อน timeout
        console.log(result);
    } catch (error) {
        console.log(error); // "Time Limit Exceeded"
    }
}
```

## วิธีแก้ไข
ใช้ **Promise.race()** เพื่อแข่งขันระหว่าง:
1. Promise จาก `fn(...args)`
2. Promise ที่ reject หลังจากเวลา `t`

### ขั้นตอนการแก้ไข:
1. สร้างฟังก์ชัน `timeLimit` ที่รับ `fn` และ `t`
2. คืนค่าฟังก์ชัน async ที่รับ `...args`
3. สร้าง Promise ที่ reject หลังจากเวลา `t`
4. สร้าง Promise จาก `fn(...args)`
5. ใช้ `Promise.race()` เพื่อแข่งขันระหว่าง Promise ทั้งสอง

## โค้ดตัวอย่าง
```javascript
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        // สร้าง Promise ที่ reject หลังจากเวลา t
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t);
        });
        
        // สร้าง Promise จาก fn
        const fnPromise = fn(...args);
        
        // ใช้ Promise.race() เพื่อแข่งขัน
        return Promise.race([fnPromise, timeoutPromise]);
    }
};
```

## ความรู้ที่ได้
- **Promise.race()**: แข่งขันระหว่าง Promise หลายตัว
- **setTimeout**: กำหนดเวลาหมดอายุ
- **Error handling**: การจัดการข้อผิดพลาด
- **Async/await**: การจัดการ Promise แบบ synchronous
- **Function wrapping**: การห่อหุ้มฟังก์ชันเดิม
- **Timeout management**: การจัดการเวลาหมดอายุ

## หลักการทำงาน
1. `timeoutPromise` จะ reject หลังจากเวลา `t` มิลลิวินาที
2. `fnPromise` จะ resolve/reject ตามผลลัพธ์ของ `fn(...args)`
3. `Promise.race()` จะคืนค่า Promise ที่เสร็จก่อน
4. ถ้า `fn` เสร็จก่อน → คืนค่าผลลัพธ์จาก `fn`
5. ถ้า timeout เสร็จก่อน → reject ด้วย "Time Limit Exceeded"

## การใช้งานจริง
- **API timeout**: กำหนดเวลาหมดอายุสำหรับการเรียก API
- **Performance monitoring**: ติดตามประสิทธิภาพของฟังก์ชัน
- **Resource management**: ป้องกันการทำงานที่ใช้เวลานานเกินไป
- **User experience**: ให้ feedback เมื่อการทำงานช้า
- **Database queries**: จำกัดเวลาการ query ฐานข้อมูล
- **File operations**: จำกัดเวลาการอ่าน/เขียนไฟล์

## ข้อดีของการใช้ Time Limit
- **Prevents hanging**: ป้องกันการค้างของโปรแกรม
- **Better UX**: ผู้ใช้ไม่ต้องรอนาน
- **Resource efficiency**: ประหยัดทรัพยากรระบบ
- **Error handling**: จัดการข้อผิดพลาดได้ดีขึ้น
- **Predictable behavior**: พฤติกรรมที่คาดเดาได้

## ข้อควรระวัง
- ต้องกำหนดเวลาให้เหมาะสมกับฟังก์ชัน
- ควรจัดการ error ที่เกิดจาก timeout
- ต้องตรวจสอบว่า timeout ไม่สั้นเกินไป
- ควร log ข้อมูลเมื่อเกิด timeout เพื่อ debug
