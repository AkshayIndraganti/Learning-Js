// console.log("Start");

// const AkshayPromise: Promise<Object> = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         const AkshayUser: object = {
//             Name: 'Akshay',
//             Age: 23
//         };
//         // const AkshayUser = null
//         if (AkshayUser) {
//             resolve(AkshayUser);
//         } else {
//             reject(new Error("I don't know"));
//         }
//     }, 2000)
// })



// const VardhanPromise: Promise<Object> = new Promise((resolve, reject) => {
//     setTimeout(() => {

//         const VardhanUser: Object = {
//             Name: 'Vardhan',
//             Age: 22
//         };
//         if (VardhanUser) {
//             resolve(VardhanUser)
//         } else {
//             reject(VardhanUser)
//         }

//     }, 3000)
// })



// // console.log(AkshayPromise);
// // console.log(VardhanPromise);

// // AkshayPromise.then((AkshayOutput) => {
// //     console.log(AkshayOutput);
// // }).catch((err) => { console.log(err) })


// // VardhanPromise.then((VardhanOutput) => {
// //     console.log(VardhanOutput);
// // }).catch((err) => { console.log(err) })


// Promise.all([AkshayPromise, VardhanPromise]).then(console.log).catch(console.log)

// console.log("End")