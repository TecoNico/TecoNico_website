import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Home, Building2, Store, Key } from "lucide-react";

const useCases = [
  {
    icon: Home,
    title: "Homes",
    description: "Perfect for apartments, villas, and independent houses"
  },
  {
    icon: Building2,
    title: "Offices",
    description: "Smart control for workspaces and commercial spaces"
  },
  {
    icon: Store,
    title: "Shops",
    description: "Retail stores, showrooms, and business establishments"
  },
  {
    icon: Key,
    title: "Rental Properties",
    description: "Add value to rental homes without permanent changes"
  }
];

export default function UseCases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Perfect For Every Space
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-all group text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500/20 transition-colors group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <useCase.icon className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
              <p className="text-slate-400 text-base">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
