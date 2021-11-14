// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [{
            id: 1,
            name: 'cooking oil',
            price: 10.5,
            type: 'grocery'
        },
        {
            id: 2,
            name: 'Pasta',
            price: 6.25,
            type: 'grocery'
        },
        {
            id: 3,
            name: 'Instant cupcake mixture',
            price: 5,
            type: 'grocery'
        },
        {
            id: 4,
            name: 'All-in-one',
            price: 260,
            type: 'beauty'
        },
        {
            id: 5,
            name: 'Zero Make-up Kit',
            price: 20.5,
            type: 'beauty'
        },
        {
            id: 6,
            name: 'Lip Tints',
            price: 12.75,
            type: 'beauty'
        },
        {
            id: 7,
            name: 'Lawn Dress',
            price: 15,
            type: 'clothes'
        },
        {
            id: 8,
            name: 'Lawn-Chiffon Combo',
            price: 19.99,
            type: 'clothes'
        },
        {
            id: 9,
            name: 'Toddler Frock',
            price: 9.99,
            type: 'clothes'
        }
    ]
    // Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var subtotal = {
    grocery: {
        value: 0,
        discount: 0
    },
    beauty: {
        value: 0,
        discount: 0
    },
    clothes: {
        value: 0,
        discount: 0
    },
};
var total = 0;

// Exercise 1
/*function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    /*for (var i = 0; i < products.length; i++) {
        if (id == products[i].id) {

            cartList.push(products[i]);
            console.log("Añadido al carrito:" + JSON.stringify(products[i]));
            console.log(cartList)
        }
    }
    calculateSubtotals();
    calculateTotal();
    generateCart();
    applyPromotionsCart()
    addToCart();
}*/

// Exercise 2
function cleanCart() {
    cart = [];
    cartList = [];
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
    subtotal.grocery.value = 0;
    subtotal.beauty.value = 0;
    subtotal.clothes.value = 0;
    for (var i = 0; i < cartList.length; i++) {
        if (cartList[i].type == "grocery") {
            subtotal.grocery.value = subtotal.grocery.value + cartList[i].price;
        } else if (cartList[i].type == "beauty") {
            subtotal.beauty.value = subtotal.beauty.value + cartList[i].price;
        } else if (cartList[i].type == "clothes") {

            subtotal.clothes.value = subtotal.clothes.value + cartList[i].price;
        } else {
            console.log("Tipo no encontrado");
        }
    }
    console.log("Subtotal de grocery:" + subtotal.grocery.value);
    console.log("Subtotal de beauty:" + subtotal.beauty.value);
    console.log("Subtotal de clothes:" + subtotal.clothes.value);
}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array
    var totalCarrito = 0;
    for (let i in subtotal) {
        totalCarrito = totalCarrito + subtotal[i].value;
    }
    console.log("Total: " + JSON.stringify(totalCarrito));

}
//funcion creada para buscar en Cart un elemento id  En caso de encontrarlo devolverá la posicion en la qu elo encuntre mas si lo ha encontrado
/*function containsElement(id) {
    var cartContainsElement = false;
    let index = -1;
    for (var j = 0; j < cart.length; j++) {
        if (cart[j].id === id) {
            cartContainsElement = true;
            index = j;
            break;
        }
    }
    return { 'contains': cartContainsElement, 'index': index }
}*/

// Exercise 5
/*
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    cart = [];
    subtotalProduct = 0;
    for (var i = 0; i < cartList.length; i++) {
        let cartContainsElement = containsElement(cartList[i].id);
        if (cartContainsElement['contains']) {
            let quantity = cart[cartContainsElement['index']].quantity;
            cart[cartContainsElement['index']].quantity = quantity + 1;
            cart[cartContainsElement['index']].subtotalProduct += cartList[i].price;
        } else {
            //parse y stringify utilizados para hacer un clone object y que los elementos de cart no compartan dirección de memoria con los elementos de cartList
            let cartToAdd = JSON.parse(JSON.stringify(cartList[i]))
            cartToAdd.quantity = 1;
            cartToAdd.subtotalProduct = cartList[i].price;
            cartToAdd.subtotalWithDiscount = 0;
            cart.push(cartToAdd);
        }
    }
    console.log(cart);
}
*/

// Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id == 1) {
            if (cart[i].quantity > 2) {
                cart[i].price = 10;
                cart[i].subtotalWithDiscount = cart[i].quantity * cart[i].price;
            } else {
                cart[i].price = 10.5;
            }
        }
        if (cart[i].id == 3) {
            if (cart[i].quantity > 9) {
                cart[i].price = (cart[i].price * 0.66666666666);
                cart[i].subtotalWithDiscount = cart[i].quantity * cart[i].price
            } else {
                cart[i].price = 5;
            }
        }
    }
}

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    subtotalProduct = 0;
    for (var i = 0; i < products.length; i++) {
        if (id == products[i].id) {
            if (cart.includes(products[i])) {
                let quantity = products[i].quantity;
                products[i]['quantity'] = quantity + 1
                products[i]['subtotalProduct'] += products[i].price
            } else {
                products[i]['quantity'] = 1
                products[i]['subtotalProduct'] = products[i].price;
                products[i]['subtotalWithDiscount'] = 0;
                cart.push(products[i])
            }
            console.log("Añadido al carrito:" + JSON.stringify(products[i]));
            console.log(cart)
            cartList.push(products[i]);
            console.log(cartList)
        }
    }
    calculateSubtotals();
    calculateTotal();
    applyPromotionsCart()



}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    //buscamos el elemento del carrito por id
    for (i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
            let quantity = cart[i].quantity;
            if (quantity > 1) {
                cart[i].quantity = quantity - 1
            } else {
                cart.splice(i, 1);
            }

            break;
        }
    }

    applyPromotionsCart()
    printCart()

}

// Exercise 10
function printCart() {



    let htmlCart = "<ul>";

    for (i = 0; i < cart.length; i++) {
        temp = "<li>" + cart[i].name +
            ("(") + cart[i].quantity + (" unidades) --> ") + cart[i].price * cart[i].quantity + "€" +
            '<button onclick="removeFromCart(' +
            cart[i].id + ')">X</button></li>'
        htmlCart += temp;
    }

    htmlCart += "</ul>";
    document.getElementById('cart-modal').innerHTML = htmlCart;



}