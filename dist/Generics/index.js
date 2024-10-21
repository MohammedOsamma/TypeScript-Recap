"use strict";
// Providing a type to querySelector:
const inputEl = document.querySelector("#username");
console.dir(inputEl);
inputEl.value = "Hacked!";
const btn = document.querySelector(".btn");
// Without Generics...Lots of Repetition!
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
// function identity(item: any): any{
//   return item;
// }
// With A Generic...Super Reusable!
function identity(item) {
    return item;
}
identity(7);
identity("hello");
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(["a", "b", "c"]));
getRandomElement([5, 6, 21, 354, 567, 234, 654]);
getRandomElement([1, 2, 3, 4]);
// Generics With Constraints:
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
console.log(merge({ name: "Colt" }, { num: 9 }));
merge({ name: "colt" }, { pets: ["blue", "elton"] });
function printDoubleLength(thing) {
    return thing.length * 2;
}
// function printDoubleLength(thing: Lengthy): number {
//   return thing.length * 2;
// }
printDoubleLength("asdasd");
printDoubleLength(234); //Not allowed!
function makeEmptyArray() {
    return [];
}
const nums = makeEmptyArray();
const bools = makeEmptyArray();
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
const videos = new Playlist();
