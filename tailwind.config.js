/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Palette (Near black, terracotta, olive)
        background: "#141310", // The deep, obsidian-olive foundation
        surface: "#141310",
        
        // Surface Hierarchy & Nesting (The "No-Line" Rule Layering)
        surface: {
          lowest: "#0f0e0a",
          low: "#1d1c17",
          DEFAULT: "#141310",
          high: "#2b2a26",
          highest: "#363530",
          bright: "#3b3934",
          dim: "#141310",
          variant: "#363530", // For Glass & Gradients (60% opacity with 24px backdrop-blur)
          tint: "#fbb79e"
        },
        
        primary: {
          DEFAULT: "#fbb79e", // Terracotta
          container: "#3e1808", // Clay depth
          fixed: "#ffdbcf",
          "fixed-dim": "#fbb79e",
        },
        
        secondary: {
          DEFAULT: "#cdc6b1", // Olive tint / Sand
          container: "#4d4939",
          fixed: "#e9e2cc",
          "fixed-dim": "#cdc6b1",
        },

        tertiary: {
          DEFAULT: "#d7c3b0",
          container: "#2c2115",
          fixed: "#f4dfcb",
          "fixed-dim": "#d7c3b0",
        },

        // Typography Colors
        on: {
          background: "#e6e2db", // Warm White
          surface: "#e6e2db",
          "surface-variant": "#cac6bd",
          primary: "#4e2514",
          "primary-container": "#b77c66",
          secondary: "#343122",
          "secondary-container": "#beb8a4",
          tertiary: "#3a2e21",
          "tertiary-container": "#998776"
        },

        outline: {
          DEFAULT: "#939188",
          variant: "#484740", // Ghost Border Fallback at 15% opacity
        },

        error: {
          DEFAULT: "#ffb4ab",
          container: "#93000a",
          on: "#690005",
          "on-container": "#ffdad6"
        },

        inverse: {
          surface: "#e6e2db",
          "on-surface": "#32302c",
          primary: "#85513e"
        }
      },
      fontFamily: {
        // Editorial Authority Typography Rules
        display: ['Newsreader', 'serif'],  // High-contrast serif for headlines
        headline: ['Newsreader', 'serif'], // High-contrast serif "Hero"
        body: ['Manrope', 'sans-serif'],   // Clean, modern workhorse
        label: ['Inter', 'sans-serif'],    // Technical, architectural precision
      },
      letterSpacing: {
        widest: '0.15em', // For Labels & Buttons
      },
      lineHeight: {
        relaxed: '1.6', // Maintained generous line height for "sun-drenched" airy feel
      },
      spacing: {
        // Generous scale to mimic open air
        16: '1rem',
        24: '1.5rem',
        48: '3rem',
      },
      borderRadius: {
        // No Rounded Corners: The system is architectural and sharp.
        DEFAULT: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '0px', // Ensure pill shapes are overridden with sharp corners 
      },
      boxShadow: {
        // Ambient Shadows: Not standard elevation, but light.
        float: '0 20px 50px rgba(20, 19, 16, 0.3)', // Shadow for floating modals
      },
      backgroundImage: {
        'cta-gradient': 'linear-gradient(45deg, #fbb79e, #3e1808)', // Mimics glow of setting sun against clay
      },
      transitionTimingFunction: {
        'heavy': 'cubic-bezier(0.4, 0, 0.2, 1)', // Slow and "heavy" transitions
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 1.5s cubic-bezier(0.25, 0.1, 0.25, 1.0) forwards',
      }
    },
  },
  plugins: [],
}
