# 2627. Debounce

## คำอธิบายโจทย์
สร้างฟังก์ชัน `debounce` ที่รับฟังก์ชัน `fn` และเวลา `t` (มิลลิวินาที) แล้วคืนค่าฟังก์ชันใหม่ที่จะเรียก `fn` หลังจากหยุดเรียกใช้เป็นเวลา `t` มิลลิวินาที

## ตัวอย่างการใช้งาน
```javascript
const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled  
log('Hello'); // Logged at t=100ms

// ตัวอย่างการใช้งานจริง
const searchInput = document.getElementById('search');
const debouncedSearch = debounce((query) => {
    console.log('ค้นหา:', query);
}, 300);

searchInput.addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
});
```

## วิธีแก้ไข
ใช้ **setTimeout** และ **clearTimeout** เพื่อจัดการการหน่วงเวลาและการยกเลิกการเรียกใช้ฟังก์ชัน

### ขั้นตอนการแก้ไข:
1. สร้างตัวแปร `timer` เพื่อเก็บ ID ของ setTimeout
2. คืนค่าฟังก์ชันใหม่ที่รับ arguments
3. เมื่อมีการเรียกใช้ ให้ยกเลิก timer เดิม (ถ้ามี)
4. สร้าง timer ใหม่ที่จะเรียก `fn` หลังจากเวลา `t` มิลลิวินาที

## โค้ดตัวอย่าง
```javascript
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer; 

    return function(...args) {
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, t);
    };
};
```

## ความรู้ที่ได้
- **setTimeout**: ฟังก์ชันสำหรับหน่วงเวลา
- **clearTimeout**: ฟังก์ชันสำหรับยกเลิก setTimeout
- **Closure**: การเข้าถึงตัวแปรภายนอกจากฟังก์ชันภายใน
- **Higher-order functions**: ฟังก์ชันที่รับหรือคืนค่าฟังก์ชันอื่น
- **Event handling**: การจัดการเหตุการณ์ที่เกิดขึ้นบ่อยๆ

## หลักการทำงาน
เมื่อเรียกใช้ฟังก์ชันที่คืนมาจาก `debounce`:
1. ถ้ามี timer เดิมอยู่ จะยกเลิกทันที
2. สร้าง timer ใหม่ที่จะเรียกฟังก์ชันเดิมหลังจากเวลา `t` มิลลิวินาที
3. ถ้ามีการเรียกใช้ใหม่ก่อนที่ timer จะหมด จะยกเลิก timer เดิมและสร้างใหม่

## การใช้งานจริง
- **Search input**: ลดการเรียก API เมื่อผู้ใช้พิมพ์ในช่องค้นหา
- **Button clicks**: ป้องกันการคลิกซ้ำซ้อน
- **Window resize**: จัดการเหตุการณ์ resize ที่เกิดขึ้นบ่อย
- **Scroll events**: ปรับปรุงประสิทธิภาพเมื่อ scroll
- **API calls**: ลดการเรียก API ที่ไม่จำเป็น
- **Form validation**: ตรวจสอบข้อมูลหลังจากผู้ใช้หยุดพิมพ์

## ข้อดีของ Debounce
- **Performance**: ลดการประมวลผลที่ไม่จำเป็น
- **User experience**: ป้องกันการทำงานซ้ำซ้อน
- **Resource optimization**: ประหยัด bandwidth และ server resources
- **Smooth interaction**: ทำให้การใช้งานราบรื่นขึ้น
