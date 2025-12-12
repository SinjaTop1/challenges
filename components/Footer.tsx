import React from 'react';
import { Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-500 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Shield className="w-6 h-6 text-stone-600" />
          <span className="font-bold text-stone-300">COMPETENCE GRID</span>
        </div>
        <div className="text-sm text-center md:text-right">
          <p>© {new Date().getFullYear()} The Competence Grid Project.</p>
          <p className="mt-1">Built for resilience.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
