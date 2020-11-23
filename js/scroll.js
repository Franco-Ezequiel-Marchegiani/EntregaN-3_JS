// *** SCROLL ***
/*  $(function(){
    $('#enlace-discografia').click(function(){
        $("document").animate({strollTop:1000},'1000');
    });
})  */

$('#enlace-home').click(function(e){
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $('body').offset().top
    }, 1500);
}) 
$("#enlace-discografia").click(function(e){
    e.preventDefault();

    $("html, body").animate({
        scrollTop: $("#discografia").offset().top -150
    }, 1500);
})

$("#enlace-pelicula").click(function(e){
    e.preventDefault();

    $("html, body").animate({
        scrollTop: $("#pelicula").offset().top -100
    }, 1500);
})

$('#enlace-historia').click(function(e){
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $('.titulo__historia').offset().top -95
    }, 2000);
})
$('#enlace-liveAid').click(function(e){
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $('#liveAid').offset().top -150
    }, 2000);
}) 
$('#enlace-contacto').click(function(e){
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $('#contacto').offset().top
    }, 2000);
}) 

//Scroll de Historia
$("#enlace__queen").click(function(e){
    e.preventDefault();

    $("html, body").animate({
        scrollTop: $(".historia__queen").offset().top -200
    }, 500);
})
$("#enlace__freddieMercury").click(function(e){
    e.preventDefault();

    $("html, body").animate({
        scrollTop: $(".historia__freddieMercury").offset().top -230
    }, 1200);
})
$("#enlace__brianMay").click(function(e){
    e.preventDefault();

    $("html, body").animate({
        scrollTop: $(".historia__brianMay").offset().top -230
    }, 1300);
})
$("#enlace__johnDeacon").click(function(e){
    e.preventDefault();

    $("html, body").animate({
        scrollTop: $(".historia__johnDeacon").offset().top -230
    }, 1400);
})
$("#enlace__rogerTaylor").click(function(e){
    e.preventDefault();

    $("html, body").animate({
        scrollTop: $(".historia__rogerTaylor").offset().top -230
    }, 1500);
})
//Boton carrito de compra
$("#boton_carritoCompras").click(function(e){
    e.preventDefault()
    $("html, body").animate({
        scrollTop: $("#carritoDeCompras").offset().top -150
    })
})

//Scroll Ícono header y footer
$("#logoQueen").click(function(e){
    e.preventDefault()
    $("html, body").animate({
        scrollTop:$("body").offset().top
    }, 1500);
})

$("#footer-home").click(function(e){
    e.preventDefault()
    $("html, body").animate({
        scrollTop:$("body").offset().top
    }, 1500);
})

// *** FIN SCROLL ***