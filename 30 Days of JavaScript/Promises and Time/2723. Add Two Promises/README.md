# 2723. Add Two Promises

## คำอธิบายโจทย์
สร้างฟังก์ชัน `addTwoPromises` ที่รับสอง Promise และคืนค่า Promise ใหม่ที่ resolve ด้วยผลรวมของค่าที่ได้จากทั้งสอง Promise

## ตัวอย่างการใช้งาน
```javascript
// ตัวอย่างที่ 1
addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then(console.log); // 4

// ตัวอย่างที่ 2
addTwoPromises(Promise.resolve(10), Promise.resolve(5))
    .then(console.log); // 15

// ตัวอย่างที่ 3 - ใช้ async/await
async function example() {
    const result = await addTwoPromises(
        Promise.resolve(3), 
        Promise.resolve(7)
    );
    console.log(result); // 10
}
```

## วิธีแก้ไข
ใช้ **async/await** เพื่อรอผลลัพธ์จากทั้งสอง Promise แล้วรวมผลลัพธ์เข้าด้วยกัน

### ขั้นตอนการแก้ไข:
1. สร้างฟังก์ชัน `addTwoPromises` ที่รับ `promise1` และ `promise2`
2. ใช้ `await` เพื่อรอผลลัพธ์จาก `promise1`
3. ใช้ `await` เพื่อรอผลลัพธ์จาก `promise2`
4. คืนค่า Promise ใหม่ที่ resolve ด้วยผลรวมของทั้งสองค่า

## โค้ดตัวอย่าง
```javascript
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    let num1, num2;
    num1 = await promise1;
    num2 = await promise2;
    return new Promise(resolve => resolve(num1 + num2));
};
```

## ความรู้ที่ได้
- **Promise**: การทำงานกับ Promise objects
- **async/await**: Syntax สำหรับจัดการ Promise แบบ synchronous
- **Promise resolution**: การรอผลลัพธ์จาก Promise
- **Promise chaining**: การเชื่อมต่อ Promise หลายตัว
- **Arithmetic operations**: การคำนวณกับผลลัพธ์จาก Promise

## หลักการทำงาน
1. `await promise1` จะรอให้ `promise1` resolve และได้ค่า `num1`
2. `await promise2` จะรอให้ `promise2` resolve และได้ค่า `num2`
3. คำนวณ `num1 + num2` และคืนค่าเป็น Promise ใหม่
4. Promise ใหม่จะ resolve ด้วยผลรวมทันที

## การใช้งานจริง
- **API aggregation**: รวมผลลัพธ์จากหลาย API calls
- **Data processing**: รวมข้อมูลจากหลายแหล่ง
- **Parallel operations**: ดำเนินการหลายอย่างพร้อมกันแล้วรวมผลลัพธ์
- **Error handling**: จัดการข้อผิดพลาดจาก Promise ใด Promise หนึ่ง

## หมายเหตุ
- หาก Promise ใด Promise หนึ่ง reject ฟังก์ชันจะ throw error
- สามารถใช้ `Promise.all()` แทน `await` แยกได้ แต่จะซับซ้อนกว่า
- ผลลัพธ์จะได้หลังจากทั้งสอง Promise resolve เสร็จสิ้น
