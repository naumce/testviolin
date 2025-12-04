'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { blogCategories, blogPosts } from '@/data/blog'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

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
              Learn & Explore
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg text-white/90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Music education insights, practice wisdom, and stories from the conservatory world
            </motion.p>
          </div>
        </motion.section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b border-gray-200 sticky top-16 sm:top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              <motion.button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all text-sm sm:text-base ${
                  selectedCategory === 'all'
                    ? 'bg-midnight text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                All Articles
              </motion.button>
              {blogCategories.map((category) => (
                <motion.button
                  key={category.slug}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all text-sm sm:text-base ${
                    selectedCategory === category.slug
                      ? 'bg-midnight text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.icon} {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">No articles found in this category yet.</p>
              </div>
            ) : (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                layout
              >
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <motion.div
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
                        whileHover={{ y: -8 }}
                      >
                        {/* Featured Image */}
                        <div className="relative h-48 sm:h-56 bg-gradient-to-br from-midnight to-midnight-light overflow-hidden group">
                          {post.image ? (
                            <>
                              <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                              <div className="absolute inset-0 bg-midnight/20 group-hover:bg-midnight/10 transition-colors" />
                            </>
                          ) : (
                            <div className="flex items-center justify-center h-full text-6xl sm:text-7xl">
                              {blogCategories.find(c => c.slug === post.category)?.icon}
                            </div>
                          )}
                          {/* Category badge */}
                          <div className="absolute top-3 left-3 bg-gold/90 backdrop-blur-sm px-3 py-1 rounded-full">
                            <span className="text-xs font-semibold text-midnight">
                              {blogCategories.find(c => c.slug === post.category)?.icon}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-6 sm:p-8 flex-1 flex flex-col">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs sm:text-sm text-gold font-semibold uppercase tracking-wider">
                              {blogCategories.find(c => c.slug === post.category)?.name}
                            </span>
                            <span className="text-xs text-gray-500">{post.readTime}</span>
                          </div>
                          
                          <h2 className="font-serif text-xl sm:text-2xl font-bold text-midnight mb-3 leading-tight">
                            {post.title}
                          </h2>
                          
                          <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed flex-1">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                            <span className="text-xs sm:text-sm text-gray-500">{post.date}</span>
                            <motion.span 
                              className="text-gold font-medium text-sm"
                              whileHover={{ x: 5 }}
                            >
                              Read More →
                            </motion.span>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA */}
        <motion.section 
          className="py-16 sm:py-20 bg-gradient-to-br from-midnight via-midnight-light to-midnight-dark"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Want to Learn from the Best?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10">
              Schedule your free trial lesson with our conservatory-trained instructors
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="/contact"
                className="inline-block bg-gold text-midnight px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gold-light transition-all shadow-lg"
              >
                Try a Free Lesson →
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  )
}
