import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Flag, Home, IndianRupee, Expand } from "lucide-react";

const reasons = [
  {
    icon: Flag,
    title: "Made for India 🇮🇳",
    description: "Designed for Indian homes, voltage standards, and wiring systems"
  },
  {
    icon: Home,
    title: "Works with Existing Wiring",
    description: "No need to rewire your entire home - just replace the switch boards"
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Premium quality at prices that make sense for Indian households"
  },
  {
    icon: Expand,
    title: "Expandable System",
    description: "Start small, grow big - the only smart home that scales with you"
  }
];

export default function WhyTecoHome() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Why <span className="text-emerald-400">TecoHome</span>?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Built for real homes, real budgets, real needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-emerald-500/50 transition-all group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <reason.icon className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
                <p className="text-slate-400 text-base leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
