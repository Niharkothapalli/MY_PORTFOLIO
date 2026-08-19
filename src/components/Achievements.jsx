import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { achievements } from '../data/portfolio'
import { fadeUp, stagger, scaleIn } from '../utils/animations'

const statusMap = {
  '🏆': 'text-yellow-600',
  '☁️': 'text-blue-500',
  '🏅': 'text-red-500',
  '💻': 'text-green-600',
  '🤖': 'text-cyan-600',
  '🗄️': 'text-blue-600',
  '🌐': 'text-blue-500',
  '📊': 'text-green-500',
  '✨': 'text-purple-500',
}

export default function Achievements() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSelected(null) }
    if (selected) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected])

  return (
    <section id="achievements" className="section-padding" style={{ background: 'transparent' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>

          <motion.div variants={fadeUp} className="mb-14">
            <p className="section-label">05 / CREDENTIALS</p>
            <h2 className="section-heading">Certifications & Achievements</h2>
            <div className="bp-divider" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievements.map((item) => (
              <motion.div
                key={item.title}
                variants={scaleIn}
                onClick={() => item.certificate && setSelected(item.certificate)}
                className={`cyber-box p-6 angle-br flex flex-col gap-3 ${item.certificate ? 'cursor-pointer hover:border-black transition-all' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className={`font-mono text-xs uppercase tracking-widest ${statusMap[item.icon] || 'text-muted'} cb-accent`}>
                    {item.certificate ? 'VIEW CERTIFICATE ↗' : 'VERIFIED'}
                  </span>
                </div>
                <h3 className="font-bold uppercase tracking-wide text-base text-black cb-title leading-snug">{item.title}</h3>
                <p className="font-mono text-xs text-muted cb-muted">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>

          {/* Two featured achievement panels */}
          <motion.div variants={fadeUp} className="mt-10 grid md:grid-cols-2 gap-6">
            {/* NPTEL Panel */}
            <div
              className="border-2 border-black bg-black text-white p-8 flex items-center justify-between gap-6 angle-br-lg"
              style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.3)' }}
            >
              <div>
                <p className="font-mono text-xs text-green-400 uppercase tracking-widest mb-2">
                  <span className="animate-pulse">▶</span> TOP 1% NATIONWIDE — NPTEL CERTIFICATION
                </p>
                <h3 className="text-2xl font-bold uppercase tracking-wide">NPTEL Java Programming</h3>
                <p className="font-mono text-xs text-zinc-400 mt-2">Perfect score among thousands of participants across India</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-7xl font-bold tracking-tighter leading-none">100</p>
                <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest">OUT OF 100</p>
              </div>
            </div>

            {/* Databricks Panel */}
            <div
              className="border-2 border-black bg-black text-white p-8 flex items-center justify-between gap-6 angle-br-lg"
              style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.3)' }}
            >
              <div>
                <p className="font-mono text-xs text-green-400 uppercase tracking-widest mb-2">
                  <span className="animate-pulse">▶</span> DATA ENGINEERING CERTIFICATION
                </p>
                <h3 className="text-xl font-bold uppercase tracking-wide leading-snug">Databricks Certified Data Engineer Associate</h3>
                <p className="font-mono text-xs text-zinc-400 mt-2">Credential ID: 190780752   //   Valid through August 2028</p>
              </div>
              <div className="flex-shrink-0">
                <img src="/certificates/databricks.png.png" alt="Databricks Badge" className="w-24 h-24 object-contain" style={{ filter: 'drop-shadow(0 0 0 2px white) drop-shadow(0 0 3px white)' }} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelected(null)}
            className="fixed top-5 right-6 font-mono text-white text-xl uppercase tracking-widest hover:text-green-400 z-50 leading-none"
            aria-label="Close"
          >
            ✕
          </button>
          {/* Certificate — stopPropagation prevents backdrop click from firing */}
          <div
            className="overflow-y-auto max-h-full w-full flex justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selected} alt="Certificate" className="max-w-2xl w-full border-2 border-white object-contain" />
          </div>
        </div>
      )}
    </section>
  )
}
