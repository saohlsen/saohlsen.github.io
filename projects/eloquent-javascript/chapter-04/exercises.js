////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  
   if (start === end) {
    return []; 
  }
  // create array literal
  var arr = [];
  //1st test condition if start is less than end
  // and step is indefined
  // than step 1
  if (start < end && step === undefined) {
    step = 1;
  } else if (start > end && step === undefined) {
    step = -1;
  }
 //2nd  test is start is less than end and step greater than 0
 // than use loop to cykle through and push i into an empty arr
  if (start < end && step > 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    } 
    // if start greater then end and step greater than 0
    // than cykle and push i into an arr
  } else if (start > end && step > 0) {
    for (let i = start; i >= end; i -= step) {
      arr.push(i);
    }
    // if start greater than end and step less than 0
    // cykle and push i into an arr
  } else if (start > end && step < 0) {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }  

  return arr;

}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
// set start condition
  var aSum = 0;
// cykle through an array  and add arr at each index   
  for (var i = 0; i<arr.length; i++){
  aSum += arr[i];
  }
  // return the sum 
  return aSum;
  

}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
  
  // use for loop to cykle through an array
  // return in reverse arr
  var aReverse = [];
  for(let i = arr.length-1; i >= 0; i--) {
    aReverse.push(arr[i]);
    
  }
   return aReverse;


}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
  
  //set the counter
  //use for loop to cykle, assign arr at index to counter
  var counter = 0; 
  for(let i = 0; i < arr.length /2; i++){
    counter = arr[i];
    arr[i] = arr[arr.length - i -1];
    arr[arr.length - i -1] = counter;
  }
}



////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  
// starting with the first element in the array, make that our first value's value
if(!array.length) {
  return null;
}
//stopping recursing when we have no more element in the array
if(array.length === 1) { 
  return{value: array[0], rest: null};
}
return{value: array[0], rest: arrayToList(array.slice(1))};


}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  
  //create an ampty array 
//we looping through list and push the list value into an ampty array

    let arr = [];
    for(;list !== null; list = list.rest) {
      arr.push(list.value);
    }
    return arr;
  
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
   // add new element to the list at the biginning, and attached to the list
  var newList = {value: element, rest: list};
  return newList;

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {
  
    //assign function listToArray function with par list to new arr
  // return arr. 
	var aList = listToArray(list);
    return aList[num];

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {
  
    if (a === b) return true;
  //second if statement checks for null values and non-objects
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  //declare counters
  var propsA = 0, propsB = 0;
	//for-in loop counts the number of properties in a and b
  for (var prop in a)
    propsA += 1;

  for (var prop in b) {
    propsB += 1;
    //if b has a prop not in a or if, upon recursive function all,
    //the properties don't have the same values, return false
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }
	//or return whether the number of properties are the same
  return propsA == propsB;

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
