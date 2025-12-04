'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    instrument: '',
    age: '',
    experience: '',
    lessonDuration: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission (replace with actual API call later)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  if (submitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-ivory flex items-center justify-center px-4 pt-16 sm:pt-20">
          <motion.div 
            className="max-w-2xl w-full text-center py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="text-6xl sm:text-7xl mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              ✓
            </motion.div>
            <motion.h1 
              className="text-3xl sm:text-4xl font-bold text-midnight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Thank You for Reaching Out!
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              We've received your message and will respond within 24 hours (usually much faster).
            </motion.p>
            <motion.p 
              className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Check your inbox for a confirmation email.
            </motion.p>
            
            <motion.div 
              className="border-t border-gray-200 pt-8 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-base sm:text-lg font-semibold mb-6">While You Wait...</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    href="/teachers"
                    className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-gold hover:shadow-lg transition-all"
                  >
                    <p className="font-semibold text-midnight text-sm sm:text-base">Meet Our Teachers</p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2">View →</p>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    href="/about"
                    className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-gold hover:shadow-lg transition-all"
                  >
                    <p className="font-semibold text-midnight text-sm sm:text-base">Read About Our Philosophy</p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2">Read →</p>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-xs sm:text-sm text-gray-500 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Questions? Call us: <a href="tel:+15615249151" className="text-gold hover:underline">+1 561 524 9151</a>
            </motion.p>
          </motion.div>
        </main>
        <Footer />
      </>
    )
  }

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
              Get Started with a FREE 30 Minute Lesson
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg text-white/90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Fill out the form below and we'll match you with the perfect instructor
            </motion.p>
          </div>
        </motion.section>

        {/* Contact Form + Info */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
              {/* Form */}
              <motion.div 
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    {/* Name - Split into First/Last */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Name *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent transition-all text-sm sm:text-base"
                        />
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent transition-all text-sm sm:text-base"
                        />
                      </div>
                    </motion.div>

                    {/* Instrument */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      <label htmlFor="instrument" className="block text-sm font-semibold text-gray-700 mb-3">
                        Which instrument do you want to sign up for? *
                      </label>
                      <select
                        id="instrument"
                        name="instrument"
                        required
                        value={formData.instrument}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent transition-all text-sm sm:text-base bg-white"
                      >
                        <option value="">Select an instrument</option>
                        <option value="piano">Piano</option>
                        <option value="violin">Violin</option>
                        <option value="voice">Voice</option>
                      </select>
                    </motion.div>

                    {/* Student's Age */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-3">
                        Student's Age *
                      </label>
                      <select
                        id="age"
                        name="age"
                        required
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent transition-all text-sm sm:text-base bg-white"
                      >
                        <option value="">Select age range</option>
                        <option value="under-5">Under 5</option>
                        <option value="5-10">5-10 years</option>
                        <option value="11-13">11-13 years</option>
                        <option value="14-18">14-18 years</option>
                        <option value="19-25">19-25 years</option>
                        <option value="26-45">26-45 years</option>
                        <option value="46-65">46-65 years</option>
                        <option value="over-65">Over 65</option>
                      </select>
                    </motion.div>

                    {/* Experience Level */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-3">
                        Does the student have any experience with learning music? *
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent transition-all text-sm sm:text-base bg-white"
                      >
                        <option value="">Select experience level</option>
                        <option value="no">No</option>
                        <option value="formal">Some formal training</option>
                        <option value="self-taught">Some self-taught experience</option>
                        <option value="0-2">0-2 years experience</option>
                        <option value="2-4">2-4 years experience</option>
                        <option value="4+">4+ years experience</option>
                      </select>
                    </motion.div>

                    {/* Lesson Duration */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    >
                      <label htmlFor="lessonDuration" className="block text-sm font-semibold text-gray-700 mb-3">
                        How long would the student like the lessons to be? *
                      </label>
                      <select
                        id="lessonDuration"
                        name="lessonDuration"
                        required
                        value={formData.lessonDuration}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent transition-all text-sm sm:text-base bg-white"
                      >
                        <option value="">Select lesson duration</option>
                        <option value="30">30 minutes</option>
                        <option value="45">45 minutes</option>
                        <option value="60">60 minutes</option>
                      </select>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent transition-all text-sm sm:text-base"
                      />
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.5 }}
                    >
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                        Comment or Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Any questions or special requests?"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none text-sm sm:text-base"
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gold text-midnight font-bold py-4 px-8 rounded-xl hover:bg-gold-light transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg"
                        whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      >
                        {isSubmitting ? 'Submitting...' : 'Get My Free Lesson →'}
                      </motion.button>
                      <p className="text-xs text-gray-500 text-center mt-3">
                        No credit card required • Free 30-minute trial lesson
                      </p>
                    </motion.div>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Pricing Table */}
                <motion.div 
                  className="bg-gradient-to-br from-midnight to-midnight-light rounded-2xl shadow-lg p-6 sm:p-8 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-4">Lesson Pricing</h3>
                  <div className="space-y-3">
                    {[
                      { duration: '30 minutes', price: '$30', popular: false },
                      { duration: '40 minutes', price: '$40', popular: true },
                      { duration: '50 minutes', price: '$50', popular: false },
                      { duration: '60 minutes', price: '$60', popular: false },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                          item.popular 
                            ? 'bg-gold/20 border border-gold/40' 
                            : 'bg-white/5 hover:bg-white/10'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{item.duration}</span>
                          {item.popular && (
                            <span className="text-xs bg-gold text-midnight px-2 py-0.5 rounded-full font-semibold">
                              Popular
                            </span>
                          )}
                        </div>
                        <span className="text-lg font-bold text-gold">{item.price}</span>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-xs text-white/70 mt-4 text-center">
                    Per lesson • Flexible scheduling
                  </p>
                </motion.div>

                {/* Contact Info */}
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-midnight mb-6">Contact Info</h3>
                  
                  <div className="space-y-6">
                    {[
                      { icon: '📧', label: 'Email', content: <a href="mailto:musicacademy.orpheus@gmail.com" className="text-gold hover:underline text-sm">musicacademy.orpheus@gmail.com</a> },
                      { icon: '📞', label: 'Phone', content: <a href="tel:+15615249151" className="text-gold hover:underline text-sm">+1 561 524 9151</a> }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      >
                        <p className="text-xs font-semibold text-gray-500 mb-2">{item.icon} {item.label}</p>
                        {item.content}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* What Happens Next */}
                <motion.div 
                  className="bg-gradient-to-br from-midnight to-midnight-light rounded-2xl shadow-lg p-6 sm:p-8 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-4">What Happens Next?</h3>
                  <ul className="space-y-4 text-sm text-white/90">
                    {[
                      { icon: '📧', text: 'We will email you within 24 hours' },
                      { icon: '🎯', text: 'Match you with the perfect instructor' },
                      { icon: '📅', text: 'Schedule your FREE trial lesson' },
                      { icon: '🎵', text: 'Start your musical journey!' }
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1 + index * 0.1, duration: 0.3 }}
                      >
                        <span className="text-gold text-lg flex-shrink-0">{item.icon}</span>
                        <span>{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
