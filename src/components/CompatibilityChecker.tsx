import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Users, Sparkles } from 'lucide-react';

interface CompatibilityResult {
  score: number;
  message: string;
  advice: string;
}

const CompatibilityChecker: React.FC = () => {
  const [person1, setPerson1] = useState({ year: '', month: '', day: '' });
  const [person2, setPerson2] = useState({ year: '', month: '', day: '' });
  const [result, setResult] = useState<CompatibilityResult | null>(null);

  const calculateCompatibility = () => {
    // Simple mock calculation based on birth dates
    const date1 = parseInt(person1.year + person1.month + person1.day);
    const date2 = parseInt(person2.year + person2.month + person2.day);
    const score = ((date1 + date2) % 41) + 60; // Score between 60-100

    let message = '';
    let advice = '';

    if (score >= 90) {
      message = '천생연분! 최고의 궁합입니다 💕';
      advice = '서로를 존중하고 이해하는 마음을 계속 유지하세요.';
    } else if (score >= 80) {
      message = '매우 좋은 궁합입니다 ✨';
      advice = '작은 차이를 인정하고 배려한다면 행복한 관계가 될 것입니다.';
    } else if (score >= 70) {
      message = '좋은 궁합입니다 🌟';
      advice = '서로의 장점을 살리고 단점을 보완해주세요.';
    } else {
      message = '노력이 필요한 궁합입니다 💪';
      advice = '충분한 대화와 이해를 통해 더 나은 관계를 만들어가세요.';
    }

    setResult({ score, message, advice });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (person1.year && person1.month && person1.day && 
        person2.year && person2.month && person2.day) {
      calculateCompatibility();
    }
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 80 }, (_, i) => currentYear - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card gold-border glow-effect"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
          <Users className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gradient">궁합 보기</h3>
          <p className="text-sm text-foreground/60">두 사람의 생년월일로 궁합을 확인하세요</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Person 1 */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium mb-2 text-accent">
            <Heart className="w-4 h-4" />
            첫 번째 사람 생년월일
          </label>
          <div className="grid grid-cols-3 gap-3">
            <select
              value={person1.year}
              onChange={(e) => setPerson1({ ...person1, year: e.target.value })}
              className="input-field"
              required
            >
              <option value="">년도</option>
              {years.map(year => (
                <option key={year} value={year}>{year}년</option>
              ))}
            </select>
            <select
              value={person1.month}
              onChange={(e) => setPerson1({ ...person1, month: e.target.value })}
              className="input-field"
              required
            >
              <option value="">월</option>
              {months.map(month => (
                <option key={month} value={month}>{month}월</option>
              ))}
            </select>
            <select
              value={person1.day}
              onChange={(e) => setPerson1({ ...person1, day: e.target.value })}
              className="input-field"
              required
            >
              <option value="">일</option>
              {days.map(day => (
                <option key={day} value={day}>{day}일</option>
              ))}
            </select>
          </div>
        </div>

        {/* Person 2 */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium mb-2 text-accent">
            <Heart className="w-4 h-4" />
            두 번째 사람 생년월일
          </label>
          <div className="grid grid-cols-3 gap-3">
            <select
              value={person2.year}
              onChange={(e) => setPerson2({ ...person2, year: e.target.value })}
              className="input-field"
              required
            >
              <option value="">년도</option>
              {years.map(year => (
                <option key={year} value={year}>{year}년</option>
              ))}
            </select>
            <select
              value={person2.month}
              onChange={(e) => setPerson2({ ...person2, month: e.target.value })}
              className="input-field"
              required
            >
              <option value="">월</option>
              {months.map(month => (
                <option key={month} value={month}>{month}월</option>
              ))}
            </select>
            <select
              value={person2.day}
              onChange={(e) => setPerson2({ ...person2, day: e.target.value })}
              className="input-field"
              required
            >
              <option value="">일</option>
              {days.map(day => (
                <option key={day} value={day}>{day}일</option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-primary w-full"
        >
          <span className="flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" />
            궁합 확인하기
            <Sparkles className="w-5 h-5" />
          </span>
        </motion.button>
      </form>

      {/* Result */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 pt-6 border-t border-accent/20"
          >
            <div className="text-center mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="text-6xl mb-2"
              >
                💕
              </motion.div>
              <h4 className="text-3xl font-bold text-accent mb-2">
                {result.score}점
              </h4>
              <p className="text-xl text-gradient font-semibold mb-4">
                {result.message}
              </p>
            </div>

            <div className="progress-bar mb-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${result.score}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="progress-fill"
              />
            </div>

            <div className="p-4 bg-accent/5 rounded-lg">
              <h5 className="font-semibold text-accent mb-2">조언</h5>
              <p className="text-foreground/80 leading-relaxed">
                {result.advice}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CompatibilityChecker;

