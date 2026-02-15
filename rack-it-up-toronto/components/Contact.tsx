import React from 'react';
import { Phone, Mail, MapPin, CreditCard } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-brand-green font-bold tracking-wide uppercase text-sm mb-3">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Let's Optimize Your Space</h3>
            <p className="text-lg text-stone-600 mb-12">
              Ready to improve your warehouse efficiency? Reach out to us for a free quote. We look forward to the opportunity to serve you and exceed your expectations.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-stone-900 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-stone-900">Phone</h4>
                  <a href="tel:647-782-9061" className="text-stone-600 hover:text-brand-green transition-colors text-lg block">
                    647-782-9061
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-stone-900 flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-stone-900">Email</h4>
                  <a href="mailto:rackituptoronto@gmail.com" className="text-stone-600 hover:text-brand-green transition-colors text-lg block">
                    rackituptoronto@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-stone-900 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-stone-900">Service Area</h4>
                  <p className="text-stone-600 text-lg">
                    Serving all of Southern Ontario
                  </p>
                </div>
              </div>

              <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 mt-8">
                <div className="flex items-center gap-3 mb-4">
                   <CreditCard className="w-5 h-5 text-brand-green" />
                   <h4 className="font-bold text-stone-900">Payment Details</h4>
                </div>
                <div className="space-y-2 text-stone-600">
                  <p><span className="font-semibold text-stone-900">e-Transfer:</span> rackituptoronto@gmail.com</p>
                  <p><span className="font-semibold text-stone-900">Cheques payable to:</span> Rack It Up</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-50 p-8 md:p-10 rounded-3xl border border-stone-100 shadow-lg">
            <h3 className="text-2xl font-bold text-stone-900 mb-6">Send Us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-shadow"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-shadow"
                    placeholder="647-123-4567"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-shadow"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-stone-700 mb-2">Service Required</label>
                <select 
                  id="service"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-shadow bg-white"
                >
                  <option>New Installation</option>
                  <option>Repairs</option>
                  <option>Maintenance</option>
                  <option>Inspection</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-shadow"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 px-6 bg-stone-900 text-white font-bold rounded-xl hover:bg-brand-green transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Send Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;