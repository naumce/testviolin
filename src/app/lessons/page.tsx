'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

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

export default function LessonsPage() {
  const lessons = [
    {
      id: 'piano',
      icon: '🎹',
      image: '/data/lessonsPage/Piano.png',
      title: 'Piano Lessons',
      subtitle: 'Classical, Jazz, Contemporary',
      description: 'Whether you\'re sitting at a piano for the first time or refining your interpretation of a Chopin nocturne, our piano instructors meet you exactly where you are. We believe in building a strong technical foundation while nurturing your individual musical voice.',
      skills: [
        'Proper hand position, posture, and ergonomic technique',
        'Reading music notation and understanding theory in context',
        'Repertoire spanning Baroque, Classical, Romantic, and contemporary periods',
        'Pedaling, dynamics, and expressive interpretation',
        'Performance confidence and overcoming stage anxiety'
      ],
      gradient: 'from-midnight to-midnight-light'
    },
    {
      id: 'violin',
      icon: '🎻',
      image: '/data/lessonsPage/Violin.png',
      title: 'Violin Lessons',
      subtitle: 'Classical & Fiddle',
      description: 'From the soaring lines of a Vivaldi concerto to the driving rhythms of Appalachian fiddle tunes, the violin is an instrument of extraordinary versatility. Our instructors guide you through the nuances of tone production, intonation, and bowing technique with patience and expertise.',
      skills: [
        'Proper posture, left-hand frame, and bow hold',
        'Tone production through bow speed, weight, and contact point',
        'Scales, etudes, and progressive repertoire',
        'Vibrato, shifting, and advanced left-hand techniques',
        'Style-appropriate bowing and ornamentation'
      ],
      gradient: 'from-soft-burgundy to-midnight'
    },
    {
      id: 'voice',
      icon: '🎤',
      image: '/data/lessonsPage/Voice.png',
      title: 'Voice Lessons',
      subtitle: 'Classical, Musical Theater, Pop',
      description: 'Your voice is the most personal instrument—it\'s you. Our vocal instructors help you discover your unique sound while building the healthy technique that will carry you through a lifetime of singing.',
      skills: [
        'Diaphragmatic breathing and breath support',
        'Vocal health, warm-ups, and injury prevention',
        'Range extension and register blending',
        'Diction, pronunciation, and text interpretation',
        'Stage presence and performance coaching'
      ],
      gradient: 'from-gold to-gold-dark'
    },
    {
      id: 'theory',
      icon: '📚',
      image: '/data/lessonsPage/Theory.png',
      title: 'Music Theory & History',
      subtitle: 'Deepen Your Understanding',
      description: 'Theory isn\'t just rules—it\'s the language that unlocks deeper musicianship. Our theory lessons integrate seamlessly with your instrumental studies, helping you understand the why behind the music you love.',
      skills: [
        'Reading music fluently',
        'Harmony & chord progressions',
        'Ear training & sight-singing',
        'Analysis of great works',
        'Historical context & appreciation'
      ],
      gradient: 'from-muted-teal to-midnight'
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory pt-16 sm:pt-20">
        {/* Hero */}
        <motion.section 
          className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-midnight via-midnight-light to-midnight-dark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover Your Perfect Lesson
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg text-white/90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From classical foundations to contemporary mastery—find your path
            </motion.p>
            
            {/* Quick Nav */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {lessons.map((lesson, index) => (
                <motion.a
                  key={lesson.id}
                  href={`#${lesson.id}`}
                  className="px-4 sm:px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white text-sm sm:text-base transition-all backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                >
                  {lesson.icon} {lesson.title.split(' ')[0]}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Lessons */}
        {lessons.map((lesson, index) => (
          <section 
            key={lesson.id}
            id={lesson.id} 
            className={`py-16 sm:py-20 lg:py-24 scroll-mt-20 ${index % 2 === 0 ? 'bg-ivory' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <AnimatedSection delay={0}>
                  <motion.div 
                    className={`relative rounded-2xl h-64 sm:h-80 lg:h-96 overflow-hidden shadow-xl ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                    whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={lesson.image}
                      alt={lesson.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${lesson.gradient} opacity-20`}></div>
                  </motion.div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-midnight mb-3 sm:mb-4">{lesson.title}</h2>
                    <p className="text-base sm:text-lg text-gold mb-4 sm:mb-6 font-semibold">{lesson.subtitle}</p>
                    
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8">
                      {lesson.description}
                    </p>
                    
                    <h3 className="font-bold text-midnight mb-3 sm:mb-4 text-base sm:text-lg">What You'll Learn:</h3>
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {lesson.skills.map((skill, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                          <span className="text-gold mr-2 text-lg">•</span>
                          <span className="text-sm sm:text-base text-gray-700">{skill}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <motion.div
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link 
                        href="/teachers"
                        className="inline-block bg-midnight text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-midnight-light transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
                      >
                        View {lesson.title.split(' ')[0]} Teachers →
                      </Link>
                    </motion.div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        ))}

        {/* Lesson Format */}
        <AnimatedSection>
          <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-midnight via-midnight-light to-midnight-dark">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Flexible Lesson Options</h2>
              <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto">
                Choose from 30, 40, 50, or 60-minute lessons based on your schedule and learning goals. All lesson durations are available for every instrument.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="/contact"
                  className="inline-block bg-gold text-midnight px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gold-light transition-all shadow-lg hover:shadow-xl"
                >
                  View Pricing & Register →
                </Link>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <section className="py-16 sm:py-20 lg:py-24 bg-ivory">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-midnight mb-4 sm:mb-6">
                Not Sure Which Lesson Is Right for You?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10">
                Let us help. Schedule a free consultation to discuss your goals and find your perfect instructor match.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="/contact"
                  className="inline-block bg-midnight text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-midnight-light transition-all shadow-lg hover:shadow-xl"
                >
                  Schedule Free Consultation →
                </Link>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}
