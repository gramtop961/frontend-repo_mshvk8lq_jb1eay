import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Alexandra P.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.'
  },
  {
    name: 'Michael S.',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
  },
  {
    name: 'Priya K.',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 text-center">Loved by Patients</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-center gap-1 text-amber-500 mb-3">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-700">“{t.text}”</p>
              <div className="mt-4 text-sm font-semibold text-gray-900">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
