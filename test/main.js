
function ExplanationFunctions (cutGrass, grass) {
  if(cutGrass && grass) {
    return "You can cut the grass";
  } else {
    return "You can't cut the grass";
  }
}

function justDeclareAndPrintVariables () {
  let a = 1;
  let b = 2; 
  var c = 3;
  let word = 'hello';
  const boolean = true;
  let text = ' I am a big text ';
  a = "soy a";
  a = null;
  a = false;
  c = 3 + '';
  // olviden el valor anterior de c
  c = 33;
  c = String(3.14); // '3.14'
  c = '123';
  c = + '123';
  c = Number('-3.1415')

  a = 100
  a = a / 7
  b = 5
  let op = a + b;
  b = b % 2;

  b = 50
  b = b % 13

  b = 4
  b--
  b++
  a = 3

  b = 2
  c = b !== a // es falso a = '3' y b = '3'
  console.log(a, b, c ,word, boolean, text, op);
  // soy un comentario
  /***** soy 
  un 
  comentario
  de
  varias
  lineas */
}

function exampleNull () {
  let a = null;
  console.log(a);
}

function exampleUndefined () {
  let a;
  console.log(a);
}

function exampleDivisionByZero () {
  let a = 1 / 0; // Infinity
  console.log(a);
}

function ageStatus (age) {
  if(age < 0 || age > 120 || isNaN(age)) {
    return 'Invalid age';
  }
  if(age < 3) {
    return 'baby';
  } else if (age >=3 && age < 13 && age !== 0) {
    return 'child';
  } else if (age >= 13 && age < 20) {
    return 'teenager';
  } else if (age >= 20 && age < 65) {
    return 'adult';
  }
  return 'senior';
}

function operations (a, b, type) {
  switch (type) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    case '%':
      return a % b;
    default:
      return 'Invalid operation';
  }
}


function primeNumber (number) { // 7 es un número primo
  if(number < 2) {
    return false;
  }
  for(let i = 2; i < number; i++) {
    console.log(i)
    if(number % i === 0) {
      return false;
    }
  }
  /* for(let i = 0; i <= number; i++) {
    console.log(i);
  } */
  return true;
}

function perfectSquares (n) { // 100  -> 4 9 16 25 36 49 64 81 100 
  let i = 1;
  while (i ** 2 <= n) {
    console.log('Perfect square: ', i ** 2);
    i++;
  }
  return;
}

/* let isPrime = primeNumber(7);
 */

function isPalindrome (string) {
  let reversed = string.split('').reverse().join('');
  return string === reversed;
}

function login (email, contrasenna) {
  if(email === '') {
    return 'Email is required';
  } else if (contrasenna === '') {
    return 'Contrasenna is required';
  } else {
    return 'Login success';
  }
}

/* let a = window.prompt('Enter a number: '); // prompt es una función visible desde un navegador, window no es reconocible por node
let b = window.prompt('Enter another number: ');
let type = window.prompt('Enter an operation: '); */

/* alert(operations(a, b, type));
 */
/* let email = window.prompt('Enter your email: ');
let contrasenna = window.prompt('Enter your contrasenna: ');

alert(login(email, contrasenna)); */

/* justDeclareAndPrintVariables();
console.log(ageStatus(80)) */

/* console.log(operations(20, 30, '+')); */