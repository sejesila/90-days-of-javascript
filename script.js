

const count = document.querySelector(".count")

const buttons = document.querySelector(".buttons")



/* The optimal way to do it */
buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        count.innerHTML++
        setColor()
    }
    if (e.target.classList.contains("subtract")) {
        count.innerHTML--
       setColor()
    }
  
    if (e.target.classList.contains("reset")) {
        count.innerHTML = 0
       setColor()
    }
  
})
function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = "orange"
    }
   else if (count.innerHTML < 0) {
        count.style.color = "red"
    }
    else  {
        count.style.color = "white"
    }
}



/* 
const add = document.querySelector(".add")
const sub = document.querySelector(".subtract")
const resetCount = document.querySelector(".reset")



add.addEventListener("click", () => {
    count.innerHTML++

})
sub.addEventListener("click", () => {
    count.innerHTML--
    
})
resetCount.addEventListener("click", () => {
    count.innerHTML = 0
    
})  */