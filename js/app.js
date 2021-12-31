
window.addEventListener("DOMContentLoaded",() =>{
    const btnMenu = document.querySelector(".button--navbar");
    btnMenu.addEventListener("click", (e) =>{
        e.currentTarget.classList.toggle("open");
    })
})