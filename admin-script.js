 // Toggle Sidebar
 document.querySelector('.toggle-sidebar').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active');
});

// Theme Toggle
document.querySelector('.theme-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    const isDark = this.classList.contains('active');
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    
    // Save preference to localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.querySelector('.theme-toggle').classList.add('active');
    document.body.setAttribute('data-theme', 'dark');
}


// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-fadeIn');
    elements.forEach(el => {
        const elementPosition = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
document.querySelectorAll('.animate-fadeIn').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Run once on load
animateOnScroll();

// Run on scroll
window.addEventListener('scroll', animateOnScroll);