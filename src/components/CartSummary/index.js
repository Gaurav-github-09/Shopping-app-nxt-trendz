// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {prev => {
      const {cartList} = prev

      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <div className="summaryCont">
          <h1 className="headOrder">
            Order Total: <span className="totalAmount">Rs {total}/-</span>
          </h1>
          <p className="length">{cartList.length} Items in cart</p>
          <button className="CheckoutBtn" type="button">
            Proceed to buy
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
