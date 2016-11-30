var link = document.querySelector('.user-login');
var popup = document.querySelector('.modal-content');
var popupClose = document.querySelector('.modal-content-close');
var login = popup.querySelector('[name=login]');
var password = popup.querySelector('[name=password]');
var form = popup.querySelector('form');
var storageLogin = localStorage.getItem('login');

var popupMap = document.querySelector('.modal-content-map');
var popupMapCall = document.querySelector('.js-open-map');
var popupMapClose = popupMap.querySelector('.modal-content-close');

link.addEventListener('click', function(event){
  event.preventDefault();
  popup.classList.add('modal-content-show');
  login.focus();
  if(storageLogin) {
    login.value = storageLogin;
    password.focus();
  } else {
    login.focus();
  }
})

popupClose.addEventListener('click', function(event) {
  popup.classList.remove('modal-content-show');
})

form.addEventListener('submit', function(event) {
  if (login.value) {
    localStorage.setItem('login', login.value);
  }
})

window.addEventListener('keydown', function(event) {
  if(event.keyCode === 27) {
    if(popup.classList.contains('modal-content-show')) {
      popup.classList.remove('modal-content-show');
    }
  }
})

popupMapCall.addEventListener('click', function(event) {
  event.preventDefault();
  popupMap.classList.add('modal-content-map-show');
})

popupMapClose.addEventListener('click', function(event) {
  popupMap.classList.remove('modal-content-map-show');
})

window.addEventListener('keydown', function(event) {
  if(event.keyCode === 27) {
    if(popupMap.classList.contains('modal-content-map-show')) {
      popupMap.classList.remove('modal-content-map-show');
    }
  }
})
