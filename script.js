document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.history, .job, .employment-wrapper');
    
    function handleScroll() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                element.classList.add('animated');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
