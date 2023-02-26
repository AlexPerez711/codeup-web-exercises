
//// ------------------while loop-----------------------

//
// let i = 1;
//
// while(i < 10){
//     console.log("while loop iteration of #" + i);
//     i++;
// }

// let yes = true;
// while(yes){
//     yes = confirm("Click ok to continue.");
// }

///// ------------do while loop-------------------------

// let yes;
// do{
//    yes = confirm("Click ok to continue.")
//  }while(yes);
//
// let y= 10;
// do{
//     console.log('while loop interation #' + y)
//     y++;
// }while(y < 10);

//-----------------------for loop---------------------------

//     EXAMPLE:    for(initialization; condition; increment) {
//                     body
//                  }

// for(let i= 1; i <= 10; i++){
//     console.log('for loop interation #' + i);
// }


// let school = 'codeup';
//
// for(let i = 0; i < school.length; i++){
//     console.log(school.charAt(i));
// }

// -------------------break & continue--------------------------
//   continue can continue loop (if need be)  break stops it


// for(let i = 1; i <= 10; i++){
//     if(i % 2 !== 0){
//         continue;
//     }
//     console.log(i);
// }


let cont;
for(let i = 1; i <= 10; i++){
    console.log("here is book " + i);
    cont = confirm("click ok to continue.");
    if(!cont){
        break;
    }
}
