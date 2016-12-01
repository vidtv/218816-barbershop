var popupMap = document.querySelector('.modal-content-map');
var popupMapCall = document.querySelector('.js-open-map');
var popupMapClose = popupMap.querySelector('.modal-content-close');

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
