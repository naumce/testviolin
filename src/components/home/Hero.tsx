'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const slides = [
  {
    id: 1,
    image: '/data/SliderImages/hero1.png',
    title: 'Begin Your Musical Journey',
    subtitle: 'Conservatory-trained instructors teaching online',
  },
  {
    id: 2,
    image: '/data/SliderImages/Studio.png',
    title: 'Learn from the Best',
    subtitle: 'Professional musicians with decades of experience',
  },
  {
    id: 3,
    image: '/data/SliderImages/Singer.png',
    title: 'Find Your Voice',
    subtitle: 'Expert vocal coaching for all levels',
  },
  {
    id: 4,
    image: '/data/SliderImages/violin.png',
    title: 'Master Your Instrument',
    subtitle: 'Piano, violin, voice, and theory lessons',
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Auto-advance slider every 6 seconds (longer for better UX)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  if (!mounted) return null

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden bg-midnight">
      {/* Slider Background Images - Crossfade with overlap */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1,
              ease: "easeInOut"
            }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/50 to-midnight/80" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Content */}
      <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ 
              duration: 0.5,
              ease: "easeInOut"
            }}
          >
            {/* Main Headline - Mobile First! */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-white drop-shadow-2xl">
              {slides[currentSlide].title}
            </h1>

            {/* Subheadline - Smaller, cleaner */}
            <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 text-white/80 max-w-2xl mx-auto leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* CTA Buttons - Mobile Optimized */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              href="/contact" 
              className="inline-block bg-gold text-midnight font-semibold py-3 px-8 sm:py-3.5 sm:px-10 rounded-xl shadow-lg hover:shadow-xl hover:bg-gold-light transition-all duration-300 text-sm sm:text-base"
            >
              Try a Free Lesson →
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              href="/teachers" 
              className="inline-block border-2 border-white text-white font-medium py-3 px-8 sm:py-3.5 sm:px-10 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base"
            >
              Meet Our Teachers
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust Indicator - Clean & Simple */}
        <motion.div 
          className="text-xs sm:text-sm text-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <p className="flex items-center justify-center gap-2">
            <span className="text-gold text-sm sm:text-base">⭐⭐⭐⭐⭐</span> 
            <span>4.9/5 from 500+ students</span>
          </p>
        </motion.div>
      </div>

      {/* Navigation Arrows - Mobile Friendly */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 backdrop-blur-md rounded-full p-2.5 sm:p-3 transition-all duration-300"
        aria-label="Previous slide"
      >
        <motion.svg
          className="w-4 h-4 sm:w-5 sm:h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          whileHover={{ x: -2 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </motion.svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 backdrop-blur-md rounded-full p-2.5 sm:p-3 transition-all duration-300"
        aria-label="Next slide"
      >
        <motion.svg
          className="w-4 h-4 sm:w-5 sm:h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </motion.svg>
      </button>

      {/* Slide Indicators (Dots) - Mobile First */}
      <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-6 sm:w-8 bg-gold'
                : 'w-1.5 sm:w-2 bg-white/30 hover:bg-white/50'
            } h-1.5 sm:h-2`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator - Subtle */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.svg 
          className="w-5 h-5 sm:w-6 sm:h-6 text-white/40" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          whileHover={{ scale: 1.2, opacity: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </motion.svg>
      </motion.div>
    </section>
  )
}
