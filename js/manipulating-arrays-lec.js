let dogs = ["Misty", "Misty", "Nebula", "Shadow", "Hubert"];
// console.log(dogs)

// ------------ .unshift will add item to the front of the array
dogs.unshift("Robert");
// console.log(dogs)
// ------------ .push will add an item to end of the array
dogs.push("Trixie")
// ------------ .pop will remove item from end of array
dogs.pop()
// ------------ .shift will remove item from front of array
dogs.shift()
// console.log(dogs)

// ----------will return index of passed in arguments at 1st instance
// ----------if argument does exist, it will return -1
let index = dogs.indexOf("Misty");
console.log(index)

// -----------will return last index of passed argument
// -----------if argument does exist, it will return -1
let lastIndex = dogs.lastIndexOf("Misty");
console.log(lastIndex);

// --------- .slice will return a copy of the array
// --------- you can pass 2 arguments the start and end index
// --------- will return portion in between the indexes of that array
// --------- FIRST ARGUMENT (start index) IS INCLUSIVE
// --------- SECOND ARGUMENT (end index) IS EXCLUSIVE

let newDogsArray = dogs.slice(1,4);
console.log(newDogsArray)
// ---------- this will still be the OG array

// ---------- .reverse will reverse an array
let reverseDog = dogs.reverse();
console.log(reverseDog)

// ----------- .sort will sort an array alphanumerically
let alphanumericDog = dogs.sort();
console.log(alphanumericDog)

// ----------- converting strin into array (.split)
let animals = "dogs,cat,hedgehog"
let animalArray = animals.split(",")
console.log(animalArray)

// ----------- convert array into string (.join)
let animalString = animalArray.join(",");
console.log(animalString)



