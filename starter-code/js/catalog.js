/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);
var counter =0;


// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var optionEl = document.createElement('option');
    optionEl.textContent = Product.allProducts[i].name;
    selectElement.appendChild(optionEl);
  }
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
  var product = event.target.items.value;
  var quantity = event.target.quantity.value;
  cart.addItem(product, quantity);
  counter++;
  console.log(counter);
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var itemCount = document.getElementById('itemCount');
  var spanEl = document.createElement('span');
  spanEl.textContent=counter;
  itemCount.appendChild(spanEl);
}
  
// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  var product = event.target.items.value;
  var quantity = event.target.quantity.value;
  // TODO: Add a new element to the cartContents div with that information
  var divEl = document.getElementById('cartContents');
  var ulEl = document.createElement('ul');
  divEl.appendChild(ulEl);

  var liEl =document.createElement('li');
  liEl.textContent = 'Items Qty';
  ulEl.appendChild(liEl);

  for(var i = 0; i < items.length; i ++) {
    console.log(items);
    var liEl = document.createElement('li');
    liEl.textContent = `${product} ${quantity}`;  
  }
  ulEl.appendChild(liEl); 
}
 //make table head
// var itemTable = document.getElementsByClassName('copy');

// function makeHeaderRow() {
//   var tbEl = document.createElement('table');

//   var trEl = document.createElement("tr");
//   var thEl = document.createElement('th');
//   thEl.textContent = 'Remove';
//   trEl.appendChild(thEl);
//   itemTable.appendChild(trEl);

//   var trEl = document.createElement("tr");
//   var thEl = document.createElement('th');
//   thEl.textContent = 'Items';
//   trEl.appendChild(thEl);
//   itemTable.appendChild(trEl);

//   var trEl = document.createElement("tr");
//   var thEl = document.createElement('th');
//   thEl.textContent = 'Quantity';
//   trEl.appendChild(thEl);
//   itemTable.appendChild(trEl);

  

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
