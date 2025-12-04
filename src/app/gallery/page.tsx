'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const galleryImages = [
  {
    id: 1,
    src: '/data/SliderImages/hero1.png',
    title: 'Our Studio',
    category: 'studio'
  },
  {
    id: 2,
    src: '/data/SliderImages/Studio.png',
    title: 'Recording Sessions',
    category: 'studio'
  },
  {
    id: 3,
    src: '/data/SliderImages/Singer.png',
    title: 'Voice Lessons',
    category: 'lessons'
  },
  {
    id: 4,
    src: '/data/SliderImages/violin.png',
    title: 'Violin Practice',
    category: 'lessons'
  },
  {
    id: 5,
    src: '/data/lessonsPage/Piano.png',
    title: 'Piano Instruction',
    category: 'lessons'
  },
  {
    id: 6,
    src: '/data/lessonsPage/Violin.png',
    title: 'String Instruments',
    category: 'lessons'
  },
  {
    id: 7,
    src: '/data/lessonsPage/Voice.png',
    title: 'Vocal Training',
    category: 'lessons'
  },
  {
    id: 8,
    src: '/data/lessonsPage/Theory.png',
    title: 'Music Theory',
    category: 'lessons'
  },
  {
    id: 9,
    src: '/data/pianotechers/AnastasijaTeacherImg.png',
    title: 'Anastasija Gichevska',
    category: 'teachers'
  },
  {
    id: 10,
    src: '/data/pianotechers/DominikaTeacherImg.png',
    title: 'Dominika Robe Popovska',
    category: 'teachers'
  },
  {
    id: 11,
    src: '/data/pianotechers/GorjanaTeacherImg.png',
    title: 'Gorjana Stojanovska',
    category: 'teachers'
  },
  {
    id: 12,
    src: '/data/violinteachers/SimonTeacherImg.png',
    title: 'Simon Popovski',
    category: 'teachers'
  },
  {
    id: 13,
    src: '/data/voiceteachers/MarkoTeacherImg.png',
    title: 'Marko Trajkovski',
    category: 'teachers'
  },
  {
    id: 14,
    src: '/data/blogpost/parentChildOnPiano1.png',
    title: 'Family Learning',
    category: 'students'
  },
  {
    id: 15,
    src: '/data/blogpost/singerperforming.png',
    title: 'Live Performance',
    category: 'students'
  },
]

const categories = [
  { id: 'all', label: 'All', icon: '🎵' },
  { id: 'studio', label: 'Studio', icon: '🎹' },
  { id: 'lessons', label: 'Lessons', icon: '📚' },
  { id: 'teachers', label: 'Teachers', icon: '👨‍🏫' },
  { id: 'students', label: 'Students', icon: '🎓' },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

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
              Gallery
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg text-white/90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore moments from our studio, lessons, and community
            </motion.p>
          </div>
        </motion.section>

        {/* Category Filters */}
        <section className="py-6 sm:py-8 bg-white border-b border-gray-200 sticky top-16 sm:top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="flex flex-wrap justify-center gap-2 sm:gap-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full font-medium transition-all text-xs sm:text-sm ${
                    selectedCategory === category.id
                      ? 'bg-gold text-midnight shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-1">{category.icon}</span>
                  {category.label}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    className="relative aspect-square rounded-2xl overflow-hidden bg-gray-200 cursor-pointer group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    onClick={() => setSelectedImage(image.id)}
                  >
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-semibold text-sm sm:text-base">
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredImages.length === 0 && (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-gray-500 text-lg">No images in this category yet</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-midnight/95 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl sm:text-4xl font-light"
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>
              
              <motion.div
                className="relative max-w-5xl w-full aspect-square"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                {galleryImages.find(img => img.id === selectedImage) && (
                  <>
                    <Image
                      src={galleryImages.find(img => img.id === selectedImage)!.src}
                      alt={galleryImages.find(img => img.id === selectedImage)!.title}
                      fill
                      className="object-contain"
                      sizes="100vw"
                    />
                    <div className="absolute -bottom-12 left-0 right-0 text-center">
                      <p className="text-white/80 text-sm sm:text-base">
                        {galleryImages.find(img => img.id === selectedImage)!.title}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

