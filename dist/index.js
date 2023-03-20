"use strict";
let person = {
    name: "mohamed",
    age: 20,
    getmyname: () => {
        return name;
    }
};
const reading = "mohamed";
console.log(Math.floor(1.50));
const age = 30;
let user = "Mohamed";
let gender = true;
let myFriends = [1, 2, 3];
let friends = [1, "2", true, ["Ahmed"]];
function showMSg(name, age, email) {
    if (name)
        return `Hello ${name}`;
    return "Not Allowed";
}
console.log(showMSg(10, "20", "Moh@gmail.com"));
function myTest(name, age) {
    return `${name} - ${age}`;
}
function test(...nums) {
    let res = 0;
    nums.forEach(num => {
        res += num;
    });
    return res;
}
console.log(test(1, 5, 9, 45, 8, +true));
function getActions(btns) {
    console.log(btns.down);
}
getActions({ up: "Up", down: "Down", left: "Left", right: "Right", name: "moahmed" });
let art;
art = ["mohamed", 20, true];
const [firName, id, approved] = art;
console.log(firName);
console.log(id);
console.log(approved);
//# sourceMappingURL=index.js.map