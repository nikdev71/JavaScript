import React from 'react'
import { Link } from 'react-router-dom'

function ProductItem(props) {
  const {id,price,title} = props.product
  return (
    <Link to={`product/${id}`}>
      <div className="item">
      <h1>{title}</h1>
      <p>{price}</p>
      </div>
    </Link>
  )
}

export default ProductItem
