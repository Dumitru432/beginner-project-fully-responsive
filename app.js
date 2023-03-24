// aici practic facem sa apara si dispara meniul 
//(home, teach, products si butonul sign up)

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})