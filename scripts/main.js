const linkList = document.querySelector("#link-list")

function findCordinates(id) {
    const element = document.getElementById(id)
    console.log(element)
    const topElement = element.getBoundingClientRect().top
    const y = topElement + window.scrollY - 65;
    return y
    
}

linkList.addEventListener('click', function(event) {
    const sectionElement = event.target.dataset.section;
    console.log(sectionElement)
    let elCords = findCordinates(sectionElement)
    window.scroll({
        top: elCords,
        behavior: 'smooth'
    })
    
})