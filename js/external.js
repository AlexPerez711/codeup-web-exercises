"use strict";

console.log("Hello from external Javascript");

alert("Welcome to my Website!");

let color = prompt("What is your favorite color?")
alert("OMG! " + color +" is my favorite color too!")

let m = prompt("How long did you rent the Little Mermaid for?")
let b = prompt("How long did you rent the Big Bear for?")
let h = prompt("How long did you rent the Hercules for?")
let rentals = (m * 3) + (b * 3) + (h *3)
alert("The total for your rentals is $" + rentals + ".")

let gPay = prompt("How Many hours did you work for Google this week?")
let aPay = prompt("How Many hours did you work for Amazon this week?")
let fbPay = prompt("How Many hours did you work for FaceBook this week?")
let paysum = (gPay * 400) + (aPay * 380) + (fbPay * 350)
alert("Your total paycheck for this week will be $" + paysum +".")

let course = false
let sched = prompt("Would you like to sign up for the class?")
let full = (sched && course)
alert("Sorry but the class is currently " + full + ".")

const items = Number(prompt("How many items did you buy?"))
const Offer = Number(confirm("Has the offer expired?"))
if(Offer=== true && items > 2) {
    alert("Offer can be applied")
}