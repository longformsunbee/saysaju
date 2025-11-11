import React from 'react';
import { motion } from 'framer-motion';
import { Sun, TrendingUp, User, Heart, DollarSign, Activity, Briefcase, Star } from 'lucide-react';
import { HoroscopeResult } from '@/utils/mockData';
import ShareButtons from './ShareButtons';

interface ResultCardProps {
  result: HoroscopeResult;
}

const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  return (
    <div className="space-y-8">
      {/* Daily Fortune Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        id="daily"
        className="card gold-border glow-effect"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
            <Sun className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gradient">{result.daily.title}</h3>
            <p className="text-sm text-foreground/60">오늘 하루의 운세를 확인하세요</p>
          </div>
        </div>

        {/* Icon and Summary */}
        <div className="text-center mb-6 p-6 bg-accent/5 rounded-lg">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl mb-4"
          >
            {result.daily.icon}
          </motion.div>
          <p className="text-lg leading-relaxed text-foreground/90">
            {result.daily.summary}
          </p>
        </div>

        {/* Score */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-accent">오늘의 운세 점수</span>
            <span className="text-2xl font-bold text-accent">{result.daily.score}점</span>
          </div>
          <div className="progress-bar">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${result.daily.score}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="progress-fill"
            />
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-accent" />
              <h4 className="font-semibold text-accent">애정운</h4>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {result.daily.details.love}
            </p>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-accent" />
              <h4 className="font-semibold text-accent">금전운</h4>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {result.daily.details.money}
            </p>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-5 h-5 text-accent" />
              <h4 className="font-semibold text-accent">건강운</h4>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {result.daily.details.health}
            </p>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-5 h-5 text-accent" />
              <h4 className="font-semibold text-accent">직장운</h4>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {result.daily.details.work}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Yearly Fortune Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        id="tojeong"
        className="card gold-border glow-effect"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gradient">{result.yearly.title}</h3>
            <p className="text-sm text-foreground/60">한 해의 흐름을 미리 확인하세요</p>
          </div>
        </div>

        <div className="mb-8 p-6 bg-accent/5 rounded-lg">
          <p className="text-lg leading-relaxed text-foreground/90">
            {result.yearly.summary}
          </p>
        </div>

        <div className="space-y-6">
          {result.yearly.months.map((month, index) => (
            <motion.div
              key={month.month}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="p-5 bg-muted/30 rounded-lg hover:bg-muted/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-accent text-lg">{month.month}</h4>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  <span className="text-accent font-semibold">{month.score}점</span>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-3">
                {month.description}
              </p>
              <div className="progress-bar h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${month.score}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="progress-fill"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Saju Analysis Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        id="saju"
        className="card gold-border glow-effect"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
            <User className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gradient">{result.saju.title}</h3>
            <p className="text-sm text-foreground/60">당신의 타고난 성향을 알아보세요</p>
          </div>
        </div>

        {/* Personality */}
        <div className="mb-6 p-6 bg-accent/5 rounded-lg">
          <h4 className="font-bold text-accent mb-3 flex items-center gap-2">
            <Star className="w-5 h-5" />
            성격 분석
          </h4>
          <p className="text-foreground/90 leading-relaxed">
            {result.saju.personality}
          </p>
        </div>

        {/* Strengths & Weaknesses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="p-5 bg-green-500/10 border border-green-500/30 rounded-lg">
            <h4 className="font-bold text-green-400 mb-3">장점</h4>
            <ul className="space-y-2">
              {result.saju.strengths.map((strength, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 text-foreground/80"
                >
                  <span className="text-green-400">✓</span>
                  {strength}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="p-5 bg-orange-500/10 border border-orange-500/30 rounded-lg">
            <h4 className="font-bold text-orange-400 mb-3">주의할 점</h4>
            <ul className="space-y-2">
              {result.saju.weaknesses.map((weakness, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 text-foreground/80"
                >
                  <span className="text-orange-400">!</span>
                  {weakness}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Lucky Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold text-accent mb-2">행운의 색상</h4>
            <p className="text-foreground/80">{result.saju.luckyColor}</p>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold text-accent mb-2">행운의 숫자</h4>
            <p className="text-foreground/80 text-2xl font-bold">{result.saju.luckyNumber}</p>
          </div>
        </div>

        {/* Compatibility */}
        <div className="p-6 bg-accent/5 rounded-lg">
          <h4 className="font-bold text-accent mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5" />
            궁합
          </h4>
          <div className="space-y-3">
            <div>
              <span className="text-sm text-foreground/60">최고의 궁합:</span>
              <p className="text-lg font-semibold text-green-400">{result.saju.compatibility.best}</p>
            </div>
            <div>
              <span className="text-sm text-foreground/60">좋은 궁합:</span>
              <p className="text-lg font-semibold text-blue-400">
                {result.saju.compatibility.good.join(', ')}
              </p>
            </div>
            <div>
              <span className="text-sm text-foreground/60">피해야 할 궁합:</span>
              <p className="text-lg font-semibold text-red-400">{result.saju.compatibility.avoid}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Share Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <ShareButtons userName="사용자" score={result.daily.score} />
        <p className="text-xs text-foreground/40 mt-3">
          친구들과 운세를 공유해보세요!
        </p>
      </motion.div>
    </div>
  );
};

export default ResultCard;

