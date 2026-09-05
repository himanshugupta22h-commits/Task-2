document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signin-form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const togglePasswordBtn = document.getElementById('toggle-password');
  const eyeIcon = document.getElementById('eye-icon');
  const useDemoBtn = document.getElementById('use-demo');
  const createAccountLink = document.getElementById('create-account');

  const EYE_OPEN = `
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" stroke="currentColor" stroke-width="1.6"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.6"/>
  `;

  const EYE_CLOSED = `
    <path d="M3 3l18 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M10.6 5.2A11.6 11.6 0 0112 5c7 0 11 7 11 7a17.9 17.9 0 01-3.6 4.5M6.6 6.6C3.6 8.4 1 12 1 12s4 7 11 7c1.4 0 2.7-.25 3.9-.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M9.9 10a3 3 0 004.2 4.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  `;

  // Toggle password visibility
  togglePasswordBtn.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    eyeIcon.innerHTML = isPassword ? EYE_CLOSED : EYE_OPEN;
    togglePasswordBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
  });

  // Fill demo credentials
  useDemoBtn.addEventListener('click', () => {
    emailInput.value = 'demo@ciphervault.app';
    passwordInput.value = 'DemoPass123!';
  });

  // Handle sign in submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const submitBtn = form.querySelector('.submit-btn');
    const originalContent = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Signing in…';

    // Simulated auth request
    setTimeout(() => {
      submitBtn.innerHTML = originalContent;
      submitBtn.disabled = false;
      console.log('Sign in attempted with:', {
        email: emailInput.value,
        remember: document.getElementById('remember').checked
      });
      alert('Sign in submitted (demo only — no backend connected).');
    }, 900);
  });

  createAccountLink.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Navigate to create account flow.');
  });
});
