

// // Initialize cart from localStorage or as empty array
// let cart = JSON.parse(localStorage.getItem('cart')) || [];

// // Add to cart function
// function addtocart(price, name) {
//   // Check if item already exists in cart
//   const index = cart.findIndex(item => item.name === name);
//   if (index > -1) {
//     cart[index].quantity += 1;
//   } else {
//     cart.push({ name, price, quantity: 1 });
//   }
//   localStorage.setItem('cart', JSON.stringify(cart));
//   updateCartCount();
//   alert(`${name} added to cart!`);
// }

// // Update cart count in navbar (optional)
// function updateCartCount() {
//   let count = cart.reduce((sum, item) => sum + item.quantity, 0);
//   let cartLink = document.querySelector('a[href="#cart"]');
//   if (cartLink) {
//     cartLink.textContent = `Cart (${count})`;
//   }
// }

// // On page load, update cart count
// document.addEventListener('DOMContentLoaded', updateCartCount);

// // Expose addtocart globally
// window.addtocart = addtocart;