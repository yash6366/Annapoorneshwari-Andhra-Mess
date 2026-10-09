/**
 * Annapoorneshwari Andhra Mess — Client-side Scripts
 * Features:
 * - Dynamic Current Year
 * - Responsive Mobile Drawer with Backdrop & Scroll-lock
 * - Precision Smooth Scroll with Dynamic Header Offset
 * - Active Navigation Scroll Spy
 * - Floating Back-to-Top Button
 * - Interactive Menu Poster Lightbox Modal
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Current Year in Footer
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Mobile Navigation & Backdrop Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navBackdrop = document.getElementById('nav-backdrop');
  const navLinks = document.querySelectorAll('.nav-link, .footer-links a');

  const closeMobileMenu = () => {
    if (navMenu && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      if (mobileToggle) {
        mobileToggle.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
      if (navBackdrop) {
        navBackdrop.classList.remove('active');
      }
      document.body.classList.remove('nav-open');
    }
  };

  const openMobileMenu = () => {
    if (navMenu) {
      navMenu.classList.add('open');
      if (mobileToggle) {
        mobileToggle.classList.add('open');
        mobileToggle.setAttribute('aria-expanded', 'true');
      }
      if (navBackdrop) {
        navBackdrop.classList.add('active');
      }
      document.body.classList.add('nav-open');
    }
  };

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    if (navBackdrop) {
      navBackdrop.addEventListener('click', closeMobileMenu);
    }

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  // 3. Precision Smooth Scroll for All Anchor Links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        closeMobileMenu();

        const header = document.querySelector('.site-header');
        const headerOffset = header ? header.offsetHeight : 65;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });

        if (history.pushState) {
          history.pushState(null, null, targetId);
        }
      }
    });
  });

  // 4. Header Scroll Elevation & Back-to-Top Button Visibility
  const header = document.querySelector('.site-header');
  const backToTopBtn = document.getElementById('back-to-top');

  const handleWindowScroll = () => {
    const scrollY = window.scrollY;

    // Header elevation
    if (header) {
      if (scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Back to top button
    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  };

  window.addEventListener('scroll', handleWindowScroll, { passive: true });
  handleWindowScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 5. Active Link Scroll Spy using IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const mainNavLinks = document.querySelectorAll('.nav-menu .nav-link');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -65% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          mainNavLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
  }

  // 6. Interactive Menu Poster Lightbox Modal
  const menuPosterTrigger = document.getElementById('menu-poster-trigger');
  const menuLightbox = document.getElementById('menu-lightbox');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  const lightboxCloseOverlay = document.getElementById('lightbox-close-overlay');

  const openLightbox = () => {
    if (menuLightbox) {
      menuLightbox.classList.add('open');
      document.body.classList.add('nav-open');
    }
  };

  const closeLightbox = () => {
    if (menuLightbox) {
      menuLightbox.classList.remove('open');
      document.body.classList.remove('nav-open');
    }
  };

  if (menuPosterTrigger && menuLightbox) {
    menuPosterTrigger.addEventListener('click', openLightbox);
    menuPosterTrigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox();
      }
    });

    if (lightboxCloseBtn) {
      lightboxCloseBtn.addEventListener('click', closeLightbox);
    }
    if (lightboxCloseOverlay) {
      lightboxCloseOverlay.addEventListener('click', closeLightbox);
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuLightbox.classList.contains('open')) {
        closeLightbox();
      }
    });
  }
});
