Css:

  Do it all

app.js

  -Cart() -build constructor? - change how it works, no arguments, builds out of local storage is poss
  -Cart.prototype.addItem() - build, ,takes product and quantity and makes a new item in Cart
  -Cart.prototype.removeItem()-build, deletes an item
  Cart.prototype.saveToLocalStorage() - build, saves to local storage

catalog.js


  -populateForm() - finish, frame is there
  -handleSubmit() - cancel page reload
  -addSelectedItemToCart() - use Cart methods to make a new item in the cart
  -updateCounter() - updates the number of items in the cart, used in the header
  -updateCartPreview() - update items listed in the cart on the store page
  -handleSubmit(event) - event handler for submitting a new item

cart.js

  -loadCart() - error handling for empty carts, copy to catalog
  -clearCart() - clears table displaying cart contents
  -showCart() - builds table displaying cart contents
  -removeItemFromCart() - does what it says, use Cart functions