import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { label: "Scans Completed", val: "50K+" },
    { label: "Detection Accuracy", val: "98.5%" },
    { label: "Students Protected", val: "12K+" },
    { label: "Institutions Trust Us", val: "200+" },
  ];

  return (
    <section className="py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 p-12 bg-brand-card/30 rounded-[2.5rem] border border-brand-pink/20 shadow-[0_0_60px_-15px_rgba(237,62,148,0.2)] relative overflow-hidden"
      >
        {/* Animated Scanning Line effect */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-pink/40 to-transparent" />
        
        {stats.map((s, i) => (
          <div key={i} className="text-center group">
            <h3 className="text-4xl font-black text-white mb-2 group-hover:text-brand-pink transition-colors tracking-tighter">
              {s.val}
            </h3>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest font-black">
              {s.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}