import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import MenuGrid from './MenuGrid.jsx';
import ItemDetailModal from './ItemDetailModal.jsx';
import CartModal from './CartModal.jsx';
import ProfileModal from './ProfileModal.jsx';
import TrackingModal from './TrackingModal.jsx';
import CheckoutModal from './CheckoutModal.jsx';
import Footer from './Footer.jsx';
import { menuData } from '../data/menuData.js';
import Chatbot from './Chatbot.jsx';

const MainApp = ({ user, onLogout }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showItemDetail, setShowItemDetail] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showTracking, setShowTracking] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const filteredItems = menuData.filter(item => {
    const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    showNotification(`${item.name} added to cart!`);
  };

  const updateCartQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      setCart(cart.filter(item => item.id !== itemId));
    } else {
      setCart(cart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowItemDetail(true);
  };

  const handleCheckoutSuccess = (orderData) => {
    // Save order to localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const newOrder = {
      id: Date.now().toString(),
      userId: user.id,
      items: cart,
      total: getTotalAmount(),
      status: 'pending',
      createdAt: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 45 * 60 * 1000).toISOString(), // 45 minutes
      customerInfo: orderData
    };
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    clearCart();
    setShowCheckout(false);
    showNotification('Order placed successfully! 🎉');
  };

  return (
    <div className="main-app">
      <Navbar
        user={user}
        onLogout={onLogout}
        cartItemCount={getTotalItems()}
        onCartClick={() => setShowCart(true)}
        onProfileClick={() => setShowProfile(true)}
        onTrackingClick={() => setShowTracking(true)}
      />

      <div className="menu-container">
        <div className="menu-header">
          <h1 className="menu-title">Our Delicious Menu</h1>
          <p className="menu-subtitle">Authentic South Indian flavors crafted with love</p>
        </div>


      <div className="search-bar" style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', justifyContent: 'center' }}>
        <input
          type="text"
          placeholder="Search menu..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', minWidth: '200px' }}
        />
        <button
          onClick={() => setSearchQuery(searchQuery)}
          style={{ padding: '0.5rem 1rem', borderRadius: '4px', background: '#ff9800', color: '#fff', border: 'none', cursor: 'pointer' }}
        >
          Search
        </button>
      </div>

      <div className="filter-bar">
        {['all', 'breakfast', 'lunch', 'dinner', 'snacks', 'beverages', 'desserts'].map(filter => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

        <MenuGrid
          items={filteredItems}
          onItemClick={handleItemClick}
          onAddToCart={addToCart}
        />
      </div>

      <Footer />

      {/* Floating Action Buttons */}
      {cart.length > 0 && (
        <button 
          className="fab" 
          onClick={() => setShowCart(true)}
          style={{ bottom: '8rem' }}
        >
          🛒
        </button>
      )}

      <button 
        className="fab" 
        onClick={() => setShowTracking(true)}
      >
        📍
      </button>

      {/* Modals */}
      {showItemDetail && selectedItem && (
        <ItemDetailModal
          item={selectedItem}
          onClose={() => setShowItemDetail(false)}
          onAddToCart={addToCart}
        />
      )}

      {showCart && (
        <CartModal
          cart={cart}
          onClose={() => setShowCart(false)}
          onUpdateQuantity={updateCartQuantity}
          onRemoveItem={removeFromCart}
          onCheckout={() => {
            setShowCart(false);
            setShowCheckout(true);
          }}
          totalAmount={getTotalAmount()}
        />
      )}

      {showProfile && (
        <ProfileModal
          user={user}
          onClose={() => setShowProfile(false)}
        />
      )}

      {showTracking && (
        <TrackingModal
          user={user}
          onClose={() => setShowTracking(false)}
        />
      )}

      {showCheckout && (
        <CheckoutModal
          cart={cart}
          totalAmount={getTotalAmount()}
          user={user}
          onClose={() => setShowCheckout(false)}
          onSuccess={handleCheckoutSuccess}
        />
      )}

      {/* Notification */}
      {notification && (
        <div className={`notification ${notification ? 'show' : ''}`}>
          {notification}
        </div>
      )}

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default MainApp;
