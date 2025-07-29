import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { stripeProducts } from '../stripe-config';
import ProductCard from './ProductCard';
import SubscriptionStatus from './SubscriptionStatus';
import { LogOut, User } from 'lucide-react';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <header className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center gap-3">
              <User className="w-8 h-8 text-blue-400" />
              <div>
                <h1 className="text-xl font-bold text-white">Dashboard</h1>
                <p className="text-gray-300 text-sm">
                  Welcome, {user?.user_metadata?.full_name || user?.email}
                </p>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 px-4 py-2 bg-red-600/20 text-red-300 rounded-lg hover:bg-red-600/30 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Your Subscription</h2>
            <SubscriptionStatus />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Available Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stripeProducts.map((product) => (
                <ProductCard key={product.priceId} product={product} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}