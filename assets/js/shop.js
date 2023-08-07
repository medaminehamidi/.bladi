let cartItems = []
const addBestSellersToCart = (itemId) => {
  cartItems.push(bestSellers.find(element => element.id === itemId))
  localStorage.setItem("cart", JSON.stringify(cartItems))
  console.warn(itemId)
}

const addItemToCart = (itemId) => {
  cartItems.push(items.find(element => element.id === itemId))
  localStorage.setItem("cart", JSON.stringify(cartItems))
  console.warn(itemId)
}

const items = [
  {
    id: 1,
    size: .5,
    title: 'snow honwy',
    thumbnail: 'https://i.guim.co.uk/img/media/c5d9219936bd232bc5f57e5c6d107fc18bf6037d/0_224_6720_4032/master/6720.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f647b30c950ccd7119c25a20391abb17',
    price: 19.78,
    type: 'dev'
  },
  {
    id: 2,
    size: .5,
    title: 'snow honwy',
    thumbnail: 'https://i.guim.co.uk/img/media/c5d9219936bd232bc5f57e5c6d107fc18bf6037d/0_224_6720_4032/master/6720.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f647b30c950ccd7119c25a20391abb17',
    price: 19.78,
    type: 'des'
  },
  {
    id: 3,
    size: .5,
    title: 'snow honwy',
    thumbnail: 'https://i.guim.co.uk/img/media/c5d9219936bd232bc5f57e5c6d107fc18bf6037d/0_224_6720_4032/master/6720.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f647b30c950ccd7119c25a20391abb17',
    price: 19.78,
    type: 'gra'
  },
  {
    id: 4,
    size: .5,
    title: 'snow honwy',
    thumbnail: 'https://i.guim.co.uk/img/media/c5d9219936bd232bc5f57e5c6d107fc18bf6037d/0_224_6720_4032/master/6720.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f647b30c950ccd7119c25a20391abb17',
    price: 19.78,
    type: 'tsh'
  },
  {
    id: 5,
    size: .5,
    title: 'snow honwy',
    thumbnail: 'https://i.guim.co.uk/img/media/c5d9219936bd232bc5f57e5c6d107fc18bf6037d/0_224_6720_4032/master/6720.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f647b30c950ccd7119c25a20391abb17',
    price: 19.78,
    type: 'dev'
  },
  {
    id: 6,
    size: .5,
    title: 'snow honwy',
    thumbnail: 'https://i.guim.co.uk/img/media/c5d9219936bd232bc5f57e5c6d107fc18bf6037d/0_224_6720_4032/master/6720.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f647b30c950ccd7119c25a20391abb17',
    price: 19.78,
    type: 'gra'
  },
]

const bestSellers = [
  {
    id: 7,
    size: .5,
    title: '.01 White Honey',
    thumbnail: 'https://i.guim.co.uk/img/media/c5d9219936bd232bc5f57e5c6d107fc18bf6037d/0_224_6720_4032/master/6720.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f647b30c950ccd7119c25a20391abb17',
    price: 19.78
  },
  {
    id: 8,
    size: .5,
    title: 'snow honwy',
    thumbnail: 'https://i.guim.co.uk/img/media/c5d9219936bd232bc5f57e5c6d107fc18bf6037d/0_224_6720_4032/master/6720.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f647b30c950ccd7119c25a20391abb17',
    price: 19.78
  },
  {
    id: 9,
    size: .5,
    title: 'snow honwy',
    thumbnail: 'https://i.guim.co.uk/img/media/c5d9219936bd232bc5f57e5c6d107fc18bf6037d/0_224_6720_4032/master/6720.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f647b30c950ccd7119c25a20391abb17',
    price: 19.78
  },
  {
    id: 10,
    size: .5,
    title: 'snow honwy',
    thumbnail: 'https://i.guim.co.uk/img/media/c5d9219936bd232bc5f57e5c6d107fc18bf6037d/0_224_6720_4032/master/6720.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f647b30c950ccd7119c25a20391abb17',
    price: 19.78
  },
  {
    id: 11,
    size: .5,
    title: 'snow honwy',
    thumbnail: 'https://i.guim.co.uk/img/media/c5d9219936bd232bc5f57e5c6d107fc18bf6037d/0_224_6720_4032/master/6720.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f647b30c950ccd7119c25a20391abb17',
    price: 19.78
  },
  {
    id: 12,
    size: .5,
    title: 'snow honwy',
    thumbnail: 'https://i.guim.co.uk/img/media/c5d9219936bd232bc5f57e5c6d107fc18bf6037d/0_224_6720_4032/master/6720.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f647b30c950ccd7119c25a20391abb17',
    price: 19.78
  },
]
let bestSellersHtml = ''
bestSellers.map(item => bestSellersHtml += (`<div class="item author-item"><div class="member-thumb"> <img src="${item.thumbnail}" alt=""></div><h4>${item.title}</h4><span>${item.price} $</span> <div href="#" onclick="addBestSellersToCart(${item.id})"  class="main-stroked-button">Add to cart</div></div>`))
document.getElementById("bestSellers").innerHTML = bestSellersHtml

let shopItemsHtml = ''
items.map(item => shopItemsHtml += (`<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all ${item.type}"><div class="item"><a><img src="${item.thumbnail}" alt=""></a><h6>${item.title}</h6><p>${item.price} $</p><div href="#"  onclick="addItemToCart(${item.id})"  class="main-filled-button">Add to cart</div></div></div>`))
document.getElementById("shopItems").innerHTML = shopItemsHtml

let cartHtml = ''
let cartCheckoutItems = JSON.parse(localStorage.getItem('cart'))
const getCartItems = () => {
  cartHtml = ''
  cartCheckoutItems = JSON.parse(localStorage.getItem('cart'))
  cartCheckoutItems.map(item => cartHtml += (`<li class="list-group-item">${item.title} : ${item.size}kg ${item.price}$</li>`))
  document.getElementById("cartitemscheckout").innerHTML = cartHtml
}

const sendEmail = () => {
  console.warn(document.getElementById("contactName").value)
 
}

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("thecontact").addEventListener("submit", function(e) {
      e.preventDefault() // Cancel the default action
      sendEmail();
  });
})
