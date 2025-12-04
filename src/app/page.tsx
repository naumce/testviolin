'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { teachers } from '@/data/teachers'

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

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div className="min-h-screen flex flex-col bg-[--color-ivory]" ref={containerRef}>
      <Header />
      <main className="flex-grow">
        <Hero />

        {/* What Makes Us Different */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[--color-ivory] text-[--color-midnight]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-center">
                What You'll Love About Learning With Us
              </h2>
              <p className="text-center text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12 sm:mb-16">
                We're not just another music school. We're a community of passionate musicians dedicated to your growth.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {[
                {
                  title: "Conservatory-Trained Faculty",
                  desc: "Learn from graduates of Juilliard, Curtis, Berklee, and Manhattan School of Music. Our instructors are active performers who bring real-world expertise to every lesson.",
                  icon: "🎓",
                  delay: 0
                },
                {
                  title: "Flexible & Personalized",
                  desc: "No contracts, no commuting. Learn from home on your schedule with lessons tailored to your goals, level, and musical interests. Start or pause anytime.",
                  icon: "📅",
                  delay: 0.2
                },
                {
                  title: "Holistic Approach",
                  desc: "We teach more than notes. Every lesson integrates technique, theory, listening skills, and creativity to develop complete, confident musicians.",
                  icon: "🎵",
                  delay: 0.4
                }
              ].map((item, index) => (
                <AnimatedSection key={index} delay={item.delay}>
                  <motion.div
                    className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 h-full"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="text-5xl sm:text-6xl mb-4 sm:mb-6"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-warm-neutral leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Teachers Preview */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6">
                  Meet Your Instructors
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                  Every Orpheus teacher is a conservatory-educated artist with a passion for teaching. Over 95% of our students rate their lessons 4.9 out of 5 stars.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {teachers.slice(0, 3).map((teacher, index) => (
                <AnimatedSection key={index} delay={index * 0.2}>
                  <Link href={`/teachers/${teacher.slug}`}>
                    <motion.div
                      className="bg-gradient-to-br from-midnight to-midnight-light rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full"
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="relative h-48 sm:h-56">
                        <Image
                          src={teacher.image}
                          alt={`${teacher.name} - ${teacher.instrument} instructor`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent"></div>
                      </div>
                      <div className="p-6 sm:p-8">
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2 text-white">{teacher.name}</h3>
                        <p className="text-gold text-sm sm:text-base mb-2">{teacher.instrument} Instructor</p>
                        <p className="text-white/70 text-xs sm:text-sm mb-4">{teacher.credentials}</p>
                        <motion.div
                          className="inline-flex items-center text-white/80 hover:text-gold transition-colors text-sm sm:text-base"
                          whileHover={{ x: 5 }}
                        >
                          View Profile →
                        </motion.div>
                      </div>
                    </motion.div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.6}>
              <div className="text-center">
                <Link href="/teachers">
                  <motion.button
                    className="bg-midnight text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl font-semibold hover:bg-midnight-light transition-all shadow-lg text-base sm:text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Meet All Teachers
                  </motion.button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Student Testimonials */}
        <AnimatedSection>
          <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gold/10 to-gold/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12 sm:mb-16 text-center">
                What Our Students Say
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    name: "Rachel M.",
                    instrument: "Piano Student",
                    quote: "After trying three other online platforms, Orpheus is the only one that felt like real conservatory-level instruction. My teacher Sarah pushes me technically while keeping lessons enjoyable.",
                    rating: 5
                  },
                  {
                    name: "David K.",
                    instrument: "Violin Student",
                    quote: "I'm a busy professional who always wanted to learn violin. The flexible scheduling and patient teaching style made it possible. Six months in and I'm playing pieces I never thought I could.",
                    rating: 5
                  },
                  {
                    name: "Sophie L.",
                    instrument: "Voice Student",
                    quote: "Elena helped me prepare for my college auditions and I got into my top choice music program. Her knowledge of vocal technique and repertoire is incredible.",
                    rating: 5
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 sm:p-8 rounded-2xl shadow-md"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-gold text-lg">⭐</span>
                      ))}
                    </div>
                    <p className="quote text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-midnight text-sm sm:text-base">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-gray-600">{testimonial.instrument}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Latest Blog Posts */}
        <AnimatedSection>
          <section className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6">
                  From Our Blog
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                  Explore music education insights, practice tips, and stories from the world of classical music.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
                {[
                  {
                    title: "5 Practice Strategies That Actually Work",
                    excerpt: "Discover evidence-based techniques used by professional musicians to maximize practice efficiency and avoid burnout.",
                    category: "Practice Tips",
                    date: "Dec 1, 2024"
                  },
                  {
                    title: "How Online Lessons Compare to In-Person",
                    excerpt: "A honest look at the pros and cons of virtual music instruction, and when it might be right for you.",
                    category: "Online Learning",
                    date: "Nov 28, 2024"
                  },
                  {
                    title: "The Composers Every Pianist Should Know",
                    excerpt: "From Bach to Debussy: essential composers that define the piano repertoire and why they matter.",
                    category: "Music History",
                    date: "Nov 25, 2024"
                  }
                ].map((post, index) => (
                  <motion.div
                    key={index}
                    className="bg-ivory p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-gold hover:shadow-lg transition-all"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    whileHover={{ y: -4 }}
                  >
                    <p className="text-xs sm:text-sm text-gold font-semibold uppercase tracking-wider mb-2">{post.category}</p>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-midnight mb-3">{post.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-gray-500">{post.date}</span>
                      <span className="text-gold font-medium text-sm hover:underline cursor-pointer">Read More →</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <Link href="/blog">
                  <motion.button
                    className="border-2 border-midnight text-midnight px-8 sm:px-12 py-3 rounded-xl font-semibold hover:bg-midnight hover:text-white transition-all text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View All Articles
                  </motion.button>
                </Link>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-midnight via-midnight-light to-midnight-dark text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-white">
                  Ready to Begin Your Musical Journey?
                </h2>
                <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 text-white/90 leading-relaxed">
                  Experience the Orpheus difference with a complimentary 30-minute lesson. No credit card required.
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    href="/contact" 
                    className="inline-block bg-gold text-midnight font-semibold py-3 sm:py-4 px-8 sm:px-12 rounded-xl shadow-lg hover:shadow-xl hover:bg-gold-light transition-all text-base sm:text-lg"
                  >
                    Schedule Your Free Lesson →
                  </Link>
                </motion.div>
                
                <p className="text-xs sm:text-sm mt-6 sm:mt-8 text-white/70">
                  No credit card required • No obligation • Just great music education
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
