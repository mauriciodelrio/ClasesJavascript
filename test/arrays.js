// excercises with arrays

let arrFunc = (a, b, c) => {
  return a + b + c
} 

function test_array_length() {
  var a = [1, 2, 3, 4, 5];
  console.log(a);
  console.log(a[1]);
  return a.length;
}

function printArrayContent(a) {
  for (let i = 0; i < a.length; i++) {
    console.log(a[i], i);
  }
}

function getBigNumber(a) { // que el arreglo tiene solo números mayores o iguales a 0
  let aux = -1;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > aux) {
      aux = a[i];
    }
  }
  return aux;
}

/* function calculatorArray(arr, type) {
  let result = 0;
  for (var i = 0; i < arr.length; i++) {
    switch (type) {
      case '+':
        result += arr[i];
        break;
      case '-':
        result -= arr[i];
        break;
      case '*':
        result *= arr[i];
        break;
      case '/':
        result /= arr[i];
        break;
      default:
        result = 0;
        break;
    }
  }
  return result;
} */

function calculatorArray(arr, type) {
  let result = 0;
  arr.forEach((elem) => {
    switch (type) {
      case '+':
        result += elem;
        break;
      case '-':
        result -= elem;
        break;
      case '*':
        result *= elem;
        break;
      case '/':
        result /= elem;
        break;
      default:
        result = 0;
        break;
    }
  })
  return result;
}

function pushValueIntoArray(a, value) {
  let arr = [2, 3, 4, 5];

  return a;
}

function unshiftValueIntoArray(a, value) {
  a.unshift(value);
  return a;
}

function spliceElem(arr, postion, howMany, value) { 
  arr.splice(postion, howMany, value);
  return arr;
}

function popValueFromArray(a) {
  arr = [1, 2]

  arr.pop();
  return a;
}

function MapSquareArray(arr) {
  let final = arr.map(function(element) {
    return element * element;
  });

  return final;
}

function FilterCamelCaseString(arr) {
  return arr.filter(function(element) {
    return element.split('')[0] === element.split('')[0].toUpperCase();
  });
}

function findParNumber(a) {
  let par = a.find(function(element) {
    return element % 2 === 0;
  });
  return par;
}

function ReduceAvgArray(arr) {
  return arr.reduce(function(a, element) { // opcional pasar index, depende de lo que se quiere hacer
    return a + element;
  }, 0) / arr.length;
}

function ApproveOrNot(arr) {
  let score = ReduceAvgArray(arr);
  if(score > 70) {
    console.log("aprobado: ", score)
  } else {
    console.log("reprobado: ", score)
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

function ReduceAddNumPrimes(arr) {
  return arr.reduce(function(a, element, index) {
    if (primeNumber(element)) {
      a += element;
    }
    return a;
  }, 0);
}

function ConcatPromptValues() {
  let value = '';
  let result = [];
  let concat = '';
  while (value !== "end") {
    value = window.prompt("Enter a value");
    if (value !== "end") {
      result.push(value);
    }
  }

  result.forEach(function(element) {
    concat = concat + " " + element;
  });
  return concat;
}

/* console.log(ConcatPromptValues());
 */
/* console.log(calculatorArray([10, 12, -3, -44, -5], '+'));
 */
/* console.log(ReduceAvgArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); */

/* let result = ReduceAddNumPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(result); */


/* console.log(FilterCamelCaseString(["Hola", "mundo", "como", "Estas"]));
 */

/* printArrayContent(["hola", 3, false, null, "adios"]); */

/* console.log(getBigNumber([10, 22, 3, 14, 5])); */

/* console.log(test_array_length()); */

/* console.log(spliceElem([1, 2, 3, 4, 5], 1, 2)); */

/* printArrayContent(["hola", 3, false, null, "adios"]); */

/* console.log(arrFunc(1, 2, 3)); */

/* console.log(MapSquareArray([1, 2, 3, 4, 5]));
 */

/* ApproveOrNot([100, 70, 50, 70, 85, 50]); */