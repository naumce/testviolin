'use client'

import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'

interface BlogPostClientProps {
  post: {
    title: string
    category: string
    date: string
    readTime: string
    content: Array<{
      type: string
      text: string
    }>
  }
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-ivory pt-16 sm:pt-20">
      {/* Reading Progress Bar */}
      <motion.div 
        className="fixed top-16 sm:top-20 left-0 h-1 bg-gold z-50"
        style={{ width: `${scrollProgress}%` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />

      {/* Hero - Dynamic with floating notes */}
      <motion.section 
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-midnight via-midnight-light to-midnight-dark relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Floating musical notes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-gold/10 text-3xl"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -25, 0],
                rotate: [0, 8, -8, 0],
                opacity: [0.1, 0.25, 0.1],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            >
              {i % 2 === 0 ? '♪' : '♫'}
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="inline-block text-xs sm:text-sm text-gold font-semibold uppercase tracking-wider mb-3 sm:mb-4 px-4 py-1.5 bg-gold/10 rounded-full border border-gold/30"
              whileHover={{ scale: 1.05 }}
            >
              {post.category}
            </motion.span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/80">
              <span className="flex items-center gap-1">
                <span className="text-gold">📅</span>
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="text-gold">⏱️</span>
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Article Content */}
      <article className="py-8 sm:py-12 lg:py-16 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Decorative musical note on side */}
          <motion.div
            className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 text-gold/20 text-6xl"
            animate={{ 
              rotate: [0, 10, -10, 0],
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ♪
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 lg:p-12 border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Article intro decoration */}
            <motion.div 
              className="flex items-center gap-3 mb-8 pb-6 border-b border-gold/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div 
                className="w-1 h-16 bg-gradient-to-b from-gold to-gold-light rounded-full"
                initial={{ height: 0 }}
                animate={{ height: 64 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
              <div>
                <p className="text-xs sm:text-sm font-semibold text-gold uppercase tracking-wider">Article</p>
                <p className="text-xs sm:text-sm text-gray-500">{post.content.length} sections</p>
              </div>
            </motion.div>

            <div className="prose prose-lg max-w-none">
              {post.content.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="text-xl sm:text-2xl lg:text-3xl font-bold text-midnight mt-10 sm:mt-12 mb-4 sm:mb-6 flex items-center gap-3 group"
                    >
                      <motion.span 
                        className="text-gold text-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        ♪
                      </motion.span>
                      {block.text}
                    </h2>
                  )
                }
                
                return (
                  <p
                    key={index}
                    className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-gold first-letter:mr-2 first-letter:float-left"
                  >
                    {block.text}
                  </p>
                )
              })}
            </div>
          </motion.div>

          {/* Author CTA - Enhanced */}
          <motion.div
            className="mt-10 sm:mt-12 bg-gradient-to-br from-midnight to-midnight-light p-8 sm:p-10 rounded-3xl shadow-2xl border border-gold/20 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-10 -right-10 text-gold/10 text-9xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              ♫
            </motion.div>
            
            <div className="relative z-10">
              <motion.div 
                className="inline-block text-4xl mb-4"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🎵
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Ready to Level Up Your Playing?
              </h3>
              <p className="text-sm sm:text-base text-white/80 mb-6 sm:mb-8 leading-relaxed">
                Learn from conservatory-trained instructors who can help you implement these strategies in your own practice. Schedule a free trial lesson today.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="inline-block bg-gold text-midnight px-8 py-4 rounded-xl font-bold hover:bg-gold-light transition-all shadow-xl hover:shadow-2xl text-base"
                >
                  Schedule Free Lesson →
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div 
            className="mt-10 sm:mt-12 flex items-center justify-between"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-midnight font-semibold hover:text-gold transition-colors text-sm sm:text-base"
            >
              <motion.span
                className="text-xl"
                whileHover={{ x: -5 }}
              >
                ←
              </motion.span>
              <span>All Articles</span>
            </Link>

            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 text-gray-500 hover:text-gold transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Back to Top</span>
              <motion.span
                className="text-xl"
                whileHover={{ y: -5 }}
              >
                ↑
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </article>
    </main>
  )
}

