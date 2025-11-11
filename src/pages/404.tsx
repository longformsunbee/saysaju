import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Home } from 'lucide-react';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Layout>
      <section className="py-20 min-h-[60vh] flex items-center justify-center">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-8"
            >
              <Sparkles className="w-24 h-24 text-accent mx-auto" />
            </motion.div>

            <h1 className="text-8xl font-bold text-gradient mb-4">404</h1>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              페이지를 찾을 수 없습니다
            </h2>
            <p className="text-foreground/60 mb-8">
              요청하신 페이지가 존재하지 않거나 이동되었습니다.
            </p>

            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Home className="w-5 h-5" />
                홈으로 돌아가기
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

