import React from 'react'

const ProductInfoPrice = (props) => {

  const {productInfo} = props

  return (
    <>
        <div>
          <p>$120,00</p>
          <p>Bike</p>
          {info && 
            productInfo
          }
        </div>
    </>
  )
}

export default ProductInfoPrice