//Activity 3

const heading = document.getElementById(`heading`)
const input =document.getElementById(`input`)
const submit =document.getElementById(`submit`)

submit.addEventListener(`click`,() => {
    heading.style.color = input.value
})
