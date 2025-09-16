# 2703. Return Length of Arguments Passed

## คำอธิบายโจทย์
สร้างฟังก์ชัน `argumentsLength(...args)` ที่รับ arguments หลายตัวและคืนค่าจำนวน arguments ที่ส่งเข้ามา

ฟังก์ชันนี้จะรับ arguments ประเภทต่างๆ ได้:
- `null`
- `boolean`
- `number`
- `string`
- `Array`
- `Object`

## ตัวอย่างการใช้งาน
```javascript
// ตัวอย่างที่ 1: Arguments หลายประเภท
argumentsLength(1, 2, 3); // 3

// ตัวอย่างที่ 2: Arguments ประเภทต่างๆ
argumentsLength(null, true, "hello", [1, 2], {a: 1}); // 5

// ตัวอย่างที่ 3: ไม่มี arguments
argumentsLength(); // 0

// ตัวอย่างที่ 4: Arguments เดียว
argumentsLength("test"); // 1
```

## วิธีแก้ไข
ใช้ **Rest Parameter** (`...args`) เพื่อรับ arguments ทั้งหมดเป็น array แล้วนับจำนวน elements ใน array นั้น

### ขั้นตอนการแก้ไข:
1. สร้างฟังก์ชัน `argumentsLength(...args)` ที่รับ arguments หลายตัว
2. สร้างตัวแปร `count` เพื่อนับจำนวน arguments
3. ใช้ `forEach` วนลูปผ่าน `args` และเพิ่มค่า `count` ทีละ 1
4. คืนค่า `count`

## วิธีแก้ไขแบบอื่น
```javascript
// วิธีที่ 1: ใช้ length property
var argumentsLength = function(...args) {
    return args.length;
};

// วิธีที่ 2: ใช้ for loop
var argumentsLength = function(...args) {
    let count = 0;
    for (let i = 0; i < args.length; i++) {
        count++;
    }
    return count;
};
```

## ความรู้ที่ได้
- **Rest Parameter** (`...args`): ใช้รับ arguments หลายตัวในรูปแบบ array
- **Array Methods**: การใช้ `forEach` เพื่อวนลูปผ่าน array
- **Arguments Handling**: การจัดการ arguments ที่ส่งเข้ามา
- **Function Parameters**: การรับ parameters ประเภทต่างๆ
- **Array Length**: การนับจำนวน elements ใน array

## หลักการทำงาน
ฟังก์ชัน `argumentsLength` จะรับ arguments ทั้งหมดที่ส่งเข้ามาเป็น array (`args`) แล้วนับจำนวน elements ใน array นั้น โดยไม่สนใจประเภทของ arguments

## ความแตกต่างจาก arguments object
- **Rest Parameter** (`...args`): เป็น array จริง สามารถใช้ array methods ได้
- **arguments object**: เป็น array-like object ไม่สามารถใช้ array methods ได้โดยตรง

## การใช้งานที่พบบ่อย
- **Function Validation**: ตรวจสอบจำนวน arguments ที่ส่งเข้ามา
- **Dynamic Functions**: สร้างฟังก์ชันที่รับ arguments จำนวนไม่แน่นอน
- **API Design**: ออกแบบ API ที่ยืดหยุ่นในการรับ parameters
- **Debugging**: นับจำนวน arguments เพื่อ debug

## เทคนิคการใช้งาน
- ใช้ `...args` แทน `arguments` object เพื่อความสะดวก
- สามารถใช้ `args.length` แทนการนับด้วย loop ได้
- Rest parameter จะสร้าง array ใหม่ทุกครั้งที่เรียกฟังก์ชัน
- สามารถใช้ร่วมกับ parameters อื่นได้ เช่น `function(a, b, ...args)`
