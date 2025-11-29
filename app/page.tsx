'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { Flame, Coins, Rocket, TrendingUp, Users, Zap } from 'lucide-react';
import { ConnectWallet } from '@/components/ConnectWallet';
import { HeroSection } from '@/components/HeroSection';
import { FeatureCard } from '@/components/FeatureCard';
import { StatsCard } from '@/components/StatsCard';
import { CreateTokenButton } from '@/components/CreateTokenButton';

export default function Home() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
    sdk.actions.ready();
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Flame className="w-8 h-8 text-warning animate-pulse" />
              <div className="absolute inset-0 blur-lg bg-warning/30"></div>
            </div>
            <h1 className="text-2xl font-bold gradient-text">MemeCoinForge</h1>
          </div>
          <ConnectWallet />
        </div>
      </header>

      {/* Hero Section */}
      <div className="pt-24 pb-12">
        <HeroSection />
      </div>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            icon={<Coins className="w-6 h-6" />}
            label="Tokens Created"
            value="1,234"
            trend="+12%"
          />
          <StatsCard
            icon={<Flame className="w-6 h-6" />}
            label="Kimbo Burned"
            value="567.8K"
            trend="+24%"
          />
          <StatsCard
            icon={<Users className="w-6 h-6" />}
            label="Active Users"
            value="8,901"
            trend="+18%"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Forge Your Meme Coin</span>
          </h2>
          <p className="text-lg text-fg/70 max-w-2xl mx-auto">
            Launch, distribute, and manage meme coins on Base with integrated Kimbo burn mechanics and Farcaster social tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Rocket className="w-8 h-8" />}
            title="Simplified Launchpad"
            description="Deploy your meme coin in minutes with our step-by-step interface. No coding required."
            gradient="from-primary to-accent"
          />
          <FeatureCard
            icon={<Flame className="w-8 h-8" />}
            title="Kimbo Burn Integration"
            description="Every transaction burns Kimbo tokens with transparent, real-time analytics."
            gradient="from-warning to-danger"
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8" />}
            title="Gasless Transactions"
            description="Create and interact with tokens without paying gas fees. We sponsor your transactions."
            gradient="from-accent to-primary"
          />
          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="Social Distribution"
            description="Launch with Farcaster Frames for instant community engagement and viral growth."
            gradient="from-success to-accent"
          />
          <FeatureCard
            icon={<TrendingUp className="w-8 h-8" />}
            title="Real-time Analytics"
            description="Track burns, holders, and transactions with comprehensive dashboards."
            gradient="from-primary to-success"
          />
          <FeatureCard
            icon={<Coins className="w-8 h-8" />}
            title="Custom Branding"
            description="Design unique visual identity with custom logos, colors, and Farcaster integration."
            gradient="from-accent to-warning"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="glass-effect rounded-lg p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Ready to Launch Your Meme Coin?
            </h2>
            <p className="text-lg text-fg/70 mb-8 max-w-2xl mx-auto">
              Join thousands of creators building the next generation of meme coins on Base
            </p>
            <CreateTokenButton />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/10 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-warning" />
              <span className="text-sm text-fg/70">
                Built on Base • Powered by Farcaster
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-fg/70">
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Docs
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                GitHub
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Discord
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
