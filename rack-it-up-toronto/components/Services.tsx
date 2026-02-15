import React from 'react';
import { Settings, Wrench, HardHat, Recycle, ClipboardCheck, LayoutGrid } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Installation",
    description: "Expert installation of new & used racking systems including Selective Pallet, Push-Back Pallet, and Cantilever.",
    icon: Settings
  },
  {
    title: "Repairs",
    description: "Prompt and reliable repair services to ensure your racking systems remain safe and operational.",
    icon: Wrench
  },
  {
    title: "Maintenance",
    description: "Regular maintenance of existing systems to prevent issues and extend the lifespan of your infrastructure.",
    icon: HardHat
  },
  {
    title: "Dismantling",
    description: "Safe and efficient dismantling services when you need to move, upgrade, or close down a facility.",
    icon: Recycle
  },
  {
    title: "Safety Inspections",
    description: "Comprehensive inspections to ensure compliance with safety regulations and industry best practices.",
    icon: ClipboardCheck
  },
  {
    title: "Reconfiguration",
    description: "Optimizing your current setup to meet changing inventory needs and improve workflow efficiency.",
    icon: LayoutGrid
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white rounded-t-[3rem] -mt-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-green font-bold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6">Comprehensive Racking Solutions</h3>
          <p className="text-lg text-stone-600">
            From installation to ongoing servicing, we are committed to being your trusted ally in maximizing your warehouse space safely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl bg-stone-50 hover:bg-brand-green transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default border border-stone-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-white text-brand-green flex items-center justify-center mb-6 shadow-sm group-hover:bg-white/20 group-hover:text-white transition-colors">
                <service.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-white transition-colors">{service.title}</h4>
              <p className="text-stone-600 leading-relaxed group-hover:text-white/90 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;