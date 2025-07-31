"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Sparkles,
  Star,
  Clock,
  Edit,
  FileText,
  Zap,
  X,
  Crown
} from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

interface ProUpgradePromptProps {
  variant?: 'card' | 'banner' | 'modal';
  showCloseButton?: boolean;
  onClose?: () => void;
  context?: 'generator' | 'dashboard' | 'general';
  currentEditCount?: number;
  maxEditCount?: number;
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function ProUpgradePrompt({
  variant = 'card',
  showCloseButton = false,
  onClose,
  context = 'general',
  currentEditCount = 0,
  maxEditCount = 2
}: ProUpgradePromptProps) {
  const [loading, setLoading] = useState(false);

  const handleUpgrade = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url } = await response.json();

      if (url) {
        window.location.href = url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error: unknown) {
      console.error('Error starting checkout:', error);
      alert('Failed to start checkout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const features = [
    {
      icon: <Edit className="h-4 w-4" />,
      title: "Unlimited Regeneration",
      description: "Perfect your speech with unlimited custom edits"
    },
    {
      icon: <Sparkles className="h-4 w-4" />,
      title: "Enhanced Personality",
      description: "Add rich personal touches and deeper customization"
    },
    {
      icon: <Clock className="h-4 w-4" />,
      title: "Advanced Controls",
      description: "Fine-tune length, humor level, and style perfectly"
    },
    {
      icon: <Star className="h-4 w-4" />,
      title: "Premium Features",
      description: "Special toasts, shout-outs, and ending messages"
    }
  ];

  const getContextualMessage = () => {
    switch (context) {
      case 'generator':
        return currentEditCount >= maxEditCount
          ? `You've used all ${maxEditCount} free edits. Upgrade to continue perfecting your speech!`
          : `Get unlimited edits and premium features to create the perfect speech.`;
      case 'dashboard':
        return "Unlock the full potential of your speeches with Pro features.";
      default:
        return "Upgrade to Pro for unlimited editing and premium features.";
    }
  };

  if (variant === 'banner') {
    return (
      <div className="bg-gradient-to-r from-[#da5389]/10 to-[#e9a41a]/10 border border-[#da5389]/20 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-[#da5389] to-[#e9a41a] rounded-full flex items-center justify-center">
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
              className="bg-gradient-to-r from-[#da5389] to-[#e9a41a] hover:from-[#da5389]/90 hover:to-[#e9a41a]/90 text-white"
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
          <div className="bg-gradient-to-r from-[#da5389] to-[#e9a41a] text-white p-6 rounded-t-2xl">
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
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
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
            <div className="bg-gradient-to-r from-[#da5389]/5 to-[#e9a41a]/5 border border-[#da5389]/20 rounded-lg p-4 mb-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-[#181615]">$9.99</span>
                  <span className="text-lg text-[#8f867e] line-through">$19.99</span>
                  <Badge className="bg-[#da5389] text-white">50% OFF</Badge>
                </div>
                <div className="text-sm text-[#8f867e]">One-time payment • Lifetime access</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleUpgrade}
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#da5389] to-[#e9a41a] hover:from-[#da5389]/90 hover:to-[#e9a41a]/90 text-white px-6 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-200"
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
                  <span>💰</span>
                  <span>30-Day Refund</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>⚡</span>
                  <span>Instant Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default card variant
  return (
    <Card className="border-[#da5389]/20 bg-gradient-to-r from-[#da5389]/5 to-[#e9a41a]/5">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#da5389] to-[#e9a41a] rounded-full flex items-center justify-center">
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

        <div className="grid grid-cols-2 gap-3 mb-4">
          {features.slice(0, 4).map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <span className="text-sm font-medium text-[#181615]">{feature.title}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#181615]">$9.99</span>
            <span className="text-sm text-[#8f867e] line-through">$19.99</span>
            <Badge className="bg-[#da5389] text-white text-xs">50% OFF</Badge>
          </div>
          <Button
            onClick={handleUpgrade}
            disabled={loading}
            className="bg-gradient-to-r from-[#da5389] to-[#e9a41a] hover:from-[#da5389]/90 hover:to-[#e9a41a]/90 text-white"
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
