import { useState } from "react"
import CartItems from "./CartItems"
import Items from "./Items"
import data from "./data"

function App() {
  const [items, setItems] = useState(data)
  const [total, setTotal] = useState(0)
  const [length, setLength] = useState(0)

  const calcTotal = () => {
    let newTotal = items.reduce((acc, cur) => {
      if (cur.inCart) {
        let price = cur.price
        let discount = cur.discount
        let quantity = cur.quantity
        let actualPrice = Math.ceil(price - (price * (discount / 100)))
        acc += actualPrice * quantity
      }
      return acc
    }, 0)
    setTotal(newTotal)
  }

  const calcLength = () => {
    let newLength = items.reduce((acc, cur) => {
      if (cur.inCart) {
        let quantity = cur.quantity
        acc += quantity
      }
      return acc
    }, 0)
    setLength(newLength)
  }

  const handleAddToCart = (id) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        item.isFlipped = true
        item.inCart = true
      }
      return item
    })
    setItems(newItems)
    calcTotal()
    calcLength()
  }

  const handleIncrease = (id) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        item.quantity++
        item.isOne = false
      }
      return item
    })
    setItems(newItems)
    calcTotal()
    calcLength()
  }

  const handleDecrease = (id) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        item.quantity--
        if (item.quantity <= 1) {
          item.quantity = 1
          item.isOne = true
        }
      }
      return item
    })
    setItems(newItems)
    calcTotal()
    calcLength()
  }

  const handleRemove = (id) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        item.quantity = 1
        item.quantity = 1
        item.isOne = true
        item.isFlipped = false
        item.inCart = false
      }
      return item
    })
    setItems(newItems)
    calcTotal()
    calcLength()
  }

  const handleCheckout = () => {
    const newItems = items.map(item => {
      if (item.inCart) {
        item.quantity = 1
        item.isOne = true
        item.isFlipped = false
        item.inCart = false
      }
      return item
    })
    setItems(newItems)
    calcTotal()
    calcLength()
    alert("Your order is being reviewed")
  }

  return (
    <div className="container">
      <Items items={items} handleAddToCart={handleAddToCart} handleIncrease={handleIncrease} handleDecrease={handleDecrease} />
      <CartItems items={items} handleIncrease={handleIncrease} handleDecrease={handleDecrease} handleRemove={handleRemove} handleCheckout={handleCheckout} total={total} length={length} />
    </div>
  )
}

export default App
