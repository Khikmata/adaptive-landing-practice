

const iconMenu = document.querySelector('.header__burger');
if (iconMenu) {
    const menubody = document.querySelector('.menu__body')
    iconMenu.addEventListener("click", function () {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menubody.classList.toggle('_active');
    })
}
