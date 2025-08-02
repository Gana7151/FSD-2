function add(x: number, y: number): number{
    return x+y;
}

function printPerson(person:{name: string; age: number}): void{
console.log(`${person.name} is ${person.age} years old`);
}

type MathOperations= (x: number,y: number)=> number;
let multiplyNumbers: MathOperations= (x,y)=> x*y;

interface SearchFunc{
    (source: string, substring: string): boolean;
}
let searchString: SearchFunc=(source, substring)=> {
    return source.indexOf(substring)!== -1;
};

console.log("Functions Demonstrations");
console.log(add(11,9));
printPerson({name: "Gana",age: 20});
console.log(multiplyNumbers(4,5));
console.log(searchString("Hello World", "World"));