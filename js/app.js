
window.addEventListener("DOMContentLoaded",() =>{

    const btnMenu = document.querySelector(".button--navbar");
    const navbar = document.querySelector(".navbar");
    const navbarResponsive = document.querySelector(".navbar-responsive");
    const overlay = document.querySelector(".overlay");

    let animate;

    initObserver();

    btnMenu.addEventListener("click", (e) =>{
        
        e.currentTarget.classList.toggle("open");
        navbarResponsive.classList.toggle("navbar-responsive--visible");
        navbar.classList.toggle("navbar--sticky");

        overlay.classList.toggle("overlay--visible");

    })
})

let initObserver = () =>{

    animate = document.querySelectorAll(".animate");

    animate.forEach(element =>{

        element.classList.add("opacity");

        if(element.tagNme == "IMG"){

            element.addEventListener("load",() =>{
                createObserver(element);
            })
        }else{
            createObserver(element);
        }
    
    })


}

let  createObserver = (target) =>{
 
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: .75
    }

    let observer = new IntersectionObserver(callback, options);

    observer.observe(target);
}

let callback = (entries,observer) =>{

    entries.forEach(entry =>{

        if(entry.isIntersecting){

            if(entry.target.classList.contains("opacity")) entry.target.classList.remove("opacity");
        }
    })
}