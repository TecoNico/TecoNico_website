import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Blocks, DollarSign, Wrench } from "lucide-react";

const features = [
  {
    icon: Blocks,
    title: "Modular",
    description: "Start small, grow as you need"
  },
  {
    icon: DollarSign,
    title: "Affordable",
    description: "Smart home for every budget"
  },
  {
    icon: Wrench,
    title: "Easy to Install",
    description: "Works with existing wiring"
  }
];

export default function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-gradient-to-br from-emerald-950 via-slate-950 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Meet <span className="text-emerald-400">TecoHome</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              The smart home system designed for real homes. Modular, affordable, and built for India.
            </p>
            <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-10">
              "Start with 4 switches. Upgrade anytime."
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-slate-400 text-base">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full" />
            <img
              src="https://images.unsplash.com/photo-1774876549389-e82a7bea84a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Smart switch panel"
              className="relative rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
