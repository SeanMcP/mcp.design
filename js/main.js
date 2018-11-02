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
header.nextElementSibling.style.marginTop = `${header.offsetHeight}px`;