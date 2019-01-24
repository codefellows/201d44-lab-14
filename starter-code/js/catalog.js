/* global Product, Cart */

'use strict';

var select = document.getElementById('items');
var cartContents = document.getElementById('cartContents');

// Set up an empty cart for use on this page.
loadCart();

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var optEl = document.createElement('option');
    optEl.textContent = Product.allProducts[i].name;
    optEl.value = Product.allProducts[i].name;
    selectElement.appendChild(optEl);
  }

  updateCounter();
  updateCartPreview();

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  // pull item name from select menu
  var itemName = select.options[select.selectedIndex].value;
  var itemQuantity = parseInt(document.getElementById('quantity').value);
  var product;

  //search product list for product with that name
  for(var i=0; i<Product.allProducts.length; i++) {
    if(Product.allProducts[i].name === itemName) {
      product = Product.allProducts[i];
      break;
    }
  }
  cart.addItem(product, itemQuantity);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var countHolder = document.getElementById('itemCount');
  countHolder.textContent = `(${cart.items.length})`;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  cartContents.innerHTML = '';


  var prodTab = document.createElement('table');
  cartContents.appendChild(prodTab);

  var header = document.createElement('tr');
  var data = document.createElement('th');
  data.textContent = 'Quantity';
  header.appendChild(data);
  data = document.createElement('th');
  data.textContent = 'Item';
  header.appendChild(data);
  prodTab.appendChild(header);

  for(var i=0; i<cart.items.length; i++) {
    var row = document.createElement('tr');

    data = document.createElement('td');
    data.textContent = cart.items[i].quantity;
    row.appendChild(data);

    data = document.createElement('td');
    data.textContent = cart.items[i].product.name;
    row.appendChild(data);

    prodTab.appendChild(row);
  }
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
