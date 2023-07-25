$(document).ready(function () {
    var menuHeight = document.getElementById('menuResponsible').clientHeight;

    $(".btnRolagemTopo").click(function () {
        $("html, body").animate({ scrollTop: "0" }, "fast");
    });
    $(".btnRolagem").click(function () {
        $(window).scrollTop($(".ancoraConteudo").offset().top - menuHeight - 15);
    });
    $(".inicio").click(function () {
        $(window).scrollTop($(".ancoraConteudo").offset().top - menuHeight - 15);
    });
    $(".institucional").click(function () {
        $(window).scrollTop($(".AncoraInstitucional").offset().top - menuHeight - 15);
    });
    $(".agenciamento").click(function () {
        $(window).scrollTop($(".AncoraAgenciamento").offset().top - menuHeight - 15);
    });
    $(".agenda").click(function () {
        $(window).scrollTop($(".AncoraAgenda").offset().top - menuHeight - 15);
    });
    $(".parceiros").click(function () {
        $(window).scrollTop($(".AncoraParceiros").offset().top - menuHeight - 15);
    });
    $(".contato").click(function () {
        $(window).scrollTop($(".AncoraContato").offset().top - menuHeight - 15);
    });
});

// Menu
$(".menu-mobile").click(function () {
    $(this).toggleClass("open")
    $(".menuOpcoes").toggle("400");
    $(".menuOpcoes2").hide();
    $(".close-drop2").hide();
    $(".btn-azul").removeClass("fundo-verde");
    if ($(".menu-mobile").hasClass("open")) {
        $(".close-drop").show();
    } else {
        $(".close-drop").hide();
    }
});
$(".close-drop").click(function () {
    $(".menuOpcoes").hide("400");
    $(".menu-mobile").removeClass("open");

    $(this).hide();
});

$('.carrosselTextos').slick({
    infinite: false,
    draggable: false,
    pauseOnHover: true,
    autoplay: false,
    speed: 800,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 1 } }, { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }]
});

$('.carrosselFeedback').slick({
    infinite: true,
    draggable: true,
    pauseOnHover: true,
    autoplay: true,
    speed: 800,
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 991, settings: { dots: true } }, { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }]
});

$('.carrosselParceiros').slick({
    infinite: true,
    draggable: false,
    pauseOnHover: true,
    autoplay: true,
    speed: 800,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: true } }, { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } }]
});

$(window).on('load resize orientationchange', function () {
    $('.carrosselMobile').each(function () {
        var $carousel = $(this);
        /* Initializes a slick carousel only on mobile screens */
        // slick on mobile
        if ($(window).width() > 768) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        }
        else {
            if (!$carousel.hasClass('slick-initialized')) {
                $carousel.slick({
                    infinite: true,
                    draggable: true,
                    pauseOnHover: true,
                    autoplay: true,
                    speed: 800,
                    arrows: true,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    responsive: [{ breakpoint: 991, settings: { dots: true } }, { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } }, { breakpoint: 578, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false } }]
                });
            }
        }
    });
});