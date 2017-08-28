/* $ global */

$('.btn-add-to-cart').click(function(){
  $('.alert-added-to-cart').toggleClass('hidden');
})

$('.btn-close-alert').click(function(){
  $('.alert-added-to-cart').toggleClass('hidden');
})


/* ==== PRODUCT DETAILS ==== */

$('.btn-plus').click( function() {
  var currentQuantity = $('.quantity-required').val()
  var newQuantity = +currentQuantity + 1
  $('.quantity-required').val(newQuantity.toString())
})

$('.btn-minus').click( function() {
  var currentQuantity = $('.quantity-required').val()
  var newQuantity = +currentQuantity - 1
  $('.quantity-required').val(newQuantity.toString())
})