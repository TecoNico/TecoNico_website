import { useState, type MouseEvent } from "react";
import { motion } from "motion/react";
import { ArrowRight, Cpu, Lightbulb, ShieldCheck, Wifi, Wind } from "lucide-react";

const chips = [
  { icon: Lightbulb, label: "Lights",  posClass: "top-8 left-4",     delay: 0.25 },
  { icon: Wind,       label: "Fans",    posClass: "top-8 right-4",    delay: 0.40 },
  { icon: ShieldCheck,label: "Safety",  posClass: "bottom-8 left-4",  delay: 0.55 },
  { icon: Wifi,       label: "IoT",     posClass: "bottom-8 right-4", delay: 0.70 },
];

const rings = [
  { size: 270, dur: 18, cw: true,  border: "border-emerald-400/30", dotColor: "bg-emerald-300" },
  { size: 340, dur: 26, cw: false, border: "border-cyan-300/20",    dotColor: "bg-cyan-200"    },
  { size: 418, dur: 36, cw: true,  border: "border-slate-500/18",   dotColor: "bg-slate-400"   },
];

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleTiltMove = (event: MouseEvent<HTMLDivElement>) => {
    const b = event.currentTarget.getBoundingClientRect();
    setTilt({
      x: -((event.clientY - b.top)  / b.height - 0.5) * 14,
      y:  ((event.clientX - b.left) / b.width  - 0.5) * 16,
    });
  };

  const handleTiltLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-black via-slate-950 to-blue-950">
      <div className="absolute inset-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1757359210212-84a7e27f3c99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-slate-950/55 to-slate-950/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-emerald-400 font-semibold text-sm md:text-base mb-5 tracking-[0.12em] uppercase"
            >
              TecoNico x TecoHome
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-[1.08] tracking-tight"
            >
              Make Your Home Smarter,{" "}
              <span className="text-emerald-400">One Switch at a Time</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base md:text-xl text-slate-300 mb-9 leading-relaxed"
            >
              TecoNico smart automation platform to control lights, fans, and appliances from phone, voice, and schedules.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/#products"
                className="group px-6 py-3 bg-emerald-500 text-black font-semibold rounded-full text-base transition-all hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(16,185,129,0.35)]"
              >
                <span className="flex items-center justify-center gap-2">
                  Explore TecoHome
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>

              <a
                href="/team"
                className="px-6 py-3 border border-emerald-500 text-emerald-400 font-semibold rounded-full text-base hover:bg-emerald-500/10 transition-all"
              >
                Our Team
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: 3D SCENE ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.9 }}
            onMouseMove={handleTiltMove}
            onMouseLeave={handleTiltLeave}
            className="relative h-[420px] sm:h-[480px] md:h-[520px] overflow-hidden cursor-default"
          >
            {/* ambient centre glow */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="w-[360px] h-[360px] rounded-full bg-emerald-500/8 blur-[90px]" />
            </div>

            {/* rotating orbit rings (flat, no perspective tilt) */}
            {rings.map((ring) => (
              <motion.div
                key={ring.size}
                animate={{ rotate: ring.cw ? 360 : -360 }}
                transition={{ duration: ring.dur, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div
                  className={`relative rounded-full border ${ring.border}`}
                  style={{ width: ring.size, height: ring.size }}
                >
                  {/* orbiting glowing dot */}
                  <div
                    className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${ring.dotColor} shadow-[0_0_14px_rgba(52,211,153,0.9)]`}
                  />
                </div>
              </motion.div>
            ))}

            {/* hub card — centred, floating, mouse-tilt */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* tilt wrapper — perspective applied inline */}
                <div
                  className="transition-transform duration-200 ease-out"
                  style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
                >
                  {/* card shell */}
                  <div className="relative w-[248px] h-[264px]">
                    {/* conic glow border layer */}
                    <div className="absolute -inset-[1px] rounded-[28px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(52,211,153,0.55),rgba(34,211,238,0.14),rgba(52,211,153,0.5))]" />
                    {/* glass fill */}
                    <div className="absolute inset-[1px] rounded-[27px] bg-slate-950/88 backdrop-blur-2xl" />
                    {/* top inner highlight */}
                    <div className="absolute inset-x-[1px] top-[1px] h-28 rounded-t-[27px] bg-gradient-to-b from-emerald-400/10 to-transparent" />
                    {/* bottom bloom */}
                    <div className="absolute bottom-0 inset-x-10 h-8 rounded-full bg-emerald-500/30 blur-xl" />

                    {/* content */}
                    <div className="relative h-full p-5 flex flex-col gap-4 justify-between">
                      {/* header */}
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.22em] text-emerald-300/75 mb-2">
                          Smart Hub
                        </p>
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-emerald-300 shrink-0" />
                          <span className="text-base font-semibold text-white">TecoHome Core</span>
                        </div>
                      </div>

                      {/* status badge */}
                      <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full border border-emerald-300/25 bg-emerald-500/10">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                        <span className="text-xs text-emerald-200/90">IoT Online · 4 active</span>
                      </div>

                      {/* power bar */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[10px]">
                          <span className="text-slate-400">Power usage</span>
                          <span className="text-emerald-300">78%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-300"
                            initial={{ width: "0%" }}
                            animate={{ width: "78%" }}
                            transition={{ delay: 1.2, duration: 1.4, ease: "easeOut" }}
                          />
                        </div>
                      </div>

                      {/* decorative bars */}
                      <div className="grid grid-cols-3 gap-1.5">
                        <div className="h-1 rounded-full bg-emerald-400/80" />
                        <div className="h-1 rounded-full bg-cyan-300/60" />
                        <div className="h-1 rounded-full bg-emerald-400/40" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* corner feature chips — absolute from container edges, never overlap card */}
            {chips.map((chip) => (
              <motion.div
                key={chip.label}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: chip.delay, duration: 0.45 }}
                className={`absolute ${chip.posClass}`}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.2 + chip.delay, repeat: Infinity, ease: "easeInOut" }}
                  className="px-3 py-2 rounded-xl border border-emerald-300/28 bg-slate-900/85 backdrop-blur-md text-emerald-200 text-xs font-medium flex items-center gap-2 shadow-[0_4px_20px_rgba(16,185,129,0.15)]"
                >
                  <chip.icon className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                  {chip.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
