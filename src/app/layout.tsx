import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { MobileMenu } from '@/components/MobileMenu';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

export const metadata: Metadata = {
  title: 'Two-Year Strategic Plan - Missouri Young Democrats',
  description: 'The Missouri Young Democrats Two-Year Strategic Plan for 2026-2028. Our blueprint for building youth political power across Missouri.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Two-Year Strategic Plan - Missouri Young Democrats',
    description: 'The Missouri Young Democrats Two-Year Strategic Plan for 2026-2028. Our blueprint for building youth political power across Missouri.',
    type: 'website',
    siteName: 'Missouri Young Democrats',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Two-Year Strategic Plan - Missouri Young Democrats',
    description: 'The Missouri Young Democrats Two-Year Strategic Plan for 2026-2028. Our blueprint for building youth political power across Missouri.',
  },
};

const navLinkStyle = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal' as const,
  fontWeight: 800,
  fontSize: '1.1rem',
  height: '1.8vw',
  letterSpacing: '-0.07em',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className} style={{ backgroundColor: '#273351' }}>
        {/* Background */}
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundColor: '#273351',
            backgroundImage: 'url(/Blue-Gradient-Background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        />

        {/* Reading Progress Bar */}
        <div id="reading-progress" style={{ width: '0%' }} />

        {/* Mobile Section Indicator */}
        <div className="mobile-section-indicator md:hidden">
          <span id="mobile-section-label" />
        </div>

        {/* Header */}
        <header className="relative z-50">
          <div
            className="flex items-center justify-between px-4 md:px-[2.7vw] py-3 md:py-5 min-h-[52px] md:min-h-[68px]"
          >
            {/* Logo */}
            <Link href="https://moyoungdemocrats.org" className="flex items-center relative z-50">
              <Image
                src="/text-logo-960png.png"
                alt="Missouri Young Democrats"
                width={143}
                height={68}
                className="w-auto h-[30px] md:h-[68px]"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center" style={{ gap: '0.8vw' }}>
              <Link href="https://moyoungdemocrats.org/our-team" className="text-white hover:text-white/80 transition-colors uppercase" style={navLinkStyle}>
                OUR TEAM
              </Link>
              <Link href="https://moyoungdemocrats.org/chapters" className="text-white hover:text-white/80 transition-colors uppercase" style={navLinkStyle}>
                CHAPTERS
              </Link>
              <Link href="https://events.moyoungdemocrats.org" className="text-white hover:text-white/80 transition-colors uppercase" style={navLinkStyle}>
                EVENTS
              </Link>
              <Link href="https://moyoungdemocrats.org/about" className="text-white hover:text-white/80 transition-colors uppercase" style={navLinkStyle}>
                ABOUT
              </Link>
              <Link href="https://moyoungdemocrats.org/donate" className="text-white hover:text-white/80 transition-colors uppercase" style={navLinkStyle}>
                DONATE
              </Link>
              <Link href="https://moyoungdemocrats.org/contact" className="text-white hover:text-white/80 transition-colors uppercase" style={navLinkStyle}>
                CONTACT
              </Link>
              <Link href="https://members.moyoungdemocrats.org" className="text-white hover:text-white/80 transition-colors uppercase" style={navLinkStyle}>
                MEMBERS
              </Link>
            </nav>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </header>

        {/* Main Content */}
        <main className="min-h-screen relative z-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="relative z-10" style={{ backgroundColor: '#273351' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            {/* Social Media Icons */}
            <div className="flex justify-center items-center flex-wrap gap-3 md:gap-6 mb-6 md:mb-8">
              <a href="https://www.instagram.com/moyoungdemocrats/#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/icons/icons8-instagram-100.png" alt="Instagram" width={32} height={32} />
              </a>
              <a href="https://www.facebook.com/MOyoungdemocrats" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/icons/icons8-facebook-100.png" alt="Facebook" width={32} height={32} />
              </a>
              <a href="https://www.threads.com/@moyoungdemocrats" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/icons/new-Threads-app-icon-white-png-small-size.png" alt="Threads" width={32} height={32} />
              </a>
              <a href="https://x.com/moyoungdems" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/icons/icons8-x-100.png" alt="X (Twitter)" width={32} height={32} />
              </a>
              <a href="https://bsky.app/profile/moyoungdemocrats.bsky.social" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/icons/icons8-bluesky-100.png" alt="Bluesky" width={32} height={32} />
              </a>
              <a href="https://www.tiktok.com/@moyoungdemocrats" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/icons/tiktok-100.png" alt="TikTok" width={32} height={32} />
              </a>
              <a href="https://www.reddit.com/user/moyoungdemocrats/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/icons/icons8-reddit-240.png" alt="Reddit" width={32} height={32} />
              </a>
              <a href="https://www.youtube.com/@MOYoungDemocrats" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/icons/icons8-youtube-250.png" alt="YouTube" width={32} height={32} />
              </a>
              <a href="mailto:info@moyoungdemocrats.org" className="hover:opacity-80 transition-opacity">
                <Image src="/icons/icons8-email-100 copy.png" alt="Email" width={32} height={32} />
              </a>
            </div>
          </div>

          {/* Moving Donation Banner */}
          <a
            href="https://secure.actblue.com/donate/moyd"
            target="_blank"
            rel="noopener noreferrer"
            className="scrolling-banner block overflow-hidden py-4 relative"
            style={{ background: 'linear-gradient(90deg, #5B9FBD 0%, #273351 100%)' }}
          >
            <div className="marquee-container">
              <div className="marquee-content">
                <span className="marquee-text">YOUR SUPPORT MAKES EVERYTHING POSSIBLE &mdash; DONATE TODAY &mdash; </span>
                <span className="marquee-text">YOUR SUPPORT MAKES EVERYTHING POSSIBLE &mdash; DONATE TODAY &mdash; </span>
                <span className="marquee-text">YOUR SUPPORT MAKES EVERYTHING POSSIBLE &mdash; DONATE TODAY &mdash; </span>
                <span className="marquee-text">YOUR SUPPORT MAKES EVERYTHING POSSIBLE &mdash; DONATE TODAY &mdash; </span>
              </div>
            </div>
          </a>

          {/* Paid For Banner */}
          <a
            href="https://secure.actblue.com/donate/moyd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center py-8"
          >
            <Image
              src="/paid-for-banner.png"
              alt="Paid for by Missouri Young Democrats"
              width={400}
              height={100}
              className="max-w-full h-auto hover:opacity-80 transition-opacity cursor-pointer"
            />
          </a>
        </footer>
      </body>
    </html>
  );
}
