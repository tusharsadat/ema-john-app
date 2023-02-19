import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, pd) => total + pd.price, 0);
  let shipingCost = 0;
  if (total > 35) {
    shipingCost = 0;
  } else if (total > 15) {
    shipingCost = 4.99;
  } else if (total > 0) {
    shipingCost = 12.5;
  }
  const vat = total / 10;
  const grandTotal = total + shipingCost + vat;
  const formateNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };
  return (
    <div>
      <h3>Order summary</h3>
      <h4>Items Ordered: {cart.length}</h4>
      <p>Product Price: {formateNumber(total)}</p>
      <p>Shiping Cost: {formateNumber(shipingCost)}</p>
      <p>Tax + VAT: {formateNumber(vat)}</p>
      <p>
        <strong>Total Price: {formateNumber(grandTotal)}</strong>
      </p>
    </div>
  );
};

export default Cart;
