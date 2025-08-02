var greet = function (name) {
    return "Hello ".concat(name || 'Guest', "!");
};
var multiplyWithDefault = function (x, y) {
    if (y === void 0) { y = 1; }
    return x * y;
};
var sum = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
};
var processItems = function (required, optional) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    console.log('Required:', required);
    console.log('Optional:', optional);
    console.log('Rest:', rest);
};
console.log("Arrow Functions Demonstration");
console.log(greet());
console.log(multiplyWithDefault(5));
console.log(multiplyWithDefault(5, 2));
console.log(sum(1, 2, 3, 4, 5));
processItems("First", "Second", "Third", "Fourth", "Fifth");
