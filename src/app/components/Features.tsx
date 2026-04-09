import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Radio, Mic2, Calendar, Leaf, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Radio,
    title: "Remote Control",
    description: "Control from anywhere in the world with internet connection"
  },
  {
    icon: Mic2,
    title: "Voice Control",
    description: "Just say the word - Alexa and Google Assistant ready"
  },
  {
    icon: Calendar,
    title: "Scheduling",
    description: "Set it and forget it with smart schedules and timers"
  },
  {
    icon: Leaf,
    title: "Energy Saving",
    description: "Monitor usage and save electricity with smart automation"
  },
  {
    icon: TrendingUp,
    title: "Modular Expansion",
    description: "Start with 4 switches, upgrade to 8, 16, or more anytime"
  }
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="features" ref={ref} className="relative scroll-mt-28 py-20 md:py-28 bg-gradient-to-br from-black via-blue-950 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Powerful Features
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Everything you expect from a premium smart home system
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-slate-900/30 border border-slate-800 hover:border-emerald-500/50 transition-all group hover:bg-slate-900/50"
            >
              <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <feature.icon className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
