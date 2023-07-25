var conteudoSertanejo = `
            <div class="carrosselArtistas sertanejo text-center fix-duplicate">
                <div>
                    <img src="assets/images/red-hot.png" alt="" class="mx-auto mb-3">
                    <h4 class="alt-medium text-orange"><b>Teste Sertanejo</b></h4>
                </div>
                <div>
                    <img src="assets/images/red-hot.png" alt="" class="mx-auto mb-3">
                    <h4 class="alt-medium text-orange"><b>Teste Sertanejo</b></h4>
                </div>
                <div>
                    <img src="assets/images/red-hot.png" alt="" class="mx-auto mb-3">
                    <h4 class="alt-medium text-orange"><b>Teste Sertanejo</b></h4>
                </div>
                <div>
                    <img src="assets/images/red-hot.png" alt="" class="mx-auto mb-3">
                    <h4 class="alt-medium text-orange"><b>Teste Sertanejo</b></h4>
                </div>
                <div>
                    <img src="assets/images/red-hot.png" alt="" class="mx-auto mb-3">
                    <h4 class="alt-medium text-orange"><b>Teste Sertanejo</b></h4>
                </div>
            </div>
        `;
var conteudoBandasCover = `
            <div class="carrosselArtistas bandasCover text-center fix-duplicate">
                <div>
                    <img src="assets/images/elton-john.png" alt="Elton John" class="mx-auto mb-3">
                    <h4 class="alt-medium text-orange"><b>Elton John</b></h4>
                </div>
                <div>
                    <img src="assets/images/bon-jovi.png" alt="Bon Jovi" class="mx-auto mb-3">
                    <h4 class="alt-medium text-orange"><b>Bon Jovi</b></h4>
                </div>
                <div>
                    <img src="assets/images/red-hot.png" alt="Red Hot Chilli Peppers" class="mx-auto mb-3">
                    <h4 class="alt-medium text-orange"><b>Red Hot Chilli Peppers</b></h4>
                </div>
            </div>
        `;
var conteudoStandUpComedy = `
            <div class="carrosselArtistas standUpComedy text-center fix-duplicate">
                <div>
                    <img src="assets/images/elton-john.png" alt="" class="mx-auto mb-3">
                    <h4 class="alt-medium text-orange"><b>Teste Standup</b></h4>
                </div>
                <div>
                    <img src="assets/images/elton-john.png" alt="" class="mx-auto mb-3">
                    <h4 class="alt-medium text-orange"><b>Teste Standup</b></h4>
                </div>
                <div>
                    <img src="assets/images/elton-john.png" alt="" class="mx-auto mb-3">
                    <h4 class="alt-medium text-orange"><b>Teste Standup</b></h4>
                </div>
                <div>
                    <img src="assets/images/elton-john.png" alt="" class="mx-auto mb-3">
                    <h4 class="alt-medium text-orange"><b>Teste Standup</b></h4>
                </div>
                <div>
                    <img src="assets/images/elton-john.png" alt="" class="mx-auto mb-3">
                    <h4 class="alt-medium text-orange"><b>Teste Standup</b></h4>
                </div>
            </div>
        `;

$(document).ready(function () {
    window.setTimeout(function () {
        $(".escolhaCarroselAgenciamento#bandas-cover").addClass('active');
        if ($(".escolhaCarroselAgenciamento#bandas-cover").hasClass("active")) {
            $('.bandas-cover').remove();
            $('.appendCarrosel').append(conteudoBandasCover);
            window.setTimeout(function () {
                $(".barra-abaixo").addClass('animation');
                $('.carrosselArtistas').slick({
                    infinite: true,
                    draggable: true,
                    pauseOnHover: true,
                    autoplay: false,
                    speed: 800,
                    arrows: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    responsive: [{
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                });
            }, (500));
        } else {
            $(".bandas-cover").fadeOut();
        }
    }, (700));
});

$(".escolhaCarroselAgenciamento").click(function () {
    $(".escolhaCarroselAgenciamento").removeClass("active");
    $(this).toggleClass("active");

    var menuHeight = document.getElementById('menuResponsible').clientHeight;
    $(window).scrollTop($(".boxAgenciamento").offset().top - menuHeight - 15);

    $(".escolhaCarroselAgenciamento#sertanejo").hasClass("active") ? ($(".fix-duplicate").remove(), $(".appendCarrosel").append(conteudoSertanejo), window.setTimeout((function () {
        $('.carrosselArtistas').slick({
            infinite: true,
            draggable: true,
            pauseOnHover: true,
            autoplay: false,
            speed: 800,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }), 50)) : ($(".sertanejo").remove(), $('.carrosselArtistas').slick('unslick'));


    $(".escolhaCarroselAgenciamento#bandas-cover").hasClass("active") ? ($(".fix-duplicate").remove(), $(".appendCarrosel").append(conteudoBandasCover), window.setTimeout((function () {
        $('.carrosselArtistas').slick({
            infinite: true,
            draggable: true,
            pauseOnHover: true,
            autoplay: false,
            speed: 800,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }), 50)) : ($(".bandasCover").remove(), $('.carrosselArtistas').slick('unslick'));


    $(".escolhaCarroselAgenciamento#standup-comedy").hasClass("active") ? ($(".fix-duplicate").remove(), $(".appendCarrosel").append(conteudoStandUpComedy), window.setTimeout((function () {
        $('.carrosselArtistas').slick({
            infinite: true,
            draggable: true,
            pauseOnHover: true,
            autoplay: false,
            speed: 800,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }), 50)) : ($(".standUpComedy").remove(), $('.carrosselArtistas').slick('unslick'));
});