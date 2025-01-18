window.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); //只觀察一次，避免多次觸發
            }
        });
    });
    const fadeInElement = document.querySelectorAll('.fade-in-element');
    fadeInElement.forEach(element => {
        observer.observe(element);
    });
    const fadeInDown = document.querySelectorAll('.fade-in-down');
    fadeInDown.forEach(element => {
        observer.observe(element);
    });
    const fadeInDown2 = document.querySelectorAll('.fade-in-down2');
    fadeInDown2.forEach(element => {
        observer.observe(element);
    });
    const fadeInLeft = document.querySelectorAll('.fade-in-left');
    fadeInLeft.forEach(element => {
        observer.observe(element);
    });
    const fadeInRight = document.querySelectorAll('.fade-in-right');
    fadeInRight.forEach(element => {
        observer.observe(element);
    });
});
