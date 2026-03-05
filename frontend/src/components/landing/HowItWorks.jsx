export default function HowItWorks() {
  const steps = [
    { id: "01", title: "Submit Details", desc: "Paste a job listing URL, course link, or website address." },
    { id: "02", title: "AI Analysis", desc: "Our NLP engine powered by BERT analyzes text patterns." },
    { id: "03", title: "Risk Assessment", desc: "Get a detailed fraud risk score with classification." },
    { id: "04", title: "Stay Protected", desc: "View detailed reports and make informed decisions." },
  ];

  return (
    <section className="py-32 px-6 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-brand-pink text-xs font-black tracking-widest uppercase mb-4">HOW IT WORKS</p>
        <h2 className="text-center text-5xl md:text-6xl font-bold mb-20 text-white">
          Four simple steps to <span className="text-brand-pink">verify anything</span>
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.id} className="glass-card p-10 rounded-3xl relative overflow-hidden group border border-white/5 bg-brand-card/30">
              {/* Large background number as the "icon" replacement */}
              <span className="text-7xl font-black text-white/5 absolute -top-2 -right-2 group-hover:text-brand-pink/10 transition-colors duration-500">
                {s.id}
              </span>
              
              <div className="w-10 h-[1px] bg-brand-pink mb-6 group-hover:w-full transition-all duration-700" />
              
              <h4 className="text-xl font-bold mb-4 text-white group-hover:text-brand-pink transition-colors">
                {s.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed font-normal">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}