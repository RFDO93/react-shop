import React from 'react'

const ItemOrder = (props) => {

  let {dateOrder,numArticle,totalOrder} = props

  return (
    <div className="order">
      <p>
        <span>{dateOrder}</span>
        <span>{`${numArticle} articles`}</span>
      </p>
      <p>{`$ ${totalOrder}`}</p>
      <img src="./icons/flechita.svg" alt="arrow" />
    </div>
  )
}

export default ItemOrder