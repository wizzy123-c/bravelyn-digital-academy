const navToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const isOpen = item.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach(faq => {
      faq.classList.remove('active');
      faq.querySelector('.faq-question span:last-child').textContent = '+';
    });

    if (!isOpen) {
      item.classList.add('active');
      button.querySelector('span:last-child').textContent = '−';
    }
  });
});

const form = document.getElementById('enquiryForm');
const formStatus = document.getElementById('formStatus');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!this.checkValidity()) {
      this.reportValidity();
      return;
    }

    const consent = document.getElementById('consent').checked;
    if (!consent) {
      formStatus.textContent = 'Please confirm your consent before submitting.';
      formStatus.className = 'form-status show error';
      return;
    }

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const programme = document.getElementById('programme').value;
    const message = document.getElementById('message').value.trim();

    formStatus.textContent = 'Opening your email app with your enquiry...';
    formStatus.className = 'form-status show success';

    const subject = 'Programme enquiry — ' + programme;
    const body =
      'Hello Bravelyn Digital Academy,\n\n' +
      'I would like to enquire about your programme.\n\n' +
      'Name: ' + fullName + '\n' +
      'Email: ' + email + '\n' +
      'Programme: ' + programme + '\n\n' +
      'Enquiry:\n' + message;

    window.location.href =
      'mailto:wisdomkwametorku123@gmail.com?subject=' +
      encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
  });
}

const backTop = document.getElementById('backTop');
if (backTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) backTop.classList.add('show');
    else backTop.classList.remove('show');
  });

  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

const yearNode = document.getElementById('year');
if (yearNode) yearNode.textContent = new Date().getFullYear();
