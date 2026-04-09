import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ZapOff, IndianRupee, Ban } from "lucide-react";

const problems = [
  {
    icon: ZapOff,
    title: "Traditional switches are dumb",
    description: "No remote control, no automation, no intelligence"
  },
  {
    icon: IndianRupee,
    title: "Expensive full-system replacements",
    description: "All-or-nothing solutions that break the bank"
  },
  {
    icon: Ban,
    title: "No flexibility to upgrade",
    description: "Stuck with your initial setup forever"
  }
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            The Problem with <span className="text-red-500">Old Systems</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-red-500/50 transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                <problem.icon className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
              <p className="text-slate-400 text-base">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
