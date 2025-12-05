'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TeacherCard from '@/components/teachers/TeacherCard'
import Link from 'next/link'
import { teachers } from '@/data/teachers'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
}

export default function TeachersPage() {
  const [filter, setFilter] = useState('All')

  const instruments = ['All', 'Piano', 'Violin', 'Voice', 'Music Theory']

  const filteredTeachers = filter === 'All'
    ? teachers
    : teachers.filter(t => t.instrument === filter)

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
              Meet Our World-Class Instructors
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Every Orpheus teacher is a conservatory-educated artist with a passion for teaching. Find your perfect match.
            </motion.p>
          </div>
        </motion.section>

        {/* Filter Buttons */}
        <section className="py-6 sm:py-8 bg-white border-b border-gray-200 sticky top-0 sm:top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="flex flex-wrap justify-center gap-2 sm:gap-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {instruments.map((instrument) => (
                <motion.button
                  key={instrument}
                  onClick={() => setFilter(instrument)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all text-sm sm:text-base ${filter === instrument
                      ? 'bg-midnight text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  layout
                >
                  {instrument}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Teachers Grid */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={filter}
                variants={container}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {filteredTeachers.map((teacher) => (
                  <motion.div key={teacher.slug} variants={item} layout>
                    <TeacherCard {...teacher} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-midnight via-midnight-light to-midnight-dark"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Not Sure Who's Right for You?
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let us help you find your perfect instructor match based on your goals and learning style.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gold text-midnight px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg hover:bg-gold-light transition-all shadow-lg hover:shadow-xl"
              >
                Schedule Free Consultation →
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  )
}
