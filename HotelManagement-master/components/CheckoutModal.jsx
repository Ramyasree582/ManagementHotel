import React, { useState } from 'react';

const CheckoutModal = ({ cart, totalAmount, user, onClose, onSuccess }) => {
  const [step, setStep] = useState(1); // 1: Confirm Order, 2: Payment, 3: Success
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });
  const [loading, setLoading] = useState(false);

  const handleConfirmOrder = () => {
    setOrderConfirmed(true);
    setStep(2);
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoading(false);
    setStep(3);
    
    // Call success callback after a short delay
    setTimeout(() => {
      onSuccess({
        paymentMethod,
        paymentData: paymentMethod === 'card' ? paymentData : null,
        timestamp: new Date().toISOString()
      });
    }, 2000);
  };

  const renderStep1 = () => (
    <div>
      <h2 className="detail-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Confirm Your Order
      </h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3 className="section-title">Order Summary</h3>
        {cart.map(item => (
          <div key={item.id} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '0.5rem 0',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}>
            <span style={{ color: 'white' }}>{item.name} x {item.quantity}</span>
            <span style={{ color: '#ff9f43' }}>₹{item.price * item.quantity}</span>
          </div>
        ))}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '1rem 0',
          fontSize: '1.2rem',
          fontWeight: 'bold'
        }}>
          <span style={{ color: 'white' }}>Total</span>
          <span style={{ color: '#ff9f43' }}>₹{totalAmount}</span>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
          Are you sure you want to confirm this order?
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="order-btn" onClick={handleConfirmOrder}>
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div>
      <h2 className="detail-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Payment Details
      </h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <div className="form-group">
          <label className="form-label">Payment Method</label>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              type="button"
              className={`filter-btn ${paymentMethod === 'cod' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('cod')}
            >
              💵 Cash on Delivery
            </button>
            <button
              type="button"
              className={`filter-btn ${paymentMethod === 'card' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('card')}
            >
              💳 Card
            </button>
            <button
              type="button"
              className={`filter-btn ${paymentMethod === 'upi' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('upi')}
            >
              📱 UPI
            </button>
          </div>
        </div>

        {paymentMethod === 'cod' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              background: 'rgba(40, 167, 69, 0.1)',
              border: '1px solid rgba(40, 167, 69, 0.3)',
              borderRadius: '15px',
              padding: '2rem',
              margin: '2rem 0'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💵</div>
              <h3 style={{ color: '#28a745', marginBottom: '1rem' }}>Cash on Delivery</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>
                Pay ₹{totalAmount} when your order arrives at your doorstep.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                Please keep exact change ready for a smooth delivery experience.
              </p>
            </div>
            <button 
              className="order-btn"
              onClick={handlePaymentSubmit}
              disabled={loading}
            >
              {loading ? 'Confirming Order...' : 'Confirm Order'}
            </button>
          </div>
        )}

        {paymentMethod === 'card' && (
          <form onSubmit={handlePaymentSubmit}>
            <div className="form-group">
              <label className="form-label">Cardholder Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter cardholder name"
                value={paymentData.cardholderName}
                onChange={(e) => setPaymentData({...paymentData, cardholderName: e.target.value})}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Card Number</label>
              <input
                type="text"
                className="form-input"
                placeholder="1234 5678 9012 3456"
                value={paymentData.cardNumber}
                onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
                required
              />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Expiry Date</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="MM/YY"
                  value={paymentData.expiryDate}
                  onChange={(e) => setPaymentData({...paymentData, expiryDate: e.target.value})}
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">CVV</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="123"
                  value={paymentData.cvv}
                  onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
                  required
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              className="order-btn" 
              style={{ width: '100%', marginTop: '1rem' }}
              disabled={loading}
            >
              {loading ? 'Processing Payment...' : `Pay ₹${totalAmount}`}
            </button>
          </form>
        )}

        {paymentMethod === 'upi' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '200px', 
              height: '200px', 
              background: 'white', 
              margin: '2rem auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              overflow: 'hidden'
            }}>
              <img
                src="https://i.postimg.cc/02rh3mZj/Whats-App-Image-2025-07-29-at-12-42-11-3d3072dd.jpg"
                alt="UPI QR Code"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
              Scan the QR code with your UPI app to pay ₹{totalAmount}
            </p>
            <button 
              className="order-btn"
              onClick={handlePaymentSubmit}
              disabled={loading}
            >
              {loading ? 'Verifying Payment...' : 'I have completed the payment'}
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
      <h2 className="detail-title" style={{ marginBottom: '1rem' }}>
        Thank You!
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', marginBottom: '2rem' }}>
        Your order has been placed successfully!<br />
        We're preparing your delicious meal with love.
      </p>
      
      <div className="success-message" style={{ marginBottom: '2rem' }}>
        🍽️ Your order will be delivered in approximately 30-45 minutes
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button 
          className="order-btn"
          onClick={() => {
            onClose();
            // Show tracking modal after closing
            setTimeout(() => {
              window.dispatchEvent(new CustomEvent('showTracking'));
            }, 500);
          }}
        >
          Track Your Order
        </button>
        <button className="btn btn-secondary" onClick={onClose}>
          Back to Menu
        </button>
      </div>
    </div>
  );

  return (
    <div className="modal active">
      <div className="modal-content" style={{ maxWidth: '600px', width: '90%' }}>
        {step < 3 && <button className="close-modal" onClick={onClose}>×</button>}
        
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </div>
    </div>
  );
};

export default CheckoutModal;