// Disable browser's automatic scroll restoration on reload
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Always scroll to top on page load or refresh
window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
    // Prevent hash from showing in URL
    if (window.location.hash === '#features') {
        window.history.replaceState('', document.title, window.location.pathname + window.location.search);
    }

    // Smooth scroll for Explore Features without updating URL hash
    const exploreBtn = document.querySelector('a[href="#features"]');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('#features').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Navbar scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Intersection Observer for fade-in elements (like feature cards)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select elements to animate on scroll
    const animatedElements = document.querySelectorAll('.card');
    animatedElements.forEach(el => observer.observe(el));
});
