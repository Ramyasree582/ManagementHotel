import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen.jsx';
import MainApp from './components/MainApp.jsx';
import AdminPanel from './components/AdminPanel.jsx';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      if (userData.role === 'admin') {
        setCurrentScreen('admin');
      } else {
        setCurrentScreen('main');
      }
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    if (userData.role === 'admin') {
      setCurrentScreen('admin');
    } else {
      setCurrentScreen('main');
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    setCurrentScreen('welcome');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onLogin={handleLogin} />;
      case 'main':
        return <MainApp user={user} onLogout={handleLogout} />;
      case 'admin':
        return <AdminPanel user={user} onLogout={handleLogout} />;
      default:
        return <WelcomeScreen onLogin={handleLogin} />;
    }
  };

  return <div className="app">{renderScreen()}</div>;
}

export default App;