import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      if (!res.ok) throw new Error(`Submit failed: ${res.status}`);

      setStatus('success');
      form.reset();
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

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
            </div>
          </div>

          <div className="bg-stone-50 p-8 md:p-10 rounded-3xl border border-stone-100 shadow-lg min-h-[500px] flex flex-col justify-center">
            {status === 'success' ? (
              <div className="text-center animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-stone-900 mb-4">Message Sent!</h3>
                <p className="text-lg text-stone-600 mb-8 max-w-sm mx-auto">
                  Thank you for reaching out. We have received your inquiry and will get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 bg-stone-900 text-white font-bold rounded-xl hover:bg-brand-green transition-colors shadow-lg"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-stone-900 mb-6">Send Us a Message</h3>
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don’t fill this out: <input name="bot-field" />
                    </label>
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-shadow"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">Phone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
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
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-shadow"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-stone-700 mb-2">Service Required</label>
                    <select 
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-shadow bg-white"
                    >
                      <option value="New Installation">New Installation</option>
                      <option value="Repairs">Repairs</option>
                      <option value="Maintenance">Maintenance</option>
                      <option value="Inspection">Inspection</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-shadow"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 px-6 bg-stone-900 text-white font-bold rounded-xl hover:bg-brand-green transition-colors duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Request'
                    )}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-500 text-sm text-center">
                      There was an error sending your message. Please try again or call us directly.
                    </p>
                  )}
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
