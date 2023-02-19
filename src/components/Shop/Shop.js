import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData/products.JSON";
import Cart from "../Cart/Cart";

import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  useEffect(() => {
    fetch(fakeData)
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 10)));
  }, []);

  return (
    <div className="product-container">
      <div className="product-section">
        {products.map((product) => (
          <Product
            handleAddProduct={handleAddProduct}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="cart-section">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
