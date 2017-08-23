$('document').ready(function() {

  $('img.puzzle-image').click(function(){

    var element = $(this);
    // This creates a reference to the 'img.puzzle-image' html element

    var src = element.attr('src');
    // the ".attr('src')" gets whatever is in the 'src=""' attribute for the given html element

    var alt_src = element.data('alt-src');
    // the ".data('alt-src')" does the same thing as ".attr('data-alt-src')"

    element.attr('src',alt_src);
    // if you add a second argument to the ".attr('src')", it sets a new value instead of getting the current value
    element.data('alt-src',src);
    // does the same thing as ".attr('data-alt-src',src)"

  });

});
