// Enhanced Typing Effect with Glow
const typingTexts = [
    "Développeur Roblox depuis 4 ans",
    "Animateur Expert",
    "Scripteur Professionnel",
    "Spécialiste Anti-Cheat",
    "HTML | CSS | Python | Lua"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentText = typingTexts[textIndex];
    const typedTextElement = document.querySelector('.typed-text');
    
    if (!typedTextElement) return;
    
    if (!isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else {
            typingSpeed = 100;
        }
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
            typingSpeed = 500; // Pause before new text
        } else {
            typingSpeed = 50;
        }
    }
    
    setTimeout(typeText, typingSpeed);
}

// Enhanced Smooth Scrolling with 3D Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Add 3D effect before scrolling
            document.body.style.transform = 'scale(0.98)';
            setTimeout(() => {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                setTimeout(() => {
                    document.body.style.transform = 'scale(1)';
                }, 300);
            }, 100);
        }
    });
});

// Skill Bars Animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        bar.style.width = level + '%';
                    }, 200);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(bar);
    });
}

// Advanced 3D Parallax Effect
function parallaxEffect() {
    const cards = document.querySelectorAll('.about-card, .skill-card, .contact-card');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('mousemove', (e) => {
        const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
        
        // Hero content 3D effect
        if (heroContent) {
            const rotateX = mouseY * 10;
            const rotateY = mouseX * 10;
            heroContent.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
        }
        
        // Cards 3D effect
        cards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const cardCenterX = rect.left + rect.width / 2;
            const cardCenterY = rect.top + rect.height / 2;
            const angleX = (e.clientY - cardCenterY) * 0.01;
            const angleY = (e.clientX - cardCenterX) * 0.01;
            
            card.style.transform = `perspective(1000px) rotateX(${-angleX}deg) rotateY(${angleY}deg) translateZ(10px)`;
        });
    });
    
    // Reset on mouse leave
    document.addEventListener('mouseleave', () => {
        if (heroContent) {
            heroContent.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        }
        cards.forEach(card => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });
}

// Enhanced Title Effects
function enhanceTitleEffects() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    // Random glow effect
    setInterval(() => {
        if (heroTitle && Math.random() > 0.9) {
            heroTitle.style.filter = `brightness(${1 + Math.random() * 0.3}) hue-rotate(${Math.random() * 30}deg)`;
            setTimeout(() => {
                heroTitle.style.filter = 'brightness(1) hue-rotate(0deg)';
            }, 300);
        }
    }, 2000);
    
    // Floating animation for subtitle
    if (heroSubtitle) {
        let floatY = 0;
        let floatDirection = 1;
        
        setInterval(() => {
            floatY += floatDirection * 0.5;
            if (Math.abs(floatY) > 5) floatDirection *= -1;
            heroSubtitle.style.transform = `translateY(${floatY}px)`;
        }, 50);
    }
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
}

// Particle System
function createParticleSystem() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: ${getRandomColor()};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particle-float ${Math.random() * 10 + 5}s linear infinite;
            opacity: ${Math.random() * 0.5 + 0.3};
        `;
        particlesContainer.appendChild(particle);
    }
}

function getRandomColor() {
    const colors = ['#00ff88', '#ff00ff', '#00ffff', '#ffffff'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add particle float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes particle-float {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Advanced Scroll Reveal with 3D Effects
function setupScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) rotateX(0deg) scale(1)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Apply to sections with 3D effect
    document.querySelectorAll('section').forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px) rotateX(15deg) scale(0.9)';
        section.style.transition = `opacity 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.2}s, transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.2}s`;
        observer.observe(section);
    });
    
    // Apply to cards with staggered 3D animation
    document.querySelectorAll('.about-card, .skill-card, .contact-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) rotateX(20deg) rotateY(${index % 2 === 0 ? -10 : 10}deg) scale(0.8)';
        card.style.transition = `opacity 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.15}s, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.15}s`;
        observer.observe(card);
    });
}

// Matrix Rain Effect Enhancement
function enhanceMatrixRain() {
    const matrixRain = document.querySelector('.matrix-rain');
    if (!matrixRain) return;
    
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.1;
    `;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff88';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(drawMatrix, 35);
    matrixRain.appendChild(canvas);
}

// Discord Button Copy Functionality
function setupDiscordButton() {
    const discordButton = document.querySelector('.discord-button');
    
    if (discordButton) {
        discordButton.addEventListener('click', () => {
            const discordName = 'itzbubl3';
            navigator.clipboard.writeText(discordName).then(() => {
                const originalText = discordButton.innerHTML;
                discordButton.innerHTML = '<i class="fas fa-check"></i> Copié!';
                discordButton.style.background = '#00ff88';
                
                setTimeout(() => {
                    discordButton.innerHTML = originalText;
                    discordButton.style.background = '#5865F2';
                }, 2000);
            });
        });
    }
}

// Loading Screen
function createLoadingScreen() {
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loading);
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loading.style.opacity = '0';
            setTimeout(() => {
                loading.remove();
            }, 1000);
        }, 1500);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    typeText();
    animateSkillBars();
    parallaxEffect();
    enhanceTitleEffects();
    setupMobileMenu();
    setupScrollReveal();
    setupDiscordButton();
    createLoadingScreen();
    setupNavbarScroll();
    createInteractiveParticles();
    setupMagneticButtons();
});

// Window resize handler
window.addEventListener('resize', () => {
    // Reset parallax effects
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
});

// Enhanced Magnetic Button Effect
function setupMagneticButtons() {
    document.querySelectorAll('.btn-primary, .btn-secondary, .discord-button').forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const distance = Math.sqrt(x * x + y * y);
            const maxDistance = Math.max(rect.width, rect.height) / 2;
            const strength = Math.max(0, 1 - distance / maxDistance);
            
            const moveX = x * strength * 0.3;
            const moveY = y * strength * 0.3;
            
            this.style.transform = `translate(${moveX}px, ${moveY}px) rotateX(${-moveY * 0.1}deg) rotateY(${moveX * 0.1}deg)`;
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0) rotateX(0deg) rotateY(0deg)';
        });
        
        // Ripple effect
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                left: ${x}px;
                top: ${y}px;
                width: 20px;
                height: 20px;
                margin-left: -10px;
                margin-top: -10px;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add enhanced animations
const enhancedStyle = document.createElement('style');
enhancedStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes particle-float {
        0% {
            transform: translateY(100vh) scale(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
            transform: translateY(90vh) scale(1) rotate(90deg);
        }
        90% {
            opacity: 1;
            transform: translateY(10vh) scale(1) rotate(270deg);
        }
        100% {
            transform: translateY(0) scale(0) rotate(360deg);
            opacity: 0;
        }
    }
    
    .navbar.scrolled {
        background: rgba(0, 0, 0, 0.95) !important;
        backdrop-filter: blur(25px) !important;
        box-shadow: 0 8px 32px rgba(109, 40, 217, 0.3) !important;
    }
`;
document.head.appendChild(enhancedStyle);

// Navbar scroll effect
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Interactive particle system
function createInteractiveParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.98) {
            const particle = document.createElement('div');
            particle.className = 'interactive-particle';
            particle.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: ${['#6d28d9', '#8b5cf6', '#c084fc'][Math.floor(Math.random() * 3)]};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                animation: particle-float 3s ease-out forwards;
                box-shadow: 0 0 10px currentColor;
            `;
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 3000);
        }
    });
}
