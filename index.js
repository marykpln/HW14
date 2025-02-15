function some(array, fun) {
  let result = false;
  let i = 0;
  while (i < array.length) {
    if (fun(array[i], i) && isNaN(array[i])) {
      result = true;
    }
    i++;
  }
  return result;
}
//TODO
//returns true if at least one element of the array match a condition given in the function (fun)

function evenNumber(num) {
  return num % 2 == 0;
}

function every(array, fun) {
  let result = true;
  let i = 0;
  if (array.length == 0) {
    result = false;
  }
  while (i < array.length) {
    if (!fun(array[i], i)) {
      result = false;
    }
    i++;
  }
  return result;
  //TODO
  //returns true if all elemnts of the array match a condition given in the function (fun)
}

function elmGreaterIndex(elem, index) {
  return elem > index;
}
let array = ["abc", 23];
console.log(
  `using "some" function for even numbers array: ${array}, function ${evenNumber}, result: ${some(
    array,
    evenNumber
  )} - false`
);

array = ["", "abc", false];
console.log(
  `using "some" function for even numbers array: ${array}, function ${evenNumber}, result: ${some(
    array,
    evenNumber
  )} - false`
);

console.log(
  `using "every" function for even numbers array: ${array}, function ${evenNumber}, result: ${every(
    array,
    evenNumber
  )} - false`
);

array = [54, 58, 22];
console.log(
  `using "every" function for even numbers array: ${array}, function ${evenNumber}, result: ${every(
    array,
    evenNumber
  )} - true`
);

array = [2, 3, 4];
console.log(
  `using "every" function for elements greater than the index values, array: ${array}, function ${elmGreaterIndex}, result: ${every(
    array,
    elmGreaterIndex
  )} - true`
);

array = [-1, 0, 0];
console.log(
  `using "every" function for elements greater than the index values, array: ${array}, function ${elmGreaterIndex}, result: ${every(
    array,
    elmGreaterIndex
  )} - false`
);
