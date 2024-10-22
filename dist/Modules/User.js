"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userHelper = userHelper;
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logout() {
        console.log(`${this.username} logs out!!`);
    }
}
exports.default = User;
function userHelper() {
    console.log("USER HELPER!");
}
