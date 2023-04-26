# kalinkastore__personal-new-pages

Ссылка для просмотра проекта в браузере: https://verygood-agency.github.io/kalinkastore__personal-new-pages/


## Информация по изменениям для программиста:

1. новые стили с корневом файле 'new-style.css' их нужно экспортировать на сайт самыми последними, так как они переопределяют стилизацию существующих элементов.

2. на страницах с формой подтверждения:
https://verygood-agency.github.io/kalinkastore__personal-new-pages/bonus-2.html
https://verygood-agency.github.io/kalinkastore__personal-new-pages/bonus-1.html

модифицирован заголовок <h2 class="login__form-title login__form-title--mod">Введите код</h2>
добавлен подзаголовок <p class="login__form-subtitle">Введите Ваш телефон, на него будет отправлен код для подтверждения</p>
добавлена кастомная кнопка отправки <button class="custom-submit-button" type="submit">Подтвердить</button>

3. На странице профиля https://verygood-agency.github.io/kalinkastore__personal-new-pages/profile.html

добавлен еще один блок:

      <!-- Бонусы Club (4200)  -->
      <div class="profile__nav-item-wrap">
        <a href="https://kalinkastore.ru/login/order_list.php" class="profile__nav-item">
          <img src="./img/bonus.svg" class="profile__nav-icon">

          <h2 class="profile__nav-name">Бонусы Club (4200)</h2>
          <p class="profile__nav-desc">3% кэшбэк - оплата 20% покупки</p>
        </a>
      </div>

4. На странице корзины https://verygood-agency.github.io/kalinkastore__personal-new-pages/cart.html сильно модифицированы теги в разметке элемента <div class="basket__sum-block basket__sum-block--mod" id="user-cart-settings">, а так же внутри добавлены новые теги (вложенные в него элементы разметки).

5. Скрипты написаты только к новым элементам корзины. всё лежит в корневом файле 'scripts.js'.

6. новая иокнка лежит в папке img/bonus.svg
