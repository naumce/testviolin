import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-midnight text-ivory py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-playfair font-bold mb-4">ORPHEUS</h3>
            <p className="text-ivory/70 text-sm leading-relaxed">
              Where Your Musical Journey Begins to Sing
            </p>
          </div>

          {/* Lessons */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Lessons</h4>
            <ul className="space-y-2 text-sm text-ivory/70">
              <li><Link href="/lessons#piano" className="hover:text-gold transition-colors">Piano</Link></li>
              <li><Link href="/lessons#violin" className="hover:text-gold transition-colors">Violin</Link></li>
              <li><Link href="/lessons#voice" className="hover:text-gold transition-colors">Voice</Link></li>
              <li><Link href="/lessons#theory" className="hover:text-gold transition-colors">Music Theory</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">About</h4>
            <ul className="space-y-2 text-sm text-ivory/70">
              <li><Link href="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link href="/teachers" className="hover:text-gold transition-colors">Our Teachers</Link></li>
              <li><Link href="/how-it-works" className="hover:text-gold transition-colors">How It Works</Link></li>
              <li><Link href="/pricing" className="hover:text-gold transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Connect</h4>
            <ul className="space-y-2 text-sm text-ivory/70">
              <li>
                <a href="mailto:hello@orpheusacademy.com" className="hover:text-gold transition-colors">
                  hello@orpheusacademy.com
                </a>
              </li>
              <li>
                <a href="tel:555-123-4567" className="hover:text-gold transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="pt-2 flex space-x-4">
                <a href="#" className="hover:text-gold transition-colors">Instagram</a>
                <a href="#" className="hover:text-gold transition-colors">YouTube</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ivory/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-ivory/50">
          <p>© 2025 Orpheus Music Academy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

