// ------------------- MAKING OBJECT CUSTOM OBJECTS---------------------------//

// ** will define a new dog object by using new keyword to make a new object prototype.
//
// let dog = new Object();

// ** making an object using object literal notation ({} will define the nmew object)

let dog = {};
// console.log(typeof dog)


// ----------SETTING OBJECT PROPERTIES (TO CUSTOM OBJECTS)--------------//

// ** defining/ initializing property named breed belonging to dog object    (first time we call/name the property is where the declaration happens.)

dog.breed = "German Shepard";
// ** calling object property
console.log(dog.breed)

// ** reinitializing breed property (you can do this by calling the object followed by property name. (breed)
dog.breed = "PitBull";
console.log(dog.breed)


// **PROPERTIES ARE ONLY ACCESSIBLE THROUGH YOUR OBJECTS**
// ** console.log(breed);
// ^ ^ ^ ^ ^ ^ ^ ^ ^ ^
// **will throw an error due to not being able to access breed property w/o accessing dog first.



// ------------------ARRAY NOTATION-------------------------//
// ** the value inside square brackets will be my property name
// ** must have property in double/single qoutes in order to define the property
dog["color"] = "black";
// ^ ^ ^ ^ ^ ^ ^ ^ ^ ^
// ** declaring/initializing color property for dog object using array notation


// ** reinitializing property value (color)
dog["color"] = "gold";

// ** you can set the properties of your object while initializing your object as shown below
let cat= {
    name: "Finn",
    color: "black",
    gender: "female"
}
console.log(cat)
console.log(cat.color)
console.log(cat["gender"])


// ------------------NESTING VALUES (DATA STRUCTURES)-------------------------//
let shelter = {
    name: "myShelter",
    location: "Dallas, TX",
    rating: 5,
    // ** nesting an array in our object
    shelterAnimals: ["dogs", "cats", "birds", "hamsters"],
    // ** nesting a list of objects within in an array in out object
    employees: [
        {
            name: "Steve Jones",
            position: "Clerk",
            skills: ["customer service, people ops"]
        },
        {
            name: "Howard Johnson",
            position: "Janitor",
            skills: ["cleaning"]

        },
        {
            name: "Alicia Chavez",
            position: "Animal Specialist",
            skills: ["Vet Tech"]

        }
    ],
    // nesting an object in our object
    manager: {
        name: "Jordy Muniz",
        position: "Team Operator",
    }
}
// ** accessing manager name
console.log(shelter.manager.name)
// ** accessing mfirst index of shelter animals within shelter object
console.log(shelter.shelterAnimals[0])
// ** accessing first employee's name
console.log(shelter.employees[0].name)
// ** accessing first employee's skills
console.log(shelter.employees[0].skills)


shelter.employees.forEach(function (employee){
    console.log("Good monring " + employee.name  + "!");
    employee.skills.forEach(function (skill){
        console.log("Your skill set is " + skill + ".")
    })
})
// ^ ^ ^ ^ ^ ^ ^ forEach loop

// ------------------ASSIGNING FUNCTIONS TO OBJECTS-------------------------//

// ** ssigning function to cat object as property (this function is now a method because it belongs to and object)
// cat.meow = function meow(){
//     alert("MEOW");
// }
// console.log(cat)

// ** calling our meow function by accessing cat object (needs () after function name in order to call function)
// cat.meow()

// ---------------- THIS KEYWORD -------------------------//

cat.meow = function (){
    // ** this = cat
    alert(this.name + " goes MEOW!");
}
cat.meow();

// ** extra (storing function as property use case) example
let user = {
    userName: "Jordysol96",
    email: "jordy.muniz@codeup.com",
    password: "password",
    greeter : function (){
        alert("Hello " + this.userName + "! Welcome to your BatCave >:]")
    }
}
user.greeter()



