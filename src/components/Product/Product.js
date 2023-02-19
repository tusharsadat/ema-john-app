import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { name, img, seller, price, stock } = props.product;
  return (
    <div className="single-product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <br />
        <p>
          <small>{seller}</small>
        </p>
        <p>${price}</p>
        <p>
          <small>Only {stock} left in stock - order now</small>
        </p>
        <button
          className="cart-btn"
          onClick={() => props.handleAddProduct(props.product)}
        >
          <FontAwesomeIcon icon={faCartShopping} />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
