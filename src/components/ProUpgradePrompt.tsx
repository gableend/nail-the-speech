"use client";

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { Crown, X, Zap } from 'lucide-react';
import { useAuth } from '@clerk/nextjs';
import { useSearchParams } from 'next/navigation';
import { showToast } from '@/components/ui/toast';
import { useCurrency } from '@/hooks/useCurrency';

// Define specific types instead of 'any'
interface SpeechData {
  title: string;
  content: string;
  role: string;
  formData: unknown; // Change to unknown instead of Record<string, unknown> to allow FormData
}

interface ProUpgradePromptProps {
  variant: 'banner' | 'modal' | 'card' | 'inline';
  showCloseButton?: boolean;
  onClose?: () => void;
  context?: 'generator' | 'dashboard' | 'paywall';
  currentEditCount?: number;
  maxEditCount?: number;
  speechData?: SpeechData;
}

export default function ProUpgradePrompt({
  variant = 'card',
  showCloseButton = false,
  onClose = () => {},
  context = 'dashboard',
  currentEditCount = 0,
  maxEditCount = 2,
  speechData
}: ProUpgradePromptProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { userId } = useAuth();
  const searchParams = useSearchParams();
  const isDemo = searchParams.get('demo') === 'true';
  const discountCode = searchParams.get('discount') || null;
  const { currency, availableCurrencies, setCurrency } = useCurrency();

  const features = [
    {
      title: "Unlimited Regeneration",
      description: "Tweak your speech as many times as you want",
      icon: <Zap className="h-4 w-4 text-green-600" />
    },
    {
      title: "Custom Length Control",
      description: "Set exact timing for your speech",
      icon: <Crown className="h-4 w-4 text-green-600" />
    },
    {
      title: "Premium Templates",
      description: "Access to exclusive speech templates",
      icon: <Crown className="h-4 w-4 text-green-600" />
    },
    {
      title: "Advanced Personalization",
      description: "Add personal stories and inside jokes",
      icon: <Crown className="h-4 w-4 text-green-600" />
    }
  ];

  const getContextualMessage = (): string => {
    if (context === 'paywall') {
      return "Your speech is ready! Unlock it to copy, download, and edit.";
    }
    if (context === 'generator') {
      return `Unlock unlimited regeneration (${currentEditCount}/${maxEditCount} free edits used)`;
    }
    return "Unlock premium features and unlimited regeneration";
  };

  const paywallFeatures = [
    {
      title: "Unlock Your Full Speech",
      description: "See and copy your complete generated speech",
      icon: <Zap className="h-4 w-4 text-green-600" />
    },
    {
      title: "Copy, Download & Share",
      description: "Export to PDF, Word, or copy to clipboard",
      icon: <Crown className="h-4 w-4 text-green-600" />
    },
    {
      title: "Unlimited Regeneration",
      description: "Tweak your speech as many times as you want",
      icon: <Zap className="h-4 w-4 text-green-600" />
    },
    {
      title: "Advanced Personalization",
      description: "Add personal stories, inside jokes, and more",
      icon: <Crown className="h-4 w-4 text-green-600" />
    },
    {
      title: "Receive Your Speech via Email",
      description: "Get a polished copy sent straight to your inbox",
      icon: <Crown className="h-4 w-4 text-green-600" />
    },
    {
      title: "Edit with Our Speech Editor",
      description: "Use our built-in editor to add your own personal touches",
      icon: <Crown className="h-4 w-4 text-green-600" />
    }
  ];

  const activeFeatures = context === 'paywall' ? paywallFeatures : features;

  const handleUpgrade = async () => {
    try {
      setLoading(true);

      // Prepare data for checkout
      const checkoutData: Record<string, unknown> = {
        email: null, // Will be filled by Stripe checkout
        returnUrl: '/dashboard',
        currency: currency.key,
        demo: isDemo,
        ...(discountCode ? { discountCode } : {}),
      };

      // If we have speech data, save it to localStorage for retrieval after payment and login
      if (speechData) {
        try {
          localStorage.setItem('pending_speech_data', JSON.stringify(speechData));
        } catch (storageError) {
          console.error('Failed to store pending speech data:', storageError);
        }

        // Add speech metadata to checkout session
        checkoutData.speechMetadata = {
          title: speechData.title,
          role: speechData.role
        };
      }

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(checkoutData)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Checkout API error:', errorData);
        throw new Error(errorData.details || 'Failed to create checkout session');
      }

      const { url } = await response.json();

      if (url) {
        window.location.href = url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      showToast('Failed to start checkout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (variant === 'banner') {
    return (
      <div className="bg-gradient-to-r from-[#da5389]/10 to-[#e84f98]/10 border border-[#da5389]/20 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-[#da5389] to-[#e84f98] rounded-full flex items-center justify-center">
              <Crown className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="font-semibold text-[#181615]">Upgrade to Pro</div>
              <div className="text-sm text-[#8f867e]">{getContextualMessage()}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-[#da5389] text-white">50% OFF</Badge>
            <Button
              onClick={handleUpgrade}
              disabled={loading}
              size="sm"
              className="bg-gradient-to-r from-[#da5389] to-[#e84f98] hover:from-[#da5389]/90 hover:to-[#e84f98]/90 text-white"
            >
              {loading ? (
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2" />
              ) : (
                <Zap className="h-4 w-4 mr-2" />
              )}
              Upgrade Now
            </Button>
            {showCloseButton && (
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'modal') {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
          {/* Modal Header */}
          <div className="bg-gradient-to-r from-[#da5389] to-[#e84f98] text-white p-6 rounded-t-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Crown className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Upgrade to Pro</h2>
                  <p className="text-white/90 text-sm">Unlock unlimited editing & premium features</p>
                </div>
              </div>
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Usage Progress */}
            {context === 'generator' && (
              <div className="bg-white/20 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/90">Free Edits Used</span>
                  <span className="font-bold">{currentEditCount}/{maxEditCount}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                  <div
                    className="bg-white rounded-full h-2 transition-all duration-300"
                    style={{ width: `${(currentEditCount / maxEditCount) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Modal Content */}
          <div className="p-6">
            {/* Pro Features */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#181615] mb-4">What You Get with Pro:</h3>
              <div className="space-y-3">
                {activeFeatures.map((feature, idx) => (
                  <div key={`feature-${idx}-${feature.title}`} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      {feature.icon}
                    </div>
                    <div>
                      <div className="font-medium text-[#181615]">{feature.title}</div>
                      <div className="text-sm text-[#8f867e]">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-r from-[#da5389]/5 to-[#e84f98]/5 border border-[#da5389]/20 rounded-lg p-4 mb-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-[#181615]">{currency.displayPrice}</span>
                  <span className="text-lg text-[#8f867e] line-through">{currency.originalPrice}</span>
                  <Badge className="bg-[#da5389] text-white">50% OFF</Badge>
                </div>
                <div className="text-sm text-[#8f867e]">
                  One-time payment • 90-day access
                  {availableCurrencies.length > 1 && (
                    <select
                      value={currency.key}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="ml-2 text-xs bg-transparent border border-[#e8e1d8] rounded px-1 py-0.5 text-[#8f867e] cursor-pointer"
                    >
                      {availableCurrencies.map(c => (
                        <option key={c.key} value={c.key}>{c.key} ({c.symbol})</option>
                      ))}
                    </select>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleUpgrade}
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#da5389] to-[#e84f98] hover:from-[#da5389]/90 hover:to-[#e84f98]/90 text-white px-6 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-200"
              >
                {loading ? (
                  <>
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                    Starting Checkout...
                  </>
                ) : (
                  <>
                    <Crown className="h-5 w-5 mr-2" />
                    Upgrade to Pro Now
                  </>
                )}
              </Button>
              {showCloseButton && (
                <Button
                  onClick={onClose}
                  variant="ghost"
                  className="w-full text-[#8f867e] hover:text-[#181615] py-3 text-sm transition-colors"
                >
                  Maybe later
                </Button>
              )}
            </div>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-6 text-xs text-[#8f867e]">
                <div className="flex items-center gap-1">
                  <span>🔒</span>
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>⚡</span>
                  <span>Instant Access</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>📅</span>
                  <span>90-Day Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className="text-center py-6 px-4">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-10 h-10 bg-gradient-to-r from-[#da5389] to-[#e84f98] rounded-full flex items-center justify-center">
            <Crown className="h-5 w-5 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-[#181615] mb-1">Your speech is ready!</h3>
        <p className="text-[#8f867e] mb-4">Upgrade to unlock the full text, copy, download, and edit.</p>

        <div className="grid grid-cols-2 gap-3 mb-5 max-w-lg mx-auto text-left">
          {activeFeatures.map((feature, idx) => (
            <div key={`inline-feature-${idx}`} className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                {feature.icon}
              </div>
              <span className="text-sm font-medium text-[#181615]">{feature.title}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-2xl font-bold text-[#181615]">{currency.displayPrice}</span>
          <span className="text-lg text-[#8f867e] line-through">{currency.originalPrice}</span>
          <Badge className="bg-[#da5389] text-white">50% OFF</Badge>
        </div>
        {availableCurrencies.length > 1 && (
          <div className="mb-4">
            <select
              value={currency.key}
              onChange={(e) => setCurrency(e.target.value)}
              className="text-xs bg-transparent border border-[#e8e1d8] rounded px-1 py-0.5 text-[#8f867e] cursor-pointer"
            >
              {availableCurrencies.map(c => (
                <option key={c.key} value={c.key}>{c.key} ({c.symbol})</option>
              ))}
            </select>
          </div>
        )}

        <Button
          onClick={handleUpgrade}
          disabled={loading}
          className="bg-gradient-to-r from-[#da5389] to-[#e84f98] hover:from-[#da5389]/90 hover:to-[#e84f98]/90 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg"
        >
          {loading ? (
            <>
              <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2" />
              Starting Checkout...
            </>
          ) : (
            <>
              <Crown className="h-5 w-5 mr-2" />
              Unlock My Speech
            </>
          )}
        </Button>

        <div className="mt-4 flex items-center justify-center gap-6 text-xs text-[#8f867e]">
          <div className="flex items-center gap-1">
            <span>🔒</span>
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center gap-1">
            <span>⚡</span>
            <span>Instant Access</span>
          </div>
          <div className="flex items-center gap-1">
            <span>📅</span>
            <span>90-Day Access</span>
          </div>
        </div>
      </div>
    );
  }

  // Default card variant
  return (
    <Card className="border-[#da5389]/20 bg-gradient-to-r from-[#da5389]/5 to-[#e84f98]/5">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#da5389] to-[#e84f98] rounded-full flex items-center justify-center">
              <Crown className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#181615]">Upgrade to Pro</h3>
              <p className="text-sm text-[#8f867e]">{getContextualMessage()}</p>
            </div>
          </div>
          {showCloseButton && (
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4 max-w-lg mx-auto">
          {activeFeatures.map((feature, idx) => (
            <div key={`feature-card-${idx}-${feature.title}`} className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <span className="text-sm font-medium text-[#181615]">{feature.title}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#181615]">{currency.displayPrice}</span>
            <span className="text-sm text-[#8f867e] line-through">{currency.originalPrice}</span>
            <Badge className="bg-[#da5389] text-white text-xs">50% OFF</Badge>
            {availableCurrencies.length > 1 && (
              <select
                value={currency.key}
                onChange={(e) => setCurrency(e.target.value)}
                className="text-xs bg-transparent border border-[#e8e1d8] rounded px-1 py-0.5 text-[#8f867e] cursor-pointer"
              >
                {availableCurrencies.map(c => (
                  <option key={c.key} value={c.key}>{c.key}</option>
                ))}
              </select>
            )}
          </div>
          <Button
            onClick={handleUpgrade}
            disabled={loading}
            className="bg-gradient-to-r from-[#da5389] to-[#e84f98] hover:from-[#da5389]/90 hover:to-[#e84f98]/90 text-white"
          >
            {loading ? (
              <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2" />
            ) : (
              <Zap className="h-4 w-4 mr-2" />
            )}
            Upgrade Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
