import React from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';

interface SuccessPageProps {
  onBackToDashboard: () => void;
}

export default function SuccessPage({ onBackToDashboard }: SuccessPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 text-center">
          <div className="mb-6">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white mb-2">Payment Successful!</h1>
            <p className="text-gray-300">
              Thank you for your purchase. Your payment has been processed successfully.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
              <p className="text-green-300 text-sm">
                You will receive a confirmation email shortly with your purchase details.
              </p>
            </div>

            <button
              onClick={onBackToDashboard}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}