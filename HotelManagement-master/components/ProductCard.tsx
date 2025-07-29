import React, { useState } from 'react';
import { StripeProduct } from '../stripe-config';
import { supabase } from '../lib/supabase';
import { CreditCard, Loader2 } from 'lucide-react';

interface ProductCardProps {
  product: StripeProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePurchase = async () => {
    setLoading(true);
    setError('');

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        setError('Please sign in to make a purchase');
        setLoading(false);
        return;
      }

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          price_id: product.priceId,
          mode: product.mode,
          success_url: `${window.location.origin}/success`,
          cancel_url: `${window.location.origin}/cancel`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-[1.02]">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-gray-300 text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400 capitalize">
            {product.mode === 'subscription' ? 'Monthly Subscription' : 'One-time Payment'}
          </span>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm">
          {error}
        </div>
      )}

      <button
        onClick={handlePurchase}
        disabled={loading}
        className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <CreditCard className="w-5 h-5" />
            {product.mode === 'subscription' ? 'Subscribe' : 'Purchase'}
          </>
        )}
      </button>
    </div>
  );
}