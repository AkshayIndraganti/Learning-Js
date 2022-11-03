"use strict";
console.log("Start");
const AkshayPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const AkshayUser = {
            Name: 'Akshay',
            Age: 23
        };
        // const AkshayUser = null
        if (AkshayUser) {
            resolve(AkshayUser);
        }
        else {
            reject(new Error("I don't know"));
        }
    }, 2000);
});
const VardhanPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const VardhanUser = {
            Name: 'Vardhan',
            Age: 22
        };
        if (VardhanUser) {
            resolve(VardhanUser);
        }
        else {
            reject(VardhanUser);
        }
    }, 3000);
});
// console.log(AkshayPromise);
// console.log(VardhanPromise);
// AkshayPromise.then((AkshayOutput) => {
//     console.log(AkshayOutput);
// }).catch((err) => { console.log(err) })
// VardhanPromise.then((VardhanOutput) => {
//     console.log(VardhanOutput);
// }).catch((err) => { console.log(err) })
Promise.all([AkshayPromise, VardhanPromise]).then(console.log).catch(console.log);
console.log("End");
