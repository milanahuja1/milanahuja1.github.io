document.addEventListener('DOMContentLoaded', () => {
  fetch('/navbar/navbar.html')
    .then(response => response.text())
    .then(html => {
      const mount = document.getElementById('navbar-placeholder');
      if (mount) mount.innerHTML = html;
    })
    .catch(err => console.error('Failed to load navbar:', err));
});