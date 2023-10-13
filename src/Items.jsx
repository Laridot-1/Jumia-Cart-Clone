import Item from "./Item";

const Items = ({ items, handleAddToCart, handleIncrease, handleDecrease }) => {
  return (
    <section className="products">
      {items.map((item) => {
        if (item.discount === undefined) {
          item.discount = 0
        }
        if (item.isFlipped === undefined) {
          item.isFlipped = false
        }
        if (item.quantity === undefined) {
          item.quantity = 1
        }
        if (item.isOne === undefined) {
          item.isOne = true
        }
        return <Item key={item.id} item={item} handleAddToCart={handleAddToCart} handleIncrease={handleIncrease} handleDecrease={handleDecrease} />;
      })}
    </section>
  );
};

export default Items;
