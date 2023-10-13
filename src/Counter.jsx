function Counter({ quantity, isOne, id, handleIncrease, handleDecrease }) {

  return (
    <div className="counter">
      <button className="btn decrease" disabled={isOne ? true : false} onClick={() => handleDecrease(id)}>
        <span><i className="fa-solid fa-minus"></i></span>
      </button>
      <p className="quantity">{quantity}</p>
      <button className="btn increase" onClick={() => handleIncrease(id)}>
        <span><i className="fa-solid fa-plus"></i></span>
      </button>
    </div>
  )
}

export default Counter
