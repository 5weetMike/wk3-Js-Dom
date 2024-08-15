const yCoord = document.getElementById(`yCoord`);
const xCoord = document.getElementById(`xCoord`);

let doc=document.addEventListener(`click`, (event) => {
    
    xCoord.textContent=event.clientX
    yCoord.textContent=event.clientY
})