(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top shadow-sm');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow-sm');
        }
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonial-carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });

    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


   

})(jQuery);




let map;

function initMap() {
    // Coordenadas aproximadas del centro de la ciudad o área relevante
    const center = { lat: -17.7833, lng: -63.1833 }; // Coordenadas aproximadas

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: center,
    });

    // Coordenadas de las universidades
    const locations = [
        { name: "Facultad Nacional De Ingenieria", position: { lat: -17.7833, lng: -63.1833 } },
        { name: "Facultad de Derechos Ciencias Politicas Y Sociales", position: { lat: -17.7833, lng: -63.1833 } },
        { name: "Facultad Tecnica", position: { lat: -17.7833, lng: -63.1833 } },
        { name: "Facultad de Arquitectura y Urbanismo", position: { lat: -17.7833, lng: -63.1833 } },
        { name: "Facultad Ciencias Agrarias y Nacionales", position: { lat: -17.7833, lng: -63.1833 } },
        { name: "Facultad De Ciencias Economicas Financieras Y Administrativas", position: { lat: -17.7833, lng: -63.1833 } },
        { name: "Facultad Ciencias De La Salud", position: { lat: -17.7833, lng: -63.1833 } },
    ];

    // Añadir marcadores
    locations.forEach(location => {
        new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.name
        });
    });
}

document.getElementById('show-map').addEventListener('click', () => {
    initMap();
});

