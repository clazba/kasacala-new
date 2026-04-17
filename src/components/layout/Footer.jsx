import React from 'react';
import CasaKalaLogo from '../../assets/CasaKalaLogo';

export function Footer() {
  return (
    <footer className="w-full px-12 py-16 flex flex-col items-center gap-8 bg-surface">
      <div className="text-lg font-light text-on-surface-variant font-headline tracking-widest uppercase">
        <CasaKalaLogo className="text-on-surface h-20 md:h-32 w-auto object-contain" />
      </div>
      <nav className="flex gap-12 font-label">
        <a className="text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-primary underline underline-offset-8 transition-colors duration-300" href="#">Privacy</a>
        <a className="text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-primary underline underline-offset-8 transition-colors duration-300" href="#">Terms</a>
        <a className="text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-primary underline underline-offset-8 transition-colors duration-300" href="#">Press</a>
        <a className="text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-primary underline underline-offset-8 transition-colors duration-300" href="#">Contact</a>
      </nav>
      <div className="text-on-surface-variant font-label text-[10px] tracking-widest uppercase">
        © 2026 CASA KALA
      </div>
    </footer>
  );
}
