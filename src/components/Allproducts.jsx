import React, { useState,useCallback, useEffect } from 'react'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux';
import { setproducts } from '../redux/actions/productsAction';
import { Link } from 'react-router-dom';


function Allproducts() {
    const products = useSelector(state => state.allreducers.products)
     const dispatch = useDispatch()
    // console.log("products ",products[0])
    const getAllProduct = async() => {
      const res = await axios.get('https://fakestoreapi.com/products')
    //   console.log("res ",res)
      dispatch(setproducts(res.data))
    }

    const AlldataCallback = useCallback(() => {
        getAllProduct()
    },[])
    useEffect(() => {
       AlldataCallback()
    },[])
  return (
    <div className='products_wrapper'>
        <div className='products_container'>
           {
            products && products[0]?.length >0 && products[0]?.map((product,id) => (
                <Link to={`/${product.id}`} key={id}>
                <div className='allproduct_container'>
                    <div>
                    <div className='productimage'><img src={`${product.image}`} alt={`${product.title}`} /></div>
                    <div className='product_price'><p>${product.price}</p></div>
                    <span className='product_title'>{product.title}</span>
                    {/* <div className='add_to_cart_box'><Link to='' className='add_to_cat_product'>Add to cart</Link></div> */}
                    </div>
                </div>
                </Link>
            ))
           }
        </div>
    </div>
  )
}

export default Allproducts