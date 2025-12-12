import React from 'react';
import { Instagram, FileText, Send, MessageSquare } from 'lucide-react';

const JoinSubmit: React.FC = () => {
  return (
    <div className="bg-stone-100 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-stone-900 mb-6">Ready to Start?</h2>
            <p className="text-xl text-stone-600 mb-12 max-w-2xl mx-auto">
                Download the grid. Join the community. Do the work.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <a href="/assets/competence-grid.pdf" target="_blank" className="group bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-center">
                    <div className="p-4 bg-stone-100 rounded-full mb-4 group-hover:bg-stone-200 transition-colors">
                        <FileText className="w-8 h-8 text-stone-700" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-stone-900">1. Download</h3>
                    <p className="text-sm text-stone-500">Get the PDF Challenge Sheet</p>
                </a>

                <a href="https://instagram.com/REPLACE_ME" target="_blank" className="group bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-center">
                    <div className="p-4 bg-orange-50 rounded-full mb-4 group-hover:bg-orange-100 transition-colors">
                        <Instagram className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-stone-900">2. Join</h3>
                    <p className="text-sm text-stone-500">Follow on Instagram</p>
                </a>

                <a href="https://discord.gg/REPLACE_ME" target="_blank" className="group bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-center">
                    <div className="p-4 bg-indigo-50 rounded-full mb-4 group-hover:bg-indigo-100 transition-colors">
                        <MessageSquare className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-stone-900">3. Discuss</h3>
                    <p className="text-sm text-stone-500">Join the Discord</p>
                </a>

                <a href="https://forms.gle/REPLACE_ME" target="_blank" className="group bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-center">
                    <div className="p-4 bg-green-50 rounded-full mb-4 group-hover:bg-green-100 transition-colors">
                        <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-stone-900">4. Submit</h3>
                    <p className="text-sm text-stone-500">Send proof & reflection</p>
                </a>
            </div>
        </div>
    </div>
  );
};

export default JoinSubmit;
