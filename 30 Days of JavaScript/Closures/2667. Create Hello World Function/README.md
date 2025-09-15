# 2667. Create Hello World Function

## คำอธิบายโจทย์
สร้างฟังก์ชัน `createHelloWorld()` ที่จะคืนค่าฟังก์ชันใหม่ ซึ่งฟังก์ชันที่คืนมานี้จะต้อง return "Hello World" เสมอ ไม่ว่าจะรับ arguments อะไรก็ตาม

## ตัวอย่างการใช้งาน
```javascript
const f = createHelloWorld();
f(); // "Hello World"
f({}, null, 42); // "Hello World"
```

## วิธีแก้ไข
ใช้ **Rest Parameter** (`...args`) เพื่อรับ arguments ทั้งหมดที่ส่งเข้ามา แต่ไม่ต้องใช้ค่าเหล่านั้น เพราะเราต้องการ return "Hello World" เสมอ

### ขั้นตอนการแก้ไข:
1. สร้างฟังก์ชัน `createHelloWorld()` ที่คืนค่าฟังก์ชันใหม่
2. ฟังก์ชันที่คืนมาจะรับ `...args` (Rest Parameter) เพื่อรับ arguments หลายตัว
3. Return "Hello World" เสมอ โดยไม่สนใจ arguments ที่ส่งเข้ามา

## ความรู้ที่ได้
- **Rest Parameter** (`...args`): ใช้รับ arguments หลายตัวในรูปแบบ array
- **Higher-order Function**: ฟังก์ชันที่คืนค่าฟังก์ชันอื่น
- **Closure**: ฟังก์ชันที่คืนมามีการเข้าถึง scope ของฟังก์ชันแม่