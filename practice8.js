/*******************************
8. ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। 
সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। 
এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 
********************************/

let numbers = [10, 22, 31, 46, 50];

// 1. Find the length of the array
let length = numbers.length;

// 2. Change the element at the fourth position
numbers[3] = 55;

// 3. Add two elements to the array
numbers.push(64, 78);

// 4. Remove an element from the array
numbers.splice(0, 1);

console.log(numbers);