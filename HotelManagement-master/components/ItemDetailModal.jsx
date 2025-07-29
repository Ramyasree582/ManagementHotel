import React from 'react';

const ItemDetailModal = ({ item, onClose, onAddToCart }) => {
  return (
    <div className="modal active">
      <div className="modal-content" style={{ maxWidth: '800px', width: '90%' }}>
        <button className="close-modal" onClick={onClose}>×</button>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
          <div>
            <img src={item.image} alt={item.name} className="detail-image" />
          </div>
          
          <div>
            <h2 className="detail-title">{item.name}</h2>
            <div className="detail-price">₹{item.price}</div>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '2rem' }}>
              {item.description}
            </p>
            
            <button 
              className="order-btn"
              onClick={() => onAddToCart(item)}
              style={{ marginBottom: '2rem' }}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="ingredients-section">
          <h3 className="section-title">Ingredients & Nutrition</h3>
          <div className="ingredients-list">
            {item.ingredients.map((ingredient, index) => (
              <div key={index} className="ingredient-item">
                <div className="ingredient-name">{ingredient.name}</div>
                <div className="nutrition-info">
                  Calories: {ingredient.calories} | 
                  Protein: {ingredient.protein}g | 
                  Carbs: {ingredient.carbs}g | 
                  Fat: {ingredient.fat}g
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="recipe-section">
          <h3 className="section-title">Recipe & Preparation</h3>
          <div className="recipe-steps">
            {item.recipe}
          </div>
          
          <div className="video-container">
            <div className="video-placeholder">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/MzEFeIRJ0eQ" 
                title="YouTube video player" 
                frameBorder="1" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                style={{ display: "block", margin: "0 auto", maxWidth: "100%" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailModal