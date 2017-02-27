var $nav = $(".js-nav");

$('.js-nav-close-btn').on('click', function () {
    $nav.toggleClass('js-nav--opened');
});

window.addEventListener('load', function() {
    
document.querySelector('.js-scroll-into-view').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.c-section1__headline').scrollIntoView({ behavior: 'smooth' });
  });
});

