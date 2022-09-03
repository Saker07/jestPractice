const functions = require("./jesting.js");
const capitalize = functions.capitalize;
const reverseString = functions.reverseString
const add = functions.add;
const subtract = functions.subtract;
const multiply = functions.multiply;
const divide = functions.divide;
const caesarChiper = functions.caesarChiper;
const analyzer = functions.analyzer;

test("Capitalize first letter of 'hello world!'", () => {
    expect(capitalize("hello world!")).toBe("Hello world!");
});

test("Reverse the string 'Hello world!", () => {
    expect(reverseString("Hello world!")).toBe("!dlrow olleH");
});

test("Add 1 and 2", () => {
    expect(add(1, 2)).toBe(3);
});
test("Subtract 1 to 2 (2-1)", () => {
    expect(subtract(2, 1)).toBe(1);
});
test("Multiply 2 and 3", () => {
    expect(multiply(2, 3)).toBe(6);
});
test("Divide 10 by 5", () => {
    expect(divide(10, 5)).toBe(2);
});

test("Caesar shift 'Hello world!' by 4", () => {
    expect(caesarChiper("Hello world!", 4)).toBe("Lipps asvph!");
});

test("Array analyzer, should return average, min, max, length, given [1,8,3,4,2,6]", () => {
    expect(analyzer([1,8,3,4,2,6])).toEqual(
        {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        }
)});