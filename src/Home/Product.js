import React from "react";

function Product({ title, price, currency = "$", rating = 0, imageUrl }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>{currency}</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {[...Array(rating)].map((r) => (
            <p>⭐</p>
          ))}
        </div>
      </div>
      <img className="product__image" src={imageUrl} alt="prod" />
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
