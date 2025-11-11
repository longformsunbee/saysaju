# 🌙 사이사주 - 프로젝트 요약

## 📌 프로젝트 개요

**사이사주**는 전통 토정비결과 사주풀이를 현대적으로 재해석한 운세 전문 웹사이트입니다.
네이비와 골드 컬러를 기반으로 한 고급스럽고 신비로운 디자인으로 한국 사용자에게 신뢰감을 제공합니다.

## ✨ 핵심 기능

### 1. 오늘의 운세
- 애정운, 금전운, 건강운, 직장운 4가지 영역 분석
- 운세 점수 시각화 (프로그레스 바)
- 아이콘과 함께 직관적인 정보 제공

### 2. 올해의 운세 흐름 (토정비결)
- 분기별(1-3월, 4-6월, 7-9월, 10-12월) 운세 분석
- 각 시기별 점수와 설명
- 애니메이션 효과로 순차적 표시

### 3. 사주 분석
- 타고난 성격 분석
- 장점과 주의할 점
- 행운의 색상과 숫자
- 띠별 궁합 정보 (최고, 좋음, 피해야 할 궁합)

### 4. 궁합 보기 (추가 기능)
- 두 사람의 생년월일 입력
- 궁합 점수 계산 (60-100점)
- 관계 조언 제공

### 5. 공유 기능
- 카카오톡 공유 (API 연동 준비 완료)
- 링크 복사 기능
- 공유 버튼 애니메이션

## 🎨 디자인 시스템

### 컬러 팔레트
```
Primary (배경):    #1a1a2e (짙은 남색)
Secondary:         #16213e (보조 남색)
Accent (포인트):   #d4af37 (은은한 금색)
Muted:             #2a2a3e (음영)
```

### 타이포그래피
- **본문**: Nanum Myeongjo (나눔명조) - 전통적이고 고급스러운 느낌
- **UI 요소**: Pretendard - 가독성 좋은 현대적 폰트

### 애니메이션
- **Fade-in**: 요소가 부드럽게 나타남
- **Slide-up**: 아래에서 위로 슬라이드
- **Shimmer**: 빛나는 효과 (프로그레스 바, 버튼)
- **Twinkle**: 별 깜빡임 효과
- **Hover Effects**: 카드 상승, 테두리 빛남

## 📁 프로젝트 구조

```
saysaju/
├─ src/
│  ├─ components/
│  │  ├─ Layout.tsx                    # Header + Footer + 별 배경
│  │  ├─ HoroscopeForm.tsx             # 운세 입력 폼
│  │  ├─ ResultCard.tsx                # 3가지 결과 카드
│  │  ├─ ShareButtons.tsx              # 공유 버튼
│  │  ├─ CompatibilityChecker.tsx      # 궁합 체커
│  │  └─ LoadingSpinner.tsx            # 로딩 애니메이션
│  ├─ pages/
│  │  ├─ index.tsx                     # 메인 페이지
│  │  ├─ about.tsx                     # 소개 페이지
│  │  └─ 404.tsx                       # 404 페이지
│  ├─ styles/
│  │  └─ globals.css                   # 전역 스타일 + 커스텀 클래스
│  ├─ utils/
│  │  ├─ mockData.ts                   # 운세 데이터 + 검증
│  │  └─ kakaoShare.ts                 # 카카오 공유 유틸리티
│  └─ lib/
│     └─ utils.ts                      # cn() + 날짜 포맷팅
├─ public/
│  └─ favicon.ico
├─ package.json
├─ tsconfig.json
├─ tailwind.config.js
├─ next.config.js
├─ README.md
└─ SETUP.md
```

## 🛠 기술 스택

| 분류 | 기술 | 용도 |
|------|------|------|
| Framework | Next.js 14 | React 기반 풀스택 프레임워크 |
| Language | TypeScript | 타입 안정성 |
| Styling | Tailwind CSS | 유틸리티 기반 CSS |
| Animation | Framer Motion | 부드러운 애니메이션 |
| Icons | Lucide React | 아이콘 라이브러리 |
| Fonts | Google Fonts | Nanum Myeongjo |
| Fonts | Pretendard | 한글 웹폰트 |

## 🎯 주요 컴포넌트 설명

### Layout.tsx
- **Header**: 로고, 네비게이션 메뉴 (오늘의 운세, 토정비결, 사주풀이)
- **Footer**: 소개, 바로가기, 소셜 미디어, 저작권 문구
- **배경**: 별 애니메이션 효과

### HoroscopeForm.tsx
- 이름, 생년월일, 시간(선택), 성별 입력
- 실시간 유효성 검증
- 로딩 상태 표시
- 에러 메시지 표시

### ResultCard.tsx
- **오늘의 운세 카드**: 아이콘, 점수, 4가지 운세 영역
- **올해의 운세 카드**: 분기별 흐름, 프로그레스 바
- **사주 분석 카드**: 성격, 장단점, 행운 아이템, 궁합
- 각 카드는 hover 시 빛나는 효과

### CompatibilityChecker.tsx
- 두 사람의 생년월일 입력
- 궁합 점수 계산 및 시각화
- 관계 조언 제공

## 🎨 커스텀 CSS 클래스

```css
.stars-bg          # 별 배경 효과
.gold-border       # 골드 그라디언트 테두리
.glow-effect       # 빛나는 효과
.btn-primary       # 골드 그라디언트 버튼
.card              # 카드 스타일
.input-field       # 입력 필드
.loading-spinner   # 로딩 스피너
.progress-bar      # 프로그레스 바
.text-gradient     # 텍스트 그라디언트
.text-shadow       # 텍스트 그림자
```

## 📊 데이터 구조

### HoroscopeInput
```typescript
{
  name: string;
  year: string;
  month: string;
  day: string;
  hour?: string;
  gender: 'male' | 'female';
}
```

### HoroscopeResult
```typescript
{
  daily: {
    title, summary, icon, score,
    details: { love, money, health, work }
  },
  yearly: {
    title, summary,
    months: [{ month, description, score }]
  },
  saju: {
    title, personality, strengths, weaknesses,
    luckyColor, luckyNumber,
    compatibility: { best, good, avoid }
  }
}
```

## 🚀 배포 준비사항

### 필수
- [x] 반응형 디자인 (모바일/태블릿/PC)
- [x] SEO 최적화 (메타 태그)
- [x] 404 페이지
- [x] 로딩 상태 처리
- [x] 에러 핸들링

### 선택사항 (추후 추가 가능)
- [ ] Google Analytics 연동
- [ ] 카카오 API 키 설정 (공유 기능)
- [ ] 실제 사주 알고리즘 연동
- [ ] 사용자 결과 저장 기능
- [ ] 다국어 지원

## 🎉 완성도

✅ **100% 완성**

- ✅ 모든 필수 기능 구현
- ✅ 반응형 디자인 완료
- ✅ 애니메이션 효과 적용
- ✅ 추가 기능 (궁합 보기, 공유) 구현
- ✅ 에러 처리 및 검증
- ✅ 문서화 완료

## 🎨 디자인 하이라이트

1. **네이비 + 골드** 컬러 조합으로 고급스러운 분위기
2. **명조체** 폰트로 전통적인 느낌
3. **별 애니메이션**으로 신비로운 분위기
4. **Framer Motion**으로 부드러운 인터랙션
5. **카드형 레이아웃**으로 정보 구조화
6. **프로그레스 바**로 시각적 정보 전달

## 💡 사용자 경험 (UX)

1. **직관적인 입력 폼**: 드롭다운으로 쉬운 날짜 선택
2. **실시간 피드백**: 에러 메시지, 로딩 상태
3. **부드러운 스크롤**: 결과로 자동 이동
4. **시각적 피드백**: Hover 효과, 애니메이션
5. **정보 계층 구조**: 카드로 명확한 구분
6. **공유 기능**: 쉬운 결과 공유

## 🔮 향후 개선 가능 사항

1. **실제 사주 알고리즘**: 정확한 사주 계산 로직
2. **데이터베이스 연동**: 사용자 결과 저장
3. **회원 기능**: 로그인, 히스토리 조회
4. **결제 시스템**: 프리미엄 운세 서비스
5. **푸시 알림**: 매일 아침 운세 알림
6. **소셜 기능**: 친구 궁합 비교

---

**운세는 참고용으로만 보세요 ✨**

Made with 💛 by saysaju team

