const products = [
  {
    //object = group multiple values together
    image: "images/products/men-chino-pants-beige.jpg",
    name: "Yellowish White Stylish Cotton Pant - 1 Pair",
    rating: {
      stars: 50,
      count: 1870,
    },
    priceCents: 1090, // <-In cent  (10.90)  1 dollor = 100 cents
  },
  {
    image: "images/products/men-slim-fit-summer-shorts-gray.jpg",
    name: "Men Slim fit Summer Shorts gray",
    rating: {
      stars: 25,
      count: 127,
    },
    priceCents: 2095,
  },
  {
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 45,
      count: 56,
    },
    priceCents: 799,
  },
]; // array represent a list

let productsHTML = "";

products.forEach((product) => {
  productsHTML += `   <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>
    `;
});
console.log(productsHTML);

//dom

document.querySelector(".js-products-grid").innerHTML = productsHTML;
