
window.addEventListener("DOMContentLoaded",() =>{
    const btnMenu = document.querySelector(".button--navbar");
    const navbarResponsive = document.querySelector(".navbar-responsive");

    btnMenu.addEventListener("click", (e) =>{
        
        e.currentTarget.classList.toggle("open");
        navbarResponsive.classList.toggle("navbar-responsive--visible");

    })
})