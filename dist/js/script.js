/* src/input.css */
@tailwind base;
@tailwind npm run components;
@tailwind utilities;

. // script.js
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('menu-hidden');
    mobileMenu.classList.toggle('menu-visible');
  });
  document.addEventListener('click', function(event) {
    if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
      mobileMenu.classList.add('menu-hidden');
      mobileMenu.classList.remove('menu-visible');
    }
  });
});