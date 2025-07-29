import React, { useState, useEffect } from 'react';

const TrackingModal = ({ user, onClose }) => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    // Load user orders
    const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    const userOrders = allOrders.filter(order => order.userId === user.id);
    setOrders(userOrders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
  }, [user.id]);

  const getOrderStatus = (order) => {
    const now = new Date();
    const orderTime = new Date(order.createdAt);
    const minutesPassed = (now - orderTime) / (1000 * 60);

    if (minutesPassed < 5) return 'pending';
    if (minutesPassed < 15) return 'confirmed';
    if (minutesPassed < 30) return 'preparing';
    if (minutesPassed < 45) return 'out-for-delivery';
    return 'delivered';
  };

  const getTrackingSteps = (status) => {
    const steps = [
      { key: 'pending', label: 'Order Placed', icon: '📝' },
      { key: 'confirmed', label: 'Confirmed', icon: '✅' },
      { key: 'preparing', label: 'Preparing', icon: '👨‍🍳' },
      { key: 'out-for-delivery', label: 'Out for Delivery', icon: '🚚' },
      { key: 'delivered', label: 'Delivered', icon: '🎉' }
    ];

    const currentIndex = steps.findIndex(step => step.key === status);
    
    return steps.map((step, index) => ({
      ...step,
      completed: index < currentIndex,
      active: index === currentIndex
    }));
  };

  const getEstimatedDeliveryTime = (order) => {
    const status = getOrderStatus(order);
    const orderTime = new Date(order.createdAt);
    
    switch (status) {
      case 'pending':
      case 'confirmed':
        return new Date(orderTime.getTime() + 45 * 60 * 1000);
      case 'preparing':
        return new Date(orderTime.getTime() + 35 * 60 * 1000);
      case 'out-for-delivery':
        return new Date(orderTime.getTime() + 15 * 60 * 1000);
      default:
        return new Date(orderTime.getTime() + 45 * 60 * 1000);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (selectedOrder) {
    const status = getOrderStatus(selectedOrder);
    const steps = getTrackingSteps(status);
    const estimatedTime = getEstimatedDeliveryTime(selectedOrder);

    return (
      <div className="modal active">
        <div className="modal-content" style={{ maxWidth: '600px', width: '90%' }}>
          <button className="close-modal" onClick={onClose}>×</button>
          
          <div className="tracking-container">
            <div className="tracking-header">
              <h2 className="tracking-title">Track Your Order</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                Order #{selectedOrder.id} • Placed on {formatDate(selectedOrder.createdAt)}
              </p>
            </div>

            <div className="order-tracking">
              <div className="tracking-steps">
                {steps.map((step, index) => (
                  <div key={step.key} className="tracking-step">
                    <div className={`step-icon ${step.completed ? 'completed' : step.active ? 'active' : ''}`}>
                      {step.icon}
                    </div>
                    <div className={`step-label ${step.active ? 'active' : ''}`}>
                      {step.label}
                    </div>
                  </div>
                ))}
              </div>

              {status !== 'delivered' && (
                <div className="estimated-time">
                  Estimated delivery: {formatTime(estimatedTime)}
                </div>
              )}

              <div style={{ marginTop: '2rem' }}>
                <h3 className="section-title">Order Items</h3>
                {selectedOrder.items.map(item => (
                  <div key={item.id} style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
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
                  padding: '1rem 0',
                  fontSize: '1.2rem',
                  fontWeight: 'bold'
                }}>
                  <span style={{ color: 'white' }}>Total</span>
                  <span style={{ color: '#ff9f43' }}>₹{selectedOrder.total}</span>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button 
                  className="btn btn-secondary"
                  onClick={() => setSelectedOrder(null)}
                >
                  Back to Orders
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal active">
      <div className="modal-content" style={{ maxWidth: '600px', width: '90%' }}>
        <button className="close-modal" onClick={onClose}>×</button>
        
        <h2 className="detail-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Your Orders
        </h2>

        {orders.length === 0 ? (
          <div className="empty-cart">
            <p>No orders found</p>
            <p>Place your first order to see tracking information!</p>
          </div>
        ) : (
          <div className="orders-grid">
            {orders.map(order => {
              const status = getOrderStatus(order);
              return (
                <div key={order.id} className="order-card">
                  <div className="order-header">
                    <div className="order-id">Order #{order.id}</div>
                    <div className={`order-status status-${status}`}>
                      {status.replace('-', ' ').toUpperCase()}
                    </div>
                  </div>
                  
                  <div className="order-items">
                    {order.items.slice(0, 2).map(item => (
                      <div key={item.id}>
                        {item.name} x {item.quantity}
                      </div>
                    ))}
                    {order.items.length > 2 && (
                      <div>+ {order.items.length - 2} more items</div>
                    )}
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                    <div className="order-total">₹{order.total}</div>
                    <button 
                      className="filter-btn"
                      onClick={() => setSelectedOrder(order)}
                    >
                      Track Order
                    </button>
                  </div>
                  
                  <div style={{ marginTop: '0.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                    {formatDate(order.createdAt)}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackingModal;