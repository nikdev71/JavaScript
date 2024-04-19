import React from 'react'
import { useProducts } from '../context/ProductContext'

function ProductManagment() {
    const {products, addProduct} = useProducts();

    const hadleAddProduct = ()=>{
        const newProduct ={
            title: "ps",
            price: 456,
            id: products.length +1
        } 
        addProduct(newProduct);
    }
    return (
        <>
        <h2>Add Product</h2>
        <button onClick={hadleAddProduct}>Add</button>
        </>
    )
}

export default ProductManagment
