
var a;

console.log("a",a)

a=10;

console.log("a",a)

{
    // this is a code block
    // a is redeclared inside a code block and assigned value 20
    // since this is var the variable is available globally
    var a=20
    console.log("a",a)

    var b=100
    console.log("b",b)
}

console.log("a",a)
console.log("b",b)
console.log("a",a)
