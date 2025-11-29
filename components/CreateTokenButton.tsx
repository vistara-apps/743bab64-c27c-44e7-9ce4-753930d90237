'use client';

import { Rocket } from 'lucide-react';

export function CreateTokenButton() {
  const handleCreate = () => {
    // This will navigate to the token creation flow
    console.log('Create token clicked');
  };

  return (
    <button
      onClick={handleCreate}
      className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-card hover:shadow-overlay overflow-hidden"
    >
      <span className="relative z-10 flex items-center gap-3">
        <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
        Launch Your Meme Coin
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
}
