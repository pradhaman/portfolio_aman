// Aman Pradhan — Portfolio interactivity

document.addEventListener('DOMContentLoaded', function () {

  // ---- Mobile nav toggle ----
  var toggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { navLinks.classList.remove('open'); });
    });
  }

  // ---- Typed terminal command effect ----
  var cmdEl = document.getElementById('typedCommand');
  if (cmdEl) {
    var fullText = cmdEl.getAttribute('data-text') || cmdEl.textContent;
    cmdEl.textContent = '';
    var i = 0;
    var speed = 38;
    function typeNext() {
      if (i <= fullText.length) {
        cmdEl.textContent = fullText.slice(0, i);
        i++;
        setTimeout(typeNext, speed);
      } else {
        var output = document.getElementById('terminalOutput');
        if (output) {
          output.style.opacity = '0';
          output.style.display = 'block';
          setTimeout(function () {
            output.style.transition = 'opacity 0.4s ease';
            output.style.opacity = '1';
          }, 80);
        }
      }
    }
    // Respect reduced-motion: skip animation, show everything immediately
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      cmdEl.textContent = fullText;
      var out = document.getElementById('terminalOutput');
      if (out) { out.style.display = 'block'; out.style.opacity = '1'; }
    } else {
      setTimeout(typeNext, 400);
    }
  }

  // ---- Back to top button ----
  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 480) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- Contact form: build a mailto link (no backend required) ----
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('cf-name').value.trim();
      var email = document.getElementById('cf-email').value.trim();
      var message = document.getElementById('cf-message').value.trim();

      var subject = encodeURIComponent('Portfolio contact from ' + name);
      var body = encodeURIComponent(
        message + '\n\n— ' + name + ' (' + email + ')'
      );

      window.location.href = 'mailto:amanpradhan171@gmail.com?subject=' + subject + '&body=' + body;
    });
  }

  // ---- Active nav link highlighting on scroll ----
  var sections = document.querySelectorAll('main section[id]');
  var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  if (sections.length && navAnchors.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navAnchors.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });
    sections.forEach(function (s) { observer.observe(s); });
  }
});
