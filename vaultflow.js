const mobileNavMenu = document.querySelector (".mobile-nav-menu")
const mobileHamburger = document.querySelector (".mobileHamburger")
const navClose = document.querySelector (".navClose")


function showMobileNav(){
    mobileNavMenu.style.display = ('flex')
    navClose.style.display = ('flex')
    mobileHamburger.style.display = ('none')
}

function closeMobileNav(){
    mobileNavMenu.style.display = ('none')
    navClose.style.display = ('none')
    mobileHamburger.style.display = ('flex')
}