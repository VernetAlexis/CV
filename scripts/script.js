
const sideNavbar = document.getElementById('navbar')
const navbarButton = document.getElementById('nav-button')
let navbarOpen = false

function navBarControl () {
    if (navbarOpen === false) {
        sideNavbar.style.transform = 'translateX(0px)'
        hideBurgerButton()
        navbarOpen = true
    } else if (navbarOpen === true) {
        sideNavbar.style.transform = 'translateX(-350px)'
        setTimeout(revealBurgerButton, 850)
        navbarOpen = false
    }
}

navbarButton.addEventListener('click', function(e) {
    e.stopPropagation()
    e.preventDefault()
    navBarControl ()
})

document.addEventListener('click', function(e) {
    if (navbarOpen === true && e.target !== sideNavbar) {
        navBarControl ()
    }
})

function hideBurgerButton() {
    navbarButton.style.opacity = '0'
    navbarButton.style.left = '-132px'
    navbarButton.style.transition = '1000ms'
}

function revealBurgerButton() {
    navbarButton.style.opacity = '1'
    navbarButton.style.transition = '500ms'
    navbarButton.style.left = '0px'
}


let currentPage = 'none'
document.getElementById('accueil-link').addEventListener('click', function () {
    currentPage = 'accueil'
    changePage(currentPage);
})
document.getElementById('experience-link').addEventListener('click', function () {
    currentPage = 'experience'
    changePage(currentPage);
})
document.getElementById('portfolio-link').addEventListener('click', function () {
    currentPage = 'portfolio'
    changePage(currentPage);
})
document.getElementById('contact-link').addEventListener('click', function () {
    currentPage = 'contact'
    changePage(currentPage);
})

function changePage (currentPage) {
    switch (currentPage) {
        case 'accueil':
            document.getElementById('accueil').style.display = 'block'
            document.getElementById('experience').style.display = 'none'
            document.getElementById('portfolio').style.display = 'none'
            document.getElementById('contact').style.display = 'none'
            break
        case 'experience':
            document.getElementById('accueil').style.display = 'none'
            document.getElementById('experience').style.display = 'block'
            document.getElementById('portfolio').style.display = 'none'
            document.getElementById('contact').style.display = 'none'
            break
        case 'portfolio':
            document.getElementById('accueil').style.display = 'none'
            document.getElementById('experience').style.display = 'none'
            document.getElementById('portfolio').style.display = 'block'
            document.getElementById('contact').style.display = 'none'
            break
        case 'contact':
            document.getElementById('accueil').style.display = 'none'
            document.getElementById('experience').style.display = 'none'
            document.getElementById('portfolio').style.display = 'none'
            document.getElementById('contact').style.display = 'block'
            break
    }
}