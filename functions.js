//Chapter 3 Exercise 1: Minimum

console.log(findMinimum(2,3));
console.log(findMinimum(100, -6));
console.log(findMinimum(12,12));

function findMinimum(num1, num2) {
   if (num1 > num2) {
       return (`${num1} is bigger`);
   } else if (num1 < num2) {
       return (`${num2} is bigger`);
   } else {
       return ("They are equal");
   }
}

//Chapter 3 Exercise 2: Recursion

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

function isEven(number) {
  number = Math.abs(number);
  if (number===0)   {
      return true;
  } else if (number===1) {
      return false;
  } else {
      return isEven(number-2);
  }
}

//Chapter 3 Exercise 3: Bean Counting

console.log(countBs("Bumble Bee"));

function countBs(string) {
    return countChar(string, "B")
}

function countChar(string, char) {
    let count = 0;
    let i = 0;
    while(i < string.length) {
        if (string.charAt(i) === char) {
            count++;
        }
        i++;
        console.log(i);
    }
    return count;
}
