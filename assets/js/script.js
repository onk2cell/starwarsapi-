'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNav);


//slider functionality is


const slider = document.querySelector("[data-slider]")
const nextBtn = document.querySelector("[data-next]")
const prevBtn = document.querySelector("[data-prev]")

// creat slider variable

let sliderPos = 0 ; 

// set the number of total slider items
const totalSliderItems = 4;


const slideToPrev = function () {

  sliderPos--;
  slider.style.transform = `translateX(-${sliderPos}00%)`;
  console.log("butoon got clicked")
  sliderEnd()

}

addEventOnElem(prevBtn, "click", slideToPrev)
console.log(slideToPrev)


const slideToNext = function () {

  sliderPos++;
  slider.style.transform = `translateX(-${sliderPos}00%)`;
  sliderEnd()
  console.log("butoon got clicked")

}


//counter and the add to cart 


addEventOnElem(nextBtn, "click", slideToNext)
console.log(slideToPrev)


//a function to disabled the slider

function sliderEnd() {
  if (sliderPos >= totalSliderItems - 1) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }

  if (sliderPos <= 0) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
}


///counter for the adding of the productests inthe cart 

const totalPriceElem = document.querySelector("[data-total-price]");
const qtyElem = document.querySelector("[data-qty]");
const qtyMinusBtn = document.querySelector("[data-qty-minus]");
const qtyPlusBtn = document.querySelector("[data-qty-plus]");

// set the product default quantity
let qty = 1;

// set the product default price
let productPrice = 125;

// set the initial total price
let totalPrice = 125;

const increaseProductQty = function () {
  qty++;
  totalPrice = qty * productPrice;

  qtyElem.textContent = qty;
  totalPriceElem.textContent = `$${totalPrice}.00`;
}

addEventOnElem(qtyPlusBtn, "click", increaseProductQty);

const decreaseProductQty = function () {
  if (qty > 1) qty--;
  totalPrice = qty * productPrice;

  qtyElem.textContent = qty;
  totalPriceElem.textContent = `$${totalPrice}.00`;
}

addEventOnElem(qtyMinusBtn, "click", decreaseProductQty);  




