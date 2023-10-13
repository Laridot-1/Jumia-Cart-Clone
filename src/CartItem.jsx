import Counter from "./Counter"
import Price from "./Price"

const CartItem = ({ item, handleIncrease, handleDecrease, handleRemove }) => {
  const { id, img, name, price, abroad, discount, description, isOne, quantity } = item

  return (
    <article className="cartItem">
      <picture className="cartItem__img">
        {discount ? <p className="product__discount">-{discount}%</p> : ""}
        <img src={img ? img : "./img/default.jpg"} />
      </picture>
      <p className="cartItem__description">{name} - {description}</p>
      <Price price={price} discount={discount} />
      <p className="cartItem__ltn product__ltn" data-ab={abroad ? true : false}>{abroad && "Shipped from abroad"}</p>
      <button className="remove" onClick={() => handleRemove(id)}><i className="fa-solid fa-trash"></i><span>Remove</span></button>
      <Counter id={id} quantity={quantity} isOne={isOne} handleIncrease={handleIncrease} handleDecrease={handleDecrease} />
    </article>
  )
}

export default CartItem
