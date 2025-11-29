'use client';

import { useState } from 'react';
import { Wallet } from 'lucide-react';

export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    // This will be integrated with OnchainKit's ConnectWallet component
    setIsConnected(!isConnected);
  };

  return (
    <button
      onClick={handleConnect}
      className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-accent text-white rounded-lg transition-all duration-200 shadow-card hover:shadow-overlay"
    >
      <Wallet className="w-4 h-4" />
      <span className="font-medium">
        {isConnected ? '0x1234...5678' : 'Connect Wallet'}
      </span>
    </button>
  );
}
