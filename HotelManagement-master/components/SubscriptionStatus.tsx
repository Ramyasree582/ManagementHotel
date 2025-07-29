import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { getProductByPriceId } from '../stripe-config';
import { CheckCircle, Clock, XCircle, AlertCircle } from 'lucide-react';

interface SubscriptionData {
  subscription_status: string;
  price_id: string | null;
  current_period_end: number | null;
  cancel_at_period_end: boolean;
}

export default function SubscriptionStatus() {
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubscription();
  }, []);

  const fetchSubscription = async () => {
    try {
      const { data, error } = await supabase
        .from('stripe_user_subscriptions')
        .select('subscription_status, price_id, current_period_end, cancel_at_period_end')
        .maybeSingle();

      if (error) {
        console.error('Error fetching subscription:', error);
      } else {
        setSubscription(data);
      }
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
        <div className="animate-pulse">
          <div className="h-4 bg-white/20 rounded w-1/3 mb-2"></div>
          <div className="h-6 bg-white/20 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  if (!subscription || subscription.subscription_status === 'not_started') {
    return (
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
        <div className="flex items-center gap-3">
          <Clock className="w-6 h-6 text-gray-400" />
          <div>
            <h3 className="text-lg font-semibold text-white">No Active Subscription</h3>
            <p className="text-gray-300 text-sm">Subscribe to a plan to get started</p>
          </div>
        </div>
      </div>
    );
  }

  const product = subscription.price_id ? getProductByPriceId(subscription.price_id) : null;
  const isActive = subscription.subscription_status === 'active';
  const isCanceled = subscription.subscription_status === 'canceled';
  const isPastDue = subscription.subscription_status === 'past_due';

  const getStatusIcon = () => {
    if (isActive) return <CheckCircle className="w-6 h-6 text-green-400" />;
    if (isCanceled) return <XCircle className="w-6 h-6 text-red-400" />;
    if (isPastDue) return <AlertCircle className="w-6 h-6 text-yellow-400" />;
    return <Clock className="w-6 h-6 text-gray-400" />;
  };

  const getStatusColor = () => {
    if (isActive) return 'text-green-400';
    if (isCanceled) return 'text-red-400';
    if (isPastDue) return 'text-yellow-400';
    return 'text-gray-400';
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
      <div className="flex items-start gap-4">
        {getStatusIcon()}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-white">
              {product?.name || 'Subscription'}
            </h3>
            <span className={`text-sm font-medium capitalize ${getStatusColor()}`}>
              {subscription.subscription_status.replace('_', ' ')}
            </span>
          </div>
          
          {product && (
            <p className="text-gray-300 text-sm mb-3">{product.description}</p>
          )}

          {subscription.current_period_end && (
            <div className="space-y-1">
              <p className="text-gray-400 text-sm">
                {subscription.cancel_at_period_end ? 'Expires on:' : 'Renews on:'}{' '}
                <span className="text-white font-medium">
                  {formatDate(subscription.current_period_end)}
                </span>
              </p>
              
              {subscription.cancel_at_period_end && (
                <p className="text-yellow-400 text-sm">
                  Your subscription will not renew automatically
                </p>
              )}
            </div>
          )}

          {isPastDue && (
            <div className="mt-3 p-3 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
              <p className="text-yellow-300 text-sm">
                Your payment is past due. Please update your payment method to continue your subscription.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}