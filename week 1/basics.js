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

// for (var i = 0; i < users.length; i++){
//      console.log(users[i].name + "'s current age is " + users[i].age);
// };


// here we can improve the code by "extracting logic inside a separate function" :
function printNameAndAge(users) {
     for (var i = 0; i < users.length; i++) {
          console.log(users[i].name + "'s current age is " + users[i].age);
     }
}
// and call that function whenever we want
printNameAndAge(users); 
function totalCount(givenInput) {
     for (let i = 0; i <= givenInput; i++){
          console.log(i);
     }
};
totalCount(10);
totalCount(100);