const topImage = document.getElementById("topImage")
const submit = document.getElementById("submit")
const input = document.getElementById("input")

submit.addEventListener("click", () => {
    topImage.src = input.value;
} )