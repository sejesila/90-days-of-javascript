const hex = document.querySelector(".hex")
const btn = document.querySelector(".gen")

const generateColor = () => {
    let randomColor = Math.random().toString(16).substring(2, 8)
    document.body.style.backgroundColor = "#" + randomColor;
    hex.innerHTML = "#" + randomColor;
    
};
btn.addEventListener("click", generateColor)

/* The substring() method returns the part of the string between the start and end indexes, or to the end of the string 
Syntax
substring(indexStart, indexEnd)
substring() extracts characters from indexStart up to but not including indexEnd
*/



