/* global Cart */
'use strict';
var cartContents = document.getElementById('cart');

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);




// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  addPayForm();
  // clearCart();
  showCart();
}

function addPayForm() {
  var form = document.createElement('form');
  document.getElementsByTagName('main')[0].appendChild(form);
  var fieldSet = document.createElement('fieldset');
  form.appendChild (fieldSet);
  var legend = document.createElement('legend');
  legend.textContent = 'Payment Information';
  fieldSet.appendChild(legend);

  var label = document.createElement('label');
  label.textContent = 'Name';
  label.for = 'name';
  fieldSet.appendChild(label);

  var input = document.createElement('input');
  input.type = 'text';
  input.name = 'name';
  fieldSet.appendChild(input);

  label = document.createElement('label');
  label.textContent = 'Street Address';
  label.for = 'street';
  fieldSet.appendChild(label);

  input = document.createElement('input');
  input.type = 'text';
  input.name = 'street';
  fieldSet.appendChild(input);

  label = document.createElement('label');
  label.textContent = 'City';
  label.for = 'city';
  fieldSet.appendChild(label);

  input = document.createElement('input');
  input.type = 'text';
  input.name = 'city';
  fieldSet.appendChild(input);

  label = document.createElement('label');
  label.textContent = 'State';
  label.for = 'state';
  fieldSet.appendChild(label);

  input = document.createElement('input');
  input.type = 'text';
  input.name = 'state';
  fieldSet.appendChild(input);

  label = document.createElement('label');
  label.textContent = 'Area Code';
  label.for = 'area-code';
  fieldSet.appendChild(label);

  input = document.createElement('input');
  input.type = 'text';
  input.name = 'area-code';
  fieldSet.appendChild(input);

  label = document.createElement('label');
  label.textContent = 'Phone Number';
  label.for = 'phone';
  fieldSet.appendChild(label);

  input = document.createElement('input');
  input.type = 'text';
  input.name = 'phone';
  fieldSet.appendChild(input);

  label = document.createElement('label');
  label.textContent = 'Payment Card Number';
  label.for = 'card-num';
  fieldSet.appendChild(label);

  input = document.createElement('input');
  input.type = 'text';
  input.name = 'card-num';
  fieldSet.appendChild(input);
  
  var button = document.createElement('button');
  button.textContent = 'Submit';
  fieldSet.appendChild(button);
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
    button.id = cart.items[i].product.name;
    button.className = 'remove'

    var row = document.createElement('tr');

    data = document.createElement('td');
    data.appendChild(button);
    row.appendChild(data);

    data = document.createElement('td');
    var pic = document.createElement('img')
    pic.src = cart.items[i].product.filePath;
    pic.style.width = 100;
    data.appendChild(pic);
    row.appendChild(data);

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
  if(event.target.className === 'remove')
  {
    var name = event.target.id;
    // var index = cart.includes(name);
    cart.removeItem({name: name});
    cart.saveToLocalStorage();
    showCart();
  }
}

// This will initialize the page and draw the cart on screen
renderCart();
