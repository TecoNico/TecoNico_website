import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-gradient-to-br from-emerald-950 via-slate-950 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/30 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Smart Home Made Affordable
          </h2>
          <p className="text-lg text-slate-400">
            Premium quality at prices that make sense
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative p-12 rounded-3xl bg-slate-900 border-2 border-emerald-500/50 overflow-hidden group hover:border-emerald-400 transition-all">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

            <div className="relative">
              <div className="text-center mb-8">
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  Starting from <span className="text-emerald-400">₹999</span>
                </div>
                <p className="text-slate-400 text-lg">4-switch smart board</p>
              </div>

              <div className="space-y-4 mb-10">
                {[
                  "WiFi & BLE connectivity",
                  "Mobile app control",
                  "Voice control (Alexa & Google)",
                  "Automation & scheduling",
                  "Energy monitoring",
                  "Lifetime software updates"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-slate-300 text-base">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-emerald-400" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <button className="group/btn w-full relative px-8 py-4 bg-emerald-500 text-black font-bold rounded-full text-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(16,185,129,0.45)]">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Book Free Demo
                  <ArrowRight className="w-6 h-6 transition-transform group-hover/btn:translate-x-2" />
                </span>
                <div className="absolute inset-0 bg-emerald-400 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
              </button>

              <p className="text-center text-slate-500 mt-6">
                No commitment • Free consultation • 1-year warranty
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
