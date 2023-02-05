/*******************************
5. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। 
তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন 
একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। 
যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।  
********************************/

// 1. &&

const chickenPrice = 130;
const ricePrice = 50;
const myMoney = 100;

if (chickenPrice < myMoney && ricePrice < myMoney) {
    console.log("You can eat both");
} else {
    console.log("You can't eat both");
}

// 2. ||

const fishPrice = 150;
const beefPrice = 300;
const money = 200;

if (fishPrice <= money || beefPrice <= money) {
    console.log("You can eat either one");
} else {
    console.log("You can't eat");
}