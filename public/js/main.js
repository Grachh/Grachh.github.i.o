$(document).ready(function (){
    //Cambio estilo barra nav
    $(window).on('scroll', function(){
        var position = $('#primera').offset();
        var positionParagraph = $('#primera').offset();
        var positionDocument = $(window).scrollTop();
        console.log(position.top);
        if (positionDocument > positionParagraph.top - 60) {
            $('nav').removeClass('white');
        } else {
            $('nav').addClass('white');
        }
    });

});