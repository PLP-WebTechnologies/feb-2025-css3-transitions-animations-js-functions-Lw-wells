const toggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;
const logo = document.getElementById('logo');


window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
  }
};


toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');

  const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);


  logo.classList.add('animate');

  
  logo.addEventListener('animationend', () => {
    logo.classList.remove('animate');
  }, { once: true });
});
