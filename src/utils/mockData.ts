export interface HoroscopeInput {
  name: string;
  year: string;
  month: string;
  day: string;
  hour?: string;
  gender: 'male' | 'female';
}

export interface HoroscopeResult {
  daily: {
    title: string;
    summary: string;
    icon: string;
    score: number;
    details: {
      love: string;
      money: string;
      health: string;
      work: string;
    };
  };
  yearly: {
    title: string;
    summary: string;
    months: {
      month: string;
      description: string;
      score: number;
    }[];
  };
  saju: {
    title: string;
    personality: string;
    strengths: string[];
    weaknesses: string[];
    luckyColor: string;
    luckyNumber: number;
    compatibility: {
      best: string;
      good: string[];
      avoid: string;
    };
  };
}

const dailyFortunes = [
  {
    title: '오늘의 운세',
    summary: '오늘은 새로운 시작을 위한 좋은 날입니다. 긍정적인 마음가짐으로 하루를 시작하세요.',
    icon: '☀️',
    score: 85,
    details: {
      love: '연인과의 관계가 더욱 돈독해질 수 있는 날입니다. 솔직한 대화를 나눠보세요.',
      money: '예상치 못한 수입이 생길 수 있습니다. 하지만 충동구매는 자제하세요.',
      health: '전반적으로 건강한 상태입니다. 가벼운 운동으로 활력을 더하세요.',
      work: '업무에서 좋은 성과를 낼 수 있는 날입니다. 적극적으로 의견을 제시하세요.',
    },
  },
  {
    title: '오늘의 운세',
    summary: '차분하게 하루를 보내는 것이 좋습니다. 무리한 계획보다는 현재에 집중하세요.',
    icon: '🌙',
    score: 72,
    details: {
      love: '상대방의 마음을 이해하려는 노력이 필요한 시기입니다.',
      money: '지출을 줄이고 저축에 신경 쓰는 것이 좋습니다.',
      health: '피로가 쌓일 수 있으니 충분한 휴식을 취하세요.',
      work: '꼼꼼하게 일을 처리하면 좋은 결과가 있을 것입니다.',
    },
  },
  {
    title: '오늘의 운세',
    summary: '행운이 함께하는 날입니다. 새로운 도전을 두려워하지 마세요.',
    icon: '⭐',
    score: 92,
    details: {
      love: '새로운 만남의 기회가 있을 수 있습니다. 마음을 열어보세요.',
      money: '투자나 재테크에 관심을 가져볼 만한 시기입니다.',
      health: '활력이 넘치는 날입니다. 적극적으로 활동하세요.',
      work: '리더십을 발휘할 수 있는 기회가 올 것입니다.',
    },
  },
];

const yearlyFortunes = [
  {
    title: '올해의 운세 흐름',
    summary: '전반적으로 상승세를 타는 한 해가 될 것입니다. 꾸준한 노력이 결실을 맺을 것입니다.',
    months: [
      { month: '1-3월', description: '새로운 시작의 시기. 계획을 세우고 실행에 옮기세요.', score: 75 },
      { month: '4-6월', description: '성장의 시기. 노력한 만큼 결과가 따라옵니다.', score: 85 },
      { month: '7-9월', description: '정점의 시기. 큰 성과를 거둘 수 있습니다.', score: 92 },
      { month: '10-12월', description: '정리의 시기. 한 해를 마무리하고 다음을 준비하세요.', score: 80 },
    ],
  },
  {
    title: '올해의 운세 흐름',
    summary: '안정적인 한 해가 예상됩니다. 급하게 서두르지 말고 차근차근 나아가세요.',
    months: [
      { month: '1-3월', description: '준비의 시기. 기초를 다지는 데 집중하세요.', score: 70 },
      { month: '4-6월', description: '발전의 시기. 조금씩 성과가 보이기 시작합니다.', score: 78 },
      { month: '7-9월', description: '안정의 시기. 현재 상태를 유지하는 것이 중요합니다.', score: 75 },
      { month: '10-12월', description: '도약의 시기. 새로운 기회를 모색해보세요.', score: 82 },
    ],
  },
];

const sajuAnalysis = [
  {
    title: '사주 분석',
    personality: '타고난 리더십과 추진력을 가진 분입니다. 목표를 향해 끊임없이 노력하며, 주변 사람들에게 긍정적인 영향을 미칩니다.',
    strengths: ['강한 의지력', '뛰어난 판단력', '리더십', '책임감'],
    weaknesses: ['고집이 셈', '완벽주의 성향', '스트레스에 약함'],
    luckyColor: '금색, 붉은색',
    luckyNumber: 7,
    compatibility: {
      best: '소띠, 닭띠',
      good: ['원숭이띠', '쥐띠'],
      avoid: '말띠',
    },
  },
  {
    title: '사주 분석',
    personality: '섬세하고 감성적인 성격을 가진 분입니다. 예술적 재능이 있으며, 타인의 감정을 잘 이해합니다.',
    strengths: ['뛰어난 감수성', '창의력', '배려심', '인내심'],
    weaknesses: ['우유부단함', '감정 기복', '자신감 부족'],
    luckyColor: '파란색, 흰색',
    luckyNumber: 3,
    compatibility: {
      best: '토끼띠, 양띠',
      good: ['돼지띠', '개띠'],
      avoid: '용띠',
    },
  },
  {
    title: '사주 분석',
    personality: '활발하고 사교적인 성격의 소유자입니다. 새로운 것을 배우는 것을 좋아하며, 적응력이 뛰어납니다.',
    strengths: ['뛰어난 커뮤니케이션', '적응력', '긍정적 마인드', '도전정신'],
    weaknesses: ['집중력 부족', '계획성 부족', '변덕스러움'],
    luckyColor: '초록색, 노란색',
    luckyNumber: 5,
    compatibility: {
      best: '호랑이띠, 개띠',
      good: ['말띠', '양띠'],
      avoid: '뱀띠',
    },
  },
];

export const generateMockResult = (input: HoroscopeInput): HoroscopeResult => {
  // 입력값을 기반으로 시드 생성 (간단한 해시)
  const seed = 
    parseInt(input.year) + 
    parseInt(input.month) * 12 + 
    parseInt(input.day) * 365 + 
    (input.name.charCodeAt(0) || 0);
  
  const dailyIndex = seed % dailyFortunes.length;
  const yearlyIndex = seed % yearlyFortunes.length;
  const sajuIndex = seed % sajuAnalysis.length;

  return {
    daily: dailyFortunes[dailyIndex],
    yearly: yearlyFortunes[yearlyIndex],
    saju: sajuAnalysis[sajuIndex],
  };
};

export const validateInput = (input: Partial<HoroscopeInput>): string[] => {
  const errors: string[] = [];

  if (!input.name || input.name.trim().length === 0) {
    errors.push('이름을 입력해주세요.');
  }

  if (!input.year || !input.month || !input.day) {
    errors.push('생년월일을 모두 입력해주세요.');
  }

  const year = parseInt(input.year || '0');
  const month = parseInt(input.month || '0');
  const day = parseInt(input.day || '0');

  if (year < 1900 || year > new Date().getFullYear()) {
    errors.push('올바른 연도를 입력해주세요.');
  }

  if (month < 1 || month > 12) {
    errors.push('올바른 월을 입력해주세요.');
  }

  if (day < 1 || day > 31) {
    errors.push('올바른 일을 입력해주세요.');
  }

  if (!input.gender) {
    errors.push('성별을 선택해주세요.');
  }

  return errors;
};

