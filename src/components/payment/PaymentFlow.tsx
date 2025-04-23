'use client';

import { useState } from 'react';
import Image from 'next/image';
import { RichText } from '../ui/RichText';
import { ProviderOptionComponent } from '@/types/strapi-components';

interface PaymentFlowProps {
  providers: ProviderOptionComponent[];
  successTitle: string;
  successMessage: any;
  errorMessage: any;
}

export default function PaymentFlow({
  providers,
  successTitle,
  successMessage,
  errorMessage,
}: PaymentFlowProps) {
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  
  const handleProviderSelect = (providerId: string) => {
    setSelectedProvider(providerId);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStatus('processing');
    
    try {
      // Simulate payment processing with Wyre
      // In a real implementation, this would connect to the Wyre API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 90% success rate for demo purposes
      if (Math.random() > 0.1) {
        setPaymentStatus('success');
      } else {
        setPaymentStatus('error');
      }
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus('error');
    }
  };
  
  if (paymentStatus === 'processing') {
    return (
      <div className="flex flex-col items-center py-12">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-xl font-medium">Processing your payment...</p>
        <p className="text-gray-600 dark:text-gray-400">Please do not close this window.</p>
      </div>
    );
  }
  
  if (paymentStatus === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-4">{successTitle}</h2>
        <div className="prose dark:prose-invert mx-auto">
          <RichText content={successMessage} />
        </div>
      </div>
    );
  }
  
  if (paymentStatus === 'error') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-4">Payment Failed</h2>
        <div className="prose dark:prose-invert mx-auto">
          <RichText content={errorMessage} />
        </div>
        <button 
          onClick={() => setPaymentStatus('idle')} 
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
        >
          Try Again
        </button>
      </div>
    );
  }
  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Select a Payment Method</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4 mb-8">
          {providers.filter(p => p.isActive).map((provider, index) => (
            <div 
              key={index} 
              className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                selectedProvider === provider.providerId 
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30' 
                  : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
              onClick={() => handleProviderSelect(provider.providerId)}
            >
              <div className="flex items-center">
                <input 
                  type="radio"
                  id={provider.providerId}
                  name="paymentProvider"
                  value={provider.providerId}
                  checked={selectedProvider === provider.providerId}
                  onChange={() => handleProviderSelect(provider.providerId)}
                  className="w-5 h-5 text-blue-600"
                />
                <label 
                  htmlFor={provider.providerId}
                  className="flex items-center ml-3 cursor-pointer flex-1"
                >
                  {provider.logo?.data && (
                    <div className="mr-3 flex-shrink-0">
                      <Image 
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${provider.logo.data.attributes.url}`}
                        alt={provider.name}
                        width={40}
                        height={40}
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <div className="font-medium">{provider.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {/* Simple text representation of description */}
                      {provider.description[0]?.children[0]?.text || ''}
                    </div>
                  </div>
                </label>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          type="submit" 
          disabled={!selectedProvider} 
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-medium transition-colors"
        >
          Continue to Payment
        </button>
      </form>
    </div>
  );
}