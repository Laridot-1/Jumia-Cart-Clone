import Counter from "./Counter";
import Price from "./Price"

const Item = ({ item, handleAddToCart, handleIncrease, handleDecrease }) => {

  const { name, price, id, img, discount, description, abroad, isFlipped, isOne, quantity } = item

  return (
    <article className="product">
      {discount ? <p className="product__discount">-{discount}%</p> : ""}
      <img className="product__img" src={img ? img : `./img/default.jpg`} />

      <div className="product__body">
        <p className="product__ltn" data-ab={abroad ? true : false}>{abroad && "Shipped from abroad"}</p>
        <p className="product__description">
          {name && description ? `${name} - ${description}` : name ? `${name}` : `${description}`}
        </p>
        <Price price={price} discount={discount} />
        {!isFlipped ? <button className="add" onClick={() => handleAddToCart(id)}>
          add to cart
        </button> :
          <Counter handleIncrease={handleIncrease} handleDecrease={handleDecrease} id={id} isOne={isOne} quantity={quantity} />}
      </div>
    </article>
  );
};

export default Item;
