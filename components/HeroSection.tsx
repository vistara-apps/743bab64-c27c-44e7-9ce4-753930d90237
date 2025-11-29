'use client';

import { Flame, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 text-center">
      <div className="relative inline-block mb-6">
        <div className="absolute inset-0 blur-3xl bg-primary/20 animate-pulse-glow"></div>
        <div className="relative coin-shine bg-gradient-to-br from-warning via-danger to-warning p-8 rounded-full">
          <Flame className="w-24 h-24 text-white" />
        </div>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        <span className="gradient-text">Forge Meme Coins</span>
        <br />
        <span className="text-fg">on Base</span>
      </h1>

      <p className="text-xl md:text-2xl text-fg/70 mb-8 max-w-3xl mx-auto leading-relaxed">
        Launch, distribute, and manage meme coins with integrated{' '}
        <span className="text-warning font-semibold">Kimbo burn</span> mechanics
        and <span className="text-primary font-semibold">Farcaster</span> social tools
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="group relative px-8 py-4 bg-primary hover:bg-accent text-white rounded-lg font-semibold text-lg transition-all duration-200 shadow-card hover:shadow-overlay overflow-hidden">
          <span className="relative z-10 flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Create Your Token
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </button>

        <button className="px-8 py-4 glass-effect text-fg rounded-lg font-semibold text-lg transition-all duration-200 hover:border-primary/30">
          View Examples
        </button>
      </div>

      <div className="mt-12 flex items-center justify-center gap-8 text-sm text-fg/60">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span>Gasless Transactions</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span>Built on Base</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-warning rounded-full animate-pulse"></div>
          <span>Kimbo Burn</span>
        </div>
      </div>
    </section>
  );
}
