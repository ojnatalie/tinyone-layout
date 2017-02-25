function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

 $(function() {
     $('.arrow').on('click', function() {
         $('html, body').animate({
             scrollTop: 720
         }, 1000);
     });
 });
