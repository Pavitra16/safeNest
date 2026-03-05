export const PrimaryButton = ({ children }) => (
  <button className="bg-brand-pink hover:bg-brand-pink/90 text-white px-8 py-3 rounded-xl font-bold transition shadow-[0_0_20px_rgba(237,62,148,0.3)]">
    {children}
  </button>
);

export const OutlineButton = ({ children }) => (
  <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-3 rounded-xl font-bold transition">
    {children}
  </button>
);