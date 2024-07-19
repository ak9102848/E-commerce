document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.querySelector('.cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function updateCartDisplay() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button class="remove-from-cart" data-index="${index}">Remove</button>`;
      cartItemsContainer.appendChild(li);
      total += item.price;
    });

    cartTotalElement.textContent = `$${total.toFixed(2)}`;

    document.querySelectorAll('.remove-from-cart').forEach(button => {
      button.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-index');
        removeFromCart(index);
      });
    });
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
  }

  updateCartDisplay();
});
