import React from 'react';
import { Award, Check } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12">Certified & Fully Insured</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Insurance Card */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
               <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">INSURANCE</h3>
            <div className="mt-4 px-4 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">VERIFIED</div>
          </div>

          {/* WSIB Card */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
               <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">WSIB</h3>
            <div className="mt-4 px-4 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">COMPLIANT</div>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-stone-200 p-8">
           <h3 className="text-lg font-semibold text-stone-900 mb-6">Our Team Qualifications Include</h3>
           <div className="flex flex-wrap justify-center gap-4">
              {['First Aid', 'Aerial', 'WAH (Working at Heights)', 'Forklift', 'WHMIS'].map((cert) => (
                <div key={cert} className="flex items-center gap-2 bg-stone-100 px-5 py-3 rounded-full text-stone-700 font-medium">
                  <Check className="w-4 h-4 text-brand-green" />
                  {cert}
                </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;