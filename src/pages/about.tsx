import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Star, Moon } from 'lucide-react';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function About() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Sparkles className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gradient mb-6">
              사이사주 소개
            </h1>
            <p className="text-xl text-foreground/70">
              전통과 현대가 만나는 특별한 운세 이야기
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card gold-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold text-accent">우리의 철학</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                사이사주는 수백 년 동안 전해 내려온 토정비결과 사주풀이의 지혜를 
                현대적으로 재해석하여 제공합니다. 전통적인 가치를 존중하면서도 
                현대인의 삶에 실질적인 도움이 되는 인사이트를 제공하고자 합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card gold-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold text-accent">제공 서비스</h2>
              </div>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span><strong>오늘의 운세:</strong> 애정운, 금전운, 건강운, 직장운을 포함한 하루의 전반적인 운세</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span><strong>토정비결:</strong> 한 해의 흐름을 분기별로 나누어 제공하는 상세한 운세</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span><strong>사주풀이:</strong> 타고난 성격, 장단점, 궁합 등 개인의 특성 분석</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card gold-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <Moon className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold text-accent">개인정보 보호</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                사이사주는 사용자의 개인정보를 소중히 여깁니다. 
                입력하신 모든 정보는 운세 분석에만 사용되며, 
                서버에 저장되거나 제3자에게 공유되지 않습니다. 
                안심하고 이용하실 수 있습니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card gold-border text-center"
            >
              <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />
              <p className="text-foreground/60 mb-6">
                운세는 참고용으로만 보시고, 
                <br />
                긍정적인 마음가짐으로 하루하루를 살아가세요 ✨
              </p>
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  운세 보러 가기
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

