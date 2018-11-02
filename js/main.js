document.querySelector('.mobile-nav-button').addEventListener('click', toggleNavMenu);

function toggleNavMenu() {
    var menu = document.querySelector('header nav');
    if (menu.classList.contains('open')) {
        return menu.classList.remove('open');
    }
    return menu.classList.add('open');
}