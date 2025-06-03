document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop();
    const navButtons = document.querySelectorAll('nav .button');

    navButtons.forEach(button => {
        const buttonHref = button.getAttribute('href').split('/').pop();

        if (currentPath === buttonHref || (currentPath === '' && buttonHref === 'index.html')) {
            button.classList.add('active');
        }
    });

    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopWrapper.style.display = "none";
        }
    };

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const contentSections = document.querySelectorAll('.content-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    contentSections.forEach(section => {
        sectionObserver.observe(section);
    });
});