$('document').ready(function() {
  $('img.puzzle-image').click(function() {
    var element = $(this);
    var src = element.attr('src');
    var alt_src = element.data('alt-src');

    element.attr('src', alt_src);
    element.data('alt-src', src);
  })

});
/*
$("#infoToggler img").click(function() {
  $("#infoToggler img").toggle(); //you need to toggle images both
});
*/
