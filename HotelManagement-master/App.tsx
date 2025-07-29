import React from 'react';
import { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import LoginPage from './components/auth/LoginPage';
import SignupPage from './components/auth/SignupPage';
import Dashboard from './components/Dashboard';
import SuccessPage from './components/SuccessPage';

function App() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<'login' | 'signup' | 'dashboard' | 'success'>('login');

  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        setCurrentPage('dashboard');
      }
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        setCurrentPage('dashboard');
      } else {
        setCurrentPage('login');
      }
    });

    // Check for success/cancel URLs
    const urlParams = new URLSearchParams(window.location.search);
    if (window.location.pathname === '/success') {
      setCurrentPage('success');
    } else if (window.location.pathname === '/cancel') {
      setCurrentPage('dashboard');
    }

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  const handleAuthSuccess = () => {
    setCurrentPage('dashboard');
  };

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard');
    window.history.pushState({}, '', '/');
  };

  if (currentPage === 'success') {
    return <SuccessPage onBackToDashboard={handleBackToDashboard} />;
  }

  if (!user) {
    if (currentPage === 'signup') {
      return (
        <SignupPage
          onSuccess={handleAuthSuccess}
          onSwitchToLogin={() => setCurrentPage('login')}
        />
      );
    }
    
    return (
      <LoginPage
        onSuccess={handleAuthSuccess}
        onSwitchToSignup={() => setCurrentPage('signup')}
      />
    );
  }

  return <Dashboard />;
}

export default App;
