var users = [
     {
          name: "Vaibhav",
          age: 26,

     },
     {
          name: "Arjun",
          age: 6,

     },
];

// SIMPLE APPROACH

// for (var i = 0; i < users.length; i++){
//      console.log(users[i].name + "'s current age is " + users[i].age);
// };

// USING SEPARATE FUNCTION

// here we can improve the code by "extracting logic inside a separate function" :
function printNameAndAge(users) {
     for (var i = 0; i < users.length; i++) {
          console.log(users[i].name + "'s current age is " + users[i].age);
     }
}
// and call that function whenever we want
printNameAndAge(users);

// PRINT COUNT FROM 0 TO 10 or 0 TO 100
function totalCount(givenInput) {
     for (let i = 0; i <= givenInput; i++) {
          console.log(i);
     }
};
totalCount(10);
totalCount(100);

// CALCULATE SUM FROM 0 TO 20 OR 10 TO 50
// take seaparate inputs and make custom start & end numbers 

let resultSum = 0;
function calculateTotalSum(start, end) {
     for (let i = start; i <= end; i++) {
          resultSum = resultSum + i;
     }
     console.log(`total sum from ${start} to ${end} is ${resultSum}`);
}

calculateTotalSum(0, 20);
calculateTotalSum(10, 50);

// WRITE A FUNCTION WHICH TAKES ANOTHER FUNCTION AS AN ARGUMENT AND DOES SOMETHING

function sum(inp1, inp2) {
     return inp1 + inp2;
}

function subst(inp1, inp2) {
     return inp1 - inp2;
}

function mult(inp1, inp2) {
     return inp1 * inp2;
}

// writting general, custom function for all above operations

function performThis(num1, num2, operation) {
     return operation(num1, num2)
}

console.log(performThis(10, 20, mult));
console.log(performThis(5, 2, subst));

// FIBONACII


function findFibSeries(n) {
     let fibonacciSeries = [0, 1];

     for (let i = 2; i <= n; i++) {
          fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2]
     }

     return fibonacciSeries;
}

console.log(findFibSeries(10));

// PRINT THE PATTERN
//  *
//  **
//  ***

function createPattern(numOfRows) {
     for (var i = 0; i < numOfRows; i++) {
          var str = "";
          for (var j = 0; j < i + 1; j++) {
               str = str + "*"
          }
          console.log(str);
     }
}

createPattern(3);

// abstracting - writting a separate function

function starsMake(count) {
     var star = "";
     for (var i = 0; i < count; i++) {
          star = star + "**";
     }
     return star;
}

function createStarPattern(numOfRows) {
     for (var j = 0; j < numOfRows; j++) {
          result = createPattern(j + 1);
          console.log(result);
     }
}

createStarPattern(6);

// PRINT HOLLOW SQAURE PATTERN

function singleRowStars(n) {
     var str = "";
     for (var i = 0; i < n; i++){
          str = str + "*";
     }
     console.log(str);
}

function partialRowStar(n) {
     var str = "";
     str = str + "*";
     for (var i = 0; i < n - 2; i++){
          str = str + " "; // blank space added here
     }
     str = str + "*";
     console.log(str);
}

function hollowSquare(n) {
     singleRowStars(n);
     // partialRowStar(n)
     for (var i = 0; i < n - 2; i++){
          partialRowStar(n)
     }
     singleRowStars(n)
}

hollowSquare(6)

