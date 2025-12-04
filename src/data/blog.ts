// Blog categories and posts data structure
export const blogCategories = [
  { slug: 'piano', name: 'Piano', icon: '🎹' },
  { slug: 'violin', name: 'Violin', icon: '🎻' },
  { slug: 'voice', name: 'Voice', icon: '🎤' },
  { slug: 'music-theory', name: 'Music Theory', icon: '📚' },
  { slug: 'music-history', name: 'Music History', icon: '🎼' },
  { slug: 'parent-resources', name: 'Parent Resources', icon: '👨‍👩‍👧' },
]

export const blogPosts = [
  // Piano Posts
  {
    slug: "famous-piano-composers",
    title: "Famous Piano Composers: The Giants Who Shaped Piano Music",
    excerpt: "From Bach to Chopin, discover the composers who defined the piano repertoire and why their music remains essential for every pianist.",
    category: "piano",
    date: "December 4, 2024",
    readTime: "10 min read",
    image: "/data/blogpost/piano.png"
  },
  {
    slug: "piano-technique-fundamentals",
    title: "Piano Technique Fundamentals: Building a Strong Foundation",
    excerpt: "Master the essential technical elements every pianist needs—from proper hand position to efficient practice strategies.",
    category: "piano",
    date: "November 30, 2024",
    readTime: "8 min read",
    image: "/data/blogpost/piano.png"
  },
  {
    slug: "choosing-first-piano",
    title: "Choosing Your First Piano: Acoustic vs Digital",
    excerpt: "A comprehensive guide to help you make an informed decision between acoustic and digital pianos for your musical journey.",
    category: "piano",
    date: "November 25, 2024",
    readTime: "7 min read",
    image: "/data/blogpost/piano.png"
  },

  // Violin Posts
  {
    slug: "famous-violin-composers",
    title: "The Legends Who Shaped Violin Music",
    excerpt: "Explore the composers who expanded the violin's expressive possibilities—from Vivaldi's Baroque brilliance to Tchaikovsky's Romantic soul.",
    category: "violin",
    date: "December 2, 2024",
    readTime: "9 min read",
    image: "/data/blogpost/violin.png"
  },
  {
    slug: "violin-bowing-techniques",
    title: "Mastering Violin Bowing Techniques",
    excerpt: "Learn the fundamental bowing techniques that separate amateurs from professionals, with exercises you can practice today.",
    category: "violin",
    date: "November 28, 2024",
    readTime: "8 min read",
    image: "/data/blogpost/violin.png"
  },
  {
    slug: "violin-care-maintenance",
    title: "Essential Violin Care and Maintenance",
    excerpt: "Protect your investment: a comprehensive guide to cleaning, storing, and maintaining your violin for optimal sound and longevity.",
    category: "violin",
    date: "November 22, 2024",
    readTime: "6 min read",
    image: "/data/blogpost/violin.png"
  },

  // Voice Posts
  {
    slug: "famous-vocal-composers",
    title: "Famous Vocal Composers: The Masters Who Shaped the Art of Singing",
    excerpt: "From Handel's Baroque arias to Puccini's emotional operas—discover the composers who defined vocal music.",
    category: "voice",
    date: "December 3, 2024",
    readTime: "10 min read",
    image: "/data/blogpost/singerperforming.png"
  },
  {
    slug: "vocal-warm-ups-singers",
    title: "Essential Vocal Warm-Ups for Every Singer",
    excerpt: "A comprehensive guide to healthy warm-up routines that prepare your voice, prevent injury, and improve tone quality.",
    category: "voice",
    date: "November 27, 2024",
    readTime: "6 min read",
    image: "/data/blogpost/singerperforming.png"
  },
  {
    slug: "overcoming-performance-anxiety-singers",
    title: "Overcoming Performance Anxiety: Tips for Singers",
    excerpt: "Learn practical strategies to manage stage fright and perform with confidence, straight from professional vocalists.",
    category: "voice",
    date: "November 20, 2024",
    readTime: "7 min read",
    image: "/data/blogpost/singerperforming.png"
  },

  // Music Theory Posts
  {
    slug: "music-theory-basics-beginners",
    title: "Music Theory Basics Every Musician Should Know",
    excerpt: "Demystify music theory with this beginner-friendly guide to scales, intervals, chords, and key signatures.",
    category: "music-theory",
    date: "December 1, 2024",
    readTime: "9 min read",
    image: "/data/blogpost/musictheory.png"
  },
  {
    slug: "understanding-chord-progressions",
    title: "Understanding Chord Progressions: From Theory to Practice",
    excerpt: "Learn how chord progressions work and how to analyze them in your favorite pieces of music.",
    category: "music-theory",
    date: "November 26, 2024",
    readTime: "8 min read",
    image: "/data/blogpost/musictheory1.png"
  },
  {
    slug: "ear-training-exercises",
    title: "Ear Training Exercises to Develop Your Musical Ear",
    excerpt: "Practical exercises to improve your ability to recognize intervals, chords, and melodies by ear.",
    category: "music-theory",
    date: "November 18, 2024",
    readTime: "7 min read",
    image: "/data/blogpost/musictheory.png"
  },

  // Music History Posts
  {
    slug: "baroque-period-overview",
    title: "The Baroque Period: When Music Became Emotional",
    excerpt: "Explore the dramatic, ornate world of Baroque music—from Bach's counterpoint to Vivaldi's concertos.",
    category: "music-history",
    date: "November 29, 2024",
    readTime: "10 min read",
    image: "/data/blogpost/piano.png"
  },
  {
    slug: "classical-period-composers",
    title: "The Classical Period: Mozart, Haydn, and Musical Balance",
    excerpt: "Discover the era of clarity, balance, and formal perfection that gave us some of music's greatest masterpieces.",
    category: "music-history",
    date: "November 24, 2024",
    readTime: "9 min read",
    image: "/data/blogpost/violin.png"
  },
  {
    slug: "romantic-era-music",
    title: "The Romantic Era: When Music Became Personal",
    excerpt: "Journey through the 19th century when composers like Chopin and Brahms made music deeply emotional and individualistic.",
    category: "music-history",
    date: "November 19, 2024",
    readTime: "10 min read",
    image: "/data/blogpost/piano.png"
  },

  // Parent Resources Posts
  {
    slug: "when-should-child-start-music",
    title: "When Should My Child Start Music Lessons?",
    excerpt: "Expert guidance on the ideal age to begin music lessons and how to know when your child is ready.",
    category: "parent-resources",
    date: "November 30, 2024",
    readTime: "6 min read",
    image: "/data/blogpost/parentChildOnPiano1.png"
  },
  {
    slug: "supporting-child-music-practice",
    title: "How to Support Your Child's Music Practice at Home",
    excerpt: "Practical strategies for parents to encourage consistent practice without turning it into a battle.",
    category: "parent-resources",
    date: "November 23, 2024",
    readTime: "7 min read",
    image: "/data/blogpost/parentChildOnPiano1.png"
  },
  {
    slug: "benefits-music-education-children",
    title: "The Proven Benefits of Music Education for Children",
    excerpt: "Discover how music lessons improve academic performance, social skills, and cognitive development.",
    category: "parent-resources",
    date: "November 17, 2024",
    readTime: "8 min read",
    image: "/data/blogpost/parentChildOnPiano1.png"
  },
]

// Get posts by category
export function getPostsByCategory(category: string) {
  return blogPosts.filter(post => post.category === category)
}

// Get all posts
export function getAllPosts() {
  return blogPosts
}

// Get post by slug
export function getPostBySlug(slug: string) {
  return blogPosts.find(post => post.slug === slug)
}

