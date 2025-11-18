import { motion } from 'framer-motion'
import { Star, ShieldCheck, Sparkles, Tooth } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="absolute top-24 -right-24 w-72 h-72 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-64 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
              Premium Dental Care for Confident Smiles
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula, nibh in ultricies auctor, elit leo faucibus arcu, at feugiat arcu nisl et lectus.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-sky-700 transition-colors">
                Book Appointment
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-gray-800 font-semibold shadow-sm ring-1 ring-gray-200 hover:bg-gray-50 transition-colors">
                Explore Services
              </a>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[{ icon: <Star className="text-amber-500" size={18} />, text: '5-Star Care' }, { icon: <ShieldCheck className="text-emerald-500" size={18} />, text: 'Trusted Experts' }, { icon: <Sparkles className="text-sky-500" size={18} />, text: 'Modern Tech' }].map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    {f.icon}
                    {f.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative aspect-[4/5] rounded-3xl bg-gradient-to-br from-sky-50 to-white p-1 ring-1 ring-gray-100 shadow-xl">
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,.25),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(6,182,212,.2),transparent_35%)]" />
              <div className="relative h-full rounded-[20px] bg-white/70 backdrop-blur p-8 flex flex-col items-center justify-center text-center">
                <Tooth className="text-sky-500 drop-shadow" size={64} />
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-gray-900">BlueSmile Experience</h3>
                <p className="mt-3 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a metus id ipsum facilisis maximus.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-gray-100">
              <div className="text-xs text-gray-500">Since</div>
              <div className="text-lg font-semibold">2008</div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="absolute -top-6 -right-6 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-gray-100">
              <div className="text-xs text-gray-500">Patients</div>
              <div className="text-lg font-semibold">10k+</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
