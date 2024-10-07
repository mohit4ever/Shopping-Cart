import React, { useContext} from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import Items from "./Items";
import  {ContextCart}  from './Cart';

function CartContext() {
    const {item,clearCart,totalItem,totalAmount} = useContext(ContextCart);

    if (item.length === 0) {
        return(
            <>
             <header>
        <div className="continue-shopping">
        <img src="./images/arrow.png" alt="arrow" className="arrow-icon"/>
        <h3>Continue Shopping</h3>
    </div>

    <div className="cart-icon">
        <img src="./images/cart.png" alt="cart"  />
        <p>{totalItem}</p>
    </div>
</header>

<section className="main-cart-section">
    <h1>Shopping Cart</h1>
    <p className="total-items">You Have <span className="total-items-count">{totalItem}</span> in Shopping Cart</p>
</section>
            </>
        )
    }




  return (
    <>
     <header>
        <div className="continue-shopping">
        <img src="./images/arrow.png" alt="arrow" className="arrow-icon"/>
        <h3>Continue Shopping</h3>
    </div>

    <div className="cart-icon">
        <img src="./images/cart.png" alt="cart"  />
        <p>{totalItem}</p>
    </div>
</header>

<section className="main-cart-section">
    <h1>Shopping Cart</h1>
    <p className="total-items">You Have <span className="total-items-count">{totalItem}</span> in Shopping Cart</p>

    <div className="cart-items">
        <div className="cart-items-container">
        <Scrollbars>
            {
                item.map((curItem)=>{
                    return <Items key={curItem.id}{... curItem}/>
                })
            }
            
        </Scrollbars>
        </div>
    </div>
    
    <div className="card-total">
        <h3>Cart Total:<span>{totalAmount}₹</span></h3>
        <button>CheckOut</button>
        <button className='clear-cart' onClick={clearCart}>Clear Cart</button>
    </div>
</section>
    
    
    </>


  )
}

export default CartContext;
