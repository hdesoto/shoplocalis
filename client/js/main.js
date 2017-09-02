/* $ global */

$('.btn-add-to-cart').click(function(){
  $('.alert-added-to-cart').toggleClass('hidden');
})

$('.btn-close-alert').click(function(){
  $('.alert-added-to-cart').toggleClass('hidden');
})


/* ==== PRODUCT DETAILS ==== */

$('.btn-plus').click( function() {
  var $input = $(this).siblings('.input-number')
  // $input.css('background-color','red')
  var currentQuantity = $input.val()
  var newQuantity = +currentQuantity + 1
  $input.val(newQuantity.toString())
})

$('.btn-minus').click( function() {
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

$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });


/* === Edit PRODUCT === */

$('.edit-btn').click(function(e){
  e.preventDefault()
  $editableField = $(this).prev()
  $objective = $(this).prev().prop('disabled')
  
  if($objective){
    $editableField.prop('disabled',false)
  } else {
    $editableField.prop('disabled', true)
  }
})

// $('.edit-details').hover(function(){
//   $(this).sibling('button').toggle()
// })


/* === CART === */

// $('.btn-remove').click(function(e){
//   e.preventDefault()
//   const id = $(this).attr('id')
//   const url = `/cart/${id}`
//   const method = 'DELETE'

//   $.ajax({url, method})
//     .then(data => {
//       $(this).closes(0)
//     })

// })