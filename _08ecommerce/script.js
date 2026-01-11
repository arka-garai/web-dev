document.addEventListener("DOMContentLoaded",() => {
  let products = [
    {id:1, name: "Product 1", price: 99.12},
    {id:2, name: "Product 2", price: 90.02},
    {id:3, name: "Product 3", price: 89.99},
  ];
  const cart = [];
  let productList = document.getElementById("product-list");
  let cartItems = document.getElementById("cart-items");
  let cartTotalDisplay = document.getElementById("cart-total");
  let totalPriceDisplay = document.getElementById("total-price");
  let checkoutBtn = document.getElementById("checkout-btn");
  let emptyCartMessage = document.getElementById("empty-cart");

  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name} - $${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to cart</button> 
    `;
    productList.appendChild(productDiv);
  })

  productList.addEventListener("click",(e) => {
    if(e.target.tagName === "BUTTON"){
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find( p => p.id === productId);
      addToCart(product);
    }
  })

  function addToCart(product) {
    cart.push(product);
    renderCart();
  }
  function renderCart() {
    // 1. Always clear the display first to prevent duplicates
    cartItems.innerHTML = "";
    let totalPrice = 0;

    if (cart.length > 0) {
      cartTotalDisplay.classList.remove("hidden");
      cart.forEach((item) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `<span>${item.name} - $${item.price.toFixed(
          2
        )}</span>`;
        cartItems.appendChild(cartItem);
      });

      totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
    } else {
      cartTotalDisplay.classList.add("hidden");
      cartItems.innerHTML = `
        <p id="empty-cart">Your cart is empty.</p>
      `;
    }
  }

  checkoutBtn.addEventListener("click", () => {
      cart.length = 0; //my cart is empty now
      alert("checkout successful")
      renderCart();
  })
})