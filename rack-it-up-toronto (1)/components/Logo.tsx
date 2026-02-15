import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'default' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-brand-navy';
  
  return (
    <div className={`flex items-center ${className}`}>
      {/* Text Lockup */}
      <div className="flex flex-col leading-none">
        <span className={`font-extrabold text-2xl md:text-3xl tracking-tighter ${textColor}`}>
          RACK IT UP
        </span>
        <span className="text-brand-green font-medium text-[0.6rem] md:text-[0.65rem] tracking-tight leading-tight">
          providing evenings & weekend racking services
        </span>
      </div>
    </div>
  );
};

export default Logo;