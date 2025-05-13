const toggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;
const logo = document.getElementById('logo');

// Load theme preference from localStorage
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
  }
};

// Toggle theme and save preference
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');

  const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);

  // Trigger image animation
  logo.classList.add('animate');

  // Remove animation class after it ends to allow re-trigger
  logo.addEventListener('animationend', () => {
    logo.classList.remove('animate');
  }, { once: true });
});
