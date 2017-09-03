/* global $ */

// $('.btn-add-to-cart').click(function () {
//   $('.alert-added-to-cart').toggleClass('hidden')
// })

// $('.btn-close-alert').click(function () {
//   $('.alert-added-to-cart').toggleClass('hidden')
// })

/* ==== PRODUCT DETAILS ==== */

$('.btn-plus').click(function () {
  var $input = $(this).siblings('.input-number')
  // $input.css('background-color','red')
  var currentQuantity = $input.val()
  var newQuantity = +currentQuantity + 1
  $input.val(newQuantity.toString())
})

$('.btn-minus').click(function () {
  var newQuantity
  var $input = $(this).siblings('.input-number')
  // $input.css('background-color','red')
  var currentQuantity = $input.val()
  if (currentQuantity <= 1) {
    newQuantity = 1
  } else {
    newQuantity = +currentQuantity - 1
  }
  $input.val(newQuantity.toString())
})

/* ==== Dashboard == */

$('#menu-toggle').click(function (e) {
  e.preventDefault()
  $('#wrapper').toggleClass('toggled')
})

/* === Edit PRODUCT === */

$('.edit-btn').click(function (e) {
  e.preventDefault()
  var $editableField = $(this).prev()
  var $objective = $(this).prev().prop('disabled')
  if ($objective) {
    $editableField.prop('disabled', false)
  } else {
    $editableField.prop('disabled', true)
  }
})

/* === CART === */

$('.cart-added-item').click(function (e) {
  var items = $('.items-in-cart-badge').html()
  var newItems = +items + 1
  $('.items-in-cart-badge').html(newItems)
})

$('.cart-remove-btn').click(function (e) {
  e.preventDefault()
  const cartItem = $(this).attr('id')
  // alert('Cart Item to remove: ' + cartItem)
  const url = `/cart/${cartItem}`
  const method = 'DELETE'

  $.ajax({url, method})
    .then(data => {
      $(this).closest('li').remove()
      $('.items-in-cart-badge').html(data.cart.length)
      document.location.reload(true)
      // console.log(data)
    })
})

// UPDATING - Changing the Qty of item in Cart
$('.cart-quantity').on('focusout', function (e) {
  const cartItem = $(this).attr('id')
  const newQuantity = $(this).val()
  const data = { quantity: newQuantity }
  const price = $(this).closest('li').find('.item-price').html()
  const url = `/cart/${cartItem}`
  const method = 'PUT'

  $.ajax({url, method, data})
     .then(data => {
       $(this).closest('li').find('.item-total').html(Math.round((newQuantity * price) * 100) / 100)
       document.location.reload(true)
     })
})
