import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* Logo */}
              <div className="w-[50px] h-[48px] flex items-center justify-center">
              <img
                src="/logo2 2.svg"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
              <span className="font-bold text-lg">Trivia</span>
            </div>
            <p className="text-white/70 text-sm">
              Learn, play, climb the leaderboard and earn in real time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-white/70 text-sm">
            © 2026 Trivia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
