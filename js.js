$(document).ready(function(){
    $('#home').click(function (){
       $("#sideitem").toggle("active");
    });

    $('.hamburger').click(function(){
        $('#data-content').toggle("active");
    });

});


/*var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function(){
  document.querySelector("body").classList.toggle("active");
})


*/