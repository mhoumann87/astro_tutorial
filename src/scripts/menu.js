// Toggle the menu between open and closed with the hamburger menu on mobile

document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('expanded');
});
