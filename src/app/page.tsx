"use client";
import { Button } from "@/components/ui/button";
import { Users, Clock, ChevronDown, Menu, Sparkles, ArrowRight } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AuthModal from "@/components/auth/SocialSignupModal";
import UserDropdown from "@/components/auth/UserDropdown";

export default function HomePage() {
  const { isSignedIn, user, isLoaded } = useUser();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(1);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Array of hero videos to cycle through
  const heroVideos = [
    "/videos/hero-video.mp4",
    "/videos/hero-video-2.mp4", 
    "/videos/hero-video-3.mp4"
  ];

  // Preload videos for smoother transitions
  useEffect(() => {
    for (const videoSrc of heroVideos) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'video';
      link.href = videoSrc;
      document.head.appendChild(link);
    }

    return () => {
      // Clean up preload links
      const preloadLinks = document.querySelectorAll('link[rel="preload"][as="video"]');
      preloadLinks.forEach(link => link.remove());
    };
  }, []);

  // Auto-cycle videos every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        switchToNextVideo();
      }
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [currentVideoIndex, isTransitioning]);

  const switchToNextVideo = async () => {
    setIsTransitioning(true);
    setVideoOpacity(0);
    
    // Wait for fade out
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
    
    // Wait a moment then fade in
    setTimeout(() => {
      setVideoOpacity(1);
      setIsTransitioning(false);
    }, 100);
  };

  // Scroll to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf7f4]">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#da5389] to-[#ff6b9d] bg-clip-text text-transparent">
                  Nail The Speech
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-gray-700 hover:text-[#da5389] px-3 py-2 text-sm font-medium transition-colors"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-gray-700 hover:text-[#da5389] px-3 py-2 text-sm font-medium transition-colors"
                >
                  How It Works
                </button>
                <Link href="/pricing" className="text-gray-700 hover:text-[#da5389] px-3 py-2 text-sm font-medium transition-colors">
                  Pricing
                </Link>
              </div>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {isLoaded && (
                <>
                  {isSignedIn ? (
                    <UserDropdown />
                  ) : (
                    <>
                      <Button
                        variant="ghost"
                        onClick={() => setShowLoginModal(true)}
                        className="text-gray-700 hover:text-[#da5389]"
                      >
                        Sign In
                      </Button>
                      <Button
                        onClick={() => setShowSignupModal(true)}
                        className="bg-[#da5389] hover:bg-[#c44578] text-white px-6 py-2 rounded-lg font-medium transition-colors"
                      >
                        Get Started
                      </Button>
                    </>
                  )}
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-[#da5389] p-2"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                <button 
                  onClick={() => {
                    scrollToSection('features');
                    setMobileMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#da5389] w-full text-left"
                >
                  Features
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('how-it-works');
                    setMobileMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#da5389] w-full text-left"
                >
                  How It Works
                </button>
                <Link 
                  href="/pricing" 
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#da5389]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                
                {isLoaded && !isSignedIn && (
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setShowLoginModal(true);
                        setMobileMenuOpen(false);
                      }}
                      className="w-full text-left justify-start mb-2"
                    >
                      Sign In
                    </Button>
                    <Button
                      onClick={() => {
                        setShowSignupModal(true);
                        setMobileMenuOpen(false);
                      }}
                      className="w-full bg-[#da5389] hover:bg-[#c44578] text-white"
                    >
                      Get Started
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ 
              opacity: videoOpacity,
              transition: 'opacity 0.5s ease-in-out'
            }}
            key={currentVideoIndex}
          >
            <source src={heroVideos[currentVideoIndex]} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Nail The
            <span className="block bg-gradient-to-r from-[#ff6b9d] to-[#da5389] bg-clip-text text-transparent">
              Perfect Speech
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Create unforgettable wedding speeches with AI that understands the heart of your message. 
            Perfect for best man, maid of honor, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {isLoaded && (
              <>
                {isSignedIn ? (
                  <Link href="/generator">
                    <Button 
                      size="lg" 
                      className="bg-[#da5389] hover:bg-[#c44578] text-white px-8 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                    >
                      <Sparkles className="mr-2 h-5 w-5" />
                      Create Your Speech
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    size="lg" 
                    onClick={() => setShowSignupModal(true)}
                    className="bg-[#da5389] hover:bg-[#c44578] text-white px-8 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Start Creating Free
                  </Button>
                )}
              </>
            )}
            
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('features')}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-medium rounded-lg backdrop-blur-sm transition-all"
            >
              See How It Works
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-white/80">
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              <span>1000+ Happy Speakers</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>5 Minutes to Perfect Speech</span>
            </div>
            <div className="flex items-center">
              <Sparkles className="h-5 w-5 mr-2" />
              <span>AI-Powered Writing</span>
            </div>
          </div>
        </div>

        {/* Video Cycle Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setVideoOpacity(0);
                  setTimeout(() => {
                    setCurrentVideoIndex(index);
                    setTimeout(() => {
                      setVideoOpacity(1);
                      setIsTransitioning(false);
                    }, 100);
                  }, 500);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentVideoIndex 
                  ? 'bg-white scale-110' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Nail The Speech?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI understands the nuances of wedding speeches and helps you create something truly special.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-[#da5389] to-[#ff6b9d] rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Writing</h3>
              <p className="text-gray-600">
                Our advanced AI understands wedding speech styles and creates personalized content that sounds authentically you.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-[#da5389] to-[#ff6b9d] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Any Wedding Role</h3>
              <p className="text-gray-600">
                Whether you're the best man, maid of honor, father of the bride, or groom - we've got you covered with role-specific content.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-[#da5389] to-[#ff6b9d] rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick & Easy</h3>
              <p className="text-gray-600">
                Generate a complete, heartfelt speech in just 5 minutes. No more staring at a blank page or last-minute panic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-[#faf7f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Creating your perfect wedding speech is simple with our 3-step process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-[#da5389] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Your Role</h3>
              <p className="text-gray-600">
                Select your role in the wedding and tell us about your relationship with the couple.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-[#da5389] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Share Your Stories</h3>
              <p className="text-gray-600">
                Provide some personal details and memories to make your speech unique and heartfelt.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-[#da5389] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get Your Speech</h3>
              <p className="text-gray-600">
                Receive a polished, personalized speech that you can edit and make your own.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            {isLoaded && !isSignedIn && (
              <Button 
                size="lg" 
                onClick={() => setShowSignupModal(true)}
                className="bg-[#da5389] hover:bg-[#c44578] text-white px-8 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Try It Free Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#da5389] to-[#ff6b9d]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Perfect Speech?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of wedding speakers who've delivered unforgettable speeches with our help.
          </p>
          
          {isLoaded && (
            <>
              {isSignedIn ? (
                <Link href="/generator">
                  <Button 
                    size="lg" 
                    className="bg-white text-[#da5389] hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Create Your Speech Now
                  </Button>
                </Link>
              ) : (
                <Button 
                  size="lg" 
                  onClick={() => setShowSignupModal(true)}
                  className="bg-white text-[#da5389] hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Get Started Free
                </Button>
              )}
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#ff6b9d] to-[#da5389] bg-clip-text text-transparent mb-4">
                Nail The Speech
              </h3>
              <p className="text-gray-400 mb-4">
                Create unforgettable wedding speeches with AI that understands the heart of your message.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2">
                <Link href="/generator" className="block text-gray-400 hover:text-white transition-colors">
                  Speech Generator
                </Link>
                <Link href="/pricing" className="block text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
                {isLoaded && isSignedIn && (
                  <Link href="/dashboard" className="block text-gray-400 hover:text-white transition-colors">
                    Dashboard
                  </Link>
                )}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <Link href="/help" className="block text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
                <Link href="/privacy" className="block text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Nail The Speech. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AuthModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        mode="sign-up"
      />
      
      <AuthModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        mode="sign-in"
      />
    </div>
  );
}
EOF  
cd /home/project && cd nail-the-speech && cat > src/app/page.tsx << 'EOF'
"use client";
import { Button } from "@/components/ui/button";
import { Users, Clock, ChevronDown, Menu, Sparkles, ArrowRight } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AuthModal from "@/components/auth/SocialSignupModal";
import UserDropdown from "@/components/auth/UserDropdown";

export default function HomePage() {
  const { isSignedIn, user, isLoaded } = useUser();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(1);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Array of hero videos to cycle through
  const heroVideos = [
    "/videos/hero-video.mp4",
    "/videos/hero-video-2.mp4", 
    "/videos/hero-video-3.mp4"
  ];

  // Preload videos for smoother transitions
  useEffect(() => {
    for (const videoSrc of heroVideos) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'video';
      link.href = videoSrc;
      document.head.appendChild(link);
    }

    return () => {
      // Clean up preload links
      const preloadLinks = document.querySelectorAll('link[rel="preload"][as="video"]');
      preloadLinks.forEach(link => link.remove());
    };
  }, []);

  // Auto-cycle videos every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        switchToNextVideo();
      }
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [currentVideoIndex, isTransitioning]);

  const switchToNextVideo = async () => {
    setIsTransitioning(true);
    setVideoOpacity(0);
    
    // Wait for fade out
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
    
    // Wait a moment then fade in
    setTimeout(() => {
      setVideoOpacity(1);
      setIsTransitioning(false);
    }, 100);
  };

  // Scroll to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf7f4]">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#da5389] to-[#ff6b9d] bg-clip-text text-transparent">
                  Nail The Speech
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-gray-700 hover:text-[#da5389] px-3 py-2 text-sm font-medium transition-colors"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-gray-700 hover:text-[#da5389] px-3 py-2 text-sm font-medium transition-colors"
                >
                  How It Works
                </button>
                <Link href="/pricing" className="text-gray-700 hover:text-[#da5389] px-3 py-2 text-sm font-medium transition-colors">
                  Pricing
                </Link>
              </div>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {isLoaded && (
                <>
                  {isSignedIn ? (
                    <UserDropdown />
                  ) : (
                    <>
                      <Button
                        variant="ghost"
                        onClick={() => setShowLoginModal(true)}
                        className="text-gray-700 hover:text-[#da5389]"
                      >
                        Sign In
                      </Button>
                      <Button
                        onClick={() => setShowSignupModal(true)}
                        className="bg-[#da5389] hover:bg-[#c44578] text-white px-6 py-2 rounded-lg font-medium transition-colors"
                      >
                        Get Started
                      </Button>
                    </>
                  )}
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-[#da5389] p-2"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                <button 
                  onClick={() => {
                    scrollToSection('features');
                    setMobileMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#da5389] w-full text-left"
                >
                  Features
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('how-it-works');
                    setMobileMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#da5389] w-full text-left"
                >
                  How It Works
                </button>
                <Link 
                  href="/pricing" 
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#da5389]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                
                {isLoaded && !isSignedIn && (
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setShowLoginModal(true);
                        setMobileMenuOpen(false);
                      }}
                      className="w-full text-left justify-start mb-2"
                    >
                      Sign In
                    </Button>
                    <Button
                      onClick={() => {
                        setShowSignupModal(true);
                        setMobileMenuOpen(false);
                      }}
                      className="w-full bg-[#da5389] hover:bg-[#c44578] text-white"
                    >
                      Get Started
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ 
              opacity: videoOpacity,
              transition: 'opacity 0.5s ease-in-out'
            }}
            key={currentVideoIndex}
          >
            <source src={heroVideos[currentVideoIndex]} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Nail The
            <span className="block bg-gradient-to-r from-[#ff6b9d] to-[#da5389] bg-clip-text text-transparent">
              Perfect Speech
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Create unforgettable wedding speeches with AI that understands the heart of your message. 
            Perfect for best man, maid of honor, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {isLoaded && (
              <>
                {isSignedIn ? (
                  <Link href="/generator">
                    <Button 
                      size="lg" 
                      className="bg-[#da5389] hover:bg-[#c44578] text-white px-8 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                    >
                      <Sparkles className="mr-2 h-5 w-5" />
                      Create Your Speech
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    size="lg" 
                    onClick={() => setShowSignupModal(true)}
                    className="bg-[#da5389] hover:bg-[#c44578] text-white px-8 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Start Creating Free
                  </Button>
                )}
              </>
            )}
            
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('features')}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-medium rounded-lg backdrop-blur-sm transition-all"
            >
              See How It Works
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-white/80">
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              <span>1000+ Happy Speakers</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>5 Minutes to Perfect Speech</span>
            </div>
            <div className="flex items-center">
              <Sparkles className="h-5 w-5 mr-2" />
              <span>AI-Powered Writing</span>
            </div>
          </div>
        </div>

        {/* Video Cycle Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setVideoOpacity(0);
                  setTimeout(() => {
                    setCurrentVideoIndex(index);
                    setTimeout(() => {
                      setVideoOpacity(1);
                      setIsTransitioning(false);
                    }, 100);
                  }, 500);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentVideoIndex 
                  ? 'bg-white scale-110' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Nail The Speech?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI understands the nuances of wedding speeches and helps you create something truly special.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-[#da5389] to-[#ff6b9d] rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Writing</h3>
              <p className="text-gray-600">
                Our advanced AI understands wedding speech styles and creates personalized content that sounds authentically you.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-[#da5389] to-[#ff6b9d] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Any Wedding Role</h3>
              <p className="text-gray-600">
                Whether you're the best man, maid of honor, father of the bride, or groom - we've got you covered with role-specific content.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-[#da5389] to-[#ff6b9d] rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick & Easy</h3>
              <p className="text-gray-600">
                Generate a complete, heartfelt speech in just 5 minutes. No more staring at a blank page or last-minute panic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-[#faf7f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Creating your perfect wedding speech is simple with our 3-step process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-[#da5389] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Your Role</h3>
              <p className="text-gray-600">
                Select your role in the wedding and tell us about your relationship with the couple.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-[#da5389] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Share Your Stories</h3>
              <p className="text-gray-600">
                Provide some personal details and memories to make your speech unique and heartfelt.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-[#da5389] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get Your Speech</h3>
              <p className="text-gray-600">
                Receive a polished, personalized speech that you can edit and make your own.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            {isLoaded && !isSignedIn && (
              <Button 
                size="lg" 
                onClick={() => setShowSignupModal(true)}
                className="bg-[#da5389] hover:bg-[#c44578] text-white px-8 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Try It Free Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#da5389] to-[#ff6b9d]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Perfect Speech?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of wedding speakers who've delivered unforgettable speeches with our help.
          </p>
          
          {isLoaded && (
            <>
              {isSignedIn ? (
                <Link href="/generator">
                  <Button 
                    size="lg" 
                    className="bg-white text-[#da5389] hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Create Your Speech Now
                  </Button>
                </Link>
              ) : (
                <Button 
                  size="lg" 
                  onClick={() => setShowSignupModal(true)}
                  className="bg-white text-[#da5389] hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Get Started Free
                </Button>
              )}
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#ff6b9d] to-[#da5389] bg-clip-text text-transparent mb-4">
                Nail The Speech
              </h3>
              <p className="text-gray-400 mb-4">
                Create unforgettable wedding speeches with AI that understands the heart of your message.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2">
                <Link href="/generator" className="block text-gray-400 hover:text-white transition-colors">
                  Speech Generator
                </Link>
                <Link href="/pricing" className="block text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
                {isLoaded && isSignedIn && (
                  <Link href="/dashboard" className="block text-gray-400 hover:text-white transition-colors">
                    Dashboard
                  </Link>
                )}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <Link href="/help" className="block text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
                <Link href="/privacy" className="block text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Nail The Speech. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AuthModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        mode="sign-up"
      />
      
      <AuthModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        mode="sign-in"
      />
    </div>
  );
}
