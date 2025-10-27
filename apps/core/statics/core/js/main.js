// Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Simple animation on scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.feature-card, .testimonial-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(el);
        });

        // About page specific animations
        // About page specific animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Enhanced observer for about page elements
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';

                // Add staggered animation for team members
                if (entry.target.classList.contains('team-member')) {
                    const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.1}s`;
                }

                // Add staggered animation for value cards
                if (entry.target.classList.contains('value-card')) {
                    const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.15}s`;
                }

                // Add staggered animation for stat cards
                if (entry.target.classList.contains('stat-card')) {
                    const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.1}s`;
                }
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    // Observe about page specific elements
    const aboutElements = document.querySelectorAll(
        '.value-card, .team-member, .stat-card, .visual-card, .story-text, .mission-text'
    );

    aboutElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px) scale(0.95)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        aboutObserver.observe(el);
    });

    // Enhanced smooth scroll for about page navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax effect for floating illustration
    window.addEventListener('scroll', function() {
        const illustration = document.querySelector('.floating-illustration');
        if (illustration) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            illustration.style.transform = `translateY(${rate}px)`;
        }
    });

    // Interactive stats counter
    const statCards = document.querySelectorAll('.stat-card');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                const finalValue = parseInt(statNumber.textContent);
                let currentValue = 0;
                const duration = 2000;
                const increment = finalValue / (duration / 16);

                const timer = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        clearInterval(timer);
                        currentValue = finalValue;
                    }
                    statNumber.textContent = Math.floor(currentValue) + (statNumber.textContent.includes('+') ? '+' : '');
                }, 16);

                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statCards.forEach(card => {
        statsObserver.observe(card);
    });
});