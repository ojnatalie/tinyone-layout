var $nav = $(".js-nav");

$('.js-nav-close-btn').on('click', function () {
    $nav.toggleClass('js-nav--opened');
});

 $(function() {
     $('.arrow').on('click', function() {
         $('html, body').animate({
             scrollTop: 720
         }, 1000);
     });
 });
