import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function AppUI() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-gradient-to-br from-slate-950 via-emerald-950/20 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Control at Your Fingertips
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Beautiful, intuitive mobile app with everything you need. Control switches, set timers, create automations, and monitor energy usage.
            </p>
            <ul className="space-y-4">
              {[
                "Real-time switch control",
                "Custom automation rules",
                "Energy usage tracking",
                "Schedule management",
                "Room organization"
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-slate-300 text-base"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/30 blur-[60px] rounded-full" />
              <img
                src="https://images.unsplash.com/photo-1713857297379-6fc26e70f581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                alt="TecoHome mobile app interface"
                className="relative rounded-3xl shadow-2xl max-w-md"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
