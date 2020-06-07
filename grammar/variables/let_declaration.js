
let a;

console.log("a",a)

a=10;

console.log("a",a)

{
    // this is a code block
    // a is redeclared inside a code block and assigned value 20
    // since this is let variable a is redeclared and is a different variable all-together
    let a=20
    console.log("a",a)

    let b=100
    console.log("b",b)
}

console.log("a",a)
console.log("b",b)// this causes error because variable b is declared within code block
console.log("a",a)
