'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var feedbackBtn = document.querySelector('.btn_feedback');
var feedbackModal = document.querySelector('.modal_feedback');
var feedbackModalClose = document.querySelector('.modal_feedback_close');

var openPopup = function () {
  feedbackModal.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

feedbackBtn.addEventListener('click', function () {
  openPopup();
});

feedbackBtn.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var closePopup = function () {
  feedbackModal.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

feedbackModalClose.addEventListener('click', function () {
  closePopup();
});

feedbackModalClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});
