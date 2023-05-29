document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.sort-container__button');
    const icon = document.querySelector('.sort-container__button__icon');
    const menu = document.querySelector('.sort-container__menu');
    const input = document.querySelector('.sort-container__input');
    const menuItems = document.querySelectorAll('.sort-container__menu__item');
  
    button.addEventListener('click', function() {
      icon.classList.toggle('rotate');
      menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    });
  
    menuItems.forEach(function(item) {
      item.addEventListener('click', function() {
        const selectedOption = item.textContent;
        input.placeholder = selectedOption;
        menu.style.display = 'none';
      });
    });
  });
  