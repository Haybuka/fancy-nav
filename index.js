let cart = document.querySelector('.cart');
let cartDisplay = document.querySelector('.cart-display');
let cartClose = document.querySelector('.cart-close');
let harmburger = document.querySelector('.harmburger');
let logoHead = document.querySelector('.logo');
let closeLogo = document.querySelector('.logo .close-logo');
let body = document.querySelector('body')
cart.addEventListener('click',()=>{
  cartDisplay.classList.toggle('open')
})
cartClose.addEventListener('click',()=>{
    cartDisplay.classList.toggle('open')
    body.classList.toggle('.height')

  })
 harmburger.addEventListener('click',()=>{
    logoHead.classList.toggle('open')
    body.classList.toggle('.height')
  })
  closeLogo.addEventListener('click',()=>{
    logoHead.classList.toggle('open')
  })