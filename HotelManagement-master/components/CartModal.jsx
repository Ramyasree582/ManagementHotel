import React from 'react';

const CartModal = ({ cart, onClose, onUpdateQuantity, onRemoveItem, onCheckout, totalAmount }) => {
  if (cart.length === 0) {
    return (
      <div className="modal active">
        <div className="modal-content cart-modal">
          <button className="close-modal" onClick={onClose}>×</button>
          <div className="cart-header">
            <h2 className="cart-title">Your Cart</h2>
          </div>
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <p>Add some delicious items to get started!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal active">
      <div className="modal-content cart-modal">
        <button className="close-modal" onClick={onClose}>×</button>
        
        <div className="cart-header">
          <h2 className="cart-title">Your Cart</h2>
        </div>

        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">₹{item.price}</div>
              </div>
              <div className="cart-item-controls">
                <button 
                  className="quantity-btn"
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button 
                  className="quantity-btn"
                  onClick={() => onRemoveItem(item.id)}
                  style={{ marginLeft: '0.5rem', background: 'rgba(220, 53, 69, 0.2)', color: '#dc3545' }}
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-total">
          <div className="total-amount">Total: ₹{totalAmount}</div>
          <button className="checkout-btn" onClick={onCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;