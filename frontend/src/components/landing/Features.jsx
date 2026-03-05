const features = [
  { title: "Job & Internship Scam Detection", desc: "AI-powered analysis detects fraudulent patterns in job offers, generating risk scores to classify them as Safe, Suspicious, or High Risk." },
  { title: "Fake Course Detection", desc: "Verify online courses and certifications before payment. Identifies fake accreditation claims and unrealistic guarantees." },
  { title: "Website Authenticity Checker", desc: "Analyze URLs for domain age, HTTPS security, and suspicious patterns. Get a trust score for any website instantly." },
];

export default function Features() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={i} className="glass-card p-10 rounded-2xl border border-white/5 group">
            {/* Minimalist Accent instead of Icon */}
            <div className="w-8 h-[2px] bg-brand-pink mb-8 group-hover:w-16 transition-all duration-300" />
            
            <h3 className="text-xl font-bold mb-4 text-white leading-tight">
              {f.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-normal">
              {f.desc}
            </p>
            <button className="text-brand-pink text-xs font-bold tracking-widest hover:underline uppercase">
              Try it now →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}