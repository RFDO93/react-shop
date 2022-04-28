import React from 'react'
import ItemOrder from '../components/ItemOrder'

const MyOrder = () => {
  return (
    <div className="my-order">
      <div className="my-order-container">
        <h1 className="title">My orders</h1>
        <div className="my-order-content">
          <ItemOrder 
            dateOrder={'04.25.2021'}
            numArticle={6}
            totalOrder={'120,00'}
          />
        </div>
      </div>
    </div>

  )
}

export default MyOrder