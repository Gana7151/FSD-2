let personname: string="Gana";
let age: number=20;
let isStudent: boolean=true;

let notSure: any=4
notSure="maybe a sting";
notSure=false;

let numbers: number[]=[1,2,3,4,5];
let strings: Array<string>=["Hello","world"];

let tuple: [string,number]=["age",20];

enum Color{
    Red,
    Green,
    Blue
}

let myColor: Color=Color.Green;

let unusable: void=undefined;
let nullValue: null=null;

console.log("Types Demonstration:");
console.log({personname,age,isStudent,notSure,numbers,strings,tuple,myColor});