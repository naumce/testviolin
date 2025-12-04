'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import type { Teacher } from '@/data/teachers'

// Fixed positions for musical notes (prevents hydration mismatch)
const notePositions = [
  { left: 15, top: 20, duration: 4.5, delay: 0.2 },
  { left: 85, top: 15, duration: 5.2, delay: 0.8 },
  { left: 25, top: 70, duration: 4.8, delay: 1.2 },
  { left: 70, top: 65, duration: 5.5, delay: 0.4 },
  { left: 45, top: 25, duration: 4.2, delay: 1.5 },
  { left: 60, top: 80, duration: 5.8, delay: 0.6 },
  { left: 35, top: 45, duration: 4.6, delay: 1.8 },
  { left: 80, top: 40, duration: 5.0, delay: 0.3 },
  { left: 10, top: 55, duration: 5.3, delay: 1.0 },
  { left: 55, top: 10, duration: 4.9, delay: 1.4 },
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

export default function TeacherProfileClient({ teacher }: { teacher: Teacher }) {
  return (
    <main className="min-h-screen bg-ivory pt-16 sm:pt-20">
      {/* Hero with floating notes */}
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Photo */}
            <AnimatedSection>
              <motion.div 
                className="relative w-full aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotate: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
                
                {/* Rating badge */}
                <motion.div 
                  className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-gold text-base">⭐</span>
                    <span className="font-bold text-midnight">{teacher.rating}</span>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatedSection>
            
            {/* Info */}
            <AnimatedSection delay={0.2}>
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">
                    {teacher.instrument} Instructor
                  </p>
                  <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                    {teacher.name}
                  </h1>
                  <p className="text-base sm:text-lg text-white/80 mb-3">
                    {teacher.credentials}
                  </p>
                  <p className="text-sm sm:text-base text-white/70 mb-6">
                    {teacher.experience}
                  </p>
                  
                  <motion.div 
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-gold text-lg">⭐⭐⭐⭐⭐</span>
                    <span className="text-white text-sm font-medium">{teacher.rating}/5.0 ({teacher.reviewCount} reviews)</span>
                  </motion.div>
                  
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
                    <p className="quote text-base sm:text-lg text-white/90 italic leading-relaxed">
                      "{teacher.quote}"
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link 
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-gold text-midnight px-8 py-3.5 rounded-xl font-bold hover:bg-gold-light transition-all shadow-lg hover:shadow-xl text-base"
                      >
                        <span>🎵</span>
                        <span>Book a Lesson</span>
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link 
                        href="/contact"
                        className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-all text-base"
                      >
                        Free Trial Lesson →
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </motion.section>

      {/* About */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <motion.div 
                className="w-1 h-12 bg-gradient-to-b from-gold to-gold-light rounded-full"
                initial={{ height: 0 }}
                whileInView={{ height: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-midnight">
                About {teacher.name.split(' ')[0]}
              </h2>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <motion.div 
              className="bg-ivory rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm"
              whileHover={{ shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
            >
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {teacher.bio}
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-12 sm:py-16 lg:py-20 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <motion.div 
                className="w-1 h-12 bg-gradient-to-b from-gold to-gold-light rounded-full"
                initial={{ height: 0 }}
                whileInView={{ height: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-midnight">
                Teaching Specialties
              </h2>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {teacher.specialties.map((specialty, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div 
                  className="bg-white p-5 sm:p-6 rounded-xl shadow-md border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start gap-3">
                    <motion.span 
                      className="text-gold text-2xl flex-shrink-0"
                      whileHover={{ scale: 1.3, rotate: 10 }}
                    >
                      ♪
                    </motion.span>
                    <p className="text-sm sm:text-base text-gray-700">{specialty}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-midnight via-midnight-light to-midnight-dark relative overflow-hidden">
        {/* Background pattern */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <motion.div 
              className="inline-block text-5xl sm:text-6xl mb-6"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.15, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🎵
            </motion.div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Start Learning with {teacher.name.split(' ')[0]}?
            </h2>
            <p className="text-base sm:text-lg text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Schedule your free 30-minute trial lesson today—no obligation, just a chance to meet and see if it is the right fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="/contact"
                  className="inline-block bg-gold text-midnight px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold hover:bg-gold-light transition-all shadow-xl hover:shadow-2xl text-base sm:text-lg"
                >
                  Book Your First Lesson →
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="/teachers"
                  className="inline-block border-2 border-white text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-semibold hover:bg-white/10 transition-all text-base sm:text-lg"
                >
                  View All Teachers
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}

