let number = document.querySelector(".number")
let btn = document.querySelector(".gen")

generateNumber = () =>
{
    const rand = Math.floor(Math.random() * 10 +1)
    number.innerHTML = rand
}
btn.addEventListener("click",generateNumber)
generateNumber()



