const HEADER_HEIGHT = 64;
const linkList = document.querySelector("#link-list");
const backToTopBtn = document.getElementById('scroll-top');





function findCoordinates(id) {
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top;
    return y + window.scrollY - HEADER_HEIGHT;
    
}

document.addEventListener('scroll', function() {
    let currentScrollY = window.scrollY;
    if(currentScrollY > HEADER_HEIGHT){
        backToTopBtn.classList.add('visible')
    } else {
        backToTopBtn.classList.remove('visible')
    }
})

linkList.addEventListener('click', function(event) {
    const sectionElementID = event.target.dataset.section;
    let elCords = findCoordinates(sectionElementID);
    window.scroll({
        top: elCords,
        behavior: 'smooth'
    })
    
})

backToTopBtn.addEventListener('click', function() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
})