import React, { useState, useEffect } from 'react';
import AuthModal from './AuthModal.jsx';

const WelcomeScreen = ({ onLogin }) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('signin');

  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      const particlesContainer = document.querySelector('.particles');
      if (!particlesContainer) return;

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  const handleSignIn = () => {
    setAuthMode('signin');
    setShowAuthModal(true);
  };

  const handleSignUp = () => {
    setAuthMode('signup');
    setShowAuthModal(true);
  };

  const handleAuthSuccess = (userData) => {
    setShowAuthModal(false);
    onLogin(userData);
  };

  return (
    <div className="welcome-container">
      <div className="particles"></div>
      
      <div className="welcome-card">
        <h1 className="logo">Inti Ruchulu</h1>
        <p className="tagline">Authentic South Indian Delicacies</p>
        
        <div className="auth-buttons">
          <button className="btn btn-primary" onClick={handleSignIn}>
            Sign In
          </button>
          <button className="btn btn-secondary" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </div>

      {showAuthModal && (
        <AuthModal
          mode={authMode}
          onClose={() => setShowAuthModal(false)}
          onSuccess={handleAuthSuccess}
        />
      )}
    </div>
  );
};

export default WelcomeScreen;