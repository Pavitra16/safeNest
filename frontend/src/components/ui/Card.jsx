export default function Card({ children }) {
  return (
    <div className="bg-brand-card p-8 rounded-2xl border border-white/5 hover:border-brand-pink/30 transition-all duration-300 shadow-xl group">
      {children}
    </div>
  );
}