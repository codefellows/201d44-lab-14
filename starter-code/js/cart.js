/* global Cart */
'use strict';
var cartContents = document.getElementById('cart');

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);




// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  // clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
// function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  cartContents.innerHTML = '';


  var prodTab = document.createElement('table');
  cartContents.appendChild(prodTab);

  var header = document.createElement('tr');
  var data = document.createElement('th');
  header.appendChild(data);

  data = document.createElement('th');
  data.textContent = 'Quantity';
  header.appendChild(data);
  data = document.createElement('th');
  data.textContent = 'Item';
  header.appendChild(data);
  prodTab.appendChild(header);

  for(var i=0; i<cart.items.length; i++) {
    var button = document.createElement('button');
    button.textContent = 'X';
    button.id = cart.items[i].name;

    var row = document.createElement('tr');

    data = document.createElement('td');
    data.appendChild(button);
    row.appendChild(button);

    data = document.createElement('td');
    data.textContent = cart.items[i].quantity;
    row.appendChild(data);

    data = document.createElement('td');
    data.textContent = cart.items[i].product.name;
    row.appendChild(data);

    prodTab.appendChild(row);
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  var name = event.target.id;
  // var index = cart.includes(name);
  cart.removeItem({name: name});
  cart.saveToLocalStorage();
  showCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
