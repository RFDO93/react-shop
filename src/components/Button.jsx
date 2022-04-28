import React from 'react'

const Button = (props) => {

  let {text,isIconShopping} = props

  return (
    <button className="primary-button add-to-cart-button">
      {isIconShopping && <img src="./icons/bt_add_to_cart.svg" alt="add to cart" />}
      {text}
    </button>
  )
}

export default Button