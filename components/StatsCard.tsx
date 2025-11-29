'use client';

import { type ReactNode } from 'react';
import { TrendingUp } from 'lucide-react';

interface StatsCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  trend: string;
}

export function StatsCard({ icon, label, value, trend }: StatsCardProps) {
  const isPositive = trend.startsWith('+');

  return (
    <div className="glass-effect rounded-lg p-6 transition-all duration-300 hover:shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-primary/10 rounded-lg text-primary">
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-success' : 'text-danger'}`}>
          <TrendingUp className="w-4 h-4" />
          <span>{trend}</span>
        </div>
      </div>
      
      <div className="text-3xl font-bold text-fg mb-1">
        {value}
      </div>
      
      <div className="text-sm text-fg/60">
        {label}
      </div>
    </div>
  );
}
