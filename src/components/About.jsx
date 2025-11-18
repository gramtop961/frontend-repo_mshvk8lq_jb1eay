import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-3xl bg-white/70 backdrop-blur p-8 ring-1 ring-gray-100 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">About Our Clinic</h2>
          <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          <p className="mt-3 text-gray-600">Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.</p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            {[['15+', 'Years'], ['10k+', 'Patients'], ['98%', 'Satisfaction']].map(([a,b], i) => (
              <div key={i} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
                <div className="text-2xl font-semibold text-gray-900">{a}</div>
                <div className="text-sm text-gray-500">{b}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative">
          <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-cyan-50 to-white ring-1 ring-gray-100 p-1 shadow-xl">
            <div className="h-full rounded-[20px] bg-white/70" />
          </div>
          <div className="absolute inset-0 -z-10 -translate-x-6 translate-y-6 rounded-3xl bg-gradient-to-br from-sky-200/40 to-cyan-200/40 blur-2xl" />
        </motion.div>
      </div>
    </section>
  )
}
