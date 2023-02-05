/*******************************
9. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। 
সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 
********************************/

const numbers = [50, 20, 40, 48, 53, 57, 80, 94];

for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const number = numbers[index];
    console.log(number);
}