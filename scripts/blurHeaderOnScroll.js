// Optional optimized version with debouncing
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    let ticking = false;
    let triggerHeight = 50;
    
    function updateHeader() {
        if (window.scrollY > triggerHeight) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
        }
    });
    
    // Initial check
    updateHeader();
});