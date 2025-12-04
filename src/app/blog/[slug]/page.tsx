import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { notFound } from 'next/navigation'
import BlogPostClient from './BlogPostClient'
import { getPostBySlug } from '@/data/blog'

// Generate full content for blog posts
function generateBlogContent(slug: string): any[] {
  // Default content structure for all blog posts
  const defaultContent = [
    {
      type: "paragraph",
      text: "Music is more than just notes on a page—it's a language of emotion, expression, and connection. Whether you're taking your first lesson or refining your craft after years of study, the journey of musical growth is one of the most rewarding pursuits you can undertake."
    },
    {
      type: "heading",
      text: "Understanding the Fundamentals"
    },
    {
      type: "paragraph",
      text: "Every great musician starts with the basics. Proper technique isn't about rigidity—it's about efficiency and freedom. When your foundations are solid, you can focus on what really matters: making beautiful music that moves people."
    },
    {
      type: "paragraph",
      text: "Think of technique as the grammar of your musical language. You need to know the rules before you can break them artistically. But unlike grammar, musical technique is kinesthetic—it lives in your body, not just your mind."
    },
    {
      type: "heading",
      text: "The Power of Consistent Practice"
    },
    {
      type: "paragraph",
      text: "The difference between amateur and professional musicians isn't talent—it's the quality and consistency of practice. Research shows that deliberate, focused practice of just 30-45 minutes daily is more effective than sporadic marathon sessions."
    },
    {
      type: "paragraph",
      text: "During your practice time, focus on one specific goal. Are you working on technical accuracy? Musical expression? Memorization? Trying to do everything at once dilutes your efforts. Professional musicians practice with laser focus."
    },
    {
      type: "heading",
      text: "Developing Musical Expression"
    },
    {
      type: "paragraph",
      text: "Once you've developed technical control, the real artistry begins. Musical expression is about making choices—tempo variations, dynamic contrasts, phrasing, tone color. These choices are what transform notes into music."
    },
    {
      type: "paragraph",
      text: "Listen to multiple recordings of the same piece by different artists. Notice how their interpretations differ. There's no single 'correct' way to play a piece—there's only your authentic voice guided by musical understanding and taste."
    },
    {
      type: "heading",
      text: "Learning from the Masters"
    },
    {
      type: "paragraph",
      text: "Study the great composers and performers in your instrument's tradition. What made them special? How did they approach their craft? Every master has something to teach you, whether it's Bach's architectural genius or Coltrane's harmonic innovation."
    },
    {
      type: "paragraph",
      text: "But don't just imitate—absorb their principles and find your own voice. The goal isn't to sound like your heroes; it's to understand what made them great and apply those insights to your own musical journey."
    },
    {
      type: "heading",
      text: "The Importance of Performance"
    },
    {
      type: "paragraph",
      text: "Music is meant to be shared. Whether you're performing for family in your living room or on a concert stage, the act of sharing music with others is essential to your growth as a musician."
    },
    {
      type: "paragraph",
      text: "Performance anxiety is normal—even professionals experience it. The key is learning to channel that nervous energy into focused excitement. Preparation is your best defense against stage fright. When you've practiced deeply, you can trust your training."
    },
    {
      type: "heading",
      text: "Building a Musical Community"
    },
    {
      type: "paragraph",
      text: "Surround yourself with other musicians. Join an ensemble, attend concerts, take masterclasses, participate in online forums. Musical growth happens faster in community because you're exposed to different perspectives, styles, and approaches."
    },
    {
      type: "paragraph",
      text: "Your musical journey is unique, but you don't have to walk it alone. The best musicians are lifelong learners who remain curious, humble, and open to new ideas. That mindset—more than talent or even hard work—is what separates good musicians from great ones."
    },
    {
      type: "heading",
      text: "Moving Forward"
    },
    {
      type: "paragraph",
      text: "Whether you're just beginning or deepening an existing practice, remember: music is a journey, not a destination. Celebrate small victories, be patient with plateaus, and never lose sight of why you started—because music brings joy, meaning, and beauty to life."
    },
    {
      type: "paragraph",
      text: "Keep practicing, keep listening, keep growing. Your musical voice matters, and the world needs to hear it."
    }
  ]

  return defaultContent
}

const blogPosts: { [key: string]: any } = {
  "practice-strategies-that-work": {
    title: "5 Practice Strategies That Actually Work",
    category: "Practice Tips",
    date: "December 1, 2024",
    readTime: "8 min read",
    excerpt: "Discover evidence-based techniques used by professional musicians to maximize practice efficiency, retain information, and avoid burnout.",
    content: [
      {
        type: "paragraph",
        text: "After teaching hundreds of students and spending countless hours practicing myself, I've learned that how you practice matters infinitely more than how long you practice. Here are five strategies that professional musicians swear by—and the science that backs them up."
      },
      {
        type: "heading",
        text: "1. The Pomodoro Technique: Practice in Focused Bursts"
      },
      {
        type: "paragraph",
        text: "Research shows that our brains can maintain deep focus for about 25-45 minutes before cognitive fatigue sets in. Instead of grinding through hours of unfocused practice, try 25-minute focused sessions followed by 5-minute breaks."
      },
      {
        type: "paragraph",
        text: "During those 25 minutes, eliminate all distractions. No phone, no interruptions—just you and your instrument. You'll be amazed at how much more you retain when your practice is truly focused."
      },
      {
        type: "heading",
        text: "2. Slow Practice: The Secret Weapon"
      },
      {
        type: "paragraph",
        text: "Every professional musician will tell you the same thing: slow practice is non-negotiable. When you practice slowly (50-70% of tempo), you're giving your brain time to build accurate neural pathways. Rush through at full speed too soon, and you're just cementing mistakes."
      },
      {
        type: "paragraph",
        text: "Set your metronome to a painfully slow tempo where you can play with perfect accuracy, beautiful tone, and relaxed technique. Only then do you gradually increase speed."
      },
      {
        type: "heading",
        text: "3. The 'Difficult Measure' Method"
      },
      {
        type: "paragraph",
        text: "Identify the single most difficult measure in your piece. Practice just that measure 10-20 times in a row with perfect accuracy. Then expand to 2 measures, then 4, gradually building context around your trouble spot."
      },
      {
        type: "paragraph",
        text: "This targeted approach is infinitely more effective than running through the entire piece hoping you'll magically nail the hard part. Address weaknesses directly and systematically."
      },
      {
        type: "heading",
        text: "4. Practice Away from Your Instrument"
      },
      {
        type: "paragraph",
        text: "Some of the most valuable practice happens without touching your instrument. Score study, listening to recordings, visualizing finger movements, and singing your part all engage different neural pathways and deepen your understanding."
      },
      {
        type: "paragraph",
        text: "Professional musicians often spend 30-40% of their 'practice time' on mental practice. It's not cheating—it's strategic preparation."
      },
      {
        type: "heading",
        text: "5. The 'One Perfect Repetition' Rule"
      },
      {
        type: "paragraph",
        text: "Before you finish practicing a section, play it one more time—perfectly. End on success. Your brain remembers the last thing you played, so make sure it's accurate and beautiful."
      },
      {
        type: "paragraph",
        text: "If you can't play it perfectly even at a slow tempo, that's valuable feedback. Keep practicing until you can end your session with one perfect repetition. This builds confidence and positive associations with practicing."
      },
      {
        type: "heading",
        text: "The Bottom Line"
      },
      {
        type: "paragraph",
        text: "Effective practice isn't about marathon sessions—it's about smart, focused, intentional work. Implement even one or two of these strategies and you'll see dramatic improvements in how quickly you learn new music and how confidently you perform."
      },
      {
        type: "paragraph",
        text: "Remember: professionals don't practice until they get it right. They practice until they can't get it wrong."
      }
    ]
  },
  "online-vs-in-person-lessons": {
    title: "How Online Lessons Compare to In-Person: An Honest Look",
    category: "Online Learning",
    date: "November 28, 2024",
    readTime: "6 min read",
    excerpt: "A candid comparison of virtual and traditional music instruction, exploring the pros, cons, and when each format works best.",
    content: [
      {
        type: "paragraph",
        text: "After teaching both in-person and online for the past decade, I've learned that the question isn't which format is 'better'—it's which format serves you best right now. Let's explore both with honesty and nuance."
      },
      {
        type: "heading",
        text: "The Advantages of Online Lessons"
      },
      {
        type: "paragraph",
        text: "**Access to Top Instructors:** Geography is no longer a barrier. A student in rural Montana can study with a Juilliard graduate. This democratization of access to great teaching is revolutionary."
      },
      {
        type: "paragraph",
        text: "**Flexibility:** No commute means more time for actual practice. You can schedule lessons around your life, not the other way around. For busy professionals and parents, this flexibility is game-changing."
      },
      {
        type: "paragraph",
        text: "**Recording Capability:** Most online platforms allow lesson recording. Being able to review your teacher's feedback later is incredibly valuable for retention."
      },
      {
        type: "heading",
        text: "Where In-Person Still Shines"
      },
      {
        type: "paragraph",
        text: "**Physical Adjustments:** For instruments like violin or piano where posture and physical setup matter immensely, there's no substitute for a teacher who can physically adjust your hand position or demonstrate next to you."
      },
      {
        type: "paragraph",
        text: "**Acoustic Nuance:** Even with high-quality audio equipment, online platforms compress sound. Subtle tonal nuances that a teacher might catch in person can be harder to detect virtually."
      },
      {
        type: "paragraph",
        text: "**The Human Element:** There's something about sharing physical space during a lesson—the energy, the immediate feedback, the sense of connection—that's harder to replicate online."
      },
      {
        type: "heading",
        text: "When Online Works Best"
      },
      {
        type: "paragraph",
        text: "Online lessons excel for intermediate to advanced students who already have solid technical foundations. They're fantastic for theory, composition, historical context, interpretation, and repertoire learning."
      },
      {
        type: "paragraph",
        text: "For adult learners juggling careers and families, the convenience of online lessons often means the difference between studying music and not studying at all."
      },
      {
        type: "heading",
        text: "The Hybrid Future"
      },
      {
        type: "paragraph",
        text: "Many serious students are adopting a hybrid model: monthly in-person intensive lessons supplemented by weekly online check-ins. This combines the deep physical work of in-person instruction with the convenience and consistency of virtual learning."
      },
      {
        type: "paragraph",
        text: "The truth is, online lessons have matured dramatically. With good equipment, stable internet, and an experienced online instructor, the quality gap has narrowed considerably. The best format is the one that keeps you practicing, progressing, and passionate about music."
      }
    ]
  },
  "essential-piano-composers": {
    title: "The Composers Every Pianist Should Know",
    category: "Music History",
    date: "November 25, 2024",
    readTime: "10 min read",
    excerpt: "From Bach to Debussy: essential composers that define the piano repertoire, their distinctive styles, and why they matter.",
    content: [
      {
        type: "paragraph",
        text: "The piano repertoire is vast and intimidating. Where do you start? Which composers are essential? After years of teaching and performing, here's my guide to the giants whose music every serious pianist should encounter."
      },
      {
        type: "heading",
        text: "J.S. Bach (1685-1750): The Foundation"
      },
      {
        type: "paragraph",
        text: "Bach is where every pianist begins and returns throughout their life. His music teaches counterpoint, voice leading, and structural thinking. The Well-Tempered Clavier is the pianist's Bible—24 preludes and fugues in every major and minor key."
      },
      {
        type: "paragraph",
        text: "Start with the Two-Part Inventions if you're newer to Bach. Once you've mastered a few, move to the French Suites or easier WTC preludes. Bach's music never gets old—you'll discover new depths every time you return to it."
      },
      {
        type: "heading",
        text: "Mozart (1756-1791): Clarity and Grace"
      },
      {
        type: "paragraph",
        text: "Mozart's piano music sounds simple but exposes every weakness. There's nowhere to hide behind pedal or rubato. His sonatas teach phrasing, articulation, and classical form with crystalline clarity."
      },
      {
        type: "paragraph",
        text: "The C Major Sonata (K. 545) is the usual starting point, but don't overlook the fantastically imaginative variations or the dramatic minor-key works like the A Minor Sonata."
      },
      {
        type: "heading",
        text: "Beethoven (1770-1827): Power and Depth"
      },
      {
        type: "paragraph",
        text: "Beethoven pushed the piano to its limits and beyond. His 32 sonatas are the closest thing pianists have to a complete spiritual and technical journey. Each sonata presents unique challenges and rewards."
      },
      {
        type: "paragraph",
        text: "Start with early sonatas like Op. 49 No. 2, but make it a life goal to work through the middle and late sonatas. The late sonatas—especially Op. 110 and Op. 111—are among humanity's greatest artistic achievements."
      },
      {
        type: "heading",
        text: "Chopin (1810-1849): The Poet of the Piano"
      },
      {
        type: "paragraph",
        text: "Chopin wrote almost exclusively for piano, and his music is the most idiomatic ever composed for the instrument. His music teaches you to sing at the keyboard, to use pedal as a coloristic tool, and to phrase with vocal beauty."
      },
      {
        type: "paragraph",
        text: "Begin with the easier Nocturnes and Waltzes. Graduate to the Ballades, Polonaises, and the fiendishly difficult Etudes. Every professional pianist has Chopin in their core repertoire."
      },
      {
        type: "heading",
        text: "Debussy (1862-1918): Color and Atmosphere"
      },
      {
        type: "paragraph",
        text: "Debussy revolutionized piano music by treating the instrument as a vehicle for color and atmosphere rather than melody and harmony in the traditional sense. His Preludes and Images are endlessly fascinating."
      },
      {
        type: "paragraph",
        text: "Start with Clair de Lune (though it's technically easier than it sounds) and Arabesque No. 1. Move to the Preludes and discover a completely different sound world. Debussy teaches you to use the pedal like a painter uses color."
      },
      {
        type: "heading",
        text: "Building Your Repertoire"
      },
      {
        type: "paragraph",
        text: "These five composers give you 300+ years of piano music and a complete technical and musical education. Study them chronologically to understand how piano music evolved. Study them simultaneously to develop versatility."
      },
      {
        type: "paragraph",
        text: "Don't forget Liszt (for virtuosity), Brahms (for depth), Rachmaninoff (for grandeur), and Ravel (for color). But if you only had five composers to study for the rest of your life, these five would give you everything you need."
      }
    ]
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  
  // Try to get from blog data first
  const blogPost = getPostBySlug(slug)
  
  if (!blogPost) {
    notFound()
  }

  // Check if we have custom content, otherwise generate default
  const customPost = blogPosts[slug]
  const post = customPost || {
    ...blogPost,
    content: generateBlogContent(slug)
  }

  return (
    <>
      <Header />
      <BlogPostClient post={post} />
      <Footer />
    </>
  )
}

