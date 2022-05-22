// console.log("hello world")

const navBar = document.getElementById("button-nav")
const divBar = document.getElementById("divBar")

navBar.addEventListener("click", () => {
    divBar.classList.toggle("hidden")
})