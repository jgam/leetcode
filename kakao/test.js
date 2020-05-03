//test.jsls

var number = 1234;

function printNumber() {
  console.log(number);
}

function wrapper() {
  number = 4321;
  printNumber();
}
wrapper(); // 4321
