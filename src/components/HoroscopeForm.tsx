import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, Sparkles } from 'lucide-react';
import { HoroscopeInput, validateInput } from '@/utils/mockData';

interface HoroscopeFormProps {
  onSubmit: (input: HoroscopeInput) => void;
  isLoading?: boolean;
}

const HoroscopeForm: React.FC<HoroscopeFormProps> = ({ onSubmit, isLoading = false }) => {
  const [formData, setFormData] = useState<Partial<HoroscopeInput>>({
    name: '',
    year: '',
    month: '',
    day: '',
    hour: '',
    gender: undefined,
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateInput(formData);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors([]);
    onSubmit(formData as HoroscopeInput);
  };

  const handleChange = (field: keyof HoroscopeInput, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="card glow-effect">
        <div className="text-center mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-12 h-12 text-accent mx-auto" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gradient mb-2">운세 보기</h2>
          <p className="text-foreground/60">생년월일을 입력하시면 운세를 확인하실 수 있습니다</p>
        </div>

        {/* Error Messages */}
        {errors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
          >
            <ul className="space-y-1">
              {errors.map((error, index) => (
                <li key={index} className="text-red-400 text-sm">
                  • {error}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        <div className="space-y-6">
          {/* Name */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2 text-accent">
              <User className="w-4 h-4" />
              이름
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="이름을 입력하세요"
              className="input-field"
            />
          </div>

          {/* Birth Date */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2 text-accent">
              <Calendar className="w-4 h-4" />
              생년월일
            </label>
            <div className="grid grid-cols-3 gap-3">
              <select
                value={formData.year}
                onChange={(e) => handleChange('year', e.target.value)}
                className="input-field"
              >
                <option value="">년도</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}년</option>
                ))}
              </select>
              <select
                value={formData.month}
                onChange={(e) => handleChange('month', e.target.value)}
                className="input-field"
              >
                <option value="">월</option>
                {months.map(month => (
                  <option key={month} value={month}>{month}월</option>
                ))}
              </select>
              <select
                value={formData.day}
                onChange={(e) => handleChange('day', e.target.value)}
                className="input-field"
              >
                <option value="">일</option>
                {days.map(day => (
                  <option key={day} value={day}>{day}일</option>
                ))}
              </select>
            </div>
          </div>

          {/* Birth Time (Optional) */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2 text-accent">
              <Clock className="w-4 h-4" />
              태어난 시간 <span className="text-xs text-foreground/40">(선택사항)</span>
            </label>
            <select
              value={formData.hour}
              onChange={(e) => handleChange('hour', e.target.value)}
              className="input-field"
            >
              <option value="">시간을 선택하세요</option>
              {hours.map(hour => (
                <option key={hour} value={hour}>
                  {hour.toString().padStart(2, '0')}시
                </option>
              ))}
            </select>
          </div>

          {/* Gender */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2 text-accent">
              성별
            </label>
            <div className="grid grid-cols-2 gap-3">
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleChange('gender', 'male')}
                className={`py-3 px-4 rounded-lg border-2 transition-all ${
                  formData.gender === 'male'
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-accent/20 bg-muted text-foreground/60 hover:border-accent/40'
                }`}
              >
                남성
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleChange('gender', 'female')}
                className={`py-3 px-4 rounded-lg border-2 transition-all ${
                  formData.gender === 'female'
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-accent/20 bg-muted text-foreground/60 hover:border-accent/40'
                }`}
              >
                여성
              </motion.button>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary w-full relative overflow-hidden"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="loading-spinner"></div>
                운세 분석 중...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                운세 보기
                <Sparkles className="w-5 h-5" />
              </span>
            )}
          </motion.button>
        </div>

        {/* Privacy Notice */}
        <p className="text-xs text-center text-foreground/40 mt-6">
          입력하신 정보는 운세 분석에만 사용되며 저장되지 않습니다.
        </p>
      </form>
    </motion.div>
  );
};

export default HoroscopeForm;

