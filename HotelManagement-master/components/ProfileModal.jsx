import React, { useState } from 'react';

const ProfileModal = ({ user, onClose }) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    fullName: user.fullName,
    email: user.email,
    phone: user.phone || '',
    address: user.address || '',
    dateOfBirth: user.dateOfBirth || '',
    gender: user.gender || '',
    alternatePhone: user.alternatePhone || '',
    pincode: user.pincode || '',
    city: user.city || '',
    state: user.state || '',
    landmark: user.landmark || '',
    addressType: user.addressType || 'home'
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    // Update user data in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.map(u => 
      u.id === user.id ? { ...u, ...formData } : u
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    // Update current user in localStorage
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const updatedUser = { ...currentUser, ...formData };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    
    setEditMode(false);
    setMessage('Profile updated successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="modal active">
      <div className="modal-content" style={{ maxWidth: '500px', width: '90%' }}>
        <button className="close-modal" onClick={onClose}>×</button>
        
        <h2 className="detail-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          {editMode ? 'Edit Profile' : 'My Profile'}
        </h2>

        {message && <div className="success-message">{message}</div>}

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-input"
              value={formData.fullName}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Phone</label>
            <input
              type="tel"
              name="phone"
              className="form-input"
              value={formData.phone}
              onChange={handleInputChange}
              disabled={!editMode}
              placeholder="Enter phone number"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Address</label>
            <textarea
              name="address"
              className="form-input"
              value={formData.address}
              onChange={handleInputChange}
              disabled={!editMode}
              placeholder="Enter your delivery address"
              rows="3"
              style={{ resize: 'vertical' }}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              className="form-input"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Gender</label>
            <select
              name="gender"
              className="form-input"
              value={formData.gender}
              onChange={handleInputChange}
              disabled={!editMode}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Alternate Phone</label>
            <input
              type="tel"
              name="alternatePhone"
              className="form-input"
              value={formData.alternatePhone}
              onChange={handleInputChange}
              disabled={!editMode}
              placeholder="Enter alternate phone number"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">City</label>
              <input
                type="text"
                name="city"
                className="form-input"
                value={formData.city}
                onChange={handleInputChange}
                disabled={!editMode}
                placeholder="Enter city"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Pincode</label>
              <input
                type="text"
                name="pincode"
                className="form-input"
                value={formData.pincode}
                onChange={handleInputChange}
                disabled={!editMode}
                placeholder="Enter pincode"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">State</label>
            <input
              type="text"
              name="state"
              className="form-input"
              value={formData.state}
              onChange={handleInputChange}
              disabled={!editMode}
              placeholder="Enter state"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Landmark (Optional)</label>
            <input
              type="text"
              name="landmark"
              className="form-input"
              value={formData.landmark}
              onChange={handleInputChange}
              disabled={!editMode}
              placeholder="Enter nearby landmark"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Address Type</label>
            <select
              name="addressType"
              className="form-input"
              value={formData.addressType}
              onChange={handleInputChange}
              disabled={!editMode}
            >
              <option value="home">Home</option>
              <option value="office">Office</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            {editMode ? (
              <>
                <button className="btn btn-secondary" onClick={() => setEditMode(false)}>
                  Cancel
                </button>
                <button className="order-btn" onClick={handleSave}>
                  Save Changes
                </button>
              </>
            ) : (
              <button className="order-btn" onClick={() => setEditMode(true)}>
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;