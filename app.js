const iceCream = [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0
},
{
    name: 'Vanilla',
    price: 1,
    quantity: 0
},
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
}]



const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Cookie Chunks',
    price: .5,
    quantity: 0
}]

function orderVanilla() {
    const Vanilla = iceCream.find(iceCream => iceCream.name == 'Vanilla')
    Vanilla.quantity++
    console.log('ordering Vanilla', Vanilla)
    drawCart()

}

function orderCookieDough() {
    const CookieDough = iceCream.find(iceCream => iceCream.name == 'Cookie Dough')
    CookieDough.quantity++
    console.log('ordering Cookie Dough', CookieDough);

    drawCart()
}

function orderStrawberry() {
    const Strawberry = iceCream.find(iceCream => iceCream.name == 'Strawberry')
    Strawberry.quantity++
    console.log('Ordering Strawberry', Strawberry);

    drawCart()
}
function orderSprinkles() {
    const Sprinkles = toppings.find(topping => topping.name == 'Sprinkles')
    Sprinkles.quantity++
    console.log('Ordering Sprinkles', Sprinkles);

    drawCart()
}
function orderChocolateChips() {
    const ChocolateChips = toppings.find(topping => topping.name == 'Chocolate Chips')
    ChocolateChips.quantity++
    console.log('Ordering Chocolate Chips', ChocolateChips);

    drawCart()
}
function orderCookieChunks() {
    const CookieChunks = toppings.find(topping => topping.name == 'Cookie Chunks')
    CookieChunks.quantity++
    console.log('Ordering Cookie Chunks ', CookieChunks);

    drawCart()
}

function drawCart() {
    let content = ''
    iceCream.forEach(iceCream => {
        if (iceCream.quantity) {
            const totalPrice = (iceCream.price * iceCream.quantity).toFixed(2)
            content += `<p>
            ${iceCream.name} | Qty: ${iceCream.quantity} | Price $${totalPrice}
            </p>`
        }
    })


    toppings.forEach(topping => {
        if (topping.quantity) {
            const totalPrice = (topping.price * topping.quantity).toFixed(2)
            content += `<p>
            ${topping.name} | Qty: ${topping.quantity} | Price $${totalPrice}
            </p>`
        }
    })










    const cartElement = document.getElementById('cart')
    cartElement.innerHTML = content


    let calculatedTotal = calculateTotal()

    const cartTotalElement = document.getElementById('cartTotal')
    cartTotalElement.innerText = calculatedTotal.toFixed(2)

}
function calculateTotal() {
    let cartTotal = 0

    iceCream.forEach(iceCream => {
        const itemTotal = iceCream.quantity * iceCream.price
        cartTotal += itemTotal
    })

    return cartTotal
}


function checkout() {
    const wantsToCheckout = window.confirm('Are you sure about that!')
    if (!wantsToCheckout) {

        return
    }

    iceCream.forEach(iceCream => iceCream.quantity = 0)
    drawCart()
}




