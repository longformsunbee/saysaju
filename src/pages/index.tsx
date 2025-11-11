import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Moon, Star, Sun } from 'lucide-react';
import Layout from '@/components/Layout';
import HoroscopeForm from '@/components/HoroscopeForm';
import ResultCard from '@/components/ResultCard';
import CompatibilityChecker from '@/components/CompatibilityChecker';
import { HoroscopeInput, HoroscopeResult, generateMockResult } from '@/utils/mockData';

export default function Home() {
  const [result, setResult] = useState<HoroscopeResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState('');

  const handleSubmit = async (input: HoroscopeInput) => {
    setIsLoading(true);
    setUserName(input.name);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    const mockResult = generateMockResult(input);
    setResult(mockResult);
    setIsLoading(false);

    // Smooth scroll to results
    setTimeout(() => {
      const resultsSection = document.getElementById('results');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-16 h-16 text-accent mx-auto" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient text-shadow">사이사주</span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/80 mb-4 font-serif">
              전통과 현대가 만나는 운세 이야기
            </p>

            <p className="text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              토정비결과 사주풀이로 당신의 운명을 들여다보세요.
              <br />
              오늘의 운세부터 한 해의 흐름, 타고난 성향까지 모두 확인할 수 있습니다.
            </p>

            {/* Decorative Icons */}
            <div className="flex items-center justify-center gap-8 mt-8">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              >
                <Sun className="w-8 h-8 text-accent/60" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                <Moon className="w-8 h-8 text-accent/60" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >
                <Star className="w-8 h-8 text-accent/60" />
              </motion.div>
            </div>
          </motion.div>

          {/* Form Section */}
          <HoroscopeForm onSubmit={handleSubmit} isLoading={isLoading} />

          {/* Loading Animation */}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12 text-center"
            >
              <div className="inline-flex flex-col items-center gap-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-12 h-12 text-accent" />
                </motion.div>
                <p className="text-accent font-medium">
                  {userName}님의 운세를 분석하고 있습니다...
                </p>
                <div className="flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 bg-accent rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <Star className="w-4 h-4 text-accent/30" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      {result && !isLoading && (
        <section id="results" className="py-16 bg-primary/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gradient mb-4">
                {userName}님의 운세
              </h2>
              <p className="text-foreground/60">
                정성스럽게 풀이한 운세를 확인해보세요
              </p>
            </motion.div>

            <ResultCard result={result} />
          </div>
        </section>
      )}

      {/* Features Section */}
      {!result && (
        <section className="py-20 bg-primary/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gradient mb-4">
                무엇을 알 수 있나요?
              </h2>
              <p className="text-foreground/60">
                사이사주에서 제공하는 다양한 운세 정보
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Sun,
                  title: '오늘의 운세',
                  description: '애정운, 금전운, 건강운, 직장운 등 오늘 하루의 전반적인 운세를 확인하세요.',
                  color: 'from-yellow-500 to-orange-500',
                },
                {
                  icon: Moon,
                  title: '올해의 흐름',
                  description: '한 해의 흐름을 분기별로 나누어 자세히 알려드립니다. 미리 준비하세요.',
                  color: 'from-blue-500 to-purple-500',
                },
                {
                  icon: Star,
                  title: '사주 분석',
                  description: '타고난 성격, 장단점, 행운의 색상과 숫자, 궁합까지 모두 확인할 수 있습니다.',
                  color: 'from-pink-500 to-red-500',
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="card gold-border"
                >
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mx-auto`}>
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-accent mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Compatibility Section */}
      <section className="py-20 bg-primary/30">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gradient mb-4">
              궁합도 확인해보세요
            </h2>
            <p className="text-foreground/60">
              두 사람의 생년월일로 궁합을 알아보세요
            </p>
          </motion.div>
          <CompatibilityChecker />
        </div>
      </section>

      {/* CTA Section */}
      {!result && (
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card gold-border glow-effect text-center max-w-3xl mx-auto"
            >
              <Sparkles className="w-12 h-12 text-accent mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gradient mb-4">
                지금 바로 시작하세요
              </h2>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                간단한 정보 입력만으로 당신의 운세를 확인할 수 있습니다.
                <br />
                전통적인 지혜와 현대적인 해석이 만나 새로운 인사이트를 제공합니다.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-primary"
              >
                운세 보러 가기
              </motion.button>
            </motion.div>
          </div>
        </section>
      )}
    </Layout>
  );
}

