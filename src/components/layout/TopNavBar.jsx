import React from 'react';
import CasaKalaLogo from '../../assets/CasaKalaLogo';

export function TopNavBar() {
  return (
    <nav className="fixed top-0 w-full bg-background/60 backdrop-blur-xl z-50 flex justify-between items-center px-12 py-8 transition-colors duration-500">
      <div className="flex items-center justify-center">
        <CasaKalaLogo className="text-on-surface h-24 md:h-32 w-auto object-contain" />
      </div>

      {/* Hidden layout elements unwrap to list at larger MD scale */}
      <div className="hidden md:flex items-center gap-12 font-label">
        <a className="text-primary border-b border-primary/30 pb-1 uppercase tracking-widest text-xs transition-colors duration-500" href="#">Spaces</a>
        <a className="text-on-surface-variant uppercase tracking-widest text-xs hover:text-on-surface transition-colors duration-500" href="#">Facilities</a>
        <a className="text-on-surface-variant uppercase tracking-widest text-xs hover:text-on-surface transition-colors duration-500" href="#">Use</a>
        <a className="text-on-surface-variant uppercase tracking-widest text-xs hover:text-on-surface transition-colors duration-500" href="#">Book</a>
      </div>

      {/* Rectangular (0px radius) Primary Action Button */}
      <button className="bg-primary text-on-primary px-8 py-3 font-label uppercase tracking-widest text-xs font-bold transition-all duration-500 opacity-75 hover:opacity-90">
        Inquire
      </button>
    </nav>
  );
}
