/* $ global */

$('.menu-toggle').click(function(){
  $('.site-nav').toggleClass('site-nav--open');
  $(this).toggleClass('menu-toggle--open');
})


$('.search-launch').click(function(){
  toggleSearch();
  $('.top-input').focus()
})




$('.top-input').on("blur", function(){
  toggleSearch();
})


$('.user').click(function(){
  $('.login-pane').toggleClass('hidden')
})



function toggleSearch(){
  $('.top-input').toggleClass('show-search');
  $('.site-nav').toggleClass('search--open');
  $('.user-icon').toggleClass('search--open');
  $('.search-icon').toggleClass('search--open');
  $('.cart-icon').toggleClass('search--open');
  $('.menu-toggle').toggleClass('search--open');
}




$('.cart-icon').click(function(){
  $('.site-nav-carrito').toggleClass('hidden')
})

$('.open-shopping-cart').click(function(){
  $('.site-nav-carrito').toggleClass('hidden')
})


// $('.like-btn').on('click', function() {
//    $(this).toggleClass('is-active');
// });

$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }
 
  $input.val(value);
 
});
 
$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value < 100) {
        value = value + 1;
    } else {
        value =100;
    }
 
    $input.val(value);
});