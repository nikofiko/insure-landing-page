const hamburgerButton = document.querySelector(".hamburger-open")
const closeButton = document.querySelector(".hamburger-close")
const navigation = document.querySelector(".mobile")

hamburgerButton.addEventListener("click", ()=>{
    // navigation.classList.remove("hidden")
    navigation.style.display = "flex"
    hamburgerButton.style.display = "none"
    closeButton.style.display = "block"
})

closeButton.addEventListener("click", ()=> {
    navigation.style.display = "none"
    closeButton.style.display = "none"
    hamburgerButton.style.display = "block"
})