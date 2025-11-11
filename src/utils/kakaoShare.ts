// Kakao Share Utility
// 카카오톡 공유 기능을 위한 유틸리티

declare global {
  interface Window {
    Kakao: any;
  }
}

export const initKakao = () => {
  if (typeof window !== 'undefined' && window.Kakao) {
    const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_APP_KEY;
    if (kakaoKey && !window.Kakao.isInitialized()) {
      window.Kakao.init(kakaoKey);
    }
  }
};

export const shareKakao = (userName: string, score: number) => {
  if (typeof window !== 'undefined' && window.Kakao) {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '🌙 사이사주 - 나의 운세 결과',
        description: `${userName}님의 오늘 운세 점수는 ${score}점! 당신의 운세도 확인해보세요 ✨`,
        imageUrl: 'https://your-domain.com/og-image.jpg',
        link: {
          mobileWebUrl: window.location.origin,
          webUrl: window.location.origin,
        },
      },
      buttons: [
        {
          title: '나도 운세 보기',
          link: {
            mobileWebUrl: window.location.origin,
            webUrl: window.location.origin,
          },
        },
      ],
    });
  } else {
    alert('카카오톡 공유 기능을 사용할 수 없습니다.');
  }
};

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy:', err);
    return false;
  }
};

