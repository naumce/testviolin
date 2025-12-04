import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-midnight via-midnight-light to-midnight-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              How Orpheus Works
            </h1>
            <p className="text-xl text-white/90">
              From your first inquiry to your 50th lesson, we make the entire experience seamless, personal, and inspiring.
            </p>
          </div>
        </section>

        {/* 4-Step Process */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="relative">
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0 w-20 h-20 bg-gold rounded-full flex items-center justify-center text-3xl font-bold text-midnight">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-midnight mb-4">
                      Discover Your Instructor
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Browse our teacher profiles, read their bios, and watch introduction videos. Each instructor lists 
                      their specialties, teaching style, and availability.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Not sure who's the best fit? Contact us and we'll help you find your perfect match based on your 
                      goals, experience level, and learning style.
                    </p>
                    <p className="text-sm text-gray-500">⏱️ Takes: 5-10 minutes</p>
                    <Link 
                      href="/teachers"
                      className="inline-block mt-4 text-gold font-semibold hover:underline"
                    >
                      Browse All Teachers →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center">
                <div className="w-px h-12 bg-gray-300" />
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0 w-20 h-20 bg-gold rounded-full flex items-center justify-center text-3xl font-bold text-midnight">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-midnight mb-4">
                      Schedule Your Free Trial Lesson
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Once you've found an instructor you're excited about, choose a time for your complimentary 
                      30-minute trial lesson. Our online calendar shows real-time availability—just pick what works for you.
                    </p>
                    <p className="text-gray-600 mb-4">
                      No credit card required. No commitment. Just a chance to meet your teacher and see if it's a good fit.
                    </p>
                    <p className="text-sm text-gray-500">⏱️ Takes: 2 minutes to schedule</p>
                    <Link 
                      href="/contact"
                      className="inline-block mt-4 text-gold font-semibold hover:underline"
                    >
                      Schedule Free Trial →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center">
                <div className="w-px h-12 bg-gray-300" />
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0 w-20 h-20 bg-gold rounded-full flex items-center justify-center text-3xl font-bold text-midnight">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-midnight mb-4">
                      Meet Your Teacher & Set Goals
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      In your trial lesson, your instructor will:
                    </p>
                    <ul className="space-y-2 mb-4">
                      {[
                        'Get to know you and your musical background',
                        'Assess your current level (or start from zero!)',
                        'Understand your goals and timeline',
                        'Demonstrate their teaching approach',
                        'Answer all your questions'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-gold mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-600 mb-4">
                      You'll leave with a clear sense of what lessons will look like and a personalized learning plan.
                    </p>
                    <p className="text-sm text-gray-500">⏱️ Duration: 30 minutes</p>
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center">
                <div className="w-px h-12 bg-gray-300" />
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0 w-20 h-20 bg-gold rounded-full flex items-center justify-center text-3xl font-bold text-midnight">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-midnight mb-4">
                      Begin Your Musical Journey
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Love your trial lesson? Great! We'll help you set up a regular lesson schedule that fits your life. 
                      Most students meet weekly, but we offer flexibility for your needs.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Between lessons, you'll have:
                    </p>
                    <ul className="space-y-2 mb-4">
                      {[
                        'Practice materials and assignments',
                        'Access to lesson recordings (if desired)',
                        'Email support for quick questions',
                        'Progress tracking and feedback'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-gold mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-500">⏱️ Ongoing: Weekly lessons + daily practice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Requirements */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-midnight mb-12 text-center">
              What You'll Need
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: '💻', title: 'Computer, tablet, or smartphone', desc: 'We recommend a tablet or laptop for best experience' },
                { icon: '🌐', title: 'Reliable internet connection', desc: 'At least 10 Mbps download speed' },
                { icon: '📹', title: 'Zoom (free download)', desc: 'We\'ll send you a link—just click and join' },
                { icon: '🎹', title: 'Your instrument', desc: 'Don\'t have one yet? We can recommend options' },
                { icon: '🏠', title: 'A quiet space', desc: 'Any room where you can focus for 30-60 minutes' },
                { icon: '🎧', title: 'Optional: Good headphones', desc: 'Helps with audio clarity' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-midnight mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gold/10 border border-gold/30 rounded-xl p-6">
              <h3 className="font-bold text-midnight mb-3">Technical Support</h3>
              <p className="text-gray-700">
                First time with online lessons? No worries. We'll help you test your audio and video before your 
                first lesson, position your camera for optimal instructor view, and troubleshoot any connectivity issues.
              </p>
            </div>
          </div>
        </section>

        {/* Typical Lesson */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-midnight mb-12 text-center">
              A Typical Lesson Looks Like This
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
              {[
                { time: 'Minutes 0-5', title: 'Warm-Up & Check-In', desc: 'Your teacher greets you, asks about your week, and guides you through warm-up exercises.' },
                { time: 'Minutes 5-20', title: 'Technique & New Material', desc: 'Work on scales, exercises, or challenging passages from your current repertoire.' },
                { time: 'Minutes 20-50', title: 'Repertoire & Musicality', desc: 'Dive into pieces you\'re learning—working on interpretation, dynamics, phrasing, and expression.' },
                { time: 'Minutes 50-60', title: 'Q&A & Practice Plan', desc: 'Review what you\'ll practice this week, answer questions, and set goals for next time.' }
              ].map((section, index) => (
                <div key={index} className="border-l-4 border-gold pl-6">
                  <h3 className="font-bold text-midnight mb-1">{section.time}: {section.title}</h3>
                  <p className="text-gray-600">{section.desc}</p>
                </div>
              ))}
            </div>
            
            <p className="text-center text-gray-600 mt-6">
              Every lesson is tailored to <strong>YOU</strong>—this is just a general structure. Your teacher adapts to what you need most that day.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-midnight via-midnight-light to-midnight-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Take the First Step?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Your musical journey is one click away. Schedule your free trial lesson today—no credit card required, no obligation.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-gold text-midnight px-10 py-5 rounded-lg font-semibold text-lg hover:bg-gold-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Schedule Free Trial Lesson →
            </Link>
            <p className="text-white/60 text-sm mt-6">
              Questions? Email us: <a href="mailto:hello@orpheusacademy.com" className="text-gold hover:underline">hello@orpheusacademy.com</a> 
              {' '}or call: <a href="tel:555-123-4567" className="text-gold hover:underline">(555) 123-4567</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

