import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Zap } from "lucide-react";
import tecoHomeProduct from "../../Assets/Product1.png";

const products = [
  {
    icon: Zap,
    title: "TecoHome Smart Switch System",
    description: "Modular 4, 8, and 16 switch configurations with app, voice, and automation control",
    image: tecoHomeProduct,
  }
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="products" ref={ref} className="relative scroll-mt-28 py-20 md:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            TecoHome Product
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            One focused product ecosystem built by TecoNico for practical smart homes
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <product.icon className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{product.title}</h3>
                <p className="text-slate-400 text-base">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
