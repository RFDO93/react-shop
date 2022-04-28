import React from 'react'
import Button from '../components/Button'
import ItemShoppingCart from '../components/ItemShoppingCart'
import TotalPrice from '../components/TotalPrice'
import '../style/ModalShoppingCart.scss'

const ModalShoppingCart = () => {
  return (
    <aside className="product-detail">
      <div className="title-container">
        <img src="./icons/flechita.svg" alt="arrow" />
        <p className="title">Shopping cart</p>
      </div>
      <div className="my-order-content">
        <ItemShoppingCart />
        <TotalPrice />
        <Button
          text = {'Checkout'}
        />
      </div>
    </aside>

  )
}

export default ModalShoppingCart