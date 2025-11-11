# 🚀 사이사주 설치 및 실행 가이드

## 📋 필수 요구사항

- **Node.js**: 18.0.0 이상
- **npm** 또는 **yarn** 패키지 매니저

## 🛠 설치 방법

### 1. 의존성 설치

프로젝트 루트 디렉토리에서 다음 명령어를 실행하세요:

```bash
npm install
```

또는 yarn을 사용하는 경우:

```bash
yarn install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

또는

```bash
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 🎨 프로젝트 구조

```
saysaju/
├─ src/
│  ├─ components/          # 재사용 가능한 컴포넌트
│  │  ├─ Layout.tsx        # 레이아웃 (Header, Footer)
│  │  ├─ HoroscopeForm.tsx # 운세 입력 폼
│  │  ├─ ResultCard.tsx    # 결과 카드
│  │  ├─ ShareButtons.tsx  # 공유 버튼
│  │  ├─ CompatibilityChecker.tsx # 궁합 체커
│  │  └─ LoadingSpinner.tsx # 로딩 스피너
│  ├─ pages/               # Next.js 페이지
│  │  ├─ _app.tsx          # App 설정
│  │  ├─ _document.tsx     # Document 설정
│  │  ├─ index.tsx         # 메인 페이지
│  │  ├─ about.tsx         # 소개 페이지
│  │  └─ 404.tsx           # 404 페이지
│  ├─ styles/
│  │  └─ globals.css       # 전역 스타일
│  ├─ utils/
│  │  ├─ mockData.ts       # Mock 데이터
│  │  └─ kakaoShare.ts     # 카카오 공유 유틸리티
│  └─ lib/
│     └─ utils.ts          # 유틸리티 함수
├─ public/                 # 정적 파일
├─ package.json
├─ tsconfig.json
├─ tailwind.config.js
└─ next.config.js
```

## 🎯 주요 기능

### ✅ 구현된 기능

- ✨ **오늘의 운세**: 애정운, 금전운, 건강운, 직장운
- 📅 **올해의 운세 흐름**: 분기별 운세 분석
- 🌟 **사주 분석**: 성격, 장단점, 행운의 색상/숫자, 궁합
- 💕 **궁합 보기**: 두 사람의 생년월일 기반 궁합 분석
- 📱 **공유 기능**: 카카오톡 공유, 링크 복사
- 🎨 **반응형 디자인**: 모바일/태블릿/PC 최적화
- ⚡ **애니메이션**: Framer Motion 기반 부드러운 효과

### 🎨 디자인 특징

- **컬러 스킴**: 네이비(#1a1a2e) + 골드(#d4af37)
- **폰트**: Nanum Myeongjo (명조체) + Pretendard
- **애니메이션**: Fade-in, Slide-up, Shimmer 효과
- **인터랙션**: Hover 효과, 빛나는 테두리, 별 애니메이션

## 🔧 환경 변수 설정 (선택사항)

카카오톡 공유 기능을 사용하려면 `.env.local` 파일을 생성하세요:

```bash
# .env.local
NEXT_PUBLIC_KAKAO_APP_KEY=your_kakao_app_key
```

## 📦 빌드 및 배포

### 프로덕션 빌드

```bash
npm run build
```

### 프로덕션 서버 실행

```bash
npm start
```

### Vercel 배포

1. [Vercel](https://vercel.com)에 가입
2. GitHub 저장소 연결
3. 자동 배포 완료!

## 🎨 커스터마이징

### 색상 변경

`tailwind.config.js` 파일에서 색상을 수정할 수 있습니다:

```javascript
colors: {
  primary: {
    DEFAULT: "#1a1a2e",  // 메인 배경색
  },
  accent: {
    DEFAULT: "#d4af37",  // 포인트 색상
  },
}
```

### 운세 데이터 수정

`src/utils/mockData.ts` 파일에서 운세 데이터를 수정할 수 있습니다.

## 🐛 문제 해결

### 포트가 이미 사용 중인 경우

```bash
# 다른 포트로 실행
PORT=3001 npm run dev
```

### 의존성 오류

```bash
# node_modules 삭제 후 재설치
rm -rf node_modules
npm install
```

### 캐시 문제

```bash
# Next.js 캐시 삭제
rm -rf .next
npm run dev
```

## 📚 기술 스택

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Nanum Myeongjo, Pretendard

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 개인 및 상업적 용도로 자유롭게 사용할 수 있습니다.

## 💬 문의

문제가 발생하거나 질문이 있으시면 이슈를 등록해주세요.

---

Made with 💛 by saysaju team

