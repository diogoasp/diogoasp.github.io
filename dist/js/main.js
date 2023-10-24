// $('.carousel').carousel()
//get project data from dist/projects/data.json - projects_dict

let links = document.getElementsByClassName("nav-link");
Array.from(links).forEach((link) =>{
    link.addEventListener('click' , () => {
        Array.from(links).forEach((l) =>{
            l.classList.remove('active');
        });
        link.classList.add('active');
    }, false);
});

function show_mail() {
    document.getElementById('send-email-box').classList.remove('d-none');
    document.getElementById('send-email-btn').classList.add('d-none');
}

function hide_mail() {
    document.getElementById('send-email-box').classList.add('d-none');
    document.getElementById('send-email-btn').classList.remove('d-none');
}

function updateSize() {
    //size options
    if (window.innerWidth > 769) {
        q = 3;
    }
    fill_carousel(q);
}

function fill_carousel(q = 3) {
    let i = 0;
    // let q_carousel_item = round(projects_dict length / q)
    for (let j = 0; j < q_carousel_item; j++) {
        // create carousel-item
        // create div class d-flex - div
        
        for (let k = 0; k < q; k++) {
            // create tag a carousel-link 
            // fill carousel-link with projects_dict[i] data
            // add to div
            i++;
        }
        // add div to carousel-item 
    }
}
  
updateSize();
window.addEventListener("resize", updateSize);
