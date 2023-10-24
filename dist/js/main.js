// $('.carousel').carousel()

let links = document.getElementsByClassName("nav-link");
Array.from(links).forEach((link) =>{
    link.addEventListener('click' , () => {
        Array.from(links).forEach((l) =>{
            l.classList.remove('active');
        });
        link.classList.add('active');
    }, false);
});
