var headerText = `<div class="header__wrapper container">
         <div class="header__logo logo">
            <a href="index.html"><img class="logo__img" src="img/logo.png" alt="logo"></a>
         </div>
         <nav class="header__menu menu">
            <div class="menu__item">
               <a class="menu__link" href="catalog.html">Каталог</a>
            </div>
            <div class="menu__item">
               <a class="menu__link" href="delivery.html">Доставка</a>
            </div>
            <div class="menu__item">
               <a class="menu__link" href="#">Контакты</a>
            </div>
         </nav>
         <div class="header__right">
            <form action="#" class="header__form search-form">
               <label class="search-form__label" for="search-form__id"><img class="search-form__img"
                     src="img/search.svg" alt="icon"></label>
               <input id="search-form__id" class="search-form__input" type="text" placeholder="Поиск по сайту">
            </form>
            <nav class="header__icons icons">
               <a class="icons__link" href="authorization.html"><img class="icons__img" src="img/profile.svg"
                     alt="profile"></a>
               <a class="icons__link" href="#">
                  <div class="icons__circle">5</div><img class="icons__img" src="img/busket.svg" alt="cart">
               </a>
            </nav>
         </div>
         <div class="header__burger burger-menu">
            <input class="burger-menu__input" type="checkbox" id="burger-menu">
            <label class="burger-menu__label" for="burger-menu"><img class="burger-menu__img" src="img/burger.svg"
                  alt="MENU"></label>
            <div class="burger-menu__open">
               <ul class="burger-menu__list center">
                  <li class="burger-menu__item">
                     <form action="#" class="search-form">
                        <label for="search-form__id"><img class="search-form__img" src="img/search.svg"
                              alt="icon"></label>
                        <input id="search-form__id" class="search-form__input" type="text" placeholder="Поиск по сайту">
                     </form>
                  </li>
                  <li class="burger-menu__item">МЕНЮ</li>
                  <li class="burger-menu__item"><a class="burger-menu__link" href="authorization.html">Профиль</a></li>
                  <li class="burger-menu__item"><a class="burger-menu__link" href="#">Корзина</a></li>
                  <li class="burger-menu__item"><a class="burger-menu__link" href="catalog.html">Каталог</a></li>
                  <li class="burger-menu__item"><a class="burger-menu__link" href="delivery.html">Доставка</a></li>
                  <li class="burger-menu__item"><a class="burger-menu__link" href="#">Контакты</a></li>
               </ul>
            </div>
         </div>
      </div>`;

function setHeader() {
  var header =  document.createElement("header");
  header.className = "header";
  header.innerHTML = headerText ;
  document.body.insertAdjacentElement('afterbegin', header );
}

setHeader();