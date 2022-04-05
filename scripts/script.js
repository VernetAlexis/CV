
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
        hideBurgerButton()
        setTimeout(buttonBurgerToCross, 1000)
        setTimeout(revealCrossButton, 1050)
        navbarState = 'open'
    } else if (navbarState === 'open') {
        sideNavbar.style.transform = 'translateX(-350px)'
        hideCrossButton()
        setTimeout(buttonCrossToBurger, 1000)
        setTimeout(revealBurgerButton, 1050)
        navbarState = 'close'
    }
})

function hideBurgerButton() {
    navbarButton.style.opacity = '0'
    navbarButton.style.transition = '1000ms'
}

function buttonBurgerToCross () {
    navbarButton.style.left = '266px'
    navbarButton.style.border = 'solid 2px white'
    navbarButton.style.borderRadius = '50%'
    navbarButton.style.width = '50px'
    navbarButton.style.height = '50px'
    navbarButton.style.transition = '50ms'
    navbarButton.style.zIndex = '2'
    buttonIconTop.style.transform = 'translateX(-50%) rotate(45deg)'
    buttonIconTop.style.top = '23px'
    buttonIconTop.style.left = '25px'
    buttonIconBottom.style.transform = 'translateX(-50%) rotate(-45deg)'
    buttonIconBottom.style.top = '23px'
    buttonIconBottom.style.left = '25px'
    buttonIconMiddle.style.visibility = 'hidden'
}

function revealCrossButton() {
    navbarButton.style.top = '100px'
    navbarButton.style.opacity = '1'
    navbarButton.style.transition = '500ms'
}

function hideCrossButton() {
    navbarButton.style.top = '182px'
    navbarButton.style.opacity = '0'
    navbarButton.style.transition = '200ms'
}

function buttonCrossToBurger () {
    navbarButton.style.left = '-132px'
    navbarButton.style.borderLeft = 'none'
    navbarButton.style.borderTop = 'none'
    navbarButton.style.borderRadius = '0 0 100% 0'
    navbarButton.style.width = '130px'
    navbarButton.style.height = '130px'
    navbarButton.style.transition = '50ms'
    buttonIconTop.style.transform = 'translateX(0) rotate(0deg)'
    buttonIconTop.style.top = '50px'
    buttonIconTop.style.left = '30px'
    buttonIconBottom.style.transform = 'translateX(0) rotate(0deg)'
    buttonIconBottom.style.top = '70px'
    buttonIconBottom.style.left = '30px'
    buttonIconMiddle.style.visibility = 'visible'
}

function revealBurgerButton() {
    navbarButton.style.opacity = '1'
    navbarButton.style.transition = '500ms'
    navbarButton.style.zIndex = '0'
    navbarButton.style.left = '0px'
}
