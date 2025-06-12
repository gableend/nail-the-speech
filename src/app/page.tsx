import { Button } from "@/components/ui/button";
import { Users, Clock, ChevronDown, Menu, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import AuthNavigation from "@/components/AuthNavigation";
import HomeClient from "@/components/HomeClient";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#faf7f4]">
      {/* Top Banner */}
      <div className="bg-[#000000] text-white text-center py-2 text-sm">
        <div className="flex items-center justify-center gap-4">
          <span>Create perfect speeches. Get your first speech free with Nail The Speech!</span>
          <Link href="/generator">
            <button className="flex items-center gap-1 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-xs font-medium transition-colors">
              Get Started
              <ArrowRight className="h-3 w-3" />
            </button>
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-[#e8e1d8] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-3xl">🎤</span>
              <span className="font-bold text-2xl text-[#181615]">Nail The Speech</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center text-[#181615] hover:text-[#da5389] font-medium">
                  Speech Types <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-lg border border-[#e8e1d8] p-4 min-w-[200px]">
                  <Link href="/generator?role=groom" className="block py-2 text-[#181615] hover:text-[#da5389]">Groom</Link>
                  <Link href="/generator?role=bride" className="block py-2 text-[#181615] hover:text-[#da5389]">Bride</Link>
                  <Link href="/generator?role=best-man" className="block py-2 text-[#181615] hover:text-[#da5389]">Best Man</Link>
                  <Link href="/generator?role=maid-of-honor" className="block py-2 text-[#181615] hover:text-[#da5389]">Maid of Honor</Link>
                  <Link href="/generator?role=father-of-bride" className="block py-2 text-[#181615] hover:text-[#da5389]">Father of Bride</Link>
                  <Link href="/generator?role=mother-of-bride" className="block py-2 text-[#181615] hover:text-[#da5389]">Mother of Bride</Link>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center text-[#181615] hover:text-[#da5389] font-medium">
                  Help & Advice <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-lg border border-[#e8e1d8] p-4 min-w-[200px]">
                  <Link href="/generator" className="block py-2 text-[#181615] hover:text-[#da5389]">Speech Tips</Link>
                  <Link href="/generator" className="block py-2 text-[#181615] hover:text-[#da5389]">Practice Guide</Link>
                  <Link href="/generator" className="block py-2 text-[#181615] hover:text-[#da5389]">Examples</Link>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <AuthNavigation />
              <Button className="md:hidden rounded-full">
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#181615] leading-[1.1] tracking-tight">
                Nail your wedding speech.{" "}
                <span className="text-[#da5389]">No stress.</span>{" "}
                <span className="text-[#e9a41a]">Just magic.</span>
              </h1>

              {/* Get Started Button */}
              <div className="space-y-6">
                <Link href="/generator">
                  <Button className="bg-[#da5389] hover:bg-[#c44578] text-white px-10 py-5 text-xl font-semibold shadow-lg rounded-full transition-all duration-200 transform hover:scale-105 hover:shadow-xl">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="text-lg text-[#8f867e] max-w-md leading-relaxed">
                  Built with AI. Designed for you. Free to get started.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-[#e8e1d8]">
                  <div className="w-10 h-10 bg-[#da5389]/10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-[#da5389]" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-[#181615]">10,000+</div>
                    <div className="text-sm text-[#8f867e]">speeches created</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-[#e8e1d8]">
                  <div className="w-10 h-10 bg-[#e9a41a]/10 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-[#e9a41a]" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-[#181615]">Ready</div>
                    <div className="text-sm text-[#8f867e]">in seconds</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Video */}
            <HomeClient />
          </div>
        </div>
      </section>

      {/* Find Speech Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#181615] mb-4">
              Find speeches for every wedding role
            </h2>
            <p className="text-lg text-[#8f867e]">
              Discover AI-generated speeches for any role and every style.
            </p>
          </div>

          {/* Speech Types Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Best Man",
                image: "/images/best-man.webp",
                popular: true,
                slug: "best-man",
                description: "Hilarious stories and heartfelt moments for the groom's closest friend"
              },
              {
                title: "Maid of Honor",
                image: "/images/brides-maid.webp",
                popular: true,
                slug: "maid-of-honor",
                description: "Celebrate your friendship and her journey to finding love"
              },
              {
                title: "Father of Bride",
                image: "/images/father-of-bride.webp",
                popular: false,
                slug: "father-of-bride",
                description: "A father's pride and blessing for his daughter's new chapter"
              },
              {
                title: "Mother of Bride",
                image: "/images/mother-of-bride.webp",
                popular: false,
                slug: "mother-of-bride",
                description: "Loving words from a mother's heart on this special day"
              },
              {
                title: "Groom",
                image: "/images/groom.webp",
                popular: false,
                slug: "groom",
                description: "Thank your loved ones and declare your love for your bride"
              },
              {
                title: "Bride",
                image: "/images/bride.webp",
                popular: false,
                slug: "bride",
                description: "Express gratitude and love to family, friends, and your groom"
              }
            ].map((role) => (
              <Link key={role.title} href={`/generator?role=${role.slug}`} className="group">
                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="relative">
                    <img
                      src={role.image}
                      alt={role.title}
                      className="w-full h-72 object-cover object-top"
                      loading="lazy"
                    />
                    {role.popular && (
                      <span className="absolute top-3 right-3 bg-[#da5389] text-white text-sm px-3 py-1 rounded-full font-medium">
                        Popular
                      </span>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-[#da5389] rounded-full p-3">
                        <Sparkles className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[#da5389] text-xl font-bold mb-2">{role.title}</h3>
                    <p className="text-[#6b5b73] text-sm leading-relaxed mb-4">{role.description}</p>
                    <div className="flex items-center text-[#da5389] font-medium">
                      <span>Get Started</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-[#faf7f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#181615] mb-4">
              We'll walk you through every part of speech writing
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Your personal details",
                description: "Tell us about your role, the couple, and your relationship. Share your favorite memories and the tone you want."
              },
              {
                step: "2",
                title: "Your speech style",
                description: "Choose from heartfelt, funny, balanced, or formal tones. Select your preferred speech length and special moments to include."
              },
              {
                step: "3",
                title: "Your perfect speech",
                description: "Get your AI-generated speech instantly. Copy to clipboard, export to PDF, or edit to make it uniquely yours."
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#da5389] text-white flex items-center justify-center font-bold text-lg mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-[#181615] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#8f867e]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/generator">
              <Button className="bg-[#da5389] hover:bg-[#c44578] text-white px-8 py-3 text-lg font-semibold rounded-full">
                Start Creating
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#181615] mb-12">
            Wedding speakers love us (and we love them!)
          </h2>

          <div className="bg-[#faf7f4] rounded-lg p-8">
            <p className="text-lg text-[#181615] italic mb-6">
              "I really enjoyed using Nail The Speech and found it very useful right away. When I began writing my speech,
              I didn't know where to start. The AI guidance was super helpful and eased my mind when I felt overwhelmed.
              I delivered a speech that made everyone cry happy tears!"
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#da5389] flex items-center justify-center text-white font-semibold">
                JM
              </div>
              <div className="text-left">
                <p className="font-semibold text-[#181615]">James & Maria</p>
                <p className="text-sm text-[#8f867e]">Chicago, IL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#181615] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🎤</span>
                <span className="font-bold text-xl">Nail The Speech</span>
              </div>
              <p className="text-gray-300 mb-4">
                Create unforgettable wedding speeches with AI that understands the heart of your message.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Speech Types</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/generator" className="hover:text-[#da5389]">Best Man</Link></li>
                <li><Link href="/generator" className="hover:text-[#da5389]">Maid of Honor</Link></li>
                <li><Link href="/generator" className="hover:text-[#da5389]">Father of Bride</Link></li>
                <li><Link href="/generator" className="hover:text-[#da5389]">Mother of Bride</Link></li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="font-semibold mb-4">Help</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/generator" className="hover:text-[#da5389]">Speech Tips</Link></li>
                <li><Link href="/generator" className="hover:text-[#da5389]">Examples</Link></li>
                <li><Link href="/generator" className="hover:text-[#da5389]">Practice Guide</Link></li>
                <li><Link href="/generator" className="hover:text-[#da5389]">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Nail The Speech. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-300 mt-4 md:mt-0">
              <Link href="/generator" className="hover:text-[#da5389]">Privacy Policy</Link>
              <Link href="/generator" className="hover:text-[#da5389]">Terms of Service</Link>
              <Link href="/data-deletion" className="hover:text-[#da5389]">Data Deletion</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
