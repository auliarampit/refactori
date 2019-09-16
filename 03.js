var resultCart = []
var resultPrice = 0
class Cart {
    addItem(data) {
        if (data.qty === undefined) {
            data.qty = 1
            resultCart.push(data)
        }
    }
    removeItem(data) {
        resultCart.map((item) => {
            if (item.item_id === data.item_id) {
                resultCart.pop(item)
            }
        })
    }
    totalItems() {
        console.log(cart)
    }
}

const cart = new Cart()

// Do some chainings
cart.addItem({ item_id: 1, price: 30000, quantity: 3 })
cart.addItem({ item_id: 2, price: 10000 })               // By default quantity is 1
cart.addItem({ item_id: 3, price: 5000, quantity: 2 })
cart.removeItem({ item_id: 2 })
cart.addItem({ item_id: 4, price: 400, quantity: 6 })
cart.addDiscount('50%')

// cart.totalItems() // 3

// cart.totalQuantity() // 11

// cart.totalPrice() // 51200

// cart.showAll() // Show all items in cart

// cart.checkout() // Store data in a file
