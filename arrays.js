var chocolateBars = new Array('snickers', 'hundred grand', 'kitkat', 'skittles');

function addElementToBeginningOfArray(array, element){
  var array = [1];
  var element = "foo";
  array = [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element){
    array.unshift(element);
  return array;
  }

function addElementToEndOfArray(array, element){
  var array = [1];
  var element = "foo";
  array = [...array, element];
  return array;
}

function destructivelyAddElementToEndOfArray(array, element){
  var array = [1];
  var element = 'foo';
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  var array = [1, 2, 3];
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
var array = [1, 2, 3];
array.shift();
return array;
}

function removeElementFromBeginningOfArray(array){
  var array = [1, 2, 3];
  array.slice(1);
  return array;
}

function destructivleyRemoveElementFromEndOfArray(array){
  var array = [1, 2, 3];
  array.pop();
  return array;
}
