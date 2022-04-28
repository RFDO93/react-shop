import React from 'react'
import ProductInfoPrice from './ProductInfoPrice';

const ProductCard = () => {
  return (
    <div className="product-card">
      <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt
      />
      <div className="product-info">
        <ProductInfoPrice />
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt />
        </figure>
      </div>
    </div>
  );
}

export default ProductCard