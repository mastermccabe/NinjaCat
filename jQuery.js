$('document').ready(function() {
  $('p1').click(function() {
    alert('hello');
  })

});
$('img').click(function() {
  console.log('data-alt-src value is', $(this).attr('data-alt-src'));
});

$('img').click(function() {
  $(this).hide();
  $('img[src *= "ninja"]').show();
});

/*
$("#infoToggler img").click(function() {
  $("#infoToggler img").toggle(); //you need to toggle images both
});
*/
