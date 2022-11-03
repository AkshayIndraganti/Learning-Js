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
function DataForApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const RealUrl = yield fetch("https://wordle-data.herokuapp.com/letters");
        const JsonedUrl = yield RealUrl.json();
        console.log(JsonedUrl);
        return JsonedUrl;
    });
}
DataForApi();
const NextApi = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch("https://wordle-data.herokuapp.com/letters");
    const data = yield res.json();
    console.log(data);
});
NextApi();
