let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Scroll section highlight
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document
          .querySelector('header nav a[href*="' + id + '"]')
          .classList.add('active');
      });
    }
  });

  // Close navbar on scroll (optional)
  navbar.classList.remove('active');
  menuIcon.classList.remove('bx-x');
};

// Toggle menu and icon on mobile
menuIcon.onclick = () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('bx-x'); // bx-x is cross icon, toggle it for close
};
