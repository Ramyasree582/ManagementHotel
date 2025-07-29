import React from 'react';

const MenuGrid = ({ items, onItemClick, onAddToCart }) => {
  return (
    <div className="menu-grid">
      {items.map(item => (
        <div key={item.id} className="menu-item" onClick={() => onItemClick(item)}>
          <img src={item.image} alt={item.name} className="item-image" />
          <div className="item-content">
            <h3 className="item-name">{item.name}</h3>
            <p className="item-description">{item.description}</p>
            <div className="item-price">₹{item.price}</div>
            <button 
              className="add-to-cart"
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(item);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuGrid;