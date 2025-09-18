# 2725. Interval Cancellation

## คำอธิบายโจทย์
สร้างฟังก์ชัน `cancellable` ที่รับฟังก์ชัน `fn` และอาร์เรย์ของ arguments `args` และเวลา `t` (มิลลิวินาที) แล้วคืนค่าฟังก์ชัน `cancelFn` ที่สามารถใช้ยกเลิกการทำงานของ interval ได้

ฟังก์ชันจะเรียก `fn(...args)` ทันทีครั้งแรก แล้วเรียกซ้ำทุก `t` มิลลิวินาทีจนกว่าจะถูกยกเลิก

## ตัวอย่างการใช้งาน
```javascript
const result = [];

const fn = (x) => x * 2;
const args = [4], t = 35, cancelTimeMs = 190;

const start = performance.now();

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({"time": diff, "returned": fn(...argsArr)});
}
       
const cancel = cancellable(log, args, t);

setTimeout(cancel, cancelTimeMs);
   
setTimeout(() => {
    console.log(result); // [
                         //     {"time":0,"returned":8},
                         //     {"time":35,"returned":8},
                         //     {"time":70,"returned":8},
                         //     {"time":105,"returned":8},
                         //     {"time":140,"returned":8},
                         //     {"time":175,"returned":8}
                         // ]
}, cancelTimeMs + t + 15)
```

## วิธีแก้ไข
ใช้ **setInterval** เพื่อเรียกฟังก์ชันซ้ำทุกช่วงเวลาที่กำหนด และ **clearInterval** เพื่อยกเลิกการทำงาน

### ขั้นตอนการแก้ไข:
1. สร้างฟังก์ชัน `cancellable` ที่รับ `fn`, `args`, และ `t`
2. เรียก `fn(...args)` ทันทีครั้งแรก
3. ใช้ `setInterval` เพื่อเรียก `fn(...args)` ทุก `t` มิลลิวินาที
4. คืนค่าฟังก์ชัน `cancelFn` ที่ใช้ `clearInterval` เพื่อยกเลิก interval

## โค้ดตัวอย่าง
```javascript
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    fn(...args)  // เรียกทันทีครั้งแรก
    let intervalId = setInterval(() => fn(...args), t)
    return function cancelFn() {
        clearInterval(intervalId)
    } 
};
```

## ความรู้ที่ได้
- **setInterval**: เรียกฟังก์ชันซ้ำทุกช่วงเวลาที่กำหนด
- **clearInterval**: ยกเลิก interval ที่กำหนดไว้
- **Periodic execution**: การทำงานแบบซ้ำๆ
- **Resource management**: การจัดการทรัพยากรและการยกเลิก
- **Timer functions**: ฟังก์ชันที่เกี่ยวข้องกับเวลา
- **Closure**: การเข้าถึงตัวแปรใน scope ของฟังก์ชันแม่
- **Immediate execution**: การเรียกฟังก์ชันทันทีครั้งแรก

## หลักการทำงาน
1. `fn(...args)` จะถูกเรียกทันทีครั้งแรก
2. `setInterval` จะเรียก `fn(...args)` ทุก `t` มิลลิวินาที
3. การเรียกจะเกิดขึ้นซ้ำๆ จนกว่าจะถูกยกเลิก
4. `cancelFn` สามารถใช้ยกเลิก interval ได้ตลอดเวลา
5. `intervalId` ถูกเก็บไว้ใน closure เพื่อให้ `cancelFn` เข้าถึงได้

## การใช้งานจริง
- **Real-time updates**: อัปเดตข้อมูลแบบ real-time
- **Polling**: ตรวจสอบสถานะเป็นระยะ
- **Animation**: สร้าง animation แบบ frame-by-frame
- **Monitoring**: ติดตามสถานะของระบบ
- **Scheduled tasks**: งานที่ต้องทำเป็นระยะ
- **Live data**: แสดงข้อมูลที่เปลี่ยนแปลงแบบสด

## ความแตกต่างจาก setTimeout
- **setTimeout**: เรียกฟังก์ชันครั้งเดียวหลังจากเวลาที่กำหนด
- **setInterval**: เรียกฟังก์ชันซ้ำๆ ทุกช่วงเวลาที่กำหนด
- **Immediate execution**: Interval จะเรียกฟังก์ชันทันทีครั้งแรก

## ข้อควรระวัง
- ต้องจำกัดการยกเลิก interval เพื่อป้องกัน memory leak
- ควรตรวจสอบว่า interval ยังทำงานอยู่ก่อนเรียก `clearInterval`
- การใช้ interval มากเกินไปอาจทำให้ประสิทธิภาพลดลง
- ต้องจัดการ error ในฟังก์ชันที่เรียกซ้ำๆ
