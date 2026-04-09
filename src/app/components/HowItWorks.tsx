import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Smartphone, Cloud, Wifi, ToggleRight } from "lucide-react";

const steps = [
  { icon: Smartphone, label: "Mobile App" },
  { icon: Cloud, label: "Cloud" },
  { icon: Wifi, label: "WiFi/BLE" },
  { icon: ToggleRight, label: "Switch Board" }
];

const technologies = ["WiFi", "BLE", "MQTT", "FastAPI"];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="how-it-works" ref={ref} className="relative scroll-mt-28 py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            How It Works
          </h2>
          <p className="text-lg text-slate-400">
            Seamless connection from your phone to every switch
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center"
            >
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/50">
                  <step.icon className="w-12 h-12 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                    className="hidden md:block absolute top-1/2 -right-8 w-8 h-0.5 bg-emerald-500 origin-left"
                  />
                )}
              </div>
              <span className="mt-4 text-white font-semibold">{step.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-slate-400 mb-4">Powered by</p>
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 font-mono font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
