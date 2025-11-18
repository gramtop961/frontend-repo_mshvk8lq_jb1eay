import { motion } from 'framer-motion'
import { Sparkles, Smile, Syringe, Brush, ScanEye, BadgeCheck } from 'lucide-react'

const services = [
  {
    icon: <Smile className="text-sky-500" size={24} />,
    title: 'Cosmetic Dentistry',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
  },
  {
    icon: <Syringe className="text-sky-500" size={24} />,
    title: 'Implants & Surgery',
    desc: 'Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.'
  },
  {
    icon: <Brush className="text-sky-500" size={24} />,
    title: 'Hygiene & Cleaning',
    desc: 'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.'
  },
  {
    icon: <ScanEye className="text-sky-500" size={24} />,
    title: 'Digital X-Rays',
    desc: 'Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Our Services</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
          </div>
          <BadgeCheck className="hidden md:block text-emerald-500" />
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }} className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-sky-50 flex items-center justify-center mb-4">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <div className="mt-4 text-sm font-medium text-sky-600 opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1">
                <Sparkles size={16} /> Learn more
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
