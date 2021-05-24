      /* Операции убирают круг на корзине, если нет контента */

      var circle = document.querySelector('.icons__circle');
      if (circle.innerHTML == "") {
         circle.classList.add("icons__circle_none");
      }
      else {
         circle.classList.remove("icons__circle_none");
      }

      /* Функция для бургера */

      $(function () {
         $('#burger-menu-link').on('click', function (open) {
            var menuItem = $(open.currentTarget);

            if (menuItem.attr('aria-expanded') === 'true') {
               $(this).attr('aria-expanded', 'false');
            } else {
               $(this).attr('aria-expanded', 'true');
            }
         });
      });


      /* Функция для вкладок в профиле */

      function openTab(evt, tab) {

         var i, tabcontent, tablinks;

         tabcontent = document.getElementsByClassName("profile__content");
         for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
         }

         tablinks = document.getElementsByClassName("profile-list__item");
         for (i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active");
         }

         document.querySelector(".profile-" + tab).style.display = "block";
         evt.currentTarget.parentElement.classList.add("active");
      }

      /* Функции для корзины */ 

      /* 2 функции сколько элементов нужно */
      document.querySelector('.quantity-item__input').addEventListener('input',
         function (e) {
            this.value = this.value.replace(/[^\d.]/g, '');
         }
      )

      document.addEventListener('click', function (e) {
         if (e.target.classList.contains("increase-js")) {
            ++e.target.parentElement.querySelector(".quantity-item__input").value;
         } else if (e.target.classList.contains("decrease-js")) {
            if (document.querySelector('.quantity-item__input').value != '1') {
               --e.target.parentElement.querySelector(".quantity-item__input").value;
            }
         }
         else if (document.querySelector('.quantity-item__input').value == ''){
            document.querySelector('.quantity-item__input').value = '1';
         }
      });
      
      /* При нажатии на оформить */ 

      $(function () {
         $('#registrationCart').click(function () {
            $('.cart-products').css('display', 'none')
            $('.cart-registration').css('display', 'block')
            $('.cart__title').text('Оформление заказа');
         });
      });