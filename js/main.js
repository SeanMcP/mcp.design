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

function changeHeaderOnScroll() {
    if (document.scrollingElement.scrollTop > header.offsetHeight) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled');
    }
}

function offsetHeaderHeight() {
    var nodes = document.querySelectorAll('.offset-header');
    nodes.forEach(function(node) {
        node.style.paddingTop = `${header.offsetHeight}px`;
    });
}

offsetHeaderHeight();
changeHeaderOnScroll();
window.addEventListener('scroll', changeHeaderOnScroll);