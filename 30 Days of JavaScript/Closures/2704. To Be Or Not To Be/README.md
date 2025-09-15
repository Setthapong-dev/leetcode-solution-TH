# 2704. To Be Or Not To Be

## คำอธิบายโจทย์
สร้างฟังก์ชัน `expect(val)` ที่รับค่า `val` และคืนค่า object ที่มี method `toBe(x)` และ `notToBe(x)` เพื่อเปรียบเทียบค่า

- `toBe(x)`: คืนค่า `true` ถ้า `x === val` แต่ถ้าไม่เท่ากันให้ throw Error "Not Equal"
- `notToBe(x)`: คืนค่า `true` ถ้า `x !== val` แต่ถ้าเท่ากันให้ throw Error "Equal"

## ตัวอย่างการใช้งาน
```javascript
expect(5).toBe(5); // true
expect(5).notToBe(5); // throws "Equal"
expect(5).toBe(null); // throws "Not Equal"
expect(5).notToBe(null); // true
```

## วิธีแก้ไข
ใช้ **Object Literal** คืนค่า object ที่มี method `toBe` และ `notToBe` พร้อมใช้ **Strict Equality** (`===`) และ **Strict Inequality** (`!==`) ในการเปรียบเทียบ

### ขั้นตอนการแก้ไข:
1. สร้างฟังก์ชัน `expect(val)` ที่รับค่า `val`
2. คืนค่า object ที่มี 2 methods:
   - `toBe(x)`: เปรียบเทียบด้วย `===` ถ้าเท่ากัน return `true` ถ้าไม่เท่ากัน throw Error "Not Equal"
   - `notToBe(x)`: เปรียบเทียบด้วย `!==` ถ้าไม่เท่ากัน return `true` ถ้าเท่ากัน throw Error "Equal"

## ความรู้ที่ได้
- **Object Literal**: การสร้าง object โดยใช้ `{}` syntax
- **Method Definition**: การสร้าง method ใน object
- **Strict Equality** (`===`): เปรียบเทียบทั้งค่าและ type
- **Strict Inequality** (`!==`): เปรียบเทียบทั้งค่าและ type (ตรงข้ามกับ `===`)
- **Error Handling**: การ throw Error เพื่อจัดการกับกรณีที่ไม่ต้องการ
- **Method Chaining**: การเรียก method ต่อเนื่องกัน

## หลักการทำงาน
ฟังก์ชัน `expect(val)` จะสร้าง object ที่มี method `toBe` และ `notToBe` ซึ่งทั้งสอง method จะเข้าถึงค่า `val` ที่ส่งเข้ามาได้ (Closure) และใช้ในการเปรียบเทียบกับค่าที่ส่งเข้ามาในแต่ละ method
