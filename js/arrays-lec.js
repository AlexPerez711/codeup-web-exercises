// // ---------sample of array (arrays are items separated by "," (comma), an array can be set as a variable
// let name = "Alex";
// let myFirstArray = [true, false , 12, "bill", name];

// //------------ getting length of array
// console.log(myFirstArray.length);

// // ----------getting index of array
// console.log('My third index is ' + [2]) // is 12.


// // -------------iterating through arrays
let namesArray = ["Bob" , "Joe", "Mama", "Guts", "Will"];

// // --------------loop through the array and log the values
// for (let i = 0; i < namesArray.length; i++) {
//     let greeter = "Hello " + namesArray[i];
//     console.log(greeter)
// }

// ---------loop through array and log values via For-Each loop
namesArray.forEach(function (nameCurrentIndex){
    let greeter = "Hello, " + nameCurrentIndex + "!";
    console.log(greeter);
})