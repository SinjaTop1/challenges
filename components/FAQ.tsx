import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-900 text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
            {FAQS.map((faq, index) => (
                <div key={index} className="border border-stone-200 rounded-lg overflow-hidden">
                    <button 
                        className="w-full px-6 py-4 text-left bg-stone-50 hover:bg-stone-100 flex justify-between items-center transition-colors"
                        onClick={() => toggle(index)}
                    >
                        <span className="font-bold text-stone-800">{faq.q}</span>
                        {openIndex === index ? <ChevronUp className="w-5 h-5 text-stone-500" /> : <ChevronDown className="w-5 h-5 text-stone-500" />}
                    </button>
                    {openIndex === index && (
                        <div className="px-6 py-4 bg-white text-stone-600 leading-relaxed">
                            {faq.a}
                        </div>
                    )}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
