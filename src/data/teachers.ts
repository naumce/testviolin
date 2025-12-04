export interface Teacher {
  name: string
  instrument: string
  credentials: string
  experience: string
  rating: number
  reviewCount: number
  quote: string
  specialties: string[]
  slug: string
  image: string
  bio: string
}

export const teachers: Teacher[] = [
  // Piano Teachers
  {
    name: 'Anastasija Gichevska',
    instrument: 'Piano',
    credentials: 'Master\'s in Piano Performance',
    experience: '8+ years of teaching experience',
    rating: 5.0,
    reviewCount: 45,
    quote: 'I adapt my teaching to each student\'s unique learning style, building not only technical skill but also a deep emotional connection to music.',
    specialties: [
      'Classical piano (Baroque through Contemporary)',
      'Competition and audition preparation',
      'Performance psychology and stage presence',
      'Adult learners and career professionals'
    ],
    slug: 'anastasija-gichevska',
    image: '/data/pianotechers/AnastasijaTeacherImg.png',
    bio: 'Anastasija Gichevska is a concert pianist, educator, and chamber musician, acclaimed for her refined artistry, versatility, and commitment to musical excellence. She holds a Master\'s degree from the Academy of Music in Ljubljana and completed advanced studies at the University of Music and Performing Arts Graz with Prof. Zuzana Niederdorfer.'
  },
  {
    name: 'Dominika Robe Popovska',
    instrument: 'Piano',
    credentials: 'Master\'s in Piano Performance',
    experience: '10+ years of teaching experience',
    rating: 5.0,
    reviewCount: 52,
    quote: 'My goal is to make lessons both rigorous and joyful, helping students become thoughtful, confident musicians with a lifelong love for music.',
    specialties: [
      'Classical piano repertoire',
      'Collaborative piano and vocal coaching',
      'Young beginners through advanced students',
      'Competition and festival preparation'
    ],
    slug: 'dominika-popovska',
    image: '/data/pianotechers/DominikaTeacherImg.png',
    bio: 'Dominika Robe Popovska is an award-winning pianist and educator with over a decade of experience teaching students of all ages and levels. She holds two Master\'s degrees in Piano Performance and studied at Florida Atlantic University under Dr. Irena Kofman.'
  },
  {
    name: 'Gorjana Stojanovska',
    instrument: 'Piano',
    credentials: 'Master\'s in Piano Performance, Artist Diploma',
    experience: '6+ years of teaching experience',
    rating: 5.0,
    reviewCount: 38,
    quote: 'I guide students in developing their individuality, encouraging them to explore musical style and expressive possibilities with confidence.',
    specialties: [
      'Classical technique and repertoire',
      'Italian piano school tradition',
      'Solo and orchestral performance',
      'Musical interpretation and style'
    ],
    slug: 'gorjana-stojanovska',
    image: '/data/pianotechers/GorjanaTeacherImg.png',
    bio: 'Gorjana Stojanovska is a pianist of remarkable artistry who studied at the Faculty of Musical Arts in Skopje and earned an Artist Diploma from Talent Music Master Academy in Brescia, Italy, under Prof. Ruben Dalibaltayan.'
  },

  // Violin Teachers
  {
    name: 'Simon Popovski',
    instrument: 'Violin',
    credentials: 'Master\'s in Violin Performance',
    experience: '8+ years of teaching experience',
    rating: 5.0,
    reviewCount: 41,
    quote: 'I foster a nurturing learning environment that emphasizes strong technical foundations, stylistic understanding, and a genuine love for music.',
    specialties: [
      'Classical violin (Baroque through Contemporary)',
      'Orchestral and chamber music',
      'Solo and ensemble performance',
      'Youth and adult students'
    ],
    slug: 'simon-popovski',
    image: '/data/violinteachers/SimonTeacherImg.png',
    bio: 'Simon Popovski is a dynamic violinist and educator whose artistry bridges performance and pedagogy. He holds two Master\'s degrees in Violin Performance, including one from Florida Atlantic University, and has performed with the Palm Beach Opera, Atlantic Symphony, and many other ensembles.'
  },

  // Voice Teachers
  {
    name: 'Marko Trajkovski',
    instrument: 'Voice',
    credentials: 'Graduate, University of Music and Performing Arts Vienna',
    experience: '5+ years of teaching experience',
    rating: 4.9,
    reviewCount: 33,
    quote: 'I help singers uncover their unique voice and artistic identity through healthy technique, emotional connection, and dramatic interpretation.',
    specialties: [
      'Classical voice (art song, opera, oratorio)',
      'Musical theater and contemporary styles',
      'Vocal health and technique',
      'Audition and performance preparation'
    ],
    slug: 'marko-trajkovski',
    image: '/data/voiceteachers/MarkoTeacherImg.png',
    bio: 'Marko Trajkovski is a baritone recognized for his rich vocal timbre and dramatic versatility. He graduated from the University of Music and Performing Arts Vienna (MDW) and has performed at the Theater an der Wien, Vienna State Opera, and Theater in der Josefstadt.'
  },

  // Theory Teachers
  {
    name: 'Gorjan Stojanovski',
    instrument: 'Music Theory',
    credentials: 'Conductor and Pianist, Faculty of Music Skopje',
    experience: '5+ years of teaching experience',
    rating: 5.0,
    reviewCount: 28,
    quote: 'Music theory isn\'t just rules to memorize—it\'s the key to understanding how music works and unlocking your artistic freedom.',
    specialties: [
      'Music theory (fundamentals through advanced)',
      'Music history and harmony',
      'Ear training and analysis',
      'Piano and conducting'
    ],
    slug: 'gorjan-stojanovski',
    image: '/data/pianotechers/GorjanTeacherImg.png',
    bio: 'Gorjan Stojanovski is an inspiring pianist, conductor, and music educator. He has won multiple international competitions and conducted the Symphony Orchestra of the Plovdiv Opera. He studies at the Faculty of Music in Skopje under Prof. Elena Atanasovska Ivanovska.'
  }
]

// Get teachers by instrument
export function getTeachersByInstrument(instrument: string) {
  if (instrument === 'All') return teachers
  return teachers.filter(t => t.instrument === instrument)
}

// Get teacher by slug
export function getTeacherBySlug(slug: string) {
  return teachers.find(t => t.slug === slug)
}

