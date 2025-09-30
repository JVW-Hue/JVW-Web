// JVW Empire - Futuristic Animations

// Enhanced typewriter with particle effects
function typeWriter(element, text, speed) {
    let i = 0;
    element.textContent = '';
    
    function typing() {
        if (i < text.length) {
            // Create gold particle for each character
            const particle = document.createElement('span');
            particle.textContent = text.charAt(i);
            particle.style.color = 'var(--imperial-gold)';
            particle.style.opacity = '0';
            particle.style.transform = 'translateY(20px)';
            particle.style.transition = 'all 0.3s ease-out';
            element.appendChild(particle);
            
            // Animate particle in
            setTimeout(() => {
                particle.style.opacity = '1';
                particle.style.transform = 'translateY(0)';
                particle.style.color = 'var(--accent-white)';
            }, 50);
            
            i++;
            setTimeout(typing, speed);
        }
    }
    
    typing();
}

// Futuristic blinking cursor with glow effect
function blinkCursor(element) {
    let visible = true;
    setInterval(() => {
        visible = !visible;
        element.style.borderRight = visible ? '2px solid var(--imperial-gold)' : '2px solid transparent';
        element.style.textShadow = visible ? '0 0 10px var(--imperial-gold)' : 'none';
    }, 500);
}

// Smooth fade-in animation for elements
function fadeIn(element, delay) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.5s ease-out';
    
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, delay);
}

// Initialize animations when page loads
window.addEventListener('DOMContentLoaded', () => {
    const statusText = document.querySelector('.status');
    const directiveText = document.querySelector('.directive');
    const territoryText = document.querySelector('.territory');
    const onlineText = document.querySelector('.online');
    const header = document.querySelector('header h1');
    const footer = document.querySelector('footer');
    
    // Fade in header and footer
    fadeIn(header, 300);
    fadeIn(footer, 5000);
    
    // Add cursor to ONLINE text
    onlineText.style.borderRight = '2px solid var(--imperial-gold)';
    
    // Start animations with enhanced effects
    setTimeout(() => {
        typeWriter(statusText, 'STATUS: ONLINE', 80);
        blinkCursor(onlineText);
    }, 800);
    
    setTimeout(() => {
        typeWriter(directiveText, 'DIRECTIVE: BUILD', 80);
    }, 2000);
    
    setTimeout(() => {
        typeWriter(territoryText, 'TERRITORY: DIGITAL FRONTIER', 80);
    }, 3200);
});