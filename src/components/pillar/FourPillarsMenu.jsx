import React from 'react';
import { Link } from 'react-router-dom';
const PILLARS_DATA = [
  {
    id: "01",
    title: "Work",
    italicize: false,
    description: "Precision-engineered environments designed for deep focus and executive clarity within silence.",
    cta: "Explore Focus",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl1gVWtaWqONxj6ks0OOCXAmhRxX6uBQ0PibnbHMBcBk1bhOD-9fEo60t4vAoYFmnOwPGPsTVL1DoAqQc7HAjm19cjKLOGzq1UcX9BcLZ_hDdxbK6BbEJCxKmDoEp2e5T6xYCIbZQ2F8oFaPlqE42pWyueQfoLJqGWaElZ1xYKFVujzkOzS6qlyZm-sCSjOl5eDWn-iIVieDpq-X7kh_z-0BplWJIhUM4GfDLShuYQaN-HhMqKnkdmmGzHmsRqj641k3STwGX0veoQ"
  },
  {
    id: "02",
    title: "Play",
    italicize: true,
    description: "Rejuvenation as a fine art. Sun-soaked terraces and restorative waters for the weary spirit.",
    cta: "View Leisure",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn5GMN00ckpiC64wANX3Jau16lnxkWqef6FD9U85-juuiK26O_yBkIZPlZlVMPL5Aimr95CbZJwBEi2JgmP3rXP8RKx_QeVPyLPkLyJnJ-mgQ_FDTGeS0fds9Gtnc9r9QVu8CRkgxe2gKBJqLbHjWnXsfbK3JBo8kWr7brkwsUzDx3kPIun5KA20MB8RxJSPi8H3K-OWlrtROAWdUuGwIQ-uULe5EHWFrUzisx18ulh-gbFG7eofUFoSz3hyoYHAj8Pecp9LOcjH2K"
  },
  {
    id: "03",
    title: "Create",
    italicize: false,
    description: "The workshop of the mind. Raw spaces provided for the materialization of vision and craft.",
    cta: "Visit Studio",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNG2T68HSAX4qLtqai2qHKvTtTnGLshD3BEOtTSO2w7ATBHylGvPNY4Bvxg212Yhoz38KNCOca7IaFZOTZA_GOsbyVWXCHseWez5ya-R4DQoHaE8G_wpUr1iykFFv64ap3-GhTFWhKdzSeaXivS8tULEFuxDs6KuF8L4kKu46_ju4105Z3s4zafnDLU5cC2-awzkgDbQDxIusfvagiHfgQT-2Opd-7wikyKFhm4NxAaMI0EBYnKCWO4fUCh_ZLBThe9_AgfeE4GlmW"
  },
  {
    id: "04",
    title: "Connect",
    italicize: true,
    description: "Curated social alchemy. Intimate forums and communal hearths for intellectual exchange.",
    cta: "Join Forum",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtz1u3YSVkgQrxXb0_Vlz0tVPpEv7aqKnIOv2RjOs9Na0_UHijx4tVuqzoQOoeiidQD34gQYu8oYZJKQtw9zPfWeT2LwoPG1Isc3ekmCedosktmf3GE4LIxMOt_lmeGL4kGxFsvlnoCgDuKNAhKx4A_cKkBID1pJmX6JO_csR8nJAUVgLxnQX6b5RWOywqqZpAX3lJROUgrZ533jcYxPrsSsQn0lNk4jCk301BNn3q0fDpGrBs8fJjzoISNfTGNuVDVbD_wakBgQaA"
  }
];

export default function FourPillarsMenu() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-[800px] border-y border-outline-variant/20">
      {PILLARS_DATA.map((pillar, index) => {
        // We avoid putting a right border on the absolute last item using group selectors
        const borderClass = index !== PILLARS_DATA.length - 1 ? 'lg:border-r border-outline-variant/20' : '';
        
        return (
          <article 
            key={pillar.id}
            className={`relative group overflow-hidden ${borderClass} cursor-pointer block h-full`}
          >
            <Link to={`/${pillar.title.toLowerCase()}`} className="absolute inset-0 z-30"></Link>
            {/* Ambient Background Darkening - Fades out slightly on hover */}
            <div className="absolute inset-0 bg-background/50 group-hover:bg-background/20 transition-colors duration-700 z-10" />
            
            {/* Image Layer - Slow Pan Effect */}
            <img 
              src={pillar.image} 
              alt={`Casa Kala Pillar - ${pillar.title}`} 
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
            />
            
            {/* Content Layer */}
            <div className="absolute inset-0 flex flex-col justify-end p-12 z-20 pointer-events-none">
              
              {/* Monolithic Header Structure */}
              <div className="mb-4">
                <span className="font-label text-[10px] tracking-widest uppercase text-primary">
                  World {pillar.id}
                </span>
                <h3 className={`text-4xl font-headline font-light mt-2 text-on-surface ${pillar.italicize ? 'italic' : ''}`}>
                  {pillar.title}
                </h3>
              </div>
              
              {/* Narrative Text - Appears smoothly on hover pushing up from bottom */}
              <p className="text-sm font-body font-light text-on-surface-variant opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 leading-relaxed">
                {pillar.description}
              </p>
              
              {/* Call to Action - Architectural Drafting Line Border structure */}
              <div className="mt-8 pt-6 border-t border-outline-variant/30 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-auto">
                <div 
                  className="font-label text-[10px] tracking-[0.15em] uppercase text-primary inline-flex items-center gap-2 hover:text-primary-fixed transition-colors"
                >
                  {pillar.cta}
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </div>
              
            </div>
          </article>
        );
      })}
    </section>
  );
}
