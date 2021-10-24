const NAV_HEIGHT = 64;
const linkList = document.querySelector("#link-list");
const backToTopBtn = document.getElementById('scroll-top');





function findCoordinates(id) {
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top;
    return y + window.scrollY - NAV_HEIGHT;
    
}

document.addEventListener('scroll', function() {
    let currentScrollY = window.scrollY;
    if(currentScrollY > NAV_HEIGHT){
        backToTopBtn.classList.add('visible')
    } else {
        backToTopBtn.classList.remove('visible')
    }
})

linkList.addEventListener('click', function(event) {
    const sectionElement = event.target.dataset.section;
    let elCords = findCoordinates(sectionElement);
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