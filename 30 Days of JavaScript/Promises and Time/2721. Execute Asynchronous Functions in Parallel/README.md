# 2721. Execute Asynchronous Functions in Parallel

## คำอธิบายโจทย์
สร้างฟังก์ชัน `promiseAll` ที่รับอาร์เรย์ของฟังก์ชันที่คืนค่า Promise แล้วรันทุกฟังก์ชันพร้อมกัน (parallel) และคืนค่า Promise ที่จะ resolve เมื่อทุกฟังก์ชันเสร็จสิ้น หรือ reject เมื่อมีฟังก์ชันใดฟังก์ชันหนึ่งเกิดข้อผิดพลาด

## ตัวอย่างการใช้งาน
```javascript
const promise = promiseAll([
    () => new Promise(res => res(42)),
    () => new Promise(res => res(24)),
    () => new Promise(res => res(36))
]);

promise.then(console.log); // [42, 24, 36]

// ตัวอย่างการใช้งานจริง
const fetchUserData = () => fetch('/api/user').then(res => res.json());
const fetchUserPosts = () => fetch('/api/posts').then(res => res.json());
const fetchUserComments = () => fetch('/api/comments').then(res => res.json());

const loadAllData = promiseAll([
    fetchUserData,
    fetchUserPosts,
    fetchUserComments
]);

loadAllData.then(([user, posts, comments]) => {
    console.log('ข้อมูลผู้ใช้:', user);
    console.log('โพสต์:', posts);
    console.log('ความคิดเห็น:', comments);
});
```

## วิธีแก้ไข
ใช้ **Promise** และ **forEach** เพื่อรันทุกฟังก์ชันพร้อมกันและติดตามผลลัพธ์

### ขั้นตอนการแก้ไข:
1. สร้างอาร์เรย์ `results` เพื่อเก็บผลลัพธ์จากแต่ละฟังก์ชัน
2. สร้างตัวแปร `count` เพื่อนับจำนวนฟังก์ชันที่เสร็จสิ้น
3. ใช้ `forEach` รันทุกฟังก์ชันพร้อมกัน
4. เมื่อฟังก์ชันใดเสร็จสิ้น ให้เก็บผลลัพธ์ในตำแหน่งที่ถูกต้อง
5. เพิ่มค่า `count` และตรวจสอบว่าทุกฟังก์ชันเสร็จสิ้นแล้วหรือไม่
6. ถ้าเสร็จสิ้นทั้งหมด ให้ resolve ผลลัพธ์
7. ถ้ามีข้อผิดพลาด ให้ reject ทันที

## โค้ดตัวอย่าง
```javascript
/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let results = new Array(functions.length);
        let count = 0;

        functions.forEach((fn, i) => {
            fn().then(val => {
                results[i] = val;
                count++;
                if (count === functions.length) resolve(results);
            }).catch(reject);
        });

        if (functions.length === 0) resolve([]);
    });
};
```

## ความรู้ที่ได้
- **Promise**: การจัดการ asynchronous operations
- **Promise.all()**: การรันหลาย Promise พร้อมกัน
- **Array methods**: forEach, Array constructor
- **Error handling**: การจัดการข้อผิดพลาดใน Promise
- **Parallel execution**: การรันโค้ดพร้อมกันแทนการรันตามลำดับ

## หลักการทำงาน
เมื่อเรียกใช้ `promiseAll`:
1. สร้าง Promise ใหม่ที่รับ resolve และ reject functions
2. สร้างอาร์เรย์ `results` ขนาดเท่ากับจำนวนฟังก์ชัน
3. รันทุกฟังก์ชันพร้อมกันด้วย `forEach`
4. เมื่อฟังก์ชันใดเสร็จสิ้น ให้เก็บผลลัพธ์ในตำแหน่งที่ถูกต้อง
5. เพิ่มค่า `count` และตรวจสอบว่าทุกฟังก์ชันเสร็จสิ้นแล้วหรือไม่
6. ถ้าเสร็จสิ้นทั้งหมด ให้ resolve อาร์เรย์ผลลัพธ์
7. ถ้ามีข้อผิดพลาด ให้ reject ทันที

## การใช้งานจริง
- **API calls**: เรียกหลาย API พร้อมกันเพื่อเพิ่มประสิทธิภาพ
- **Data fetching**: ดึงข้อมูลจากหลายแหล่งพร้อมกัน
- **File operations**: อ่านไฟล์หลายไฟล์พร้อมกัน
- **Database queries**: รัน query หลายตัวพร้อมกัน
- **Image loading**: โหลดรูปภาพหลายรูปพร้อมกัน
- **Parallel processing**: ประมวลผลข้อมูลหลายชุดพร้อมกัน

## ข้อดีของ Parallel Execution
- **Performance**: เร็วกว่าการรันตามลำดับ (sequential)
- **Efficiency**: ใช้ทรัพยากรได้เต็มที่
- **User experience**: ลดเวลารอคอย
- **Scalability**: สามารถจัดการงานจำนวนมากได้ดี
- **Resource utilization**: ใช้ CPU และ network ได้อย่างมีประสิทธิภาพ

## ความแตกต่างจาก Sequential Execution
```javascript
// Sequential (ช้า)
const sequential = async () => {
    const result1 = await fn1(); // รอ 1 วินาที
    const result2 = await fn2(); // รอ 1 วินาที
    const result3 = await fn3(); // รอ 1 วินาที
    // รวมเวลา: 3 วินาที
};

// Parallel (เร็ว)
const parallel = async () => {
    const [result1, result2, result3] = await promiseAll([fn1, fn2, fn3]);
    // รวมเวลา: 1 วินาที (รันพร้อมกัน)
};
```

## Edge Cases ที่ต้องพิจารณา
- **Empty array**: ถ้าไม่มีฟังก์ชัน ให้คืนค่า `[]`
- **Error handling**: ถ้าฟังก์ชันใดเกิดข้อผิดพลาด ให้ reject ทันที
- **Order preservation**: ผลลัพธ์ต้องอยู่ในลำดับเดียวกับฟังก์ชันที่ส่งเข้ามา
- **Mixed results**: ฟังก์ชันสามารถคืนค่าประเภทใดก็ได้
