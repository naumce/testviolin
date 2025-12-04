'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface TeacherCardProps {
  name: string
  instrument: string
  credentials: string
  experience: string
  rating: number
  reviewCount: number
  quote: string
  specialties: string[]
  slug: string
  image?: string
}

export default function TeacherCard({
  name,
  instrument,
  credentials,
  experience,
  rating,
  reviewCount,
  quote,
  specialties,
  slug,
  image,
}: TeacherCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden h-full flex flex-col"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Teacher Photo */}
      <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-gradient-to-br from-midnight to-midnight-light">
        {image ? (
          <Image
            src={image}
            alt={`${name} - ${instrument} instructor`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <motion.div
              className="text-6xl sm:text-7xl"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              🎵
            </motion.div>
          </div>
        )}
        
        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gold/20"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        {/* Name */}
        <motion.h3 
          className="text-xl sm:text-2xl font-bold text-midnight mb-1 text-center"
          whileHover={{ scale: 1.05, color: "#D4AF37" }}
          transition={{ duration: 0.2 }}
        >
          {name}
        </motion.h3>
        
        {/* Instrument */}
        <p className="text-gold uppercase text-xs sm:text-sm font-semibold tracking-wider mb-3 sm:mb-4 text-center">
          {instrument}
        </p>
        
        {/* Credentials */}
        <p className="text-xs sm:text-sm text-gray-600 mb-2 text-center">
          {credentials}
        </p>
        
        {/* Experience */}
        <p className="text-xs sm:text-sm text-gray-600 font-medium mb-3 sm:mb-4 text-center">
          {experience}
        </p>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <motion.span 
            className="text-gold text-sm sm:text-base"
            whileHover={{ scale: 1.1 }}
          >
            ⭐⭐⭐⭐⭐
          </motion.span>
          <span className="text-xs sm:text-sm text-gray-600">{rating} ({reviewCount} reviews)</span>
        </div>
        
        {/* Quote */}
        <p className="quote text-center text-sm sm:text-base text-gray-700 py-3 sm:py-4 border-t border-b border-gray-100 mb-3 sm:mb-4 leading-relaxed">
          "{quote}"
        </p>
        
        {/* Specialties */}
        <div className="mb-4 sm:mb-6 flex-1">
          <p className="text-xs uppercase font-semibold text-gray-500 mb-2 tracking-wider">
            Specialties:
          </p>
          <ul className="space-y-1">
            {specialties.map((specialty, index) => (
              <motion.li 
                key={index} 
                className="text-xs sm:text-sm text-gray-600 flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <span className="text-gold mr-2">•</span>
                {specialty}
              </motion.li>
            ))}
          </ul>
        </div>
        
        {/* CTAs */}
        <div className="space-y-3 mt-auto">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href={`/teachers/${slug}`}
              className="block w-full text-center border-2 border-midnight text-midnight px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-midnight hover:text-white transition-all text-sm sm:text-base"
            >
              View Full Profile
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
              className="block w-full text-center text-gold font-medium hover:underline text-sm sm:text-base"
            >
              Book a Lesson
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
