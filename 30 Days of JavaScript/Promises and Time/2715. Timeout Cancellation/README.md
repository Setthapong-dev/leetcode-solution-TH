# 2715. Timeout Cancellation

## คำอธิบายโจทย์
สร้างฟังก์ชัน `cancellable` ที่รับฟังก์ชัน `fn` และอาร์เรย์ของ arguments `args` และเวลา `t` (มิลลิวินาที) แล้วคืนค่าฟังก์ชัน `cancelFn` ที่สามารถใช้ยกเลิกการทำงานของ timeout ได้

## ตัวอย่างการใช้งาน
```javascript
const result = [];

const fn = (x) => x * 5;
const args = [2], t = 20, cancelTimeMs = 50;

const start = performance.now();

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({"time": diff, "returned": fn(...argsArr)});
}
       
const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelTimeMs);
           
setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
    console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15)
```

## วิธีแก้ไข
ใช้ **setTimeout** เพื่อกำหนดเวลาหน่วง และ **clearTimeout** เพื่อยกเลิกการทำงาน

### ขั้นตอนการแก้ไข:
1. สร้างฟังก์ชัน `cancellable` ที่รับ `fn`, `args`, และ `t`
2. ใช้ `setTimeout` เพื่อหน่วงเวลาตาม `t` มิลลิวินาที
3. เมื่อเวลาหมด ให้เรียก `fn(...args)`
4. คืนค่าฟังก์ชัน `cancelFn` ที่ใช้ `clearTimeout` เพื่อยกเลิก timeout

## โค้ดตัวอย่าง
```javascript
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    let timeoutId = setTimeout(() => fn(...args), t)
    return function cancelFn() {
        clearTimeout(timeoutId)
    }
};
```

## ความรู้ที่ได้
- **setTimeout**: กำหนดเวลาหน่วงการทำงาน
- **clearTimeout**: ยกเลิก timeout ที่กำหนดไว้
- **Function arguments**: การส่ง arguments ไปยังฟังก์ชัน
- **Function return**: การคืนค่าฟังก์ชันจากฟังก์ชันอื่น
- **Resource management**: การจัดการทรัพยากรและการยกเลิก
- **Closure**: การเข้าถึงตัวแปรใน scope ของฟังก์ชันแม่

## หลักการทำงาน
1. `setTimeout` จะหน่วงเวลาตาม `t` มิลลิวินาที
2. เมื่อเวลาหมด จะเรียก `fn(...args)`
3. `cancelFn` สามารถใช้ยกเลิก timeout ได้ตลอดเวลา
4. `timeoutId` ถูกเก็บไว้ใน closure เพื่อให้ `cancelFn` เข้าถึงได้

## การใช้งานจริง
- **API timeout**: กำหนดเวลาหมดอายุสำหรับการเรียก API
- **User input**: ยกเลิกการทำงานเมื่อผู้ใช้เปลี่ยนใจ
- **Resource cleanup**: ยกเลิกการทำงานที่ไม่จำเป็น
- **Performance optimization**: ป้องกันการทำงานที่ใช้เวลานานเกินไป
- **Race conditions**: จัดการการแข่งขันระหว่าง operations

## ข้อดีของการใช้ Cancellation
- **Memory efficiency**: ป้องกัน memory leak
- **User experience**: ให้ผู้ใช้ควบคุมการทำงาน
- **Resource management**: จัดการทรัพยากรอย่างมีประสิทธิภาพ
- **Error prevention**: ป้องกันการทำงานที่ไม่ต้องการ
