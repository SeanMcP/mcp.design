try {
    var scroll = new SmoothScroll('a[href*="#"]');
} catch {
    console.log('smooth-scroll failed to load.');
}
try {
    AOS.init();
} catch {
    console.log('aos failed to load.');
}

var header = document.querySelector('body > header');
// header.nextElementSibling.style.paddingTop = `${header.offsetHeight}px`;

function changeHeaderOnScroll() {
    // Consider toggling a class here instead
    if (document.scrollingElement.scrollTop > header.offsetHeight / 2) {
        header.style.backgroundColor = 'white';
    } else {
        header.removeAttribute('style');
    }
}

changeHeaderOnScroll();
window.addEventListener('scroll', changeHeaderOnScroll);