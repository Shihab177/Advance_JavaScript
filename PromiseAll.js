// Promise.all() হচ্ছে জাভাস্ক্রিপ্টের একটি বিল্ট-ইন মেথড, যা একাধিক প্রমিজকে (Promises) প্যারালাল বা একসাথে হ্যান্ডেল করার জন্য ব্যবহার করা হয়।
let p1 = new Promise(function(resolve, reject){
    console.log("First Promise");
    resolve("First");
});

let p2 = new Promise(function(resolve, reject){
    console.log("Second Promise");
    resolve("Second");
});

Promise.all([p1, p2]).then().catch();



let promiseCall = function(returnData, message) {
    return function(resolve, reject){
        setTimeout(() => {
            console.log(`The ${message} promise has resolved`);
            resolve(returnData);
        }, returnData * 100);
    }
};

let p1 = new Promise(promiseCall(10, "first"));
let p2 = new Promise(promiseCall(20, "second"));
let p3 = new Promise(promiseCall(30, "third"));

var total = 0;
Promise.all([p1, p2, p3]).then((result) => {

    for (let i in result) {
        total += result[i];
    }
    console.log(`Results: ${result}`);
    console.log(`Total: ${total}`);
}).catch((error) => {
    console.log(`Error: ${error}`);
});