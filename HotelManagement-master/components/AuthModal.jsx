import React, { useState } from 'react';

const AuthModal = ({ mode, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError('Email and password are required');
      return false;
    }

    if (mode === 'signup') {
      if (!formData.fullName || !formData.phone) {
        setError('All fields are required for registration');
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return false;
      }
      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters long');
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (mode === 'signin') {
        // Check for admin credentials
        if (formData.email === 'admin@intiruchulu.com' && formData.password === 'admin123') {
          onSuccess({
            id: 'admin',
            email: formData.email,
            fullName: 'Admin',
            role: 'admin'
          });
        } else {
          // Regular user login
          const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
          const user = existingUsers.find(u => u.email === formData.email && u.password === formData.password);
          
          if (user) {
            onSuccess({
              id: user.id,
              email: user.email,
              fullName: user.fullName,
              phone: user.phone,
              role: 'user'
            });
          } else {
            setError('Invalid email or password');
          }
        }
      } else {
        // Sign up
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
        const userExists = existingUsers.find(u => u.email === formData.email);
        
        if (userExists) {
          setError('User with this email already exists');
        } else {
          const newUser = {
            id: Date.now().toString(),
            email: formData.email,
            password: formData.password,
            fullName: formData.fullName,
            phone: formData.phone,
            role: 'user',
            createdAt: new Date().toISOString()
          };
          
          existingUsers.push(newUser);
          localStorage.setItem('users', JSON.stringify(existingUsers));
          
          onSuccess({
            id: newUser.id,
            email: newUser.email,
            fullName: newUser.fullName,
            phone: newUser.phone,
            role: 'user'
          });
        }
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal active">
      <div className="modal-content" style={{ width: '400px' }}>
        <button className="close-modal" onClick={onClose}>×</button>
        
        <h2 className="detail-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          {mode === 'signin' ? 'Sign In' : 'Sign Up'}
        </h2>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="form-input"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {mode === 'signup' && (
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {mode === 'signup' && (
            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-input"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          <button 
            type="submit" 
            className="order-btn" 
            style={{ width: '100%', marginTop: '1rem' }}
            disabled={loading}
          >
            {loading ? 'Please Wait...' : (mode === 'signin' ? 'Sign In' : 'Sign Up')}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1rem', color: 'rgba(255,255,255,0.7)' }}>
          {mode === 'signin' ? (
            <p>Don't have an account? <button onClick={() => window.location.reload()} style={{ background: 'none', border: 'none', color: '#ff9f43', cursor: 'pointer' }}>Sign Up</button></p>
          ) : (
            <p>Already have an account? <button onClick={() => window.location.reload()} style={{ background: 'none', border: 'none', color: '#ff9f43', cursor: 'pointer' }}>Sign In</button></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;