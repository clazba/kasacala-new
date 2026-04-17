import React from 'react';
import { Link } from 'react-router-dom';
import CasaKalaLogo from '../../assets/CasaKalaLogo';

export function SplashPage() {
  return (
    <div className="antialiased min-h-screen flex flex-col overflow-hidden bg-background font-body">

      <div
        className="relative w-full h-screen flex flex-col justify-between bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(to bottom, rgba(20, 19, 16, 0.2), rgba(20, 19, 16, 0.8)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAIa9uMaZVgobMbwPzzwiN2uFexVSKmDx0SwjP3wk25C2SkCKJE3Jbz_J482-h0tooUXwA-FN37CBgUClB209KOGahaTqOGgI8yWRyTnDkmgbP0gpJCgmK-pbYx8RMn-wij5DmCD-xCLvpZ7ObOzRuCkkCBVra2XkfpPJt-8MrhFiB-cb68MK08MfCuBJz9bcHuO5f87KZtvTKUtpj-ypqqCEHR-kbn8_5HvH0gG1X29bDKmPxhpjGHe5xfMzxLDxdgYBIXJEXN_S1J')" }}
      >

        <header className="w-full flex justify-center pt-12 md:pt-20 px-8 z-10">
          <div className="flex items-center justify-center animate-fade-in-up">
            <CasaKalaLogo className="text-on-surface h-10 md:h-24 w-auto object-contain" />
          </div>
        </header>

        {/* Main Center Content: Semantic main */}
        <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-12 z-10 text-center">
          {/* Editorial Headline with Selective Italics */}
          <h2 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface leading-tight tracking-tight max-w-4xl">
            One site,<br />
            <span className="italic text-primary">multiple souls.</span>
          </h2>

          {/* Static text utilizing the H3 version of the headline font (Newsreader italic) */}
          <nav className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12 font-headline italic text-2xl md:text-3xl text-on-surface-variant">
            <span>Work...Play...Create...Connect</span>
          </nav>
        </main>

        {/* Footer / Scroll Indicator: Semantic footer */}
        <footer className="w-full flex justify-center pb-12 z-10">
          <Link to="/menu" className="flex flex-col items-center group transition-opacity duration-700 hover:opacity-70 focus:outline-none">
            <span className="font-label text-xs uppercase tracking-widest text-on-surface mb-4">Enter</span>
            <div className="w-12 h-12 border border-outline-variant/40 flex items-center justify-center text-on-surface group-hover:border-primary transition-colors duration-500 rounded-none">
              <span className="material-symbols-outlined text-lg">arrow_downward</span>
            </div>
          </Link>
        </footer>

        {/* Ambient Grain Overlay - Provides the cinematic texture without lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"></div>
      </div>
    </div>
  );
}
