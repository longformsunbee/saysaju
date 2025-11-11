import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Moon, Sun, Star } from 'lucide-react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col stars-bg">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 backdrop-blur-md bg-primary/80 border-b border-accent/20"
      >
        <nav className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="w-8 h-8 text-accent" />
              </motion.div>
              <span className="text-2xl font-bold text-gradient text-shadow">
                사이사주
              </span>
            </Link>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="#daily"
                className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors"
              >
                <Sun className="w-4 h-4" />
                <span>오늘의 운세</span>
              </Link>
              <Link
                href="#tojeong"
                className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors"
              >
                <Moon className="w-4 h-4" />
                <span>토정비결</span>
              </Link>
              <Link
                href="#saju"
                className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors"
              >
                <Star className="w-4 h-4" />
                <span>사주풀이</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-accent">
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="border-t border-accent/20 bg-primary/50 backdrop-blur-sm"
      >
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-accent font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                사이사주
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                전통 토정비결과 사주풀이를 현대적으로 재해석한 운세 서비스입니다.
                따뜻하고 신비로운 경험을 선사합니다.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-accent font-bold mb-4">바로가기</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#daily" className="text-foreground/60 hover:text-accent transition-colors">
                    오늘의 운세
                  </Link>
                </li>
                <li>
                  <Link href="#tojeong" className="text-foreground/60 hover:text-accent transition-colors">
                    토정비결
                  </Link>
                </li>
                <li>
                  <Link href="#saju" className="text-foreground/60 hover:text-accent transition-colors">
                    사주풀이
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-accent font-bold mb-4">소셜 미디어</h3>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href="#"
                  className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                >
                  <span className="text-accent">📘</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  href="#"
                  className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                >
                  <span className="text-accent">📷</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href="#"
                  className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                >
                  <span className="text-accent">💬</span>
                </motion.a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="divider mb-8"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-foreground/40 text-sm mb-2">
              © 2025 사이사주. All rights reserved.
            </p>
            <p className="text-accent/60 text-sm flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              운세는 참고용으로만 보세요 ✨
              <Sparkles className="w-4 h-4" />
            </p>
          </div>
        </div>
      </motion.footer>

      {/* Floating Stars Animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Layout;

