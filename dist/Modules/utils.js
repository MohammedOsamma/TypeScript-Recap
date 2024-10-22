"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pi = void 0;
exports.add = add;
exports.sample = sample;
function add(x, y) {
    return x + y;
}
function sample(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}
exports.pi = 3.14;
