//activity one:
console.log("hello there")
  const topImage = document.getElementById("topImage");
  const changePicture = document.getElementById("changePicture");
 
  changePicture.addEventListener("click",()=>{
    
    if(topImage.style.display == "none"){
      topImage.style.display = "block";
    } else(
      topImage.style.display = "none"
    );
    
//   topImage.textContent = "change picture"
})



//Activity three:

// const heading = document.getElementById(`heading`)
// heading.addEventListener(`click`,() => heading.textContent=heading.textContent.toLowerCase,
// heading.style.backgroundColor ="yellow")

//Activity four

// document.addEventListener(`click`,(event) => {
//     console.log(event.x)
//     console.log(event.y)
// })