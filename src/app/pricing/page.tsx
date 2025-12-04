import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-midnight via-midnight-light to-midnight-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-white/90">
              Invest in yourself. No hidden fees, no complicated contracts. Just world-class instruction at a price that reflects the value.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pay As You Go */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-midnight mb-2">Pay As You Go</h3>
                <div className="border-b border-gray-200 pb-6 mb-6">
                  <p className="text-sm text-gray-600">Maximum flexibility</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-sm text-gray-600">30-min lesson</p>
                    <p className="text-3xl font-bold text-midnight">$60<span className="text-lg font-normal text-gray-500">/lesson</span></p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">60-min lesson</p>
                    <p className="text-3xl font-bold text-midnight">$110<span className="text-lg font-normal text-gray-500">/lesson</span></p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {['Maximum flexibility', 'Try it out', 'No commitment'].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-gold mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact"
                  className="block w-full text-center bg-gray-100 text-midnight py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
                >
                  Get Started
                </Link>
              </div>

              {/* 4-Lesson Package (Most Popular) */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-gold relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-midnight px-4 py-1 rounded-full text-sm font-bold">
                  ⭐ MOST POPULAR
                </div>
                
                <h3 className="text-2xl font-bold text-midnight mb-2">4-Lesson Package</h3>
                <div className="border-b border-gray-200 pb-6 mb-6">
                  <p className="text-sm text-gray-600">Best for consistent progress</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-sm text-gray-600">30-min lessons</p>
                    <p className="text-3xl font-bold text-midnight">$55<span className="text-lg font-normal text-gray-500">/lesson</span></p>
                    <p className="text-xs text-green-600">Save 8%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">60-min lessons</p>
                    <p className="text-3xl font-bold text-midnight">$100<span className="text-lg font-normal text-gray-500">/lesson</span></p>
                    <p className="text-xs text-green-600">Save 9%</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {['Save 8-10%', 'Most popular', 'One month of weekly lessons'].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-gold mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact"
                  className="block w-full text-center bg-gold text-midnight py-3 rounded-lg font-semibold hover:bg-gold-light transition-all shadow-lg"
                >
                  Get Started
                </Link>
              </div>

              {/* 12-Lesson Package */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-midnight mb-2">12-Lesson Package</h3>
                <div className="border-b border-gray-200 pb-6 mb-6">
                  <p className="text-sm text-gray-600">Best value</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-sm text-gray-600">30-min lessons</p>
                    <p className="text-3xl font-bold text-midnight">$50<span className="text-lg font-normal text-gray-500">/lesson</span></p>
                    <p className="text-xs text-green-600">Save 17%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">60-min lessons</p>
                    <p className="text-3xl font-bold text-midnight">$95<span className="text-lg font-normal text-gray-500">/lesson</span></p>
                    <p className="text-xs text-green-600">Save 14%</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {['Save 15%', 'Best value', 'Priority scheduling'].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-gold mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact"
                  className="block w-full text-center bg-gray-100 text-midnight py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-midnight mb-12 text-center">
              Every Lesson Includes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Live, one-on-one instruction with your teacher',
                'Personalized curriculum tailored to your goals',
                'Practice materials and sheet music',
                'Lesson recordings (available upon request)',
                'Email support between lessons',
                'Progress tracking and feedback',
                'Performance opportunities (virtual recitals)',
                'Flexible scheduling and easy rescheduling'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-gold text-2xl mr-3">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-2xl font-bold text-midnight mb-2">
                No Hidden Fees. No Signup Costs. No Annual Contracts.
              </p>
              <p className="text-gray-600">Just transparent, fair pricing for world-class instruction.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-midnight via-midnight-light to-midnight-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Start with a Free Trial Lesson
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Not ready to commit? We get it. Try a complimentary 30-minute lesson first—no credit card required.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-gold text-midnight px-10 py-5 rounded-lg font-semibold text-lg hover:bg-gold-light transition-all shadow-lg hover:shadow-xl"
            >
              Schedule Your Free Lesson →
            </Link>
            <p className="text-white/60 text-sm mt-6">
              Questions about pricing? Email us: <a href="mailto:hello@orpheusacademy.com" className="text-gold hover:underline">hello@orpheusacademy.com</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

