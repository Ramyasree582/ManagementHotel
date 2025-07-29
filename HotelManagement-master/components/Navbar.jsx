import React, { useState } from 'react';

const Navbar = ({ user, onLogout, cartItemCount, onCartClick, onProfileClick, onTrackingClick }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-logo">Inti Ruchulu</div>
        
        <div className="nav-actions">
          <button className="cart-icon" onClick={onCartClick}>
            🛒
            {cartItemCount > 0 && (
              <span className="cart-count">{cartItemCount}</span>
            )}
          </button>
          
          <button className="profile-icon" onClick={onTrackingClick}>
            📍
          </button>
          
          <div 
            className="profile-icon" 
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            style={{ position: 'relative' }}
          >
            👤
            {showProfileMenu && (
              <div className="profile-menu show">
                <button className="profile-menu-item" onClick={onProfileClick}>
                  Edit Profile
                </button>
                <button className="profile-menu-item" onClick={onTrackingClick}>
                  Track Orders
                </button>
                <button className="profile-menu-item" onClick={onLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;