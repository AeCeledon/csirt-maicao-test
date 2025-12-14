/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        neon: '0 0 40px rgba(25, 163, 255, 0.35)',
      },
      backgroundImage: {
        'hero-grid': "radial-gradient(circle at center, rgba(25,163,255,0.2) 0%, rgba(5,11,22,0.7) 60%, rgba(5,11,22,1) 100%)",
        'gradient-blue': 'linear-gradient(135deg, #19a3ff 0%, #7df0ff 100%)',
      },
    },
  },
  plugins: [],
};
