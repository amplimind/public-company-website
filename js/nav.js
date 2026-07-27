(function () {
  var toggle = document.querySelector('.nav-toggle');
  var overlay = document.getElementById('mobile-nav');
  var closeBtn = document.querySelector('.mobile-nav-close');

  if (!toggle || !overlay) return;

  function openMenu() {
    overlay.classList.add('open');
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeMenu() {
    overlay.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    toggle.focus();
  }

  toggle.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeMenu();
  });

  overlay.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
})();
