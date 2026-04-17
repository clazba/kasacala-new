import React from 'react';

export function PillarTemplate({ pillarName, title, excerpt, introText, introImage, spaces, facilities, use, synergy, heroImage }) {
  return (
    <div className="bg-background text-on-background selection:bg-primary selection:text-on-primary min-h-screen">

      <main className="w-full min-h-screen font-body">

        {/* A. Hero Section */}
        <section className="relative h-[90svh] flex items-end p-12 md:p-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt={`${pillarName} Hero`} className="w-full h-full object-cover outline-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-75 brightness-90 contrast-90 saturate-75"></div>
          </div>

          <div className="relative z-10 max-w-4xl">
            <span className="font-label text-base tracking-widest uppercase text-primary mb-6 block">
              The {pillarName} Pillar
            </span>
            <h1 className="font-headline text-6xl md:text-8xl font-extralight tracking-tight text-on-background mb-8 leading-[1.1]">
              The <span className="italic">Art</span> of {title}
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed max-w-2xl mb-12">
              Atmosphere: {excerpt}
            </p>
            <div className="font-label text-xs uppercase tracking-widest font-bold text-on-background/60 hover:text-primary transition-colors flex items-center gap-4 cursor-pointer">
              <span className="material-symbols-outlined text-sm">south</span>
            </div>
          </div>
        </section>

        <div className="relative">
          {/* B. Intro Summary */}
          <section className="px-20 md:px-32 pt-32 pb-40 bg-surface-low">
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl font-light mb-8 italic">
                Spirit of {pillarName}
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                {introText}
              </p>
            </div>
          </section>

          {/* C. Spaces Section */}
          <section className="px-16 md:px-24 pt-40 pb-32 space-y-32 md:pr-[26rem]">
            <div className="mb-16">
              <h2 className="font-label text-xs tracking-[0.24em] uppercase text-primary mb-2">
                Spaces
              </h2>
              <div className="w-12 h-[1px] bg-primary/30"></div>
            </div>

            {spaces.map((space, idx) => (
              <article key={idx} className="flex flex-col md:flex-row items-center gap-16">
                <div className={`w-full ${idx % 2 === 0 ? 'md:w-3/5 order-2 md:order-1' : 'md:w-2/5 order-2'}`}>
                  {idx % 2 === 0 ? (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={space.image}
                        alt={space.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 opacity-75 brightness-90 contrast-90 saturate-75"
                      />
                    </div>
                  ) : (
                    <div className="px-0 md:px-12">
                      <h3 className="font-headline text-5xl mb-6">{space.title}</h3>
                      <p className="font-body text-on-surface-variant leading-relaxed mb-6">
                        {space.text}
                      </p>
                    </div>
                  )}
                </div>

                <div className={`w-full ${idx % 2 === 0 ? 'md:w-2/5 order-1 md:order-2' : 'md:w-3/5 order-1'}`}>
                  {idx % 2 === 0 ? (
                    <div className="px-0 md:px-12">
                      <h3 className="font-headline text-5xl mb-6">{space.title}</h3>
                      <p className="font-body text-on-surface-variant leading-relaxed mb-6">
                        {space.text}
                      </p>
                    </div>
                  ) : (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={space.image}
                        alt={space.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 opacity-75 brightness-90 contrast-90 saturate-75"
                      />
                    </div>
                  )}
                </div>
              </article>
            ))}
          </section>

          {/* Overlay Intro Image */}
          <div className="absolute right-20 md:right-45 top-[26rem] md:top-[24rem] -translate-x-[35%] -translate-y-[85%] z-20 hidden md:block">
            <div className="w-[360px] lg:w-[420px] aspect-[4/5] overflow-hidden shadow-2xl">
              <img
                src={introImage}
                alt="Spirit visual"
                className="w-full h-full object-cover opacity-80 brightness-90 contrast-90 saturate-75"
              />
            </div>
          </div>
        </div>

        {/* E. Use Section */}
        <section className="px-12 md:px-24 py-32 bg-surface">
          <div className="mb-16">
            <h2 className="font-label text-base tracking-widest uppercase text-primary mb-2">Use</h2>
            <div className="w-12 h-[1px] bg-primary/30"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-3xl text-on-surface-variant font-light italic leading-relaxed">
              "{use}"
            </p>
          </div>
        </section>

        {/* D. Facilities Section */}
        <section className="px-12 md:px-24 py-32 bg-surface-lowest">
          <div className="mb-16">
            <h2 className="font-label text-base tracking-widest uppercase text-primary mb-2">Facilities</h2>
            <div className="w-12 h-[1px] bg-primary/30"></div>
          </div>
          <div className="max-w-6xl mx-auto">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8 font-body text-lg text-on-surface-variant font-light">
              {facilities.map((facility, idx) => (
                <li key={idx} className="flex items-center gap-4 border-b border-outline-variant/10 pb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                  {facility}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* F. Cross Pillar Synergy Band */}
        <section className="p-24 bg-surface-highest flex flex-col items-center text-center">
          <div className="max-w-2xl">
            <h5 className="font-headline text-4xl mb-6 italic">{synergy.title}</h5>
            <p className="text-on-surface-variant leading-relaxed mb-12">
              {synergy.text}
            </p>
            <a className="inline-flex items-center gap-6 px-12 py-5 bg-background text-on-background border border-outline-variant/20 hover:border-primary font-label uppercase text-xs tracking-widest font-bold transition-all group" href={synergy.link}>
              {synergy.cta}
              <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
