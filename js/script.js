let servese_tab = document.querySelectorAll(".js-servese-tabs");
let servese_tab_content = document.querySelectorAll(".js-servese-tabs-content");
let map_modale = document.querySelector(".js-map-modale");
let js_map_button = document.querySelector(".js-map");
let close_button = document.querySelectorAll(".button-close")
let cart_modale = document.querySelector(".js-cart-modale");
let js_cartbutton = document.querySelectorAll(".js-cart");
let contine_close = document.querySelector(".js-contine");
let js_form = document.querySelector(".js-form");
let js_form_modale = document.querySelector(".js-form-modale");



contine_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  cart_modale.classList.remove("modal-show");
});

for (let close_buttons of close_button) {
  close_buttons.addEventListener("click", function (evt) {
    evt.preventDefault();
    cart_modale.classList.remove("modal-show");
    map_modale.classList.remove("modal-show");
    js_form_modale.classList.remove("modal-show");
  })
};

for (let cartbutton of js_cartbutton) {
  cartbutton.addEventListener("click", function (evt) {
    evt.preventDefault();
    cart_modale.classList.add("modal-show");
  })
};

js_form.addEventListener("click", function (evt) {
  evt.preventDefault();
  js_form_modale.classList.add("modal-show");
});


js_map_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  map_modale.classList.add("modal-show");
});

