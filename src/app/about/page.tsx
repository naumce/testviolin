'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Fixed positions for musical notes (prevents hydration mismatch)
const notePositions = [
  { left: 12, top: 18, duration: 4.3, delay: 0.1 },
  { left: 88, top: 12, duration: 5.4, delay: 0.7 },
  { left: 22, top: 75, duration: 4.9, delay: 1.3 },
  { left: 68, top: 68, duration: 5.6, delay: 0.5 },
  { left: 42, top: 22, duration: 4.4, delay: 1.6 },
  { left: 58, top: 82, duration: 5.9, delay: 0.8 },
  { left: 32, top: 48, duration: 4.7, delay: 1.9 },
  { left: 78, top: 38, duration: 5.1, delay: 0.4 },
  { left: 8, top: 58, duration: 5.4, delay: 1.1 },
  { left: 52, top: 8, duration: 5.0, delay: 1.5 },
  { left: 92, top: 88, duration: 4.8, delay: 0.2 },
  { left: 48, top: 92, duration: 5.2, delay: 1.7 },
]

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory pt-16 sm:pt-20">
        {/* Hero */}
        <motion.section 
          className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-midnight via-midnight-light to-midnight-dark relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Musical notes decoration */}
          <div className="absolute inset-0 pointer-events-none">
            {notePositions.map((pos, i) => (
              <motion.div
                key={i}
                className="absolute text-gold/10 text-4xl"
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 10, -10, 0],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: pos.duration,
                  repeat: Infinity,
                  delay: pos.delay,
                }}
              >
                {i % 2 === 0 ? '♪' : '♫'}
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Story
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg text-white/90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Where passion meets excellence in music education
            </motion.p>
          </div>
        </motion.section>

        {/* Origin Story */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <AnimatedSection>
                <motion.div 
                  className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/data/SliderImages/Studio.png"
                    alt="Orpheus Music Academy Studio"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
                  <motion.div 
                    className="absolute bottom-6 left-6 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-lg sm:text-xl font-bold">Since 2013</p>
                    <p className="text-sm text-white/80">10+ Years of Excellence</p>
                  </motion.div>
                </motion.div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-midnight mb-4 sm:mb-6">
                    Born from a Simple Belief
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                    <strong className="text-gold">Everyone deserves access to world-class music instruction</strong>, 
                    regardless of where they live.
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                    What started as an experiment has grown into a thriving community of over 500 students 
                    and 15 world-class instructors from conservatories around the world.
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    We have never lost sight of what makes us unique: the belief that music 
                    education should be personal, inspiring, and focused on the whole musician—not just the notes on the page.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-12 sm:py-16 lg:py-20 bg-ivory">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-midnight mb-3 sm:mb-4 text-center">
                What We Believe
              </h2>
              <p className="text-center text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
                Music Education Should Be:
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: '🎯',
                  title: 'PERSONAL',
                  desc: 'No two students are the same. Your lessons should reflect your goals, your pace, and your unique musical voice.',
                  gradient: 'from-gold/20 to-gold/5'
                },
                {
                  icon: '🎼',
                  title: 'HOLISTIC',
                  desc: 'Great musicians are not just technically proficient—they understand theory, history, and the emotional language of music.',
                  gradient: 'from-midnight/10 to-midnight/5'
                },
                {
                  icon: '✨',
                  title: 'JOYFUL',
                  desc: 'Music should bring joy, not stress. We create a supportive environment where mistakes are part of learning and progress is celebrated.',
                  gradient: 'from-gold/20 to-gold/5'
                },
                {
                  icon: '🌍',
                  title: 'ACCESSIBLE',
                  desc: 'Geography should not limit access to great teaching. Online lessons break down barriers and connect students with the perfect instructor.',
                  gradient: 'from-midnight/10 to-midnight/5'
                }
              ].map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.15}>
                  <motion.div 
                    className={`bg-gradient-to-br ${item.gradient} border border-gray-200/50 p-6 sm:p-8 rounded-2xl h-full shadow-md hover:shadow-xl transition-all`}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="text-4xl sm:text-5xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold text-midnight mb-3">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item.desc}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Orpheus Myth */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-8 sm:mb-12">
                <motion.div 
                  className="inline-block text-6xl sm:text-7xl mb-4"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🎵
                </motion.div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-midnight mb-4">
                  The Myth Behind Our Name
                </h2>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="bg-gradient-to-br from-gold/10 to-ivory rounded-2xl border border-gold/20 p-6 sm:p-10">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  In Greek mythology, <strong className="text-gold">Orpheus</strong> was a legendary musician whose playing was so beautiful it could charm 
                  animals, move trees, and even soften the hearts of the gods.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We chose the name Orpheus because it represents the <strong>transformative power of music</strong>—the way 
                  a single song can change your mood, a single lesson can unlock new understanding, and a lifetime of 
                  music-making can enrich your world immeasurably.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic">
                  We do not promise you will charm the gods. But we do promise you will discover the magic that happens when 
                  dedication meets great teaching.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-midnight via-midnight-light to-midnight-dark relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ 
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }} />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
                Orpheus at a Glance
              </h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { number: '500+', label: 'Students Taught', icon: '🎓' },
                { number: '15', label: 'Expert Instructors', icon: '👨‍🏫' },
                { number: '10+', label: 'Years of Excellence', icon: '⭐' },
                { number: '4.9/5', label: 'Average Rating', icon: '⭐' },
                { number: '12K+', label: 'Lessons Delivered', icon: '🎵' },
                { number: '30+', label: 'Countries', icon: '🌍' }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <motion.p 
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-xs sm:text-sm text-white/80 mb-2">{stat.label}</p>
                  <p className="text-2xl">{stat.icon}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 lg:py-20 bg-ivory">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-midnight mb-4 sm:mb-6">
                Become Part of Our Story
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10">
                Join hundreds of students who have discovered their musical voice with Orpheus.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="/contact"
                  className="inline-block bg-gold text-midnight px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-gold-light transition-all shadow-lg hover:shadow-xl"
                >
                  Start Your Journey →
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
