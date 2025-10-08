document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Show success message (in a real app, this would send data to a server)
            alert(`Thank you, ${name}! Your message has been received. We will contact you at ${email} shortly.`);
            
            // Reset form
            this.reset();
        });
    }

    // Simple animation for feature cards on scroll
    const animateOnScroll = () => {
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
    });
    
    // Call once on load and then on scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // ============ CAROUSEL FUNCTIONALITY ============
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    const carouselTrack = document.querySelector('.carousel-track');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let autoPlayInterval;
    const autoPlayDelay = 5000; // 5 seconds

    // Initialize carousel
    function initCarousel() {
        if (!slides.length) return;
        
        updateCarousel();
        startAutoPlay();
        
        // Add event listeners
        prevBtn?.addEventListener('click', goToPrevSlide);
        nextBtn?.addEventListener('click', goToNextSlide);
        
        // Indicator clicks
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => goToSlide(index));
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', handleKeyboard);
        
        // Touch/swipe support
        let startX = 0;
        let startY = 0;
        let isDragging = false;
        
        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer) {
            carouselContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
            carouselContainer.addEventListener('touchend', handleTouchEnd, { passive: true });
            carouselContainer.addEventListener('mousedown', handleMouseStart);
            carouselContainer.addEventListener('mouseup', handleMouseEnd);
            
            // Pause auto-play on hover
            carouselContainer.addEventListener('mouseenter', pauseAutoPlay);
            carouselContainer.addEventListener('mouseleave', startAutoPlay);
        }
    }

    function updateCarousel() {
        // Update slides
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
        
        // Transform the carousel track
        if (carouselTrack) {
            carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }

    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateCarousel();
        restartAutoPlay();
    }

    function goToNextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
        restartAutoPlay();
    }

    function goToPrevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
        restartAutoPlay();
    }

    function startAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(goToNextSlide, autoPlayDelay);
    }

    function pauseAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }

    function restartAutoPlay() {
        pauseAutoPlay();
        startAutoPlay();
    }

    function handleKeyboard(e) {
        if (!document.querySelector('.carousel-container:hover')) return;
        
        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                goToPrevSlide();
                break;
            case 'ArrowRight':
                e.preventDefault();
                goToNextSlide();
                break;
            case ' ':
                e.preventDefault();
                if (autoPlayInterval) {
                    pauseAutoPlay();
                } else {
                    startAutoPlay();
                }
                break;
        }
    }

    function handleTouchStart(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isDragging = true;
        pauseAutoPlay();
    }

    function handleTouchEnd(e) {
        if (!isDragging) return;
        
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const diffX = startX - endX;
        const diffY = Math.abs(startY - endY);
        
        // Only treat as swipe if horizontal movement is greater than vertical
        if (Math.abs(diffX) > 50 && diffY < 100) {
            if (diffX > 0) {
                goToNextSlide();
            } else {
                goToPrevSlide();
            }
        } else {
            startAutoPlay();
        }
        
        isDragging = false;
    }

    function handleMouseStart(e) {
        startX = e.clientX;
        startY = e.clientY;
        isDragging = true;
        pauseAutoPlay();
    }

    function handleMouseEnd(e) {
        if (!isDragging) return;
        
        const endX = e.clientX;
        const endY = e.clientY;
        const diffX = startX - endX;
        const diffY = Math.abs(startY - endY);
        
        // Only treat as drag if horizontal movement is greater than vertical
        if (Math.abs(diffX) > 50 && diffY < 100) {
            if (diffX > 0) {
                goToNextSlide();
            } else {
                goToPrevSlide();
            }
        } else {
            startAutoPlay();
        }
        
        isDragging = false;
    }

    // Initialize carousel when DOM is ready
    initCarousel();
});