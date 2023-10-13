const Price = ({ price, discount }) => {
  return (
    <p className="product__prices">
      <span className="curr">${Math.ceil(price - (price * (discount / 100)))}</span>
      {discount ? (
        <span className="old">
          <s>${price}</s>
        </span>
      ) : (
        ""
      )}
    </p>
  )
}

export default Price
