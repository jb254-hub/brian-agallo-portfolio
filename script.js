    
        // Set current year in footer
        document.getElementById('year').textContent = new Date().getFullYear();
        
        // Mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navMenu = document.getElementById('navMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('show');
            mobileMenuBtn.innerHTML = navMenu.classList.contains('show') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Scroll animations
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const fadeInObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        fadeElements.forEach(element => {
            fadeInObserver.observe(element);
        });
        
        // Gallery modal functionality
        const galleryItems = document.querySelectorAll('.gallery-item');
        const modal = document.getElementById('galleryModal');
        const modalImage = document.getElementById('modalImage');
        const modalClose = document.getElementById('modalClose');
        
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const imgSrc = item.querySelector('img').src;
                modalImage.src = imgSrc;
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });
        
        modalClose.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });
        
        // Active navigation link highlighting
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('nav a');
            
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (scrollY >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
        
        // Add responsive styles for contact section
        const style = document.createElement('style');
        style.textContent = `
            .contact-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 40px;
            }
            
            .contact-section-title {
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 20px;
            }
            
            .help-list {
                color: var(--muted);
                list-style: none;
            }
            
            .help-list li {
                margin-bottom: 16px;
                padding-left: 24px;
                position: relative;
            }
            
            .help-list li i {
                position: absolute;
                left: 0;
                color: var(--accent);
            }
            
            @media (max-width: 768px) {
                .contact-grid {
                    grid-template-columns: 1fr;
                    gap: 30px;
                }
                
                .contact-section-title {
                    font-size: 16px;
                }
                
                .help-list li {
                    font-size: 14px;
                }
            }
            
            @media (max-width: 480px) {
                .contact-grid {
                    gap: 24px;
                }
                
                .help-list li {
                    font-size: 13px;
                }
            }
        `;
        document.head.appendChild(style);
 // Security shortcuts disabled
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  document.addEventListener('keydown', function (e) {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && e.key === "I") ||
      (e.ctrlKey && e.key === "U")
    ) {
      e.preventDefault();
      alert("Action disabled");
    }
  });
