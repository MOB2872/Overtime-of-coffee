document.addEventListener('DOMContentLoaded', function () {
    // Inicialização do Swiper para Cafés
    window.cafesSwiper = new Swiper('.cafes-swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.cafes-pagination',
            clickable: true,
        },
    });

    // Inicialização do Swiper para Comidas
    window.comidasSwiper = new Swiper('.comidas-swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.comidas-pagination',
            clickable: true,
        },
    });
});
