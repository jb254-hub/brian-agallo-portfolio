
        // simple interactive hover polish and year dynamic (no form logic)
        (function() {
            // Optional: add subtle micro-interactions
            const cards = document.querySelectorAll('.startup-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transition = 'all 0.2s ease';
                });
            });

            // Dynamic footer year to keep modern
            const footerPara = document.querySelector('footer p');
            if (footerPara) {
                const currentYear = new Date().getFullYear();
                if (!footerPara.innerHTML.includes('2026')) {
                    footerPara.innerHTML = footerPara.innerHTML.replace('2026', currentYear);
                } else if (currentYear !== 2026) {
                    footerPara.innerHTML = footerPara.innerHTML.replace('2026', currentYear);
                }
            }

            // just to make social icons have a friendly console reminder (they are placeholder but show potential)
            const socialIcons = document.querySelectorAll('.social-icon');
            socialIcons.forEach(icon => {
                icon.addEventListener('click', (e) => {
                    e.preventDefault();
                    // subtle alert-free: just show in console that links can be connected later
                    console.log('🌍 Connect with Brian Agallo — official channels coming soon. Reach via email/phone for direct conversations.');
                    // we can show a small non-intrusive tooltip? no alert, but user experience elegant.
                    const fakeTooltip = document.createElement('span');
                    fakeTooltip.innerText = 'Direct contact via email/phone preferred ✨';
                    fakeTooltip.style.position = 'fixed';
                    fakeTooltip.style.bottom = '20px';
                    fakeTooltip.style.left = '50%';
                    fakeTooltip.style.transform = 'translateX(-50%)';
                    fakeTooltip.style.backgroundColor = '#0f2c2a';
                    fakeTooltip.style.color = '#f5e2c1';
                    fakeTooltip.style.padding = '8px 20px';
                    fakeTooltip.style.borderRadius = '40px';
                    fakeTooltip.style.fontSize = '0.8rem';
                    fakeTooltip.style.zIndex = '999';
                    fakeTooltip.style.fontWeight = '500';
                    fakeTooltip.style.pointerEvents = 'none';
                    document.body.appendChild(fakeTooltip);
                    setTimeout(() => {
                        fakeTooltip.remove();
                    }, 2000);
                });
            });
        })();
