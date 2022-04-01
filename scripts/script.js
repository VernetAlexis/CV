
const sideNavbar = document.getElementById('navbar')
const navbarButton = document.getElementById('nav-button')
const profilPicture = document.getElementById('profil')
let navbarState = 'close'

navbarButton.addEventListener('click', function() {
    if (navbarState === 'close') {
        sideNavbar.style.transform = 'translateX(0px)'
        navbarButton.style.transform = 'rotate(90deg)'
        navbarButton.style.transformOrigin = 'top left'
        profilPicture.style.zIndex = 0;
        navbarState = 'open'
    } else if (navbarState === 'open') {
        sideNavbar.style.transform = 'translateX(-350px)'
        navbarButton.style.transform = 'translateX(0px) rotate(0deg)'
        profilPicture.style.zIndex = 1;
        navbarState = 'close'
    }
})