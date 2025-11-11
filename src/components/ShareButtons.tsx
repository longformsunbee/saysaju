import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Link as LinkIcon, MessageCircle, Check } from 'lucide-react';
import { shareKakao, copyToClipboard } from '@/utils/kakaoShare';

interface ShareButtonsProps {
  userName: string;
  score: number;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ userName, score }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    const success = await copyToClipboard(window.location.href);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleKakaoShare = () => {
    shareKakao(userName, score);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2 text-foreground/60">
        <Share2 className="w-4 h-4" />
        <span className="text-sm">운세 결과 공유하기</span>
      </div>

      <div className="flex gap-3">
        {/* Kakao Share */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleKakaoShare}
          className="w-12 h-12 rounded-full bg-[#FEE500] flex items-center justify-center hover:shadow-lg transition-shadow"
          title="카카오톡 공유"
        >
          <MessageCircle className="w-6 h-6 text-[#3C1E1E]" />
        </motion.button>

        {/* Copy Link */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCopyLink}
          className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/30 transition-colors"
          title="링크 복사"
        >
          {copied ? (
            <Check className="w-6 h-6 text-green-400" />
          ) : (
            <LinkIcon className="w-6 h-6 text-accent" />
          )}
        </motion.button>
      </div>

      {copied && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="text-sm text-green-400"
        >
          링크가 복사되었습니다!
        </motion.p>
      )}
    </div>
  );
};

export default ShareButtons;

