'use client'

import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import Link from 'next/link'

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion() ?? false

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  }

  const ctaVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.4 },
    },
  }

  return (
    <section
      className="relative pt-20 pb-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle mesh grid pattern — 3% opacity */}
      <div
        className="absolute inset-0 -z-20 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--line) 1px, transparent 1px),
            linear-gradient(90deg, var(--line) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Background brass orb — slow pulsing scale (6s loop) */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brass-light/10 rounded-full blur-[120px] -z-10 pointer-events-none"
        animate={prefersReducedMotion ? undefined : { scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: 'center' }}
      />

      {/* Background teal orb — slow pulsing scale (6s loop, offset by 3s) */}
      <motion.div
        className="absolute bottom-0 right-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-teal-light/10 rounded-full blur-[100px] -z-10 pointer-events-none"
        animate={prefersReducedMotion ? undefined : { scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        style={{ transformOrigin: 'center' }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-5xl px-6"
      >
        <div className="grid grid-cols-1 gap-8">
          {/* Eyebrow */}
          <motion.span
            variants={itemVariants}
            className="inline-block font-mono text-xs font-medium uppercase tracking-[0.14em] text-brass mb-2"
          >
            Superintelligence Service · Agent Mesh 1.0.5
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            id="hero-heading"
            className="font-display text-5xl md:text-7xl font-extrabold leading-[1.02] tracking-tight text-ink mb-6"
          >
            One governed agent fabric across{' '}
            <em className="font-normal text-brass italic">your platforms</em>.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-10 font-body"
          >
            Run AI agents natively inside 23 enterprise platforms, under one
            policy, one audit trail and human approval, using the vendor AI you
            already license.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={ctaVariants}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <Link
              href="#engage"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-brass text-[#10151c] font-semibold rounded-lg text-base transition-all hover:scale-[1.02] hover:shadow-[0_0_0_12px_rgba(154,100,16,0.25)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal focus-visible:ring-offset-2"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2"
              >
                Book an Assess workshop
                <span className="text-sm">→</span>
              </motion.span>
            </Link>

            <Link
              href="#how"
              className="group inline-flex items-center justify-center px-8 py-4 border border-line text-ink font-semibold rounded-lg text-base transition-all hover:bg-paper-light hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                How it works
              </motion.span>
            </Link>
          </motion.div>

          {/* Proof strip preview — breathing teal dots (3s loop) */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap justify-between items-center gap-4 border-t border-line pt-8 text-xs font-mono text-muted"
          >
            <ProofStripItem text="23/23 kits validated" prefersReducedMotion={prefersReducedMotion} />
            <ProofStripItem text="1,200 governed agents" prefersReducedMotion={prefersReducedMotion} />
            <ProofStripItem text="Shadow mode by default" prefersReducedMotion={prefersReducedMotion} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

function ProofStripItem({
  text,
  prefersReducedMotion,
}: {
  text: string
  prefersReducedMotion: boolean
}) {
  return (
    <span className="flex items-center gap-2">
      <motion.span
        className="w-2 h-2 rounded-full bg-teal"
        animate={prefersReducedMotion ? {} : { opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: 'center' }}
      />
      {text}
    </span>
  )
}