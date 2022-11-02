"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const FetchPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const User = {
                Name: 'Akshay',
                Age: 23,
            };
            resolve(User);
        }, 2000);
    });
};
const OutputFetchPromise = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Start");
    const User = yield FetchPromise();
    console.log("End");
    console.log(User);
});
OutputFetchPromise();
