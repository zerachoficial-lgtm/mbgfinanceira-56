/**
 * MBG Financeira - JavaScript Principal
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    initMobileMenu();
    
    // Smooth Scrolling
    initSmoothScrolling();
    
    // Form Enhancements
    initFormEnhancements();
    
    // WhatsApp Float Button
    initWhatsAppFloat();
    
    // Lazy Loading for Images
    initLazyLoading();
    
    // Animation on Scroll
    initScrollAnimations();
    
    // Search Enhancements
    initSearchEnhancements();
});

/**
 * Mobile Menu
 */
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            this.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.classList.toggle('menu-open');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
        
        // Close menu when clicking on links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                mobileMenuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
}

/**
 * Smooth Scrolling
 */
function initSmoothScrolling() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Form Enhancements
 */
function initFormEnhancements() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        // Add loading state to buttons
        form.addEventListener('submit', function() {
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Enviando...';
                
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = submitBtn.getAttribute('data-original-text') || 'Enviar';
                }, 3000);
            }
        });
        
        // Input focus effects
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.borderColor = 'hsl(var(--primary))';
                this.style.boxShadow = '0 0 0 2px hsl(var(--primary) / 0.2)';
            });
            
            input.addEventListener('blur', function() {
                this.style.borderColor = 'hsl(var(--border))';
                this.style.boxShadow = 'none';
            });
        });
    });
}

/**
 * WhatsApp Float Button
 */
function initWhatsAppFloat() {
    const whatsappFloat = document.getElementById('whatsapp-float');
    if (whatsappFloat) {
        // Hover effects
        whatsappFloat.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        whatsappFloat.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        // Show/hide based on scroll
        let lastScrollTop = 0;
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 300) {
                whatsappFloat.style.opacity = '1';
                whatsappFloat.style.visibility = 'visible';
            } else {
                whatsappFloat.style.opacity = '0';
                whatsappFloat.style.visibility = 'hidden';
            }
            
            lastScrollTop = scrollTop;
        });
    }
}

/**
 * Lazy Loading for Images
 */
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

/**
 * Animation on Scroll
 */
function initScrollAnimations() {
    if ('IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe elements with animation classes
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            animationObserver.observe(el);
        });
        
        // Auto-add animation to certain elements
        document.querySelectorAll('.service-card, .feature-card, .testimonial-card').forEach(el => {
            el.classList.add('animate-on-scroll');
            animationObserver.observe(el);
        });
    }
}

/**
 * Search Enhancements
 */
function initSearchEnhancements() {
    const searchForms = document.querySelectorAll('form[role="search"]');
    
    searchForms.forEach(form => {
        const searchInput = form.querySelector('input[type="search"]');
        
        if (searchInput) {
            // Auto-focus search input on search pages
            if (window.location.search.includes('s=')) {
                searchInput.focus();
            }
            
            // Clear button
            const clearBtn = document.createElement('button');
            clearBtn.type = 'button';
            clearBtn.innerHTML = '×';
            clearBtn.style.cssText = `
                position: absolute;
                right: 45px;
                top: 50%;
                transform: translateY(-50%);
                background: none;
                border: none;
                font-size: 18px;
                color: hsl(var(--muted-foreground));
                cursor: pointer;
                display: none;
            `;
            
            // Add clear button functionality
            searchInput.addEventListener('input', function() {
                if (this.value.length > 0) {
                    clearBtn.style.display = 'block';
                } else {
                    clearBtn.style.display = 'none';
                }
            });
            
            clearBtn.addEventListener('click', function() {
                searchInput.value = '';
                clearBtn.style.display = 'none';
                searchInput.focus();
            });
            
            // Insert clear button
            const inputWrapper = searchInput.parentNode;
            if (inputWrapper) {
                inputWrapper.style.position = 'relative';
                inputWrapper.appendChild(clearBtn);
            }
        }
    });
}

/**
 * Utility Functions
 */

// Debounce function
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Throttle function
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}

// Add CSS for body when menu is open
const style = document.createElement('style');
style.textContent = `
    body.menu-open {
        overflow: hidden;
    }
    
    .lazy {
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    @media (max-width: 768px) {
        .mobile-menu-toggle {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 24px;
            height: 24px;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
        }
        
        .mobile-menu-toggle span {
            width: 100%;
            height: 2px;
            background: hsl(var(--foreground));
            transition: all 0.3s ease;
        }
        
        .mobile-menu-toggle.active span:first-child {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-toggle.active span:last-child {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;
document.head.appendChild(style);