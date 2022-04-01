
const sideNavbar = document.getElementById('navbar')
const navbarButton = document.getElementById('nav-button')
const buttonIconTop = document.getElementById('icon-top')
const buttonIconMiddle = document.getElementById('icon-middle')
const buttonIconBottom = document.getElementById('icon-bottom')
const profilPicture = document.getElementById('profil')
let navbarState = 'close'

navbarButton.addEventListener('click', function() {
    if (navbarState === 'close') {
        sideNavbar.style.transform = 'translateX(0px)'
        buttonBurgerToCross()
        profilPicture.style.zIndex = 0;
        navbarState = 'open'
    } else if (navbarState === 'open') {
        sideNavbar.style.transform = 'translateX(-350px)'
        buttonCrossToBurger()
        setTimeout(upProfilPicture, 1000)
        navbarState = 'close'
    }
})

function buttonBurgerToCross () {
    navbarButton.style.right = '30px'
    navbarButton.style.top = '100px'
    navbarButton.style.border = 'solid 2px white'
    navbarButton.style.borderRadius = '50%'
    navbarButton.style.width = '50px'
    navbarButton.style.height = '50px'
    buttonIconTop.style.transform = 'translateX(-50%) rotate(45deg)'
    buttonIconTop.style.top = '23px'
    buttonIconTop.style.left = '25px'
    buttonIconBottom.style.transform = 'translateX(-50%) rotate(-45deg)'
    buttonIconBottom.style.top = '23px'
    buttonIconBottom.style.left = '25px'
    buttonIconMiddle.style.visibility = 'hidden'
}

function buttonCrossToBurger () {
    navbarButton.style.right = '0px'
    navbarButton.style.top = '182px'
    navbarButton.style.borderLeft = 'none'
    navbarButton.style.borderTop = 'none'
    navbarButton.style.borderRadius = '0 0 100% 0'
    navbarButton.style.width = '130px'
    navbarButton.style.height = '130px'
    buttonIconTop.style.transform = 'translateX(0) rotate(0deg)'
    buttonIconTop.style.top = '50px'
    buttonIconTop.style.left = '30px'
    buttonIconBottom.style.transform = 'translateX(0) rotate(0deg)'
    buttonIconBottom.style.top = '70px'
    buttonIconBottom.style.left = '30px'
    buttonIconMiddle.style.visibility = 'visible'
    setTimeout(revealNavbarButton, 1000)
}

function revealNavbarButton () {
    navbarButton.style.right = '-132px'
}

function upProfilPicture () {
    profilPicture.style.zIndex = 1;
}