'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Logo } from '@/components/ui/Logo';

export function Cta() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden border-t border-line-strong bg-ink-950 py-32 sm:py-40">
      {/* Atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[640px] w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(213,180,106,0.10),transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-grain opacity-[0.05] mix-blend-overlay" />
      </div>

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/60 to-transparent" />

      <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex justify-center">
            <Logo size="md" className="text-ivory" />
          </div>

          <Eyebrow gold className="mt-10 justify-center">
            By Invitation
          </Eyebrow>

          <h2 className="mt-6 font-display text-5xl leading-[1.02] tracking-display text-ivory sm:text-6xl">
            A private bank
            <br />
            <span className="italic text-gold-300">begins with a conversation.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-muted">
            We extend membership through introduction. Leave your address; a managing director will be in
            touch within 48 hours, in confidence, with no obligation.
          </p>

          {/* Form */}
          {!submitted ? (
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-12 flex max-w-xl flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="relative flex-1">
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@private.address"
                  className="w-full rounded-full border border-line-strong bg-ink-900/60 px-6 py-4 text-[14px] text-ivory placeholder:text-muted-strong backdrop-blur transition-all duration-300 focus:border-gold-300/50 focus:outline-none focus:ring-2 focus:ring-gold-300/20"
                />
              </div>
              <Button type="submit" variant="gold" size="lg" iconRight={<ArrowRight className="h-4 w-4" />}>
                Request Invitation
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto mt-12 flex max-w-xl items-center justify-center gap-3 rounded-full border border-gold-300/30 bg-gold-300/[0.06] px-6 py-4 text-[14px] text-gold-100"
            >
              <Check className="h-4 w-4" />
              <span>Received. A managing director will be in touch within 48 hours.</span>
            </motion.div>
          )}

          <p className="mt-10 text-[11px] uppercase tracking-[0.3em] text-muted-strong">
            Discretion · Sovereignty · Continuity
          </p>
        </motion.div>
      </div>
    </section>
  );
}
