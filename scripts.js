window.addEventListener('load', function () {
  // блок кода для манипуляций с бонусами на странице корзины
  if (document.querySelector('#user-cart-settings')) {

    // Находим элементы на странице
    const numberInput = document.querySelector('.custon-summ-area');
    const rangeSlider = document.querySelector('.basket__summ-slider');

    // Обновление значения слайдера и поля ввода при изменении другого
    function updateValues(element) {
      const value = parseInt(element.value, 10);
      if (element === numberInput) {
        rangeSlider.value = value;
      } else {
        numberInput.value = value;
      }
    }

    // Обработчики событий для полей ввода
    numberInput.addEventListener('input', () => {
      updateValues(numberInput);
    });

    rangeSlider.addEventListener('input', () => {
      updateValues(rangeSlider);
    });

    // Установка начального значения для слайдера на основе значения поля ввода
    rangeSlider.value = parseInt(numberInput.value, 10);


    const checkbox = document.querySelector('#agree-spend-bonuses');
    const settingsBlock = document.querySelector('.agree-spend-bonuses-content');

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        settingsBlock.style.display = 'block';
      } else {
        settingsBlock.style.display = 'none';
      }
    });



  }
  // КОНЕЦ блок кода для манипуляций с бонусами на странице корзины


});

