# 2622. Cache With Time Limit

## คำอธิบายโจทย์
สร้างคลาส `TimeLimitedCache` ที่มีฟังก์ชัน:
- `set(key, value, duration)`: เก็บค่าใน cache พร้อมกำหนดเวลาหมดอายุ
- `get(key)`: ดึงค่าจาก cache (คืนค่า -1 ถ้าไม่มีหรือหมดอายุ)
- `count()`: นับจำนวน key ที่ยังไม่หมดอายุ

## ตัวอย่างการใช้งาน
```javascript
const timeLimitedCache = new TimeLimitedCache()

// เก็บค่า 42 สำหรับ key 1 เป็นเวลา 1000ms
timeLimitedCache.set(1, 42, 1000); // false (key ใหม่)
timeLimitedCache.get(1) // 42
timeLimitedCache.count() // 1

// อัปเดตค่าเดิม
timeLimitedCache.set(1, 50, 2000); // true (key มีอยู่แล้ว)
timeLimitedCache.get(1) // 50

// รอให้หมดอายุ
setTimeout(() => {
    timeLimitedCache.get(1) // -1 (หมดอายุแล้ว)
    timeLimitedCache.count() // 0
}, 2500);
```

## วิธีแก้ไข
ใช้ **Map** เพื่อเก็บข้อมูลและ **setTimeout** เพื่อจัดการเวลาหมดอายุ

### ขั้นตอนการแก้ไข:
1. สร้างคลาส `TimeLimitedCache` ที่มี `Map` สำหรับเก็บข้อมูล
2. `set()`: เก็บค่าและสร้าง timeout เพื่อลบข้อมูลเมื่อหมดอายุ
3. `get()`: ดึงค่าจาก Map (คืนค่า -1 ถ้าไม่มี)
4. `count()`: นับจำนวน key ใน Map
5. ใช้ `clearTimeout()` เพื่อยกเลิก timeout เก่าเมื่ออัปเดตค่า

## โค้ดตัวอย่าง
```javascript
class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, duration) {
        const exists = this.cache.has(key);

        // ถ้ามี key อยู่แล้ว ให้ยกเลิก timeout เก่า
        if (exists) {
            const { timerId } = this.cache.get(key);
            clearTimeout(timerId);
        }

        // สร้าง timeout ใหม่เพื่อลบข้อมูลเมื่อหมดอายุ
        const timerId = setTimeout(() => {
            this.cache.delete(key);
        }, duration);

        // เก็บข้อมูลพร้อม timerId
        this.cache.set(key, { value, timerId });
        return exists;
    }

    get(key) {
        const entry = this.cache.get(key);
        return entry ? entry.value : -1;
    }

    count() {
        return this.cache.size;
    }
}
```

## ความรู้ที่ได้
- **Map**: เก็บข้อมูลแบบ key-value
- **setTimeout**: กำหนดเวลาหมดอายุ
- **clearTimeout**: ยกเลิก timeout
- **Class**: การสร้างคลาสใน JavaScript
- **Memory management**: การจัดการหน่วยความจำ
- **Timer management**: การจัดการ timer หลายตัว

## หลักการทำงาน
1. `set()`: เก็บค่าและสร้าง timeout เพื่อลบข้อมูลเมื่อหมดอายุ
2. `get()`: ตรวจสอบว่า key มีอยู่ใน Map หรือไม่
3. `count()`: นับจำนวน key ที่ยังไม่หมดอายุ
4. เมื่อ timeout หมดอายุ ข้อมูลจะถูกลบออกจาก Map อัตโนมัติ
5. การอัปเดตค่าจะยกเลิก timeout เก่าและสร้างใหม่

## การใช้งานจริง
- **Session management**: จัดการ session ที่หมดอายุ
- **API caching**: เก็บผลลัพธ์ API ชั่วคราว
- **Rate limiting**: จำกัดจำนวนการเรียกใช้
- **Temporary storage**: เก็บข้อมูลชั่วคราว
- **Memory optimization**: ป้องกัน memory leak

## ข้อดีของการใช้ Time-Limited Cache
- **Automatic cleanup**: ลบข้อมูลอัตโนมัติเมื่อหมดอายุ
- **Memory efficient**: ไม่เก็บข้อมูลที่หมดอายุ
- **Flexible duration**: กำหนดเวลาหมดอายุได้ตามต้องการ
- **Easy to use**: API ที่เข้าใจง่าย
- **Performance**: เข้าถึงข้อมูลได้เร็ว

## ข้อควรระวัง
- ต้องจัดการ timeout ให้ถูกต้องเพื่อป้องกัน memory leak
- ควรตรวจสอบว่า duration ไม่เป็นลบ
- ต้องใช้ `clearTimeout()` เมื่ออัปเดตค่าเดิม
- ควรจำกัดขนาดของ cache เพื่อป้องกันการใช้ memory มากเกินไป
