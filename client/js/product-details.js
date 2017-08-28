// $ global //

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
