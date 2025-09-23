# 2677. Chunk Array

## คำอธิบายปัญหา

กำหนดให้ฟังก์ชัน `chunk` ที่รับพารามิเตอร์:
- `arr`: array ที่ต้องการแบ่งเป็น chunks
- `size`: ขนาดของแต่ละ chunk

ฟังก์ชันจะคืนค่า array ใหม่ที่แบ่ง `arr` เป็น chunks ย่อยๆ โดยแต่ละ chunk มีขนาด `size` (ยกเว้น chunk สุดท้ายที่อาจมีขนาดน้อยกว่า)

## ตัวอย่าง

### ตัวอย่างที่ 1:
```javascript
Input: arr = [1,2,3,4,5], size = 1
Output: [[1],[2],[3],[4],[5]]
Explanation: The arr has been split into subarrays each with 1 element.
```

### ตัวอย่างที่ 2:
```javascript
Input: arr = [1,9,6,3,2], size = 3
Output: [[1,9,6],[3,2]]
Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.
```

### ตัวอย่างที่ 3:
```javascript
Input: arr = [8,5,3,2,6], size = 6
Output: [[8,5,3,2,6]]
Explanation: Size is greater than arr.length so all elements are in the first chunk.
```

### ตัวอย่างที่ 4:
```javascript
Input: arr = [], size = 1
Output: []
Explanation: There are no elements to chunk so an empty array is returned.
```

## ข้อจำกัด

- `arr` เป็น valid array
- `1 <= arr.length <= 1000`
- `0 <= arr[i] <= 1000`
- `1 <= size <= arr.length`

## วิธีแก้ปัญหา

ใช้ loop เพื่อวนผ่าน array โดยเพิ่ม index ทีละ `size` และใช้ `slice()` เพื่อตัด array ย่อยๆ:

1. สร้าง `result` array เปล่า
2. วน loop จาก index 0 ถึง `arr.length` โดยเพิ่มทีละ `size`
3. ในแต่ละรอบ ใช้ `arr.slice(i, i + size)` เพื่อตัด array ย่อย
4. เพิ่ม array ย่อยนั้นเข้าไปใน `result`
5. คืนค่า `result`

## ความซับซ้อน

- **Time Complexity:** O(n) โดยที่ n คือความยาวของ array
- **Space Complexity:** O(n) สำหรับเก็บ result array
