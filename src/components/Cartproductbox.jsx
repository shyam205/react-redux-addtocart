import React from 'react'
import { useSelector } from 'react-redux'
function Cartproductbox() {
    const cartproducts = useSelector(state => state.cartreducer.cartproducts);
    console.log('cartproducts ',cartproducts)
    const handleCancelcartbox = () => {
        
    }
  return (
    <div className='cartproducts_box'>
        <div className='cartproducts_box_wrapper'>
            <div className='remove_cartbox_icon'>
                    <svg onClick={handleCancelcartbox} xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 512 512" version="1.1">
                        <title>cancel</title>
                        <g id="Page-1" stroke="none" srokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="work-case" fill="#000000" transform="translate(91.520000, 91.520000)">
                                <polygon id="Close" points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48">

                    </polygon>
                            </g>
                        </g>
                    </svg>
            </div>
            <h2>Product added to cart</h2>
            <div className='added_cart_product'>
                bsbsjkbjkshkj
            </div>
        </div>
    </div>
  )
}

export default Cartproductbox