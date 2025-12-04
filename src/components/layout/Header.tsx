'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/lessons', label: 'Lessons' },
    { href: '/teachers', label: 'Teachers' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Registration Form' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/95 backdrop-blur-md border-b border-midnight/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="relative h-12 sm:h-14 w-32 sm:w-40">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-full h-full"
            >
              <Image
                src="/data/orpheus-logo-3-png-ver-1-1.png"
                alt="Orpheus Music Academy"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`relative text-sm font-medium transition-colors ${
                  isActive(link.href) ? 'text-midnight' : 'text-warm-neutral hover:text-midnight'
                }`}
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  className="inline-block"
                >
                  {link.label}
                </motion.span>
                {isActive(link.href) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-6 left-0 right-0 h-0.5 bg-gold"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="/contact" 
                className="bg-gold text-midnight px-6 py-2.5 rounded-lg font-semibold hover:bg-gold-light transition-all hover:shadow-gold text-sm"
              >
                Try Free Lesson →
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button - Animated Logo */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.svg 
                  key="close"
                  className="w-7 h-7 text-midnight" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </motion.svg>
              ) : (
                <motion.div
                  key="logo"
                  className="relative w-10 h-10"
                  initial={{ rotate: 180, scale: 0.8, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -180, scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  whileHover={{ 
                    rotate: [0, -15, 15, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <Image
                    src="/data/orpheus-ico.png"
                    alt="Menu"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu - Redesigned & Stylish */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop overlay */}
              <motion.div
                className="fixed inset-0 bg-midnight/20 backdrop-blur-sm z-40 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
              />
              
              {/* Menu Panel */}
              <motion.div 
                className="fixed top-[64px] sm:top-[80px] left-0 right-0 z-50 lg:hidden"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-2xl">
                  <div className="max-w-md mx-auto px-4 py-6 space-y-2 relative">
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-6 text-gold/20 text-3xl pointer-events-none">
                      <motion.span
                        animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        ♪
                      </motion.span>
                    </div>
                    <div className="absolute bottom-6 left-6 text-gold/15 text-2xl pointer-events-none">
                      <motion.span
                        animate={{ y: [0, -10, 0], rotate: [0, -8, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                      >
                        ♫
                      </motion.span>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-1">
                      {navLinks.map((link, index) => (
                        <motion.div
                          key={link.href}
                          initial={{ x: -30, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -30, opacity: 0 }}
                          transition={{ delay: index * 0.06, duration: 0.3 }}
                        >
                          <Link 
                            href={link.href} 
                            className={`group block relative overflow-hidden rounded-xl transition-all ${
                              isActive(link.href) 
                                ? 'bg-gradient-to-r from-gold/20 to-gold/10 border border-gold/30' 
                                : 'bg-gray-50/50 hover:bg-gray-100/80 border border-transparent'
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className="flex items-center justify-between px-5 py-3.5">
                              <motion.span
                                className={`font-medium text-base ${
                                  isActive(link.href) ? 'text-midnight font-semibold' : 'text-gray-700'
                                }`}
                                whileHover={{ x: 3 }}
                                transition={{ duration: 0.2 }}
                              >
                                {link.label}
                              </motion.span>
                              {isActive(link.href) ? (
                                <motion.span 
                                  className="text-gold text-lg"
                                  animate={{ rotate: [0, -10, 10, 0] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                  ♪
                                </motion.span>
                              ) : (
                                <span className="text-gray-400 text-lg group-hover:text-gray-600 transition-colors">→</span>
                              )}
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 30, opacity: 0 }}
                      transition={{ delay: navLinks.length * 0.06 + 0.1, duration: 0.3 }}
                      className="pt-3"
                    >
                      <Link 
                        href="/contact" 
                        className="block relative overflow-hidden bg-gradient-to-r from-gold via-gold-light to-gold text-midnight px-6 py-4 rounded-xl font-bold text-center shadow-xl hover:shadow-2xl transition-all text-base group"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                          animate={{ x: ['-200%', '200%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.span
                          whileTap={{ scale: 0.95 }}
                          className="relative flex items-center justify-center gap-2"
                        >
                          <span className="text-lg">🎵</span>
                          <span>Try Free Lesson</span>
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </motion.span>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
