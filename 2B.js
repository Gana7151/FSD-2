function add(x, y) {
    return x + y;
}
function printPerson(person) {
    console.log("".concat(person.name, " is ").concat(person.age, " years old"));
}
var multiplyNumbers = function (x, y) { return x * y; };
var searchString = function (source, substring) {
    return source.indexOf(substring) !== -1;
};
console.log("Functions Demonstrations");
console.log(add(11, 9));
printPerson({ name: "Gana", age: 20 });
console.log(multiplyNumbers(4, 5));
console.log(searchString("Hello World", "World"));
