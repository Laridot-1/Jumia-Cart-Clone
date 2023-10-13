import CartItem from "./CartItem"

const CartItems = ({ items, handleIncrease, handleDecrease, handleRemove, handleCheckout, total, length }) => {
  return (
    <section className="cartItems">
      <div style={{ display: "grid", gap: "0.45rem" }}>
        <h3 style={{ paddingInline: "0.5rem", textTransform: "uppercase", fontSize: "0.85rem", color: "hsl(240, 2.06%, 52.35%)", fontWeight: "500" }}>cart summary</h3>
        <div className="dg">
          <div className="df jcsb aic">
            <p style={{ fontWeight: "500", fontSize: "1rem" }}>Subtotal</p>
            <h4>{total ? `$${total}` : ""}</h4>
          </div>
          <p style={{ color: "hsl(240, 2.06%, 52.35%)" }}>Delivery fees not included yet.</p>
        </div>
      </div>
      <div style={{ display: "grid", gap: "0.5rem", padding: "0.5rem" }}>
        <h3 style={{ color: "hsl(240, 2.06%, 52.35%)", textTransform: "uppercase", fontSize: "0.85rem", fontWeight: "500" }}>cart ({length})</h3>
        {
          items.map(item => {
            if (item.inCart) {
              return <CartItem key={item.id} item={item} handleIncrease={handleIncrease} handleDecrease={handleDecrease} handleRemove={handleRemove} />
            }
          })
        }
      </div>
      {total ?
        <div className="checkout_btns">
          <button className="phone">
            <span><i className="fa-solid fa-phone"></i></span>
          </button>
          <button className="checkout" onClick={handleCheckout}>
            <span>checkout (${total})</span>
          </button>
        </div> : ""
      }
    </section >
  )
}

export default CartItems
