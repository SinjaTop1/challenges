import React from 'react';
import { X, Sparkles, AlertTriangle } from 'lucide-react';

interface AdviceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  isLoading: boolean;
  error?: string;
}

const AdviceModal: React.FC<AdviceModalProps> = ({ isOpen, onClose, title, content, isLoading, error }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/50 backdrop-blur-sm p-4 print:hidden">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden border border-stone-200">
        <div className="flex justify-between items-center p-4 border-b border-stone-100 bg-stone-50">
          <h3 className="font-bold text-lg flex items-center gap-2 text-stone-800">
            <Sparkles className="w-5 h-5 text-orange-500" />
            Field Manual: {title}
          </h3>
          <button 
            onClick={onClose}
            className="text-stone-400 hover:text-stone-900 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-8 space-y-3">
              <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-stone-500 text-sm font-mono">Contacting HQ...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center text-center text-red-600 py-4">
              <AlertTriangle className="w-10 h-10 mb-2 opacity-50" />
              <p>{error}</p>
              <p className="text-xs text-stone-400 mt-2">Check your API Key configuration.</p>
            </div>
          ) : (
            <div className="prose prose-stone prose-sm max-w-none">
              <div className="whitespace-pre-wrap font-sans text-stone-700 leading-relaxed">
                {content}
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-stone-100 bg-stone-50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 text-white text-sm font-bold rounded hover:bg-stone-700 transition-colors"
          >
            ACKNOWLEDGED
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdviceModal;
