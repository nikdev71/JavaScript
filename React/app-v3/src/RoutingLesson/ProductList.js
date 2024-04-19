import React from 'react'
import ProductItem from './ProductItem'
import { useProducts } from '../context/ProductContext'
import ProductManagment from './ProductManagment';

function ProductList() {
  const {products} = useProducts();
  return (
    <>
      <h1>ProductList</h1>
      <ProductManagment/>
        <div className="row">
            {products.map(item => <ProductItem key={item.id} product={item}/>)}
        </div>
    </>
  )
}


export default ProductList




