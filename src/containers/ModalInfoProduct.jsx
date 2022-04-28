import React from 'react'
import Button from '../components/Button'
import ProductInfoPrice from '../components/ProductInfoPrice'
import '../style/ModalInfoProduct.scss'

const ModalInfoProduct = () => {

  let productInfo = `With its practical position, this bike also fulfills a decorative
  function, add your hall or workspace.`

  return (
    <aside className="product-detail">
      <div className="product-detail-close">
        <img src="./icons/icon_close.png" alt="close" />
      </div>
      <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="bike"
      />
      <div className="product-info">
        <ProductInfoPrice info={productInfo} />
        <Button />
      </div>
    </aside>
  );
}

export default ModalInfoProduct