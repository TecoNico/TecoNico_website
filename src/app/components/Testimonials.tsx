import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Mumbai",
    text: "Best decision for my 3BHK. Started with 4 switches, added 4 more in 2 months. Love the flexibility!",
    rating: 5
  },
  {
    name: "Priya Desai",
    location: "Bangalore",
    text: "The voice control is amazing. My kids love saying 'Alexa, lights off' every night.",
    rating: 5
  },
  {
    name: "Amit Patel",
    location: "Ahmedabad",
    text: "Saved 20% on my electricity bill in just 3 months. The automation schedules are perfect.",
    rating: 5
  }
];

export default function Testimonials() {
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
          <div className="inline-block px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold mb-6">
            100+ Homes Automated
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Loved by Homeowners
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-emerald-400 text-emerald-400" />
                ))}
              </div>
              <p className="text-slate-300 text-base mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div>
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-slate-500">{testimonial.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
