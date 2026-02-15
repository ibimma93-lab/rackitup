import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="opacity-90">
           <Logo variant="light" />
        </div>
        
        <div className="text-stone-400 text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Rack-It-Up Toronto. All rights reserved.</p>
          <div className="flex gap-6 justify-center md:justify-end mt-2">
            <a href="#" className="text-stone-500 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-stone-500 hover:text-white transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;