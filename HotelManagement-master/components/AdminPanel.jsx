import React, { useState, useEffect } from 'react';

const AdminPanel = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    
    setOrders(allOrders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    setUsers(allUsers);
  };

  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  const getTotalRevenue = () => {
    return orders.reduce((total, order) => total + order.total, 0);
  };

  const getOrdersByStatus = (status) => {
    return orders.filter(order => order.status === status).length;
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

  const renderDashboard = () => (
    <div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '2rem', 
        marginBottom: '3rem' 
      }}>
        <div className="order-card">
          <h3 style={{ color: '#ff9f43', fontSize: '2rem', marginBottom: '0.5rem' }}>
            ₹{getTotalRevenue()}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>Total Revenue</p>
        </div>
        
        <div className="order-card">
          <h3 style={{ color: '#28a745', fontSize: '2rem', marginBottom: '0.5rem' }}>
            {orders.length}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>Total Orders</p>
        </div>
        
        <div className="order-card">
          <h3 style={{ color: '#007bff', fontSize: '2rem', marginBottom: '0.5rem' }}>
            {getOrdersByStatus('pending')}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>Pending Orders</p>
        </div>
        
        <div className="order-card">
          <h3 style={{ color: '#ffc107', fontSize: '2rem', marginBottom: '0.5rem' }}>
            {users.length}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>Total Users</p>
        </div>
      </div>

      <h3 className="section-title">Recent Orders</h3>
      <div className="orders-grid">
        {orders.slice(0, 5).map(order => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <div className="order-id">Order #{order.id}</div>
              <select
                value={order.status}
                onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '5px',
                  padding: '0.5rem'
                }}
              >
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="preparing">Preparing</option>
                <option value="out-for-delivery">Out for Delivery</option>
                <option value="delivered">Delivered</option>
              </select>
            </div>
            
            <div className="order-items">
              Customer: {order.customerInfo?.fullName || 'Unknown'}
              <br />
              Items: {order.items.length}
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
              <div className="order-total">₹{order.total}</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                {formatDate(order.createdAt)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderOrders = () => (
    <div>
      <h3 className="section-title">All Orders</h3>
      <div className="orders-grid">
        {orders.map(order => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <div className="order-id">Order #{order.id}</div>
              <select
                value={order.status}
                onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '5px',
                  padding: '0.5rem'
                }}
              >
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="preparing">Preparing</option>
                <option value="out-for-delivery">Out for Delivery</option>
                <option value="delivered">Delivered</option>
              </select>
            </div>
            
            <div className="order-items">
              <strong>Customer:</strong> {order.customerInfo?.fullName || 'Unknown'}
              <br />
              <strong>Items:</strong>
              {order.items.map(item => (
                <div key={item.id} style={{ marginLeft: '1rem' }}>
                  {item.name} x {item.quantity} - ₹{item.price * item.quantity}
                </div>
              ))}
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
              <div className="order-total">₹{order.total}</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                {formatDate(order.createdAt)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderUsers = () => (
    <div>
      <h3 className="section-title">Registered Users</h3>
      <div className="orders-grid">
        {users.map(user => (
          <div key={user.id} className="order-card">
            <div className="order-header">
              <div className="order-id">{user.fullName}</div>
            </div>
            
            <div className="order-items">
              <strong>Email:</strong> {user.email}
              <br />
              <strong>Phone:</strong> {user.phone || 'Not provided'}
              <br />
              <strong>Joined:</strong> {formatDate(user.createdAt)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1 className="admin-title">Admin Panel</h1>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ color: 'rgba(255,255,255,0.8)' }}>Welcome, {user.fullName}</span>
          <button className="btn btn-secondary" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="admin-content">
        <div className="admin-tabs">
          <button
            className={`admin-tab ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={`admin-tab ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            Orders
          </button>
          <button
            className={`admin-tab ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            Users
          </button>
        </div>

        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'orders' && renderOrders()}
        {activeTab === 'users' && renderUsers()}
      </div>
    </div>
  );
};

export default AdminPanel;