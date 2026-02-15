import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-sm font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-green"></span>
              Southern Ontario's Premier Racking Experts
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-stone-900 leading-[1.1] tracking-tight">
              Efficiency Elevated, <br />
              <span className="text-brand-green">Safety Ensured.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-stone-600 max-w-lg leading-relaxed">
              Top-notch racking installation and servicing. We prioritize building partnerships based on trust, quality service, and maximizing your warehouse space.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-stone-900 rounded-full hover:bg-brand-green transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-stone-700 bg-white border border-stone-200 rounded-full hover:bg-stone-50 transition-all duration-300"
              >
                Our Services
              </a>
            </div>

            <div className="pt-8 border-t border-stone-200 flex flex-wrap gap-6 text-sm font-medium text-stone-500">
               <div className="flex items-center gap-2">
                 <CheckCircle2 className="w-5 h-5 text-brand-green" />
                 <span>Fully Insured & WSIB</span>
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle2 className="w-5 h-5 text-brand-green" />
                 <span>18+ Years Experience</span>
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle2 className="w-5 h-5 text-brand-green" />
                 <span>Weekend Service</span>
               </div>
            </div>
          </div>

          <div className="relative">
             <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Industrial warehouse racking system" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                    <p className="text-2xl font-bold mb-2">Maximize Your Space</p>
                    <p className="text-white/80">Custom layouts designed for your specific inventory needs.</p>
                </div>
             </div>
             
             {/* Decorative element */}
             <div className="absolute -z-10 top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-stone-200/50 rounded-full blur-3xl opacity-50"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;