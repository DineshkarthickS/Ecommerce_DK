

// Initialize cart from localStorage or as empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add to cart function with login check
function addtocart(price, name) {

  // Check if user is logged in
  if (localStorage.getItem('loggedIn') !== 'true') {
    // Store intended product in localStorage and redirect to login
    localStorage.setItem('pendingCart', JSON.stringify({ name, price, quantity: 1 }));
    alert('Please log in or sign up to add products to your cart.');
    window.location.href = 'login.html';
    return;
  }

  // Add or update product in cart
  const index = cart.findIndex(item => item.name === name);
  if (index > -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(`${name} added to cart!`);
}

// Update cart count in navbar (optional)
function updateCartCount() {
  let count = cart.reduce((sum, item) => sum + item.quantity, 0);
  let cartLink = document.querySelector('a[href="#cart"], a#cart-link');
  if (cartLink) {
    cartLink.textContent = `Cart (${count})`;
  }
}

document.addEventListener('DOMContentLoaded', updateCartCount);
window.addtocart = addtocart;
