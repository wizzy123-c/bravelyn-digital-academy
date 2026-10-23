import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCoO9qoyRdUSPXnH9NzPWNTcuMwxlBuXW0",
  authDomain: "bravelyn-digital-academy.firebaseapp.com",
  projectId: "bravelyn-digital-academy",
  storageBucket: "bravelyn-digital-academy.firebasestorage.app",
  messagingSenderId: "502770426439",
  appId: "1:502770426439:web:c132b2a93a8d52d6fc8762",
  measurementId: "G-KNCSDMZSNQ"
};

const safeHostnames = ['localhost', '127.0.0.1'];
const isSecureContext = window.location.protocol !== 'file:' && (safeHostnames.includes(window.location.hostname) || window.location.hostname.includes('.'));

if (!isSecureContext) {
  console.warn('Auth should be tested from a browser served via localhost or a real domain, not from a file:// URL.');
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

const saveLocalUser = (user) => {
  localStorage.setItem('bravelyn_user', JSON.stringify(user));
};

const getLocalUser = () => {
  try {
    return JSON.parse(localStorage.getItem('bravelyn_user') || 'null');
  } catch (error) {
    return null;
  }
};

const redirectAfterAuth = () => {
  const currentPath = window.location.pathname.split('/').pop();
  if (currentPath === 'signin.html' || currentPath === 'signup.html') {
    window.location.href = 'index.html';
  }
};

const showLocalServerWarning = () => {
  if (window.location.protocol === 'file:') {
    alert('Please run this app from a local web server, for example:\n\npython -m http.server 8000\n\nThen open http://localhost:8000');
  }
};

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
      const question = faq.querySelector('.faq-question span:last-child');
      if (question) question.textContent = '+';
    });

    if (!isOpen) {
      item.classList.add('active');
      button.querySelector('span:last-child').textContent = '−';
    }
  });
});

const googleButtons = document.querySelectorAll('[data-google-auth]');

googleButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    if (window.location.protocol === 'file:') {
      showLocalServerWarning();
      return;
    }

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      saveLocalUser({
        name: user.displayName || 'Google User',
        email: user.email,
        photoURL: user.photoURL || '',
        provider: 'google'
      });
      redirectAfterAuth();
    } catch (error) {
      console.error('Google auth error:', error);
      alert('Google sign-in was cancelled or failed. Please try again.');
    }
  });
});

const signinForm = document.getElementById('signinForm');
if (signinForm) {
  signinForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('signin-email').value.trim();
    const password = document.getElementById('signin-password').value.trim();

    if (window.location.protocol === 'file:') {
      showLocalServerWarning();
      return;
    }

    if (!email || !password) {
      alert('Please enter your email and password.');
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      saveLocalUser({
        name: user.displayName || 'Learner',
        email: user.email,
        provider: 'email'
      });
      redirectAfterAuth();
    } catch (error) {
      console.error('Email sign-in error:', error);
      alert('Unable to sign in. Please check your email and password or create an account.');
    }
  });
}

const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();

    if (window.location.protocol === 'file:') {
      showLocalServerWarning();
      return;
    }

    if (!name || !email || !password) {
      alert('Please complete all sign up fields.');
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;
      saveLocalUser({
        name: name || user.displayName || 'New Learner',
        email: user.email,
        provider: 'email'
      });
      redirectAfterAuth();
    } catch (error) {
      console.error('Email sign-up error:', error);
      alert('Unable to create your account. Please check your details and try again.');
    }
  });
}

onAuthStateChanged(auth, (user) => {
  const userBadge = document.getElementById('userBadge');
  if (userBadge) {
    if (user?.email) {
      userBadge.textContent = user.displayName || user.email.split('@')[0];
    } else {
      const localUser = getLocalUser();
      if (localUser?.email) {
        userBadge.textContent = localUser.name || localUser.email.split('@')[0];
      }
    }
  }
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
