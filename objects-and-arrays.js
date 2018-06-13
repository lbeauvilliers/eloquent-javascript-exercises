// Chapter 4 Exercise 1, Sum of a Range

console.log(range(1, 10));
console.log(sum(range(1, 10)));

console.log(range(1, 10, 2));
console.log(sum(range(1, 10, 2)));

console.log(range(5, 2));
console.log(sum(range(5, 2)));

function range(start, end, step = 1) {
    if (end < start && step > 0) step = -1;
    let allNumbers = [];
    let lowerBound = Math.min(start, end);
    let upperBound = Math.max(start, end);
    for (i = start; i < upperBound+1 && i >= lowerBound; i+=step) {
        allNumbers.push(i);
    }
    return allNumbers;
}

function sum(array) {
    let sum = 0;
    for (i=0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// Chapter 4 Exercise 2, Reversing an Array

console.log(reverseArray([1,2,3,4,5]));
console.log(reverseArrayInPlace([1,2,3,4,5]));

function reverseArray(array) {
    let newArray = [];
    let lastIndex = array.length - 1;
    for (i = lastIndex; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

function reverseArrayInPlace(array) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;
    while (leftIndex < rightIndex) {
        let newRightIndex = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = newRightIndex;
        leftIndex++;
        rightIndex--;
    }
    return array
}

// Chapter 4 Exercise 3, A List

let list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };
let otherList = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };
let differentList = prepend(4, list);

console.log(arrayToList([1,2,3]));

console.log(listToArray(list));

console.log(prepend(4, list));

console.log(nth(list, 1));
console.log(nth(list, 3));

function arrayToList(array) {
    let list = {};
    for (i = 0; i < array.length; i++){
        list.value = array[i];
        list.rest = arrayToList(array.slice(i+1));
    }
    if(list.rest === undefined) {
        return null;
    } else {
        return list;
    }
}

function listToArray(list) {
    let array = [];
    for (list; list; list = list.rest) {
        array.push(list.value);
    }
    return array;
}

function prepend(value, list) {
    return { value: value, rest: list }
}

function nth(list, number) {
    if(!list){
        return null;
    }
    else if(number === 0) {
        return list.value;
    }
    return nth(list.rest, number-1);
}

// Chapter 4 Exercise 4, Deep Comparison

console.log(deepEqual(1, 2));
console.log(deepEqual(1, '1'));
console.log(deepEqual(1, 1));
console.log(deepEqual(null, null));
console.log(deepEqual(list, otherList));
console.log(deepEqual(differentList, list));

function deepEqual(thing1, thing2) {
    if(typeof(thing1) == 'object' && typeof(thing2) == 'object' && thing1 != null && thing2 != null) {
        let wasFound = true;
        Object.keys(thing1).forEach(function (key) {
            if(thing2[key] === null && thing1[key] !== null) {
                wasFound = false;
            } else {
                wasFound = deepEqual(thing1[key], thing2[key]);
            }
        });
        return wasFound;
    } else {
        return thing1 === thing2;
    }

}