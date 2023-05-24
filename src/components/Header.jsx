import React, {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { incrementcartitem,decrementcartitem, removecartitem, userlogout } from '../redux/actions/productsAction';

function Header() {
    const cartproducts = useSelector(state => state.cartreducer.cartproducts)
    const user = useSelector(state => state.userreducer.user[0])
     //console.log("cartproducts ",cartproducts)

      const dispatch = useDispatch();
    const handleShowCart = () => {
        var haedercartbox = document.querySelector('.header_cart_box');
        haedercartbox.classList.remove("hide_cartbox")
    }
    const handleCancelcartbox = () => {
        var haedercartbox = document.querySelector('.header_cart_box');
        haedercartbox.classList.add("hide_cartbox") 
    }

    var moneyarr = cartproducts && cartproducts.length > 0 && cartproducts.map(x => x.TotalPrice)
    var Totalprice = moneyarr && moneyarr.reduce((a,c) => a+c)
    //console.log("Totalpricecheck",Totalprice)

    const handleAddItemoncart = (e,product) => {
        e.preventDefault();
        dispatch(incrementcartitem(product))
    }

    const handleRemoveItemoncart = (e,product) => {
        e.preventDefault();
        dispatch(decrementcartitem(product))
    }

    const handleDeleteItem = (product) => {
        dispatch(removecartitem(product))
    }

    const handleLogOut = (payload) => {
        dispatch(userlogout(payload))
    }

  return (
    <div className='header'>
    <div className='header_wrapper'>
        <div className='logo'>
           <p>
            <Link to='/'>SMSHOP</Link>
            </p>
        </div>
        <div className='cart'>
        <div className='auth_button'>
            {user && user?.isAuthenticate == false && user?.isloggedin == false  &&
            <>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
            </>
           }
           {user && user?.isAuthenticate == true && user?.isloggedin == true  &&
            <>
             <span className='logout_button' onClick={() => handleLogOut("logout")}>Logout</span>
            </>
           }
        </div>
        {user?.isAuthenticate == true && user?.isloggedin == true  && (
        <div className='cart_icon_number'>
        <svg onClick={handleShowCart} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffffff" className="bi bi-cart4" viewBox="0 0 16 16"> <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/> </svg>
        <span className='cartproduct_number'>{cartproducts && cartproducts.length}</span>
        </div>
        )}

        {user?.isAuthenticate == false && user?.isloggedin == false  && (
        <div className='cart_icon_number'>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffffff" className="bi bi-cart4" viewBox="0 0 16 16"> <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/> </svg>
        <span className='cartproduct_number'>0</span>
        </div>
          )}
        </div>
    </div>
    <div className='header_cart_box hide_cartbox'>
    <div className='cartproducts_box'>
        <div className='cartproducts_box_wrapper'>
            <div className='remove_cartbox_icon'>
                    <svg onClick={handleCancelcartbox} className='cancel_icon' xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 512 512" version="1.1">
                        <title>cancel</title>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="work-case" fill="#000000" transform="translate(91.520000, 91.520000)">
                                <polygon id="Close" points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48">

                    </polygon>
                            </g>
                        </g>
                    </svg>
            </div>
            <h2>Product added to cart</h2>
            <div className='added_cart_product'>
                {
                    (!!cartproducts === false) || (cartproducts.length === 0) && (
                        <div className='no_item_cart'>
                            <p>No item is added on cart</p>
                        </div>
                    )
                }
            </div>

            <div className='cartproduct_wrapper'>
                {
                    !!cartproducts === true && cartproducts.length >0 && cartproducts.map((product,id) => (
                        <div className='cartproduct_box' key={id}>
                            <div>
                                <p className='cartproduct_title'>{product.title}</p>
                                <div className='remove_cart_item'><p onClick={() => handleDeleteItem(product)}>Remove from cart</p></div>
                                <div className='cartproduct_image'>
                                <img src={product.image} alt={product.title} />
                                </div>
                                <div className='product_quantity_price'>
                                <div className='product_quantity'><button onClick={(e) => handleRemoveItemoncart(e,product)} disabled={product.cartQuantity > 1 ? false : true} className={`${product.cartQuantity > 1 ? 'pointer_show_buttton' : 'pointer_hide_button'}`}>-</button><span>{product.cartQuantity}</span><button onClick={(e) => handleAddItemoncart(e,product)} style={{ cursor:'pointer'}}>+</button></div>
                                <div><p className='product_cart_price'>Price : ${product.TotalPrice}</p></div>
                                </div>
                            </div>
                        </div>
                    ))
                }

                {
                    !!cartproducts === true && cartproducts.length >0 && (
                        <div className='amount_pay'>
                            <div><p>Total amount : $<span className='total_amount_cart'>{Totalprice && Totalprice.toFixed(2)}  </span></p></div>
                            <div><span className='add_to_cart_button_pay'>Pay now</span></div>
                        </div>
                        )
                }
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Header;