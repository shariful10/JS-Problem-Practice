/*******************************
4. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। 
যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। 
এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের 
ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 
********************************/


// 1. ">"

const pintuNumber = 50;
const cintuNumber = 80;

if (pintuNumber > cintuNumber) {
    console.log('Pintu will get the award');
} else {
    console.log('Chintu will get the award');
}

// 2. "<"

const pintuNum = 50;
const cintuNum = 80;

if (pintuNumber < cintuNumber) {
    console.log('Pintu will get the award');
} else {
    console.log('Chintu will get the award');
}

// 3. "=="

const abulNum = 50;
const kabulNum = 80;

if (pintuNumber == cintuNumber) {
    console.log('They got same number');
} else {
    console.log('Not Same');
}

// 4. "=="

const abulNumber = 50;
const kabulNumber = 80;

if (abulNumber != kabulNumber) {
    console.log("They don't get the same number");
} else {
    console.log('Same Number');
}

// 5. "<="

const abulGetNum = 50;
const kabulGetNum = 80;

if (abulGetNum <= kabulGetNum) {
    console.log("They don't get the same number");
} else {
    console.log('Same Number');
}

// 6. "=>"

const abulGetNumber = 50;
const kabulGetNumber = 80;

if (abulGetNumber >= kabulGetNumber) {
    console.log('Same Number');
} else {
    console.log("They don't get the same number");
}