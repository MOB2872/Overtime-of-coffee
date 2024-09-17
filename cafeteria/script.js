document.addEventListener('DOMContentLoaded', function () {
    // Inicialização do Swiper para Cafés
    var cafesSwiper = new Swiper('.cafes-swiper', {
        loop: true, // Loopar slides
        slidesPerView: 1, // Número de slides visíveis
        spaceBetween: 10, // Espaçamento entre slides
        navigation: {
            nextEl: '.cafes-next',
            prevEl: '.cafes-prev',
        },
        pagination: {
            el: '.cafes-pagination',
            clickable: true,
        },
    });

    // Inicialização do Swiper para Comidas
    var comidasSwiper = new Swiper('.comidas-swiper', {
        loop: true, // Loopar slides
        slidesPerView: 1, // Número de slides visíveis
        spaceBetween: 10, // Espaçamento entre slides
        navigation: {
            nextEl: '.comidas-next',
            prevEl: '.comidas-prev',
        },
        pagination: {
            el: '.comidas-pagination',
            clickable: true,
        },
    });
});
