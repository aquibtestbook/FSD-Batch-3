// let number = 10;
// {
//     let number = 2;
//     console.log("Inside block : " + number);
// }
// console.log("Outside block : " + number);

// -----------------------------

// let number = 100;
// number = "Hello";
// console.log(number);

// --------------------------------


// var value = 1000; //global scope

// function creditAmount(amount) {
//     var temp = 100; //local scope
//     value = value + amount;
//     console.log("Updated balance after credit : " + value);
// }

// function debitAmount(amount) {
//     value = value - amount;
//     console.log("Updated balance after debit : " + value);
// }

// creditAmount(500);
// debitAmount(100);
// creditAmount(200);
// debitAmount(300);

// const value = 100;
// value = 500; //not allowed

// const myUser = { username: "John", city: "Bangalore" };
// myUser.username = "Jane";
// myUser.phone = "765656565";
// console.log(myUser);

// const tempArray = [1, 2, 3, 4];
// tempArray[0] = 10;
// console.log(tempArray);

// let hello = (username) => console.log("Hello, " + username + "!");

// hello("John");

// let myUser = {
//     username: "John",
//     display: function displayUser() {
//         console.log(this.username);
//     }
// }

// myUser.display();

let myArray = [10, 20, 30, 40];

myArray.forEach(function (element) {
    element = 20;
});

console.log(myArray);

// let diff = myArray.reduce(function (diff, element) {
//     return diff - element;
// });

// console.log(diff);