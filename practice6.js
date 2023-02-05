/*******************************
6. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। 
অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো।  
********************************/


const boyAge = 27;
const girlAge = 22;
const ageGap = boyAge - girlAge;

if (ageGap <= 10){
    console.log('They can marry');
} else {
    console.log("They can't marry");
}

const pizzaPrice = 380;
const myMoney = 300;

if (pizzaPrice <= myMoney){
    console.log("You can buy the Pizza");
} else {
    console.log("You have to buy tea store bread.");
}