const button = document.querySelector('.menu-bars');
const mobilenav = document.getElementById('mobile-nav');

button.onclick = function () {
  mobilenav.style.display = 'block';
};

mobileNavCloseButton.onclick = function () {
  mobilenav.style.display = "none";
};