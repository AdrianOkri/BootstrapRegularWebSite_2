window.sr = ScrollReveal() // Guardar el valor en una variable global del navegador

function animatios(className, _origin, _distance, _delay = 0, _viewFactor = 0) {
    sr.reveal(className, {
        duration: 2000,
        origin: _origin,
        distance: _distance,
        delay: _delay,
        viewFactor: _viewFactor
    })
}

animatios('.navbar', 'bottom', '0px')
animatios('.header-content-left', 'top', '300px')
animatios('.header-content-right', 'right', '300px')
animatios('.header-btn', 'bottom', '0px', '1000')
animatios('#testimonial', 'left', '300px', 0, 0.2)

// SMOTH SCROLLing
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})