(function() {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function() {
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    links.classList.toggle('nav-open');
    toggle.classList.toggle('is-active');
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && links.classList.contains('nav-open')) {
      links.classList.remove('nav-open');
      toggle.classList.remove('is-active');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  links.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('nav-open');
      toggle.classList.remove('is-active');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();
