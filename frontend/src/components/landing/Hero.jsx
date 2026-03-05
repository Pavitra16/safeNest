import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-44 pb-32 px-6 flex flex-col items-center overflow-hidden bg-mesh">
      {/* Animated Shield Background */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 -z-10 pointer-events-none"
      >
        <svg width="600" height="600" viewBox="0 0 200 200" fill="none">
          <path d="M100 20L170 50V110C170 150 100 180 100 180C100 180 30 150 30 110V50L100 20Z" stroke="#ed3e94" strokeWidth="0.5"/>
        </svg>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-5xl"
      >
        <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.3em] text-brand-pink bg-brand-pink/10 border border-brand-pink/20 rounded-full">
          AI-POWERED STUDENT PROTECTION
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
          Detect Fraud. <br />
          <span className="text-brand-pink">
            Protect Students.
          </span> <br />
          Stay Safe Online.
        </h1>

        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-normal">
          SafeNest uses BERT-powered NLP analysis to detect fake jobs, internships, courses, and websites.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="bg-brand-pink hover:bg-brand-pink/90 px-10 py-4 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(237,62,148,0.3)] transition-all active:scale-95">
            Start Scanning
          </button>
          <button className="text-gray-400 hover:text-white font-bold transition flex items-center gap-2">
            Explore Features <span className="text-brand-pink">→</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}