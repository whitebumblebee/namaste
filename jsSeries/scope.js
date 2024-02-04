// // Understanding scopes --> var, let and const
// // lexical scoping and function scoping --> old js
// console.log(a); //--> undefined
// var a = 10;
// let b = 20;
// const c = 30;4

// function f() {
//     var a = 12;
//     console.log(a);
// }
// f();
// console.log(a)
// // block scoping --> new, came with let and const
// {
//     let z = "hi";
//     const b = {}
// }
// if (true) {
//     let z = "hi";
//     const b = {}
// }
// memory declaration // code execution
// x 10
x = 10;
console.log(x);
console.log(y);
{
  var x=100;
  var y = 10
  console.log(x);
}
console.log(x)
// x = 10;
// console.log(x);
// {
//   var x = 20;
//   console.log(x);
// }
