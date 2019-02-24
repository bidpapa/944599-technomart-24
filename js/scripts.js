  /* Страница index.html */

if (window.location.toString().indexOf('index.html') > 0) {

  /* Контактная форма */

  var contactPopup = document.getElementById('modal-contact');
  var contactFormRef = document.getElementById('company-contacts-ref');
  var contactForm = document.querySelector('.contact-form');
  var nameUser = document.getElementById('contact-form-nameuser');
  var emailUser = document.getElementById('contact-form-emailuser');
  var messageUser = document.getElementById('contact-form-letteruser');
  var isStorageSupport = true;
  var storage = '';

  try {
    storageNameUser = localStorage.getItem('nameUser');
    storageEmailUser = localStorage.getItem('emailUser');
  } catch (err) {
    isStorageSupport = false;
  }

  contactForm.addEventListener('submit', function(evt) {
    if (!nameUser.value || !emailUser.value || !messageUser.value) {
      evt.preventDefault();
      console.log('Не все поля заполнены!');
      contactPopup.classList.remove('modal-error');
      void contactPopup.offsetWidth;
      contactPopup.classList.add('modal-error');
    }
    else if (isStorageSupport) {
      localStorage.setItem('nameUser', nameUser.value);
      localStorage.setItem('emailUser', emailUser.value);
    }
  });

  contactFormRef.addEventListener('click', function(evt) {
    evt.preventDefault();
    document.getElementById('modal-contact').style.display='block';
    contactPopup.classList.add('modal-appearence');
    if (storageNameUser && storageEmailUser) {
      nameUser.value = storageNameUser;
      emailUser.value = storageEmailUser;
      messageUser.focus();
    }
    else {
      nameUser.focus();
    }

  });

  /* Карта */

  var mapModal = document.getElementById('company-contacts-map-ref');
  mapModal.addEventListener('click', function(evt) {
    evt.preventDefault();
    document.getElementById('modal-map').style.display='block';
  });

  /* Добавление товара в корзину */

  var items = document.querySelectorAll('.buy');
  for(var i = 0; i < items.length; ++i)
  {
    items[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    document.getElementById('modal-basket').style.display='block';
  });
  }

  /* Кнопки закрытия форм */

  document.getElementById('reset-basket').onclick = function() {resetBasket()};
  function resetBasket() {
    document.getElementById('modal-basket').style.display='none';
  }

  document.getElementById('reset-contact').onclick = function() {resetContacts()};
  function resetContacts() {
    document.getElementById('modal-contact').style.display='none';
    contactPopup.classList.remove('modal-error');
  }

  document.getElementById('reset-map').onclick = function() {resetMap()};
  function resetMap() {
    document.getElementById('modal-map').style.display='none';
  }

  /* Закрытие по esc */

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      var allModals = document.querySelectorAll('.modal');
      for (var i = 0; i < allModals.length; i++) {
        allModals[i].style.display='none';
        contactPopup.classList.remove('modal-error');
      }
    }
  });

  /* Слайдер на главной */

  /* var firstDot = document.querySelector('.slider-dot:first-child');
  var secondDot = document.querySelector('.slider-dot:last-child');

  if (document.querySelector('.sld2').classList.contains('inactive')) {
    firstDot.classList.add('active-dot');
    secondDot.classList.remove('active-dot');
  }

  else if (document.querySelector('.sld1').classList.contains('inactive')) {
    secondDot.classList.add('active-dot');
    firstDot.classList.remove('active-dot');
  }

  function dotToggle() {
    var Dots = document.querySelectorAll('.slider-dot')
    for (var i = 0; i < 2; i++) {
    Dots[i].classList.toggle('active-dot');
    }
  } */

  var Slides = document.querySelectorAll('.offers-slide');
  var Dots = document.querySelectorAll('.slider-dot');
  var btnBack = document.querySelector('.slider-back-button');
  var btnForward = document.querySelector('.slider-forward-button');
  var Slider = document.querySelector('.offers-slider');
  numberDots = Dots.length;
  numberSlides = Slides.length;

  /* Кнопка Назад */

  btnBack.addEventListener('click', function(evt) {
    evt.preventDefault();

    for (var i = 0 ; i < Slides.length; i++)
    {
      if (!Slides[i].classList.contains('inactive')) {
        Slides[i].classList.toggle('inactive');
        Dots[i].classList.toggle('active-dot');
        if (i == 0) {
          Slides[numberSlides - 1].classList.toggle('inactive');
          Dots[Dots.length - 1].classList.toggle('active-dot');
        }
        else {
          Slides[i - 1].classList.toggle('inactive');
          Dots[i - 1].classList.toggle('active-dot');
        }
        break;
      }
    }

  });

  /* Кнопка Вперед */

  btnForward.addEventListener('click', function(evt) {
    evt.preventDefault();

    for (var i = 0 ; i < Slides.length; i++)
    {
      if (!Slides[i].classList.contains('inactive')) {
        Slides[i].classList.toggle('inactive');
        Dots[i].classList.toggle('active-dot');
        if (i == (numberSlides - 1)) {
          Slides[0].classList.toggle('inactive');
          Dots[0].classList.toggle('active-dot');
        }
        else {
          Slides[i + 1].classList.toggle('inactive');
          Dots[i + 1].classList.toggle('active-dot');
        }
        break;
      }
    }

  });

  /* Точки-переключатели */

  for (var i = 0; i < numberDots; i++) {
    Dots[i].addEventListener('click', set_handler(i));
  }

  function set_handler(i){
  return function () {
    console.log(i);
    document.querySelector('.active-dot').classList.remove('active-dot');
    Dots[i].classList.add('active-dot');
    Slider.querySelector('div:not(.inactive)').classList.add('inactive');
    Slides[i].classList.remove('inactive');
  };
  }

}

/* Страница catalog.html */

else {

  /* Добавление товара в корзину */

  var items = document.querySelectorAll('.buy');
  for(var i = 0; i < items.length; ++i)
  {
    items[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    document.getElementById('modal-basket').style.display='block';
  });
  }

  /* Кнопки закрытия форм */

  document.getElementById('reset-basket').onclick = function() {resetBasket()};
  function resetBasket() {
    document.getElementById('modal-basket').style.display='none';
  }

  /* Закрытие по esc */

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      var allModals = document.querySelectorAll('.modal');
      for (var i = 0; i < allModals.length; i++) {
        allModals[i].style.display='none';
      }
    }
  });
}
