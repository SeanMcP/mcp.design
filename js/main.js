try {
    var scroll = new SmoothScroll('a[href*="#"]');
} catch (err) {
    console.log('smooth-scroll failed to load:', err);
}
try {
    AOS.init();
} catch (err) {
    console.log('aos failed to load:', err);
}

var header = document.querySelector('body > header');

function changeHeaderOnScroll() {
    if (document.scrollingElement.scrollTop > header.offsetHeight) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled');
    }
}

function offsetHeaderHeight() {
    var nodes = document.querySelectorAll('main > div > section');
    nodes.forEach(function (node, index) {
        if (index !== 0) {
            node.style.paddingTop = `${header.offsetHeight}px`;
        }
    });
}

offsetHeaderHeight();
changeHeaderOnScroll();
window.addEventListener('scroll', changeHeaderOnScroll);
