import React from 'react';
import { CalendarClock, ShieldCheck, Trophy, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-800/30 rounded-l-[100px] -mr-20 transform skew-x-12"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
             <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-stone-800 mb-8 border border-stone-700">
                <img 
                  src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Team working on warehouse logistics" 
                  className="w-full h-full object-cover opacity-80"
                />
             </div>
             <div className="grid grid-cols-2 gap-4">
               <div className="bg-stone-800 p-6 rounded-2xl border border-stone-700">
                 <Trophy className="w-8 h-8 text-brand-green mb-4" />
                 <div className="text-3xl font-bold mb-1">18+</div>
                 <div className="text-stone-400 text-sm">Years Experience</div>
               </div>
               <div className="bg-stone-800 p-6 rounded-2xl border border-stone-700">
                 <Users className="w-8 h-8 text-brand-green mb-4" />
                 <div className="text-3xl font-bold mb-1">100%</div>
                 <div className="text-stone-400 text-sm">Customer Satisfaction</div>
               </div>
             </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-brand-green font-bold tracking-wide uppercase text-sm mb-3">About Us</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-6">Built on Trust & Experience</h3>
              <p className="text-stone-300 text-lg leading-relaxed mb-6">
                RACK-IT-UP TORONTO is your premier choice for racking installation and servicing throughout Southern Ontario. Our goal is to provide you the best possible racking solutions tailored to fit your needs, ensuring that your facilities are safe and optimized for seamless operations.
              </p>
              <p className="text-stone-300 text-lg leading-relaxed">
                Our owner brings over 18 years of hands-on expertise in installing racking systems, designing complex layouts, and planning warehouses. With this deep understanding of the industry, we can provide customized solutions that precisely meet your specific needs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
                  <CalendarClock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Flexible Scheduling</h4>
                  <p className="text-stone-400">
                    We understand downtime is costly. We offer evening and weekend services to minimize disruption to your operations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Safety First</h4>
                  <p className="text-stone-400">
                    Our team is well-versed in safety regulations and industry best practices. Your facility's safety is our paramount importance.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;