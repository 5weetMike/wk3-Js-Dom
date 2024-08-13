console.log("Hello there!")

// console.log(document.getElementsByTagName(`li`));

// const listItem = document.getElementsByTagName(`li`)

// for (let i = 0; i < listItem.length; i++) {
//     listItem [i].style.color= "red";
    
// }
// console.log(document.getElementById(`listWrapper`))

// document.getElementsByClassName(`listItem`)[2]

// const header = document.getElementById(`heading`)

// header.textContent ="HELLO THERE!"

// const list = document.getElementById(`listWrapper`);

// list.innerHTML += "<li> new list items</li>"

// const header = document.getElementById(`heading`);
// const list =document.querySelector(`ul`);
// const listItem = document.getElementsByClassName(`listItem`);

// header.style.border = "3px solid red";
// list.style.backgroundColor ="yellow";
// listItem[1].style.display = "none";

// const header = document.getElementById(`heading`);

// document.addEventListener(`click`,()=>{
//     header.textContent = "GUESS WHOS BACK!"
// });


//BROKEN CODE
// header.addEventListener(`mouseover`, ()  => {
//     header.textContent = heading.textContent.toUpperCase())};

// document.addEventListener(`mousedown`() => {
//     header.textContent = "GUESS WHOS BACK!"
// };      //End broken code!!!

//example
// const header = document.getElementById(`heading`);
// const inPutBox = document.getElementById(`inPutBox`);
// const singIn = document.getElementById(`signIn`);

// singIn.addEventListener(`click`,() =>{{
//      header.textContent = inPutBox.Value;
// }})
//end example

//example
const header = document.getElementById(`heading`);
const inPutBox = document.getElementById(`inPutBox`);
const singIn = document.getElementById(`signIn`);
const code = document.getElementById(`code`)
document.addEventListener(`click`,(event) => {
   console.log(event)
   console.log(event.target)
   console.log(event.x)
   console.log(event.y)
   console.log(event.key == 98)
   
   code.textContent=event.target.code
   which.textContent =event.target.which
})
//end

