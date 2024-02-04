let x = 10;
console.log(x); // 10
function change() {
  let x;
  console.log(x); // undefined
  // let x = 20;
  x = 20;
  console.log(x); // 20
  if (true) {
  console.log(x); // 20

    let x1 = 30;
    console.log(x, x1); //20, 30
  }
  console.log(x); // 20
}
change();
console.log(x);