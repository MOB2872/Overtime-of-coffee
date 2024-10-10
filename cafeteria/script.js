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


// Js do pagamento chekout
// Array para armazenar itens do carrinho
const cartItems = [];
let totalPrice = 0;

 // Função para exibir os itens do carrinho
 function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsDiv = document.getElementById('cart-items');
    let totalPrice = 0;

    cart.forEach(item => {
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `<p>${item.name} - R$ ${item.price.toFixed(2)}</p>`;
        cartItemsDiv.appendChild(itemDiv);

        totalPrice += item.price;
    });

    document.getElementById('total-price').innerText = `R$ ${totalPrice.toFixed(2)}`;
}

// Função para lidar com o envio do formulário de pagamento
function handleSubmit(event) {
    event.preventDefault();
    alert('Compra finalizada com sucesso!');
    localStorage.removeItem('cart'); // Limpa o carrinho após a compra
    window.location.href = 'index.html'; // Redireciona para a página inicial
}


// Chama a função para exibir os itens ao carregar a página
window.onload = displayCartItems;

// Função para atualizar o carrinho no DOM
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `${item.name} - R$${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(itemElement);
    });

    document.getElementById('total-price').innerText = `R$${totalPrice.toFixed(2)}`;
}

// Função para lidar com o envio do formulário
function handleSubmit(event) {
    event.preventDefault();
    alert('Compra finalizada com sucesso!');
    // Limpa o carrinho após finalização da compra
    cartItems.length = 0;
    totalPrice = 0;
    updateCart();
    // Limpa o formulário
    event.target.reset();
}

function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'pagamento.html'; // Corrigido para o caminho correto
}

