let counter = document.querySelector('.counter');
const decrease = document.querySelector('.decrease');
const restBtn = document.querySelector('.reset');
const increase = document.querySelector('.increase');
// number value
let i = 0;

// increase eventListner on click
increase.addEventListener("click",()=>{
    counter.textContent= i++;
})

// reset counter value
restBtn.addEventListener("click", ()=>{
    counter.textContent = 0;
})

// decrease counter value
decrease.addEventListener("click",()=>{
    counter.textContent = i--;
})