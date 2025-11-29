'use client';

import { type ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
}

export function FeatureCard({ icon, title, description, gradient }: FeatureCardProps) {
  return (
    <div className="group glass-effect rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-overlay cursor-pointer">
      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <div className="text-white">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-fg group-hover:text-primary transition-colors duration-200">
        {title}
      </h3>
      
      <p className="text-fg/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
