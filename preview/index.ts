/*
    Config Params

    noImplicityAny => It's Used To Do'n Implict Any Type To Any Data Type By Defalut Stil I Used It
    noUnsedLocals => it's used to report error if i declare variable but never used in the local area like function, objects

*/
// if(true) {
//     const x = 20;

// }

let person = {
    name: "mohamed",
    age: 20,
    getmyname: () => {
        return name
    }
}
const reading = "mohamed";
console.log(Math.floor(1.50));

const age:number = 30;
let user:string = "Mohamed";
let gender:boolean = true;
let myFriends:number[] = [1,2,3]

// MultiDimontions Array
/* To Define Multi Dim array must put every type in the parancese that include every type in the element value  */
let friends:any = [1,"2", true, ["Ahmed"]]

function showMSg(name: number, age: string, email: string):string {
    // const test = "Mohamed";
    if(name)
        return `Hello ${name}`
    return "Not Allowed"
}
console.log(showMSg(10,"20", "Moh@gmail.com"))


// Optional Parameter Cannot be set before required parameter
function myTest(name:string, age?:number):any {
    return `${name} - ${age}`
}

// Rest Parameter 
function test(...nums:number[]) {
    let res = 0;
    nums.forEach(num => {
        res += num
    });
    return res
}

console.log(test(1,5,9,45,8,+true))

// Alias Type => Use type reserved word and your alias name and equal the type you need like => type ST = string
type ST = string

// Groups Of Types
type buttons = {
    up: string,
    down: string,
    left: string,
    right: string
}

// Extends Types Of Existing One
type MyType = buttons & {
    name:string
}

function getActions(btns: MyType) {
    console.log(btns.down)
}

getActions({up: "Up", down:"Down", left:"Left", right: "Right", name:"moahmed"})

// Litrals => Make Your Own Type With Specific Values!
type nums = 0 | 1 | -1

// Tuble 
// tuble divide to target and source 
// target => is the types and count that you detremine in the tuble
// source =. is the arguments of the target but they must be like thier type and count
let art: [string,number, boolean];

art = ["mohamed", 20, true]

const [firName, id, approved] = art; // Destructing The Art Values WIth Alias Names
console.log(firName)
console.log(id)
console.log(approved)

/* Void & Never */




