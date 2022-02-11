var modalWriteUs = document.querySelector(".modal-write-us");
var modalWriteUsBtn = document.querySelector(".modal-write-us-btn");
var modalCloseBtn = document.querySelector(".modal-close");
var modalOverlay = document.querySelector(".modal-overlay");
var modalForm = modalWriteUs.querySelector("form");
var modalName = modalWriteUs.querySelector("#write-us-name");
var modalEmail = modalWriteUs.querySelector("#write-us-email");
var modalLetter = modalWriteUs.querySelector("#write-us-letter");

/*Отображение модального окна Напишите нам*/
modalWriteUsBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalWriteUs.classList.add("modal-show");
  modalOverlay.classList.add("modal-overlay-show");
  modalName.focus();
});

/*Скрытие модального окна Напишите нам по нажатию на кнопку закрытия*/
modalCloseBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalWriteUs.classList.remove("modal-show");
  modalOverlay.classList.remove("modal-overlay-show");
  modalWriteUs.classList.remove("modal-error");
  modalName.classList.remove("input-required-error");
  modalEmail.classList.remove("input-required-error");
  modalLetter.classList.remove("input-required-error");
});

/*Скрытие модального окна Напишите нам по клику на оверлей*/
modalOverlay.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalWriteUs.classList.remove("modal-show");
  modalOverlay.classList.remove("modal-overlay-show");
  modalWriteUs.classList.remove("modal-error");
  modalName.classList.remove("input-required-error");
  modalEmail.classList.remove("input-required-error");
  modalLetter.classList.remove("input-required-error");
});

/*Скрытие модального окна Напишите нам по нажатию Esc*/
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalWriteUs.classList.contains("modal-show")) {
      modalWriteUs.classList.remove("modal-show");
      modalOverlay.classList.remove("modal-overlay-show");
      modalWriteUs.classList.remove("modal-error");
      modalName.classList.remove("input-required-error");
      modalEmail.classList.remove("input-required-error");
      modalLetter.classList.remove("input-required-error");
    }
  }
});

/*Поведение, при отправке формы с пустыми полями*/
modalForm.addEventListener("submit", function(evt) {  
  if (!modalName.value || !modalEmail.value || !modalLetter.value) {    
    evt.preventDefault();
    modalWriteUs.classList.remove("modal-error");
    modalWriteUs.offsetWidth = modalWriteUs.offsetWidth;
    modalWriteUs.classList.add("modal-error");
  } else {
    modalForm.submit();
  }
});

modalForm.addEventListener("submit", function(evt) {  
  if (!modalName.value) {
    evt.preventDefault();
    modalName.classList.add("input-required-error");
  }
});

modalForm.addEventListener("submit", function(evt) {  
  if (!modalEmail.value) {
    evt.preventDefault();
    modalEmail.classList.add("input-required-error");
  }
});

modalForm.addEventListener("submit", function(evt) {  
  if (!modalLetter.value) {
    evt.preventDefault();
    modalLetter.classList.add("input-required-error");
  }
});

modalName.addEventListener("change", function(evt) {  
  modalName.classList.remove("input-required-error");
});

modalEmail.addEventListener("change", function(evt) {  
  modalEmail.classList.remove("input-required-error");
});

modalLetter.addEventListener("change", function(evt) {  
  modalLetter.classList.remove("input-required-error");
});