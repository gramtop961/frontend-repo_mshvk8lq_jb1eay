import { motion } from 'framer-motion'
import { PhoneCall, CalendarCheck } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-br from-sky-600 to-cyan-600 p-8 md:p-12 text-white shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.15),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,.12),transparent_35%)]" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Book Your Visit Today</h2>
            <p className="mt-3 text-white/90 max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="tel:+1234567890" className="inline-flex items-center gap-2 bg-white text-sky-700 hover:bg-white/90 font-semibold px-6 py-3 rounded-xl shadow-sm transition-colors"><PhoneCall size={18} /> Call Now</a>
              <a href="#" className="inline-flex items-center gap-2 bg-sky-800/30 hover:bg-sky-800/40 font-semibold px-6 py-3 rounded-xl transition-colors"><CalendarCheck size={18} /> Request Appointment</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
