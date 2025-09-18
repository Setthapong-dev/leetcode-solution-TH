# 2621. Sleep

## คำอธิบายโจทย์
สร้างฟังก์ชัน `sleep` ที่รับเวลาในหน่วยมิลลิวินาที (milliseconds) และคืนค่า Promise ที่จะ resolve หลังจากเวลาที่กำหนดผ่านไป

## ตัวอย่างการใช้งาน
```javascript
let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100

// หรือใช้ async/await
async function example() {
    console.log('เริ่มต้น');
    await sleep(2000); // รอ 2 วินาที
    console.log('หลังจากรอ 2 วินาที');
}

example();
// Output:
// เริ่มต้น
// (รอ 2 วินาที)
// หลังจากรอ 2 วินาที
```

## วิธีแก้ไข
ใช้ **setTimeout** ภายใน Promise เพื่อสร้างการหน่วงเวลาแบบ asynchronous

### ขั้นตอนการแก้ไข:
1. สร้างฟังก์ชัน `sleep` ที่รับพารามิเตอร์ `millis` (เวลาในมิลลิวินาที)
2. คืนค่า Promise ใหม่
3. ใช้ `setTimeout` เพื่อหน่วงเวลาตาม `millis`
4. เรียก `resolve()` เมื่อเวลาหมด

## โค้ดตัวอย่าง
```javascript
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise(resolve => {
        setTimeout(() => { 
            return resolve()
        }, millis)
    })
}
```

## ความรู้ที่ได้
- **Promise**: การสร้าง Promise เพื่อจัดการ asynchronous operation
- **setTimeout**: ฟังก์ชันสำหรับหน่วงเวลา
- **async/await**: Syntax สำหรับจัดการ Promise แบบ synchronous
- **Asynchronous programming**: การเขียนโปรแกรมแบบไม่บล็อก
- **Callback functions**: ฟังก์ชันที่เรียกใช้เมื่อเวลาหมด

## หลักการทำงาน
เมื่อเรียก `sleep(1000)` จะสร้าง Promise ใหม่ที่ใช้ `setTimeout` เพื่อหน่วงเวลา 1 วินาที แล้วเรียก `resolve()` เพื่อบอกว่า Promise เสร็จสิ้น

## การใช้งานจริง
- **API rate limiting**: หน่วงเวลาระหว่างการเรียก API
- **Animation delays**: หน่วงเวลาในการแสดง animation
- **User experience**: สร้างความล่าช้าเพื่อให้ผู้ใช้รู้สึกถึงการประมวลผล
- **Testing**: จำลองการหน่วงเวลาในการทดสอบ
- **Performance optimization**: ควบคุมการทำงานของโปรแกรม
